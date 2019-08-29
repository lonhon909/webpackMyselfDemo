import Vue from 'vue/dist/vue.common.dev';

function abuild() {
    return 'hello world'
}

new Vue({
    el: '#app',
    data: {
      message: abuild()
    }
})