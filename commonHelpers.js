import{a as p,i as c,S as y}from"./assets/vendor-eded45c0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f=15;p.defaults.baseURL="https://pixabay.com";const m={key:"43802528-015b222178f5679b6792a0cf2",image_type:"photo",orientation:"horizontal",safesearch:!0},v=async(a="",t=1)=>{const s={key:m.key,per_page:f,q:a,orientation:m.orientation,image_type:m.image_type,safesearch:m.safesearch,page:t};return await p.get("/api/",{params:{...s}})},L=a=>a.map(({webformatURL:t,largeImageURL:s,tags:i,likes:e,views:r,downloads:n,comments:b})=>`
  
  <div class="gallery-item">
               <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${t}"
            alt="${i}"
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
            <p class = image-text>${n}</p></div>
            </div>
          </div>`).join("");document.querySelector(".js-container");const l=document.querySelector(".js-gallery"),S=document.querySelector(".js-search-form"),u=document.querySelector(".js-loader"),o=document.querySelector(".btn-load-more");let h=null,d=1,g=0;async function P(a){a.preventDefault();const t=a.target;if(h=t.elements.searchKeyword.value.trim(),o.classList.add("is-hidden"),h===""){c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}),l.innerHTML="",t.reset(),o.classList.add("is-hidden");return}l.innerHTML="",u.classList.remove("is-hidden");try{const{data:s}=await v(h,d);if(s.total===0){c.show({message:"Search params is not valid",position:"topRight",timeout:2e3,color:"red"}),o.classList.add("is-hidden"),u.classList.add("is-hidden"),a.target.reset();return}const i=new y(".gallery-list a",{captionsData:"alt",captionDelay:250});l.innerHTML=L(s.hits),i.refresh(),g=Math.ceil(s.totalHits/f),g>1&&o.classList.remove("is-hidden"),d=1}catch(s){let i="";s.message==="rateLimited"?i="Too many requests":i+="Sorry, there are no images for this query",c.error({message:i,position:"topRight",timeout:2e3})}t.reset(),u.classList.add("is-hidden")}const q=()=>{const s=l.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:s,left:0,behavior:"smooth"})},w=async a=>{try{d+=1;const{data:t}=await v(h,d),s=new y(".gallery-list a",{captionsData:"alt",captionDelay:250});l.insertAdjacentHTML("beforeend",L(t.hits)),s.refresh(),q(),d>g&&(o.classList.add("is-hidden"),o.removeEventListener("click",w),c.error({message:"We are sorry, but you have reached the end of search results.",position:"topRight",timeout:2e3}))}catch{c.error({message:"Search params is not valid",position:"topRight",timeout:2e3})}};S.addEventListener("submit",P);o.addEventListener("click",w);
//# sourceMappingURL=commonHelpers.js.map
