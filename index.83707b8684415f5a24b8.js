(()=>{"use strict";var e=document.querySelector(".header__burger"),t=document.querySelector(".header__menu"),r=document.querySelector("body");e.addEventListener("click",(function(){e.classList.toggle("active"),t.classList.toggle("active"),r.classList.toggle("lock")})),document.querySelector(".header__input").oninput=function(){var e=this.value.trim(),t=document.querySelectorAll(".first__subtitle");""!==e?t.forEach((function(t){if(-1===t.innerText.search(e))t.classList.add("hide"),t.innerHTML=t.innerText;else{t.classList.remove("hide");var r=t.innerText;t.innerHTML=(i=r,n=t.innerText.search(e),c=e.length,i.slice(0,n)+"<mark>"+i.slice(n,n+c)+"</mark>"+i.slice(n+c))}var i,n,c})):t.forEach((function(e){e.classList.remove("hide"),e.innerHTML=e.innerText}))}})();
//# sourceMappingURL=index.83707b8684415f5a24b8.js.map