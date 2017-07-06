<template>
  <header-a></header-a>
  <dl class="nav">
    <dt>Vue</dt>
    <dd><a v-link="{ path: '/vue-guide' }">Index</a></dd>
    <dd><a v-link="{ path: '/vue-guide/data-binding' }">Data Binding Syntax</a></dd>
    <dd><a v-link="{ path: '/vue-guide/class-style-binding' }">Class and Style Bindings</a></dd>
    <dd><a v-link="{ path: '/vue-guide/conditional-rendering' }">Conditional Rendering</a></dd>
    <dd><a v-link="{ path: '/vue-guide/list-rendering' }">List Rendering</a></dd>
    <dd><a v-link="{ path: '/vue-guide/methods-event-handling' }">Methods and Event Handling</a></dd>
    <dd><a v-link="{ path: '/vue-guide/form-input-bindings' }">Form Input Bindings</a></dd>
    <dd><a v-link="{ path: '/vue-guide/transitions' }">Transitions</a></dd>

    <dt>User</dt>
    <dd><a v-link="{ name: 'list' }">List</a></dd>
    <dd><a v-link="{ path: '/new-topic' }">New Topic</a></dd>
    <dd><a v-link="{ path: '/register' }">Register</a></dd>
    <dd><a v-link="{ path: '/message/123' }">Message</a></dd>

    <dt>Test</dt>
    <dd><a v-link="{ name: 'test' }">Test</a></dd>
  </dl>
  <router-view></router-view>
  <footer-a></footer-a>
</template>

<script>
  import headerA from './components/header.vue'
  import footerA from './components/footer.vue'

  export default {
    replace:false,
    components: {
      headerA,
      footerA
    },
    data(){
      return {
        msg: 'Hello vue !'
      }
    }
  }
</script>

<style lang="sass">
  .nav li {
    list-style: none;
    margin-right: 50px;
  }
</style>
