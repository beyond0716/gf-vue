<template>
  <ul>
    <li v-for="item in items" @click="test(this)">{{ item.text }}</li>
  </ul>
</template>

<script>
  export default {
    name: 'test',
    ready() {

     },
    data(){
      return {
        items:[
          { text: 'one', done: true },
          { text: 'two', done: false },
          { text: 'Three', done: false },
          { text: 'four', done: false }
        ],
      }
    },
    methods: {
      test(item){
        alert(item.text)
      }
    },
    route: {
      data({to, next}){

      }
    }
  }
</script>

<style lang="sass">

</style>
