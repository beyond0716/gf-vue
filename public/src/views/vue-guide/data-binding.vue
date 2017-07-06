<template>
  <p>这是文本插值: <span>{{ msg }}</span></p>
  <p>这是单次文本插值: <span>{{* msg }}</span></p>
  <p>这是原始的HTML:{{{ raw_html }}}</p>
  <p id="item-{{ id }}">Mustache 标签也可以用在 HTML 特性 (Attributes) 内</p>
  <input type="text"/>
</template>

<script>
export default {
  name: 'dataBinding',
  data(){
    return {
      id:'1',
      msg: 'Hellow Vue!',
      raw_html:'<strong>绑定HTML</strong>'
    }
  }
}
</script>

<style>

</style>
