module.exports=function (date,format) {
  if(typeof date==='string' && date.indexOf('-')>-1){
    return date;
  }
  date=new Date(parseInt(date+'000'));//不同项目返回的数据单位可能不是毫秒，所以按实际情况作单位换算
  var map={
    "M":date.getMonth()+1,//月份
    "d":date.getDate(),//日
    "h":date.getHours(),//小时
    "m":date.getMinutes(),//分
    "s":date.getSeconds(),//秒
    "q":Math.floor((date.getMonth()+3)/3),//季度
    "S":date.getMilliseconds()//毫秒
  };
  format=format.replace(/([yMdhmsqS])+/g,function (all,t) {
    var v=map[t];
    if(v!==undefined){
      if(all.length>1){
        v='0'+v;
        v=v.substr(v.length-2);
      }
      return v;
    }else if(t==='y'){
      return (date.getFullYear()+'').substr(4-all.length);
    }
    return all;
  });
  return format;
};
