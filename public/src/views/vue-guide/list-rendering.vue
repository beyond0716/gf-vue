<template>
  <ul>
    <li v-for="(index,item) of items">{{ parentMessage }} - {{ index }} - {{ item.message }}</li>
  </ul>
  <ul>
    <template v-for="item in items">
      <li>{{ item.message }}</li>
      <li class="divider"></li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'listRendering',
  data(){
    return {
      parentMessage:'parent',
      items:[
        {message:'guo'},
        {message:'feng'}
      ]
    }
  }
}
</script>

<style lang="sass">
.divider{border-bottom: 1px solid #dddddd;}
</style>
