'use strict';

var $ =require('jquery');
var ui =require('ui');

function send(opt, successCall ,failCall) {
  if(opt.data){
    opt.data=$.extend(true,{'t':new Date().getTime()},opt.data);
  }else {
    opt.data={'t':new Date().getTime()};
  }
  opt=$.extend({},{
    type:'post',
    async:true,
    success:function (rsp) {
      var json=null;
      if(rsp){
        try {
          json=rsp;
        }catch (ex){
          console.error(ex);
          ui.tips('数据解析错误');
        }
        if(json){
          if (json.Code===0){
            successCall && successCall(json);
          }else {
            failCall && failCall(json);
          }
        }
      }
    },
    error:function (xhr,status) {
      ui.tips(xhr.responseJSON.Desc);
      failCall && failCall(xhr.responseText,status);
    }
  },opt);
  var ajax=$.ajax(opt);
  return ajax;
}
module.exports=send;