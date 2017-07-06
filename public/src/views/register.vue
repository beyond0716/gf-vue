<template>
  <validator name="validation1">
    <form novalidate>
      <div class="username-field">
        <label for="username">username:</label>
        <input id="username" type="text" v-validate:username="['required']">
      </div>
      <div class="comment-field">
        <label for="comment">comment:</label>
        <input id="comment" type="text" v-validate:comment="{ minlength:8, maxlength: 10 }">
      </div>
      <div class="errors">
        <p v-if="$validation1.username.required">Required your name.</p>
        <p v-if="$validation1.comment.minlength">Your comment is too shot.</p>
        <p v-if="$validation1.comment.maxlength">Your comment is too long.</p>
      </div>
      <input type="submit" value="send" v-if="$validation1.valid">
    </form>
  </validator>
</template>

<script>
  var api = require('api'),
      tool = require('tool'),
      ui = require('ui');
  export default {
    name: 'detail',
    data(){
      return {
      }
    },
    methods:{
      'tan':function () {

      }
    },
    route: {
      data({to}){

      }
    }
  }
</script>

<style>
</style>
