import{a as m,S as B,i as d}from"./assets/vendor-Sa4a0LJu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const I="https://pixabay.com/api/",P="49352889-932a02498e450d158832440ce";m.defaults.baseURL=I;const h=async(o,e,l)=>(await m.get("",{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:l}})).data;function b(o){const e=document.querySelector(".gallery"),l=new B(".gallery li a",{});o=o.map(({webformatURL:r,largeImageURL:t,tags:s,likes:n,views:w,comments:E,downloads:S})=>`
        <li>
          <a href="${t}">
            <img src="${r}" alt="${s}"/>
          </a>
          <ul class="gallery-info">
            <li>
              <span class="gallery-info-subtitle">Likes</span>
              <span>${n}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Views</span>
              <span>${w}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Comments</span>
              <span>${E}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Downloads</span>
              <span>${S}</span>
            </li>
          </ul>
        </li>
      `).join(""),e.insertAdjacentHTML("beforeend",o),l.refresh()}const L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAETSURBVHgBrVVbDoJADCwEwq83kaN4I+UkHgGP4mH4YTGslFBB2e0UYZImG9rO7KMtRBG0bXd1rvMW49gYTxYjTxK6eU+PNKUnKeh7Kjl2yKGiyCtCmHf+upMRHItO8je5WWQPORQ5gjwqopE7586YcB3zJTIt6kBiiR5ONtc0TRnw1ewbBbouTMLfYyJCjnJVgZgIIl/mZQSQ53k1BPNybCYGNxYb+1A+FPgVEQELOSMlI4aREFwjmE4gs4lt+mSePVBgSS7XsnwTKKJVg1YtWgkv/bDRLKWoNpoEDYShUVESQChGRsVnc5rIVqzIBUeIRMmPEIHke0Q08lUfyFjwPuE6P1l++kT+smV8jJhPgk27ljfw3ToafivEMQAAAABJRU5ErkJggg==",R=document.querySelector(".form"),T=document.querySelector(".gallery"),c=document.querySelector(".loader"),a=document.querySelector("#loadMorePictures"),f=document.querySelector(".the-end-of-search");let g=null,i=1;const u=15;let y=null,p=null;R.addEventListener("submit",Y);async function Y(o){o.preventDefault();const e=o.currentTarget.elements["search-text"].value.trim();T.innerHTML="",c.style.display="block",a.style.display="none",g!==e&&(i=1);try{if(e){const l=await h(e,i,u),r=l.hits;y=l.total,p=Math.ceil(y/u),r.length?(b(r),g=e,i<p?(a.style.display="block",f.style.display="none"):f.style.display="block"):d.show(A("Sorry, there are no images matching your search query. Please try again!"))}else throw new Error("Invalid value.")}catch(l){d.show(A(l.message))}c.style.display="none"}a.addEventListener("click",U);async function U(o){c.style.display="block",a.style.display="none";try{if(i<p){const e=await h(g,i++,u),l=e.hits;y=e.total,p=Math.ceil(y/u),b(l),a.style.display="block"}else a.style.display="none",f.style.display="block"}catch(e){d.show(A(e.message))}c.style.display="none"}function A(o){return{message:o,iconUrl:L,color:"#ef4040",messageColor:"#fff",maxWidth:"380px",messageSize:"16",messageLineHeight:"150%",position:"topRight",iconColor:"#fff"}}
//# sourceMappingURL=index.js.map
