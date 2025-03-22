import{a as f,S as I,i as a}from"./assets/vendor-Sa4a0LJu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const S="https://pixabay.com/api/",E="49352889-932a02498e450d158832440ce";f.defaults.baseURL=S;const h=async(t,r,l)=>(await f.get("",{params:{key:E,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:l}})).data;function m(t){const r=document.querySelector(".gallery"),l=new I(".gallery li a",{});t=t.map(({webformatURL:s,largeImageURL:e,tags:o,likes:c,views:b,comments:w,downloads:B})=>`
        <li>
          <a href="${e}">
            <img src="${s}" alt="${o}"/>
          </a>
          <ul class="gallery-info">
            <li>
              <span class="gallery-info-subtitle">Likes</span>
              <span>${c}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Views</span>
              <span>${b}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Comments</span>
              <span>${w}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Downloads</span>
              <span>${B}</span>
            </li>
          </ul>
        </li>
      `).join(""),r.insertAdjacentHTML("beforeend",t),l.refresh()}function P(t){t.innerHTML=""}const L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAETSURBVHgBrVVbDoJADCwEwq83kaN4I+UkHgGP4mH4YTGslFBB2e0UYZImG9rO7KMtRBG0bXd1rvMW49gYTxYjTxK6eU+PNKUnKeh7Kjl2yKGiyCtCmHf+upMRHItO8je5WWQPORQ5gjwqopE7586YcB3zJTIt6kBiiR5ONtc0TRnw1ewbBbouTMLfYyJCjnJVgZgIIl/mZQSQ53k1BPNybCYGNxYb+1A+FPgVEQELOSMlI4aREFwjmE4gs4lt+mSePVBgSS7XsnwTKKJVg1YtWgkv/bDRLKWoNpoEDYShUVESQChGRsVnc5rIVqzIBUeIRMmPEIHke0Q08lUfyFjwPuE6P1l++kT+smV8jJhPgk27ljfw3ToafivEMQAAAABJRU5ErkJggg==",R=document.querySelector(".form"),T=document.querySelector(".gallery"),y=document.querySelector(".loader"),n=document.querySelector("#loadMorePictures");let A=null,i=1;const p=15;let d=null,u=null;R.addEventListener("submit",Y);async function Y(t){t.preventDefault();const r=t.currentTarget.elements["search-text"].value.trim();P(T),y.style.display="block",n.style.display="none",i=1;try{if(r){const l=await h(r,i++,p),s=l.hits;d=l.total,u=Math.ceil(d/p),s.length?(m(s),A=r,i<u?n.style.display="block":a.show(g("We're sorry, but you've reached the end of search results."))):a.show(g("Sorry, there are no images matching your search query. Please try again!"))}else a.show(v("Invalid value."))}catch(l){a.show(g(l.message))}y.style.display="none"}n.addEventListener("click",U);async function U(t){y.style.display="block",n.style.display="none";const l=document.querySelector(".gallery li").getBoundingClientRect().height*2;try{if(i<=u){const s=await h(A,i++,p),e=s.hits;d=s.total,u=Math.ceil(d/p),m(e),n.style.display="block",scrollBy(0,l),i>u&&(n.style.display="none",a.show(g("We're sorry, but you've reached the end of search results.")))}}catch(s){a.show(getIziToastOptions(s.message))}y.style.display="none"}function g(t){return{message:t,iconUrl:L,color:"#ef4040",messageColor:"#fff",maxWidth:"380px",messageSize:"16",messageLineHeight:"150%",position:"topRight",iconColor:"#fff"}}function v(t){return{message:t,color:"#fff59e",maxWidth:"380px",messageSize:"16",messageLineHeight:"150%",position:"topRight"}}
//# sourceMappingURL=index.js.map
