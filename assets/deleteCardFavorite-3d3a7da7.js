import{a as se,S as I}from"./vendor-9a5feb6b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const $e=window.location.pathname,Ve=$e.lastIndexOf("/"),Ee=$e.substring(Ve),Ye=e=>{localStorage.setItem("theme-preference",e)},je=()=>localStorage.getItem("theme-preference")||"light";let b=je()==="dark";const he=document.querySelectorAll(".theme-toggle");he.forEach(e=>{e.checked=b,e.addEventListener("change",()=>{b=e.checked,he.forEach(t=>{t!==e&&(t.checked=b)}),document.body.setAttribute("theme",b?"dark":"light"),Ee==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",b?"dark":"light"),Ye(b?"dark":"light")})});document.addEventListener("DOMContentLoaded",()=>{document.body.setAttribute("theme",b?"dark":"light"),Ee==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",b?"dark":"light")});function ze(){const e=document.querySelector(".mobile-menu-wrapper"),t=document.querySelectorAll(".nav-link"),s=document.querySelector(".burger-menu"),r=document.querySelector(".burger-menu-close");s.addEventListener("click",()=>{e.classList.toggle("is-open")}),r.addEventListener("click",()=>{e.classList.toggle("is-open")}),t.forEach(o=>o.addEventListener("click",()=>{e.classList.remove("is-open")}))}ze();function Ke(){const e=document.querySelectorAll(".nav-link");window.addEventListener("load",()=>{const t=window.location.pathname;t.includes("index.html")||t=="/fitnes-app/"?(e[0].classList.add("active-link"),e[2].classList.add("active-link")):t.includes("page-2.html")&&(e[1].classList.add("active-link"),e[3].classList.add("active-link"))})}Ke();function ue(e,t){e.querySelectorAll("button").forEach(s=>s.classList.remove("active")),t.classList.add("active")}function Q(e=[]){e.forEach(t=>t.classList.add("is-hidden"))}function X(e=[]){e.forEach(t=>t.classList.remove("is-hidden"))}const Z=document.querySelector(".loader-wrapper");se.defaults.baseURL="https://energyflow.b.goit.study/api";async function k(e,t={}){Z.classList.remove("hidden");try{return(await se.get(`/${e}`,{params:t})).data}catch(s){console.error(s)}finally{Z.classList.add("hidden")}}async function Ge(e,t={}){Z.classList.remove("hidden");try{return(await se.patch(`/${e}`,t)).data}catch(s){console.error(s)}finally{Z.classList.add("hidden")}}const Ie=window.location.pathname,_e=Ie.lastIndexOf("/"),pe=Ie.substring(_e);let K,G,Me,ee,Oe;(pe==="/index.html"||pe==="/")&&(K=document.querySelector(".form-search-exercises"),G=document.querySelector(".cards-workout-list"),Me=document.querySelector(".pagination-cards-workout-box"),ee=document.querySelector(".search-info-message"),Oe=K.elements.search,K.addEventListener("submit",Qe));async function Qe(e){e.preventDefault(),Q([ee]),X([G]),G.innerHTML="",Me.innerHTML="";try{const t=await k(`exercises?${w}=${J}`,{page:x,limit:re,keyword:Oe.value});if(!t.results.length){Q([G]),X([ee]);return}ge(t.results)}catch{O()}finally{K.reset()}}const S="/js_96_jackavryashnik/assets/sprite-31c6263f.svg";let ce,te,U,ve,le,ye,fe,M,W,oe,ne,x,w,J,re;const Ae=window.location.pathname,Xe=Ae.lastIndexOf("/"),xe=Ae.substring(Xe);(xe==="/index.html"||xe==="/")&&(ce=document.querySelector(".buttons-filter-container"),te=document.querySelector(".cards-workout-list"),U=document.querySelector(".pagination-cards-workout-box"),ve=document.querySelector(".slash"),le=document.querySelector(".exercises-subtitle"),ye=document.querySelector(".form-search-exercises"),M=document.querySelector(".exercises-list"),W=document.querySelector(".pagination-exercises-box"),oe=document.querySelector(".exercises-page-container"),fe=[ve,le,ye,te],ne=innerWidth<768?8:12,re=innerWidth<1440?8:9,x=1,w="Muscles",ce.addEventListener("click",et),M.addEventListener("click",st),window.addEventListener("load",Ze));async function Ze(){try{const e=await k(`filters?filter=${w}`,{limit:ne,page:x});Pe(e.totalPages),me(e.results)}catch{O()}}async function et(e){const t=e.target.dataset.filter;if(t){w=t,x=1,ue(ce,e.target),Q([...fe,ee]),X([M]);try{const s=await k(`filters?filter=${w}`,{limit:ne,page:x});te.innerHTML="",U.innerHTML="",me(s.results),Pe(s.totalPages)}catch{O()}}}function me(e){const t=e.reduce((s,{name:r,filter:o,imgUrl:n})=>s+`
  <li data-filter="${o==="Body parts"?"bodypart":o.toLowerCase()}" data-name="${r}" class="exercises-list-card" style="background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${n});
background-size: cover;
background-repeat: no-repeat;">
    <div class="exercise-card-desc">
      <h2 data-filter="${o==="Body parts"?"bodypart":o.toLowerCase()}" data-name="${r}"  class="exercise-card-desc-name">${r}</h2>
      <p data-filter="${o==="Body parts"?"bodypart":o.toLowerCase()}" data-name="${r}"  class="exercise-card-desc-filter">${o}</p>
    </div>
  </li>
  `,"");M.innerHTML=t}function Pe(e){W.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const s=document.createElement("button");s.textContent=t,t===1&&s.classList.add("active"),s.addEventListener("click",r=>{ue(W,r.target),tt(t)}),W.appendChild(s)}}async function tt(e){x=e;try{oe.scrollIntoView({behavior:"smooth"});const t=await k(`filters?filter=${w}`,{limit:ne,page:x});me(t.results)}catch{O()}}async function st(e){const t=e.target.dataset.filter,s=e.target.dataset.name;if(t){w=t,J=s,x=1,oe.scrollIntoView({behavior:"smooth"}),Q([M]),le.textContent=J,X(fe);try{const r=await k(`exercises?${w}=${J}`,{limit:re,page:x});M.innerHTML="",W.innerHTML="",ge(r.results),ot(r.totalPages)}catch{O()}}}function ge(e){const t=e.reduce((s,{rating:r,target:o,bodyPart:n,burnedCalories:i,name:f,_id:a})=>(s+=`<li class="card-workout-item" id=${a}>
                <div class="card-menu">
                    <div class="card-menu-box">
                
                        <div class="card-menu-workout">workout</div>
                        <div class="card-workout-rating">
                        <p class="card-workout-rating-text">${Math.round(r)}.0</p>
                        <svg
                            class="card-workout-rating-icon"
                            width="18"
                            height="18"
                        >
                            <use href="${S}#icon-Star-1"></use>
                        </svg>
                        </div>
                    </div>
                
                        <button data-id=${a} class="btn-start-workout" type="button">Start
                            <svg class="card-workout-start-icon"
                                width="16"
                                height="16"
                                >
                                <use class="card-workout-start-icon-use" href="${S}#icon-arrow"></use>
                            </svg>
                        </button>
                </div>
                  
                <div class="card-workout-title">
                    <div class="card-workout-title-icon-box">
                        <svg
                        class="card-workout-title-icon"
                        width="24"
                        height="24">
                        <use href="${S}#icon-human-ex"></use>
                        </svg>
                    </div>
                    <p class="card-title-text">${f}</p>
                </div>
            
                <div class="card-workout-info">
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Burned calories:</p>
                        <p class="card-workout-info-data card-time">${i} / 3 min</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Body part:</p>
                        <p class="card-workout-info-data">${n}</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Target:</p>
                        <p class="card-workout-info-data card-target">${o}</p>
                    </div>
                </div>
            </li>`,s),"");te.innerHTML=t}function ot(e){U.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const s=document.createElement("button");s.textContent=t,t===1&&s.classList.add("active"),s.addEventListener("click",r=>{ue(U,r.target),nt(t)}),U.appendChild(s)}}async function nt(e){x=e;try{oe.scrollIntoView({behavior:"smooth"});const t=await k(`exercises?${w}=${J}`,{limit:re,page:x});ge(t.results)}catch{O()}}function O(){I.fire({text:"Oops, it seems something went wrong.",icon:"error"})}const Te=window.location.pathname,rt=Te.lastIndexOf("/"),we=Te.substring(rt);if(we==="/index.html"||we==="/"){const e=document.querySelector(".footer-form");e.addEventListener("submit",function(t){t.preventDefault(),it(),e.reset()})}async function it(){const e=document.querySelector(".footer-form"),r={email:new FormData(e).get("email")};try{const n=(await se.post(e.action,r,{headers:{"Content-Type":"application/json"}})).data;n&&n.message&&lt()}catch(o){o.response&&o.response.status!==409&&at(),o.response&&o.response.status===409&&ct()}}function at(){I.fire({title:"Bad request",text:"Something went wrong.",icon:"error"})}function ct(){I.fire({title:"Warning!",text:"Subscription already exists",icon:"warning"})}function lt(){I.fire({title:"Good job!",text:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",icon:"success"})}function dt(){const e=document.querySelector(".foter-privacy-policy"),t=document.querySelector(".footer-terms-of-service"),s=document.querySelector(".modal-overlay"),r=document.querySelector(".privacy-modal-overlay");e.addEventListener("click",()=>r.classList.add("is-open")),t.addEventListener("click",()=>s.classList.add("is-open")),r.addEventListener("click",()=>r.classList.remove("is-open")),s.addEventListener("click",()=>s.classList.remove("is-open"))}const Be=window.location.pathname,ut=Be.lastIndexOf("/"),Le=Be.substring(ut);(Le==="/index.html"||Le==="/")&&dt();const De=window.location.pathname,ft=De.lastIndexOf("/"),mt=De.substring(ft);mt==="/page-2.html"&&document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".favorites-list"),t=document.querySelector(".favorites-pagination-block");document.querySelector(".message-info");const s=document.querySelector(".favorites-contanier-block");function r(){window.location.pathname==="/fitnes-app/page-2.html"&&window.innerWidth<=767&&o()?t.style.display="flex":t.style.display="none"}function o(){return e&&e.offsetParent!==null}function n(){const f=window.innerWidth<=767&&o()?6:e.children.length;if(window.innerWidth>767&&o()){for(let u=0;u<e.children.length;u++)e.children[u].style.display="block";return}Math.ceil(e.children.length/f);let a=1;function h(u){const c=(u-1)*f,p=c+f;for(let d=0;d<e.children.length;d++)e.children[d].style.display="none";for(let d=c;d<p&&d<e.children.length;d++)e.children[d].style.display="block"}h(a),t.addEventListener("click",function(u){u.target.tagName==="BUTTON"&&(t.querySelectorAll("button").forEach(p=>p.classList.remove("active-btn")),u.target.classList.add("active-btn"),a=parseInt(u.target.textContent),h(a))})}function i(){window.matchMedia("(min-width: 768px)").matches?s.style.overflowY="scroll":s.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?s.style.maxHeight="480px":s.style.maxHeight="none"}i(),r(),window.addEventListener("resize",function(){r(),n(),i()}),o()&&e.children.length>=6&&n()});const _="quoteDay",F=JSON.parse(localStorage.getItem(_)),ie=document.querySelector(".quote-container-text"),be=document.querySelector(".quote-container-author"),ae=new Date,z={date:ae.getDate(),month:ae.getMonth(),year:ae.getFullYear()};!localStorage.getItem(_)||z.date!=F.date.date||z.month!=F.date.month||z.year!=F.date.year?(localStorage.removeItem(_),k("quote").then(e=>{ie.textContent=e.quote,be.textContent=e.author,localStorage.setItem(_,JSON.stringify({author:e.author,quote:e.quote,date:z}))}).catch(e=>{console.log(e),ie.textContent="Sorry, there was an error on the server"})):(ie.textContent=F.quote,be.textContent=F.author);const de=document.querySelector(".scroll-top-btn");function Fe(){window.scrollY>700?de.classList.remove("is-hidden"):window.scrollY<700&&de.classList.add("is-hidden")}window.onscroll=Fe;de.onclick=()=>window.scrollTo(0,0);function E(e){const t=document.querySelector(".rating-modal"),s=document.querySelectorAll(".rating-button"),r=document.getElementById("rating-value"),o=document.querySelector(".rating-email-field"),n=document.querySelector(".rating-text-field"),i=document.querySelector(".rating-form"),f=document.querySelector(".rate-wrapper");let a;const h=c=>{a=c.target.value,isNaN(a)||(r.textContent=a+".0"),s.forEach(p=>{p.value<=a?p.classList.add("active"):p.classList.remove("active")})};f.addEventListener("click",h);const u=c=>{c.preventDefault(),t.classList.remove("active");const p=`exercises/${e}/rating`,d={rate:Number(a),email:o.value,review:n.value};Ge(p,d).then(L=>{I.fire({title:"Success!",text:"Feedback sent successfully.",icon:"success"})}).catch(L=>{I.fire({title:"Bad request",text:L.message,icon:"error"})}),i.reset(),i.removeEventListener("submit",u),f.removeEventListener("click",h)};i.addEventListener("submit",u)}const Se=`
<svg class="favorites-list-heart-icon" width="14" height="14" stroke="#F6F6F6" fill="transparent">
    <use class="favorites-list-heart-icon-use" href="${S}#icon-heart"></use>
</svg>`,He=window.location.pathname,gt=He.lastIndexOf("/"),ke=He.substring(gt);if(ke==="/index.html"||ke==="/"){const e="#eea10c",t="#e8e8e8";let s,r,o="favorites",n=localStorage.getItem(o);n?n=JSON.parse(n):n=[];const i=document.querySelector(".rating-form");document.querySelector(".rate-wrapper");const f=document.querySelector(".rating-close-modal"),a=document.querySelector(".rating-modal"),h=document.querySelector(".ex-rating-button"),u=document.querySelectorAll(".ex-rate-icon"),c=document.querySelector(".ex-add-favorities"),p=document.querySelector(".cards-workout-list"),d=document.querySelector(".ex-backdrop"),L=document.querySelector(".gif-ex"),A=document.querySelector(".exercise-name"),C=document.querySelector(".ex-current-rating"),R=document.querySelector(".ex-target"),V=document.querySelector(".ex-body-part"),y=document.querySelector(".ex-equipment"),P=document.querySelector(".ex-popular"),Y=document.querySelector(".ex-burned-calories"),j=document.querySelector(".ex-description");p.addEventListener("click",async m=>{(m.target.classList.contains("btn-start-workout")||m.target.classList.contains("card-workout-start-icon")||m.target.classList.contains("card-workout-start-icon-use"))&&(s=m.target.closest(".card-workout-item").id,await k(`exercises/${s}`).then(l=>{L.src=l.gifUrl,A.textContent=l.name,C.textContent=l.rating,R.textContent=l.target,P.textContent=l.popularity,V.textContent=l.bodyPart,y.textContent=l.equipment,Y.textContent=`${l.burnedCalories} / ${l.time}min`,j.textContent=l.description,r=Math.round(C.textContent),u.forEach((g,B)=>{B<r?g.style.fill=e:g.style.fill=t})}),n.find(l=>l.id===s)?c.textContent="Delete from favorities":(c.textContent="Add to favorities",c.innerHTML=`Add to favorities ${Se}`),d.classList.add("is-open"))}),c.addEventListener("click",m=>{if(c.textContent.trim()=="Add to favorities")n.push({id:s,gifUrl:L.src,name:A.textContent,rating:C.textContent,target:R.textContent,popular:P.textContent,bodyPart:V.textContent,equipment:y.textContent,burnedCalories:Y.textContent,description:j.textContent}),localStorage.setItem(o,JSON.stringify(n)),c.textContent="Delete from favorities",c.innerHTML="Delete from favorities";else{const T=n.findIndex(l=>l.id==s);n.splice(T,1),localStorage.setItem(o,JSON.stringify(n)),c.textContent="Add to favorities ",c.innerHTML=`Add to favorities ${Se}`}}),d.addEventListener("click",m=>{(m.target==d||m.target.classList.contains("ex-close-btn-icon")||m.target.classList.contains("ex-close-btn")||m.target.classList.contains("ex-close-btn-icon-use"))&&d.classList.remove("is-open")}),document.addEventListener("keydown",m=>{m.key==="Escape"&&(d.classList.contains("is-open")?d.classList.remove("is-open"):a.classList.contains("active")&&(a.classList.remove("active"),d.classList.add("is-open"),i.removeEventListener("submit",E)))}),h.addEventListener("click",()=>{a.classList.add("active"),E(s),d.classList.remove("is-open")}),f.addEventListener("click",()=>{a.classList.remove("active"),d.classList.add("is-open"),i.removeEventListener("submit",E)})}const Ne=window.location.pathname,ht=Ne.lastIndexOf("/"),pt=Ne.substring(ht),vt=document.querySelector(".message-info"),yt=document.querySelector(".favorites-pagination-block");if(pt==="/page-2.html"){const e=document.querySelector(".favorites-list");let t="favorites",s=localStorage.getItem(t);const r=JSON.parse(s);if(!s||r.length==0)vt.classList.add("is-open-message-info"),yt.classList.add("close");else if(s)try{r.forEach(o=>{const n=`<li class="favorites-list-item" id="${o.id}">
            <div class="favorites-card-header">
                <div class="favorites-oval">
                    <span>WORKOUT</span>
                </div>
                <button class="favorites-icon-svg" aria-label="trash" type="button">
                    <svg class="favorites-icon-svg-delete" width="16" height="16" fill="none">
                        <use class="favorites-icon-svg-delete-use" href="${S}#icon-trash"></use>
                    </svg>
                </button>
                <button
                    data-id="${o.id}"
                    class="favorites-list-button"
                    aria-label="start"
                    type="button">Start
                        <svg class="favorites-list-button-icon" width="14" height="14" stroke="#1B1B1B">
                            <use class="favorites-list-button-icon-use" href="${S}#icon-arrow"></use>
                        </svg>
                </button>
                </div>
                <div class="favorites-list-container">
                    <svg class="favorite-list-svg" width="24" height="24">
                        <use href="${S}#icon-human-ex"></use>
                    </svg>
                    <h3 class="favorites-list-text">${o.name}</h3>
                </div>
                <div class="favorites-card-text">
                <ul class="favorites-card-text-list">
                    <li class="favorites-card-text-item">
                        <div class="favorites-card-text-wrapper">
                            <h4 class="favorites-card-text-title">Burned calories:</h4>
                            <p class="favorites-card-text-block">${o.burnedCalories}</p>
                        </div>
                        <div class="favorites-card-text-wrapper">
                            <h4 class="favorites-card-text-title">Body part:</h4>
                            <p class="favorites-card-text-block">${o.bodyPart}</p>
                        </div>
                        <div class="favorites-card-text-wrapper">
                            <h4 class="favorites-card-text-title">Target:</h4>
                            <p class="favorites-card-text-block">${o.target}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </li>`;e.insertAdjacentHTML("beforeend",n)})}catch(o){console.log(o.name),console.log(o.message)}}const Ue=window.location.pathname,xt=Ue.lastIndexOf("/"),qe=Ue.substring(xt);let q,H,N;if(qe==="/index.html"||qe==="/"){let t=function(){window.scrollY>700&&q.classList.add("is-hidden")},s=function(){t(),Fe()};q=document.querySelector(".inf-wrapper"),H=document.querySelector(".wrapper-text"),N=document.querySelector(".wrapper-span");const e=document.querySelector(".hero-list");e.addEventListener("click",wt),document.addEventListener("click",r=>{e.contains(r.target)||q.classList.add("is-hidden")}),window.onscroll=s}function wt(e){switch(e.target.id){case"li1":q.classList.remove("is-hidden"),N.textContent="#Sport",H.textContent="this is an important aspect of a healthy lifestyle, which can positively affect your well-being. It helps reduce stress, increase energy, and boost self-confidence. Sport also strengthens your body and improves your cardiovascular health, while increasing your self-esteem.";break;case"li2":q.classList.remove("is-hidden"),N.textContent="#Healthy ",H.textContent="lifestyle this is the key to success in any area of life. It includes a balanced diet, regular exercise, a harmonious lifestyle, and a healthy mindset. A healthy lifestyle helps reduce the risk of chronic diseases, increase energy, and boost self-confidence.";break;case"li3":q.classList.remove("is-hidden"),N.textContent="#Workout",H.textContent="this is an important part of a healthy lifestyle. It helps strengthen your body, increase energy, and reduce stress. Workout also strengthens your heart and lungs, while increasing your self-esteem.";break;case"li4":q.classList.remove("is-hidden"),N.textContent="#Diet",H.textContent="this is the key to success in any area of life. A balanced diet includes a variety of foods, a balance of proteins, carbohydrates, and fats, and sufficient water intake. A balanced diet helps reduce the risk of chronic diseases, increase energy, and boost self-confidence.";break}}const Ce=`
<svg class="favorites-list-heart-icon" width="14" height="14" stroke="#F6F6F6" fill="transparent">
    <use class="favorites-list-heart-icon-use" href="${S}#icon-heart"></use>
</svg>`,We=window.location.pathname,Lt=We.lastIndexOf("/"),bt=We.substring(Lt);if(bt==="/page-2.html"){const e=document.querySelector(".rating-form"),t=document.querySelector(".rating-close-modal"),s=document.querySelector(".rating-modal"),r=document.querySelector(".ex-rating-button"),o=document.querySelectorAll(".ex-rate-icon"),n=document.querySelector(".ex-add-favorities"),i=document.querySelector(".ex-backdrop"),f=document.querySelector(".gif-ex"),a=document.querySelector(".exercise-name"),h=document.querySelector(".ex-current-rating"),u=document.querySelector(".ex-target"),c=document.querySelector(".ex-body-part"),p=document.querySelector(".ex-equipment"),d=document.querySelector(".ex-popular"),L=document.querySelector(".ex-burned-calories"),A=document.querySelector(".ex-description"),C=document.querySelector(".favorites-list"),R=document.querySelector(".message-info"),V=document.querySelector(".favorites-pagination-block");let y,P;const Y="#eea10c",j="#e8e8e8";let m="favorites",T=localStorage.getItem(m),l=JSON.parse(T);C.addEventListener("click",g=>{if(g.target.classList.contains("favorites-list-button")||g.target.classList.contains("favorites-list-button-icon")||g.target.classList.contains("favorites-list-button-icon-use")){y=g.target.closest(".favorites-list-item").id;const B=l.findIndex($=>$.id==y);let v=l[B];f.src=v.gifUrl,a.textContent=v.name,h.textContent=v.rating,u.textContent=v.target,d.textContent=v.popular,c.textContent=v.bodyPart,p.textContent=v.equipment,L.textContent=v.burnedCalories,A.textContent=v.description,P=Math.round(h.textContent),o.forEach(($,Re)=>{Re<P?$.style.fill=Y:$.style.fill=j}),l.find($=>$.id===y)?n.textContent="Delete from favorities":(n.textContent="Add to favorities",n.innerHTML=`Add to favorities ${Ce}`),i.classList.add("is-open")}}),n.addEventListener("click",()=>{if(n.textContent.trim()=="Add to favorities")l.push({id:y,gifUrl:f.src,name:a.textContent,rating:h.textContent,target:u.textContent,popular:d.textContent,bodyPart:c.textContent,equipment:p.textContent,burnedCalories:L.textContent,description:A.textContent}),localStorage.setItem(m,JSON.stringify(l)),n.textContent="Delete from favorities",n.innerHTML="Delete from favorities";else{const g=l.findIndex(D=>D.id==y);l.splice(g,1),localStorage.setItem(m,JSON.stringify(l));const B=document.querySelectorAll(".favorites-list-item");let v;n.textContent="Add to favorities",n.innerHTML=`Add to favorities ${Ce}`,document.querySelector(`.favorites-list-item[id="${y}"]`)&&(B.forEach(D=>{D.id==y&&(v=D)}),C.removeChild(v),(!T||l.length==0)&&(R.classList.add("is-open-message-info"),V.classList.add("close")))}}),i.addEventListener("click",g=>{(g.target==i||g.target.classList.contains("ex-close-btn-icon")||g.target.classList.contains("ex-close-btn"))&&i.classList.remove("is-open")}),document.addEventListener("keydown",g=>{g.key==="Escape"&&(i.classList.contains("is-open")?i.classList.remove("is-open"):s.classList.contains("active")&&(s.classList.remove("active"),i.classList.add("is-open"),e.removeEventListener("submit",E)))}),r.addEventListener("click",()=>{s.classList.add("active"),E(y),i.classList.remove("is-open")}),t.addEventListener("click",()=>{s.classList.remove("active"),i.classList.add("is-open"),e.removeEventListener("submit",E)})}const Je=window.location.pathname,St=Je.lastIndexOf("/"),kt=Je.substring(St);if(kt==="/page-2.html"){let e="favorites",t=localStorage.getItem(e),s=JSON.parse(t),r;const o=document.querySelector(".favorites-pagination-block"),n=document.querySelector(".message-info"),i=document.querySelector(".favorites-list"),f=document.querySelectorAll(".favorites-list-item");i.addEventListener("click",a=>{if(a.target.classList.contains("favorites-icon-svg")||a.target.classList.contains("favorites-icon-svg-delete")||a.target.classList.contains("favorites-icon-svg-delete-use")){r=a.target.closest(".favorites-list-item").id;let h;const u=s.findIndex(c=>c.id==r);s.splice(u,1),localStorage.setItem(e,JSON.stringify(s)),f.forEach(c=>{c.id==r&&(h=c)}),i.removeChild(h),(!t||s.length==0)&&(n.classList.add("is-open-message-info"),o.classList.add("close"))}})}
//# sourceMappingURL=deleteCardFavorite-3d3a7da7.js.map
