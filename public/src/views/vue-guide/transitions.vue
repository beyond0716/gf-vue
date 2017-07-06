<template>
  <p>{{ i }}</p>
  <div v-if="show" transition="expand">hello</div>
  <div v-if="show" :transition="transitionName">hello</div>
  <br>
  <span v-show="show" class="animated" transition="bounce">Look at me!</span>
  <br>
  <p v-show="show" transition="fade">JavaScript-过渡</p>
  <br>
  <button @click="toggle">Toggle</button>
  <br>

  <div id="demo">
    <input v-model="query">
    <ul>
      <li v-for="item in list | filterBy query"
          transition="staggered"
          stagger="100">
        {{item.msg}}
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'

  var api = require('api'),
      tool = require('tool'),
      ui = require('ui'),
      jquery=require('jquery');

export default {
  name: 'transitions',
  data(){
    return {
      i:1,
      show: true,
      transitionName: 'expand',
      query: '',
      list: [
        { msg: 'Bruce Lee' },
        { msg: 'Jackie Chan' },
        { msg: 'Chuck Norris' },
        { msg: 'Jet Li' },
        { msg: 'Kung Fury' }
      ]
    }
  },
  methods:{
    toggle(){
      this.i++;
      if(this.i%2){this.show=true;
      }else{this.show=false;}
//      alert(this.i+'_'+this.show);
    }
  }
}

  Vue.transition('bounce', {
    enterClass: 'bounceIn',
    leaveClass: 'bounceOut'
  });

  Vue.transition('fade', {
    css: false,
    enter: function (el, done) {
      // 元素已被插入 DOM
      // 在动画结束后调用 done
      $(el)
          .css('opacity', 0)
          .animate({ opacity: 1 }, 1000, done)
    },
    enterCancelled: function (el) {
      $(el).stop()
    },
    leave: function (el, done) {
      // 与 enter 相同
      $(el).animate({ opacity: 0 }, 1000, done)
    },
    leaveCancelled: function (el) {
      $(el).stop()
    }
  });

</script>
<style>
  /* 必需 */
  .expand-transition {
    transition: all .3s ease;
    height: 30px;
    padding: 10px;
    background-color: #eee;
    overflow: hidden;
  }

  /* .expand-enter 定义进入的开始状态 */
  /* .expand-leave 定义离开的结束状态 */
  .expand-enter, .expand-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
  }

  .bounce-transition {
    display: inline-block; /* 否则 scale 动画不起作用 */
  }
  .bounce-enter {
    animation: bounce-in .5s;
  }
  .bounce-leave {
    animation: bounce-out .5s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }

  ul {
    padding-left: 0;
    font-family: Helvetica, Arial, sans-serif;
  }
  .staggered-transition {
    transition: all .5s ease;
    overflow: hidden;
    margin: 0;
    height: 20px;
  }
  .staggered-enter, .staggered-leave {
    opacity: 0;
    height: 0;
  }
</style>
