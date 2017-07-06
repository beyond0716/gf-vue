<template>
  <p>{{ a }}</p>
  <button @click="plus">Greet</button>
  <button @click="say('hi')">Say hi</button>
  <button @click="say('what')">Say what</button>
  <a href="baidu.com" @click="say('阻止原生事件',$event)">阻止原生事件</a>
</template>

<script>
export default {
  name: 'methodsEventHandling',
  data(){
    return {
      a:1,
      items:[
        {message:'guo'},
        {message:'feng'}
      ]
    }
  },
  methods: {
    plus(){
      this.a++;
    },
    say(msg,event){
      alert(msg);
      event.preventDefault();
    }
  }
}
</script>

<style lang="sass">

</style>
