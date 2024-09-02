import{i as u,S as d}from"./assets/vendor-B07T6_gy.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p=r=>`
    <li class="gallery-card">
      <a class="gallery-link" href="${r.largeImageURL}">
        <img
          class="gallery-img"
          src="${r.webformatURL}"
          alt="${r.tags}"
        />
      </a>
      <ul class="gallery-list">
        <li class="gallery-list-item">
          <p>Likes</p>
          <p>${r.likes}</p>
        </li>
        <li class="gallery-list-item">
          <p>Views</p>
          <p>${r.views}</p>
        </li>
        <li class="gallery-list-item">
          <p>Comments</p>
          <p>${r.comments}</p>
        </li>
        <li class="gallery-list-item">
          <p>Downloads</p>
          <p>${r.downloads}</p>
        </li>
      </ul>
    </li>
`,m="https://pixabay.com/api/",h=r=>{const l=new URLSearchParams({key:"45763885-c72d1bc3425850e6a878d2d7a",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${l}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},a=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),c=document.querySelector(".loader");c.classList.add("is-hidden");const y=r=>{r.preventDefault();const l=a.elements.user_query.value.trim();c.classList.remove("is-hidden"),h(l).then(s=>{if(c.classList.add("is-hidden"),s.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML="",a.reset();return}const o=s.hits.map(t=>p(t)).join("");n.innerHTML=o;const e=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.8});a.reset(),e.refresh()}).catch(s=>{console.log(s)})};a.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
