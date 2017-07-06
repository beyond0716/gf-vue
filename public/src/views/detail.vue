<template>
  <h2>{{ detail.title }}</h2>
  <div><small>{{ detail.create_at }}</small></div>
  <div>{{{ detail.content }}}</div>
  <ul>
    <li v-for="(index, item) in reply">
      <h3>{{ index }}</h3>
      <div>回复时间：{{ item.create_at }} 作者：{{ item.author.loginname }} ID:{{ item.id }}</div>
      <div>{{{ item.content }}}</div>
    </li>
  </ul>
</template>

<script>
  var api = require('api'),
      tool = require('tool'),
      ui = require('ui');
  export default {
    name: 'detail',
    data(){
      return {
        detail: {},
        reply: {}
      }
    },
    methods: {},
    route: {
      data({to}){
//        使用vue-resource插件请求数据
        return this.$http.get('http://cnodejs.org/api/v1/topic/' + to.params.id).then(function (response) {
          var json = response.data;
          var res = json.data;
          document.title = res.title;
          return {
            detail: res,
            reply: res.replies
          }
        }, function (response) {
          console.log(response.status);
        });
      }
    }
  }
</script>

<style>

</style>
