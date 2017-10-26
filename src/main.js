import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from "./routes"

import "./main.scss"

import tether from 'tether'
window.Tether = tether;

import $ from "jquery"
window.jQuery = window.$ = Vue.prototype.$jQuery = $;

require('bootstrap')

Vue.use(VueRouter)

Vue.component('main-menu', require("./MainMenu/MainMenu.vue").default)

window.router = new VueRouter({
  linkActiveClass: "active",
   routes
});

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('bg') == null) {
    $('body').css({ background: "url('assets/wallpapers/1.jpg') no-repeat", backgroundSize: "cover" });
    localStorage.setItem('bg', '1');
  }
  else {
    $('body').css({ background: "url('assets/wallpapers/"+localStorage.getItem('bg')+".jpg') no-repeat", backgroundSize: "cover" });
  }
  next();
})

window.$Vue = new Vue({
  router,
  el: '#app'
});

if (localStorage.getItem('ticket') === null) {
  router.push({ name: 'auth' });
}

function refreshBodyHeight() {
  $('body').height($(window).height());
}

refreshBodyHeight();
window.addEventListener('resize', refreshBodyHeight);

$.get("https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js", () => null).fail(() => alert("Похоже, что вы не подключены к Интернету. Многие функции системы не могут работать без Интернета."));