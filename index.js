import{a as u,S as g,i as l}from"./assets/vendor-Sa4a0LJu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="49352889-932a02498e450d158832440ce";u.defaults.baseURL="https://pixabay.com/api/";const A=s=>u.get("",{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits),m=document.querySelector(".gallery"),d=new g(".gallery li a",{});function y(s){s=s.map(({webformatURL:r,largeImageURL:o,tags:a,likes:e,views:t,comments:n,downloads:f})=>`
        <li>
          <a href="${o}">
            <img src="${r}" alt="${a}"/>
          </a>
          <ul class="gallery-info">
            <li>
              <span class="gallery-info-subtitle">Likes</span>
              <span>${e}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Views</span>
              <span>${t}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Comments</span>
              <span>${n}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Downloads</span>
              <span>${f}</span>
            </li>
          </ul>
        </li>
      `).join(""),m.insertAdjacentHTML("beforeend",s),d.refresh()}const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAETSURBVHgBrVVbDoJADCwEwq83kaN4I+UkHgGP4mH4YTGslFBB2e0UYZImG9rO7KMtRBG0bXd1rvMW49gYTxYjTxK6eU+PNKUnKeh7Kjl2yKGiyCtCmHf+upMRHItO8je5WWQPORQ5gjwqopE7586YcB3zJTIt6kBiiR5ONtc0TRnw1ewbBbouTMLfYyJCjnJVgZgIIl/mZQSQ53k1BPNybCYGNxYb+1A+FPgVEQELOSMlI4aREFwjmE4gs4lt+mSePVBgSS7XsnwTKKJVg1YtWgkv/bDRLKWoNpoEDYShUVESQChGRsVnc5rIVqzIBUeIRMmPEIHke0Q08lUfyFjwPuE6P1l++kT+smV8jJhPgk27ljfw3ToafivEMQAAAABJRU5ErkJggg==",b=document.querySelector(".form"),I=document.querySelector(".gallery"),i=document.querySelector(".loader");b.addEventListener("submit",S);function S(s){s.preventDefault();const r=s.currentTarget.elements["search-text"].value;I.innerHTML="",i.style.display="block",A(r).then(o=>{o.length?y(o):l.show(c("Sorry, there are no images matching your search query. Please try again!"))}).catch(o=>{l.show(c(o.message))}).finally(()=>{i.style.display="none"})}function c(s){return{message:s,iconUrl:h,color:"#ef4040",messageColor:"#fff",maxWidth:"380px",messageSize:"16",messageLineHeight:"150%",position:"topRight",iconColor:"#fff"}}
//# sourceMappingURL=index.js.map
