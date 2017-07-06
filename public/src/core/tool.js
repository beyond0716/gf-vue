var $ =require('jquery');
var  tool={};

//打印对象
tool.dump=function (obj) {
  var s = "";
  for (var property in obj) {
    s = s + "<br> "+property +": " + obj[property];
  }
  alert(s);
}

// 请求数据
tool.getData=function () {
  var res;
  $.ajax({
    type: "GET",
    url: "http://cnodejs.org/api/v1/topics",
    dataType: "json",
    async: false,
    success: function(json){
      res=json.data;
    }
  });
  return res;
}

tool.tip=function (msg) {
  alert(msg);
}

// 封装ajax
tool.getJSON = function(url) {
  var promise = new Promise(function(resolve, reject){
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
  });

  return promise;
};

module.exports=tool;