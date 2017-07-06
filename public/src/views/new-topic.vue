<template>
    <div>
      <label>标题：</label><input type="text" value="" v-model="">
    </div>
    <!--<div><input type="text" value=""></div>-->
    <div><label>内容：</label><textarea></textarea></div>
    <a @click="newTopic">提交</a>
</template>

<script>
  var api = require('api'),
      tool = require('tool'),
      ui = require('ui');
  export default {
    name: 'new-topic',
    data(){
      return {
        tmpData:{
          accesstoken:'4137a0f8-3807-478c-a50f-c0d5704e009a',
          title:'年哈哈发个嘎嘎嘎嘎嘎嘎灌灌灌灌灌',
          tab:'ask',
          content:'个非官方个个非官方个个非官方个个非官方个个非官方个个非官方个个非官方个个非官方个个非官方个个非官方个个非官方个个非官方个'



        }
      }
    },
    methods:{
      newTopic(){
        var url='http://cnodejs.org/api/v1/topics',
            tmpData={};
        for(var key in this.tmpData){
          if(this.tmpData[key]){
            tmpData[key]=this.tmpData[key];
          }
        }
        this.$http.post(url,tmpData).then((response)=>{
          alert('添加成功');
      },(response)=>{
          alert('添加失败');
        });
      }
    },
    route: {
      data({to}){

      }
    }
  }
</script>

<style>
</style>
