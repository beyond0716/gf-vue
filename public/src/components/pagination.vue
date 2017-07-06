<template>
  <ul class="pagination">
    <li><a href="javascript:void(0);" @click="goFirst">首页</a></li>
    <li><a href="javascript:void(0);" @click="prev">上一页</a></li>

    <li v-if="showAround[0]>1"><a href="javascript:void(0);">...</a></li>
    <template v-for="item in showAround">
      <li :class="{active:pageIndex==item}"><a href="javascript:void(0);" @click="goto(item)">{{item}}</a></li>
    </template>
    <li v-if="showAround[showAround.length-1]<pageTotal"><a href="javascript:void(0);">...</a></li>

    <li><a href="javascript:void(0);" @click="next">下一页</a></li>
    <li><a href="javascript:void(0);" @click="goEnd">尾页</a></li>
  </ul>
</template>

<script>
export default{
  replace:true,
  props:['pageIndex','pageTotal','pageChange'],
  data(){
    return{
      showAround:[]
    }
  },
  compiled(){
    this.updateShow();
  },
  watch:{
    'pageIndex':function () {
      this.updateShow();
    },
    'pageTotal':function () {
      this.updateShow();
    }
  },
  methods:{
    goto(index){
      this.pageChange(index);
    },
    prev(){
      if(this.pageIndex>1){
        this.goto(this.pageIndex-1);
      }
    },
    next(){
      if(this.pageIndex<this.pageTotal){
        this.goto(this.pageIndex+1);
      }
    },
    goFirst(){
      this.goto(1);
    },
    goEnd(){
      this.goto(this.pageTotal)
    },
    updateShow(){
      this.showAround=[];
      if(this.pageTotal>5){
        if(this.pageIndex<3){
          for(var i=0;i<5;i++){
            this.showAround.push(i+1);
          }
        }else if(this.pageIndex>this.pageTotal-2){
          for(var i=0;i<5;i++){
            this.showAround.unshift(this.pageTotal-i);
          }
        }else{
          for(var i=-2;i<=2;i++){
            if(this.pageIndex+i>0 && this.pageIndex+i<=this.pageTotal){
              this.showAround.push(this.pageIndex+i);
            }
          }
        }
      }else{
        for(var i=0;i<this.pageTotal;i++){
          this.showAround.push(i+1);
        }
      }
    }
  }
}
</script>

<style lang="sass">
  .pagination li{float: left;list-style: none;}
  .pagination li a{display: inline-block;min-width: 50px;height: 50px;line-height: 50px;text-align: center;text-decoration: none;}
  .pagination>.active>a{color: #FFFFFF;background-color: #0f7595;border-color: #0f7595;}
</style>
