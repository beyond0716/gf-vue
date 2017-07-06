<template>
  <div class="class-a" :class="[classObject,classD,isE?classE:'']" :style="[styleObjectA,styleObjectB]">Class and Style Bindings</div>
</template>

<script>
export default {
  name: 'classStyleBinding',
  data(){
    return {
      isB:true,
      isC:true,
      isE:true,
      classD:'class-d',
      classE:'class-e',
      classObject:{
        'class-b':true,
        'class-c':true
      },
      styleObjectA:{
        border:'1px solid #0f0'
      },
      styleObjectB:{
        color: 'red',
        fontSize: '12px'
      }
    }
  }
}
</script>

<style lang="sass">
$link-color:#00f;
$border-color:#f00;
  .class-a{display: inline-block;}
  .class-b{width: 500px;min-height: 200px;padding: 50px;background-color: #000088;}
  .class-c{font-weight: bold;font-size: 20px;color: #333;border: 1px solid $border-color;}
.class-d{line-height: 200px;}
.class-e{color: #ffffff;transform: rotate(30deg);}
</style>
