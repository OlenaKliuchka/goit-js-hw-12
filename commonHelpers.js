import{a as p,i as l,S as y}from"./assets/vendor-eded45c0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f=15;p.defaults.baseURL="https://pixabay.com";const m={key:"43802528-015b222178f5679b6792a0cf2",image_type:"photo",orientation:"horizontal",safesearch:!0},v=async(i="",t=1)=>{const s={key:m.key,per_page:f,q:i,orientation:m.orientation,image_type:m.image_type,safesearch:m.safesearch,page:t};return await p.get("/api/",{params:{...s}})},L=i=>i.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,downloads:c,comments:b})=>`
  
  <div class="gallery-item">
               <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${t}"
            alt="${a}"
          />
        </a>
            <div class = "card-img">
            <div class = "likes">
            <h2 class = "card-title">Likes</h2>
            <p class = image-text>${e}</p></div>
            
            <div class = "views">
            <h2 class = "card-title">Views</h2>
            <p class = image-text>${r}</p></div>

            <div class = "comments">
            <h2 class = "card-title">Comments</h2>
            <p class = image-text>${b}</p></div>
            
            <div class = "downloads">
            <h2 class = "card-title">Downloads</h2>
            <p class = image-text>${c}</p></div>
            </div>
          </div>`).join(""),n=document.querySelector(".js-gallery"),S=document.querySelector(".js-search-form"),u=document.querySelector(".js-loader"),o=document.querySelector(".btn-load-more");let h=null,d=1,g=0;async function P(i){i.preventDefault(),d=1,n.innerHTML="";const t=i.target;if(h=t.elements.searchKeyword.value.trim(),o.classList.add("is-hidden"),h===""){l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}),n.innerHTML="",t.reset(),o.classList.add("is-hidden");return}n.innerHTML="",u.classList.remove("is-hidden");try{const{data:s}=await v(h,d);if(s.total===0){l.show({message:"Search params is not valid",position:"topRight",timeout:2e3,color:"red"}),o.classList.add("is-hidden"),u.classList.add("is-hidden"),i.target.reset();return}n.innerHTML=L(s.hits);const a=new y(".gallery-list a",{captionsData:"alt",captionDelay:250});g=Math.ceil(s.totalHits/f),g>1&&o.classList.remove("is-hidden")}catch(s){let a="";s.message==="rateLimited"?a="Too many requests":a+="Sorry, there are no images for this query",l.error({message:a,position:"topRight",timeout:2e3})}t.reset(),u.classList.add("is-hidden")}const D=()=>{const s=n.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:s,left:0,behavior:"smooth"})},w=async i=>{try{d+=1;const{data:t}=await v(h,d);n.insertAdjacentHTML("beforeend",L(t.hits));const s=new y(".gallery-list a",{captionsData:"alt",captionDelay:250});D(),d>g&&(o.classList.add("is-hidden"),o.removeEventListener("click",w),l.error({message:"We are sorry, but you have reached the end of search results.",position:"topRight",timeout:2e3}))}catch{l.error({message:"Search params is not valid",position:"topRight",timeout:2e3})}};S.addEventListener("submit",P);o.addEventListener("click",w);
//# sourceMappingURL=commonHelpers.js.map
