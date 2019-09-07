// import Vue from 'vue/dist/vue.common.dev';
import $ from 'jquery';

console.log($)
console.log(window.$, window.jQuery)

const dist = require('expose-loader?dist!./test');

console.log(dist, window.dist, dist=== window.dist)

function add() {
    return 'hello world'
}

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// +   element.innerHTML = join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

@log
class Preson {
    name = 3
}

function log(target) {
    console.log(target)
}

function * aa() {
    yield 1;
}
console.log(aa().next())


// new Vue({
//     el: '#app',
//     data: {
//       message: add()
//     }
// })