<template>
  <div>{{ parentMsg }}</div>
  <span>{{ msg }}</span> <span>{{ info }}</span>
</template>

<script>
export default{
  props: ['parentMsg','msg','info','str','num']
}
</script>

<style>
</style>
