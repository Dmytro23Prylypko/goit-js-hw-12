import{a as f,S as B,i as u}from"./assets/vendor-Sa4a0LJu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const E="https://pixabay.com/api/",S="49352889-932a02498e450d158832440ce";f.defaults.baseURL=E;const A=async(t,r,l)=>(await f.get("",{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:l}})).data,I=document.querySelector(".gallery");function h(t){const r=new B(".gallery li a",{});t=t.map(({webformatURL:l,largeImageURL:s,tags:e,likes:o,views:n,comments:b,downloads:w})=>`
        <li>
          <a href="${s}">
            <img src="${l}" alt="${e}"/>
          </a>
          <ul class="gallery-info">
            <li>
              <span class="gallery-info-subtitle">Likes</span>
              <span>${o}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Views</span>
              <span>${n}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Comments</span>
              <span>${b}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Downloads</span>
              <span>${w}</span>
            </li>
          </ul>
        </li>
      `).join(""),I.insertAdjacentHTML("beforeend",t),r.refresh()}function P(t){t.innerHTML=""}const L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAETSURBVHgBrVVbDoJADCwEwq83kaN4I+UkHgGP4mH4YTGslFBB2e0UYZImG9rO7KMtRBG0bXd1rvMW49gYTxYjTxK6eU+PNKUnKeh7Kjl2yKGiyCtCmHf+upMRHItO8je5WWQPORQ5gjwqopE7586YcB3zJTIt6kBiiR5ONtc0TRnw1ewbBbouTMLfYyJCjnJVgZgIIl/mZQSQ53k1BPNybCYGNxYb+1A+FPgVEQELOSMlI4aREFwjmE4gs4lt+mSePVBgSS7XsnwTKKJVg1YtWgkv/bDRLKWoNpoEDYShUVESQChGRsVnc5rIVqzIBUeIRMmPEIHke0Q08lUfyFjwPuE6P1l++kT+smV8jJhPgk27ljfw3ToafivEMQAAAABJRU5ErkJggg==",R=document.querySelector(".form"),Y=document.querySelector(".gallery"),y=document.querySelector(".loader"),a=document.querySelector("#loadMorePictures");let m=null,i=1;const g=15;let d=null,p=null;R.addEventListener("submit",T);async function T(t){t.preventDefault();const r=t.currentTarget.elements["search-text"].value.trim();P(Y),y.style.display="block",a.style.display="none",i=1;try{if(r){const l=await A(r,i++,g),s=l.hits;d=l.total,p=Math.ceil(d/g),s.length?(h(s),m=r,i<p?a.style.display="block":u.show(c("We're sorry, but you've reached the end of search results."))):u.show(c("Sorry, there are no images matching your search query. Please try again!"))}else throw new Error("Invalid value.")}catch(l){u.show(c(l.message))}y.style.display="none"}a.addEventListener("click",U);async function U(t){y.style.display="block",a.style.display="none";const l=document.querySelector(".gallery li").getBoundingClientRect().height*2;try{if(i<p){const s=await A(m,i++,g),e=s.hits;d=s.total,p=Math.ceil(d/g),h(e),a.style.display="block",scrollBy(0,l)}else a.style.display="none",c("We're sorry, but you've reached the end of search results.")}catch(s){u.show(c(s.message))}y.style.display="none"}function c(t){return{message:t,iconUrl:L,color:"#ef4040",messageColor:"#fff",maxWidth:"380px",messageSize:"16",messageLineHeight:"150%",position:"topRight",iconColor:"#fff"}}
//# sourceMappingURL=index.js.map
