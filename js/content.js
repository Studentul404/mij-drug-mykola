import {nav} from "./navigation.js";

$(document).ready(function () {
   document.querySelector("#nav").innerHTML = nav;
   $('.nav-link-collapse').on('click', function () {
      $('.nav-link-collapse').not(this).removeClass('nav-link-show');
      $(this).toggleClass('nav-link-show');
   });
});