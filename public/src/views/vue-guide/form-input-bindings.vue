<template>
  <h1>Text</h1>
  <div>Message is: {{ message }}</div>
  <input type="text" v-model="message" placeholder="edit me">

  <h1>Checkbox</h1>
  <h2>单个勾选框，逻辑值：</h2>
  <input type="checkbox" id="checkbox" checked v-model="checked">
  <label for="checkbox">{{ checked }}</label>

  <h2>多个勾选框，绑定到同一个数组：</h2>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Checked names: {{ checkedNames | json }}</span>

  <h1>Radio</h1>
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>

  <h1>Select</h1>
  <h2>单选：</h2>
  <select v-model="selected">
    <option selected>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>

  <h2>多选（绑定到一个数组）：</h2>
  <select v-model="selectedA" multiple>
    <option selected>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br>
  <span>Selected: {{ selectedA | json }}</span>

  <h2>动态选项，用 v-for 渲染：</h2>
  <select name="" id="" v-model="selectedB">
    <option v-for="option of options" value="{{ option.value }}">{{ option.text }}</option>
  </select>
  <div>Selected: {{ selectedB }}</div>
</template>

<script>
export default {
  name: 'methodsEventHandling',
  data(){
    return {
      checkedNames: [],
      selectedA: [],
      selectedB:'B',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  }
}
</script>

<style lang="sass">

</style>
