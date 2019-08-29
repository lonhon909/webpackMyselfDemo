import Vue from 'vue/dist/vue.common.dev';

function add() {
    return 'hello world'
}

new Vue({
    el: '#app',
    data: {
      message: add()
    }
})