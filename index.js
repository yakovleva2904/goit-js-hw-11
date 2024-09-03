import{S as p,i as c}from"./assets/vendor-B07T6_gy.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u=t=>`
    <li class="gallery-card">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img
          class="gallery-img"
          src="${t.webformatURL}"
          alt="${t.tags}"
        />
      </a>
      <ul class="gallery-list">
        <li class="gallery-list-item">
          <p>Likes</p>
          <p>${t.likes}</p>
        </li>
        <li class="gallery-list-item">
          <p>Views</p>
          <p>${t.views}</p>
        </li>
        <li class="gallery-list-item">
          <p>Comments</p>
          <p>${t.comments}</p>
        </li>
        <li class="gallery-list-item">
          <p>Downloads</p>
          <p>${t.downloads}</p>
        </li>
      </ul>
    </li>
`,m="https://pixabay.com/api/",h=t=>{const i=new URLSearchParams({key:"45763885-c72d1bc3425850e6a878d2d7a",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${i}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},o=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),a=document.querySelector(".loader");a.classList.add("is-hidden");const y=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.8}),f=t=>{t.preventDefault();const i=o.elements.user_query.value.trim();if(a.classList.remove("is-hidden"),!i){a.classList.add("is-hidden"),c.warning({message:"Please fill in the search field!",position:"topRight"});return}h(i).then(s=>{if(a.classList.add("is-hidden"),s.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d.innerHTML="",o.reset();return}const l=s.hits.map(e=>u(e)).join("");d.innerHTML=l,o.reset(),y.refresh()}).catch(s=>{a.classList.add("is-hidden"),c.error({message:`Ooops! Error: ${s}`,position:"topRight"})})};o.addEventListener("submit",f);
//# sourceMappingURL=index.js.map
