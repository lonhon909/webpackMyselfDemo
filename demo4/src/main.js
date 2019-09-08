// import Vue from 'vue/dist/vue.common.dev';
require('@babel/polyfill')

const abuild = () => {
    return 'hello world2'
}

const a = 'asd'.includes('a');

console.log(a, abuild())


// new Vue({
//     el: '#app',
//     data: {
//       message: abuild()
//     }
// })  