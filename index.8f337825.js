$((function(){$(".content").slice(0,2).show(),$("#showAll").on("click",(function(e){e.preventDefault(),$(".content:hidden").slice(0,2).slideDown()}))}));var e=document.querySelector('#"docsearch-input'),t=(document.querySelector("#search-form"),[].slice.call(document.querySelectorAll("body *")).filter((e=>!e.closest("#search-form")&&"SCRIPT"!==e.tagName)));document.querySelector('button[type="submit"]').addEventListener("click",(function(o){o.preventDefault();var c=e.value,l=0;t.forEach(((e,t)=>{e.innerText.toLowerCase().indexOf(c.toLowerCase())>=0?(l++,e.style.color="red"):e.style.color="initial"})),alert(`Слово ${c} найдено ${l} раз`)}));
//# sourceMappingURL=index.8f337825.js.map