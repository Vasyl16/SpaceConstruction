import{S as t,i,h as s,a as d,s as u}from"./swiperOurEndedProject-BQ3TP__e.js";import{s as p}from"./swiperClientFitback-CIeOADjH.js";import{s as w}from"./swiperOurProject-CQP0odt6.js";const a=".swiper-our-ended-work",l=".swiper-our-ended-work-button-prev",o=".swiper-our-ended-work-button-next";let e=null;const n=()=>{const r=window.innerWidth;r<767.98&&!e&&(e=new t(a,{slidesPerView:1,spaceBetween:"5%",loop:!1,navigation:{nextEl:o,prevEl:l},breakpoints:{500:{slidesPerView:2}}})),r>=767.98&&e&&(e.destroy(!0,!0),e=void 0)},c=()=>{document.querySelector(o)&&(n(),window.addEventListener("resize",()=>{n()}))};document.addEventListener("DOMContentLoaded",()=>{i(),s(),d(),u(),w(),c(),p()});
