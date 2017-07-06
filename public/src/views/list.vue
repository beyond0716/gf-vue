<template>
  <div><input type="text" v-model="parentMsg" placeholder="动态绑定"></div>
  <child msg="Hello" info="World" :parent-msg="parentMsg" str="1" :num="1"></child>
  <ul class="topic-list">
    <li v-for="item in items"><small class="create-time">{{ item.create_at }}</small><a v-link="{name:'detail',params:{id:item.id}}">{{ item.title }}</a></li>
  </ul>
  <pagination :page-index="pageIndex" :page-total="pageTotal" :page-change="pageChange"></pagination>
</template>

<script>
  var api = require('api'),
      tool = require('tool'),
      ui = require('ui');
  //  测试map和filter函数
  /*var xx = [1, 2, 5, 7];
   var m = xx.map(pp);
   var f = xx.filter(px);

   console.log("xx = " + xx);
   console.log("m = " + m);
   console.log("f = " + f);

   function pp(x) {
   return x % 2;
   }

   function px(x) {
   return x % 2;
   }*/

  import child from '../components/child.vue'
  import pagination from '../components/pagination.vue'

  export default {
    name: 'list',
    components: {
      child,
      pagination
    },
    ready() {
//    使用vue-resource插件请求数据
     /*this.$http.get('http://cnodejs.org/api/v1/topics',this.query).then(function (response) {
     var json = response.data;
     this.items = json.data;
       this.pageTotal=50;
     }, function (response) {
     console.log(response.status);
     });*/
     },
    data(){
      return {
        pageIndex:1,
        pageTotal:1,
        query:{page:1,limit:10,tab:'',mdrender:true},

        items: []
      }
    },
//    使用vue-async-data插件异步加载数据
    /*asyncData(resolve, reject) {
     var res;
     $.ajax({
     type: "GET",
     url: "http://cnodejs.org/api/v1/topics",
     dataType: "json",
     async: true,
     success: function (json) {
     res = json.data;
     }
     });
     setTimeout(()=>resolve({
     items: res
     })
     , 1000);
     },*/
    methods: {
//      获取列表
      getList(){
        var url='http://cnodejs.org/api/v1/topics',
            query={};
        for(var key in this.query){
          if(this.query[key]){
            query[key]=this.query[key];
          }
        }
        this.$http.get(url,query).then((response)=>{
          var json = response.data;
          this.items = json.data;
          this.pageIndex=query.page;
          this.pageTotal=50;
        }, (response)=>{
          console.log(response.status);
        });
      },
      pageChange(index){
        this.query.page=index;
//        alert(this.$route.path);
        this.$route.router.go({name:this.$route.name,query:this.query});

        /*this.$http.get('http://cnodejs.org/api/v1/topics',this.query).then(function (response) {
          var json = response.data;
          this.items = json.data;
//          this.pageTotal=this.items.length;
        }, function (response) {
          console.log(response.status);
        });*/
      }
    },
    route: {
      data({to, next}){
        this.getList();
//        使用date钩子函数代替vue-async-data插件异步请求数据
        /*var res;
         $.ajax({
         type: "GET",
         url: "http://cnodejs.org/api/v1/topics",
         dataType: "json",
         async: true,
         success: function (json) {
         res = json.data;
         }
         });
         setTimeout(()=>next({
         items: res
         }), 1000);*/

//        使用Promise异步请求数据
        /*return tool.getJSON('http://cnodejs.org/api/v1/topics').then(function (json) {
         return {
         items: json.data
         }
         });*/

//        使用jQuery原生ajax函数同步请求数据
        /*return {
          items: tool.getData()
        }*/
      }
    }
  }
</script>

<style lang="sass">
  .topic-list .create-time{margin-right: 20px;}
</style>
