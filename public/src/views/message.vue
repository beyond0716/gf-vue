<template>
  <div>
    <div style="color: #f00;">{{ items.aa }}====={{ items.bb }}</div>
    <div v-if="$loadingRouteData">Loading data...</div>
    <div v-if="!$loadingRouteData">message #{{message.id}}: {{message.text}}</div>
  </div>
</template>

<script>

  import messagesService from '../services/messages'

export default {
  route: {
    // data hook
    // Useful for doing async data loading.
    // sets the component's "$loading" property to
    // true when called, and sets it to false when resolved.
    // two options:
    // 1. return a promise
    // 2. explicitly call transition.next() or
    //     transition.abort(reason)
    data ({ to, next }) {
      return this.timeout(100).then(items => ({
            items
          }));

      // "this" is available
      var params = {
        id: to.params.messageId
      }

      // callback based
      messagesService.get(params, (err, message) => {
        if (err) {
          // handle error, e.g. display a warning
        } else {
          next({
            message: message
          })
        }
      })


      // or promise based (with ES6 sugar)
      // return messagesService
      //   .get(params)
      //   .then(message => ({ message }))
    }
  },

  // default state
  data () {
    return {
      message: {},
      items:{}
    }
  },
  methods:{
    timeout(ms){
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, {aa:1111,bb:2222});
      });
    }
  }
}
</script>
