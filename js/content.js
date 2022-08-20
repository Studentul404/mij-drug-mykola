import {
   nav
} from "./navigation.js";

$(document).ready(function () {
   if (location.href.endsWith("main.html")) {
      location.href = "http://mij-drug-mykola-u-moldovi.42web.io/";
   }
   document.querySelector("#nav").innerHTML = nav;
   $('.nav-link-collapse').on('click', function () {
      $('.nav-link-collapse').not(this).removeClass('nav-link-show');
      $(this).toggleClass('nav-link-show');
   });

});