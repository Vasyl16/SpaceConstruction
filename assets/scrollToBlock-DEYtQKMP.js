import{c as a}from"./swiper-bundle-BoUZ6wrI.js";const i=[{redirectPath:"/SpaceConstruction/pages/about/about.html",scrollButton:".items-our-offices__location-link",scrollToBlock:".work-worldwild"}],n=o=>o.getBoundingClientRect().top+window.pageYOffset-100,d=()=>{i.forEach(o=>{const c=document.querySelector(o.scrollToBlock),{redirectPath:l,scrollButton:t,scrollToBlock:s}=o,r=document.querySelectorAll(t);if(c&&!l&&r.length){const e=n(c);a(t,e);return}l&&r.length&&r.forEach(e=>{e.addEventListener("click",()=>{window.location.href=`${l}#scrollToBlock=${s}`})})})},h=()=>{const o=new URLSearchParams(window.location.hash.substring(1));if(!o.get("scrollToBlock"))return;const c=o.get("scrollToBlock"),l=document.querySelector(c);if(!l)return console.error("scrollToBlockElement not found"),!0;const t=n(l);window.scrollTo({top:t,behavior:"smooth"})};export{h,d as s};