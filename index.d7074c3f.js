$(document).ready((function(){$("a").on("click",(function(e){if(""!==this.hash&&"menuLink"==this.className){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},1e3,(function(){window.location.hash=t}))}})),$(window).resize((function(){location.reload(!1)})),function(e){var t,a,s="carousel__photo",n=e.getElementsByClassName(s),c=n.length,i=0,o=!0;function l(e){if(!o){o=!0,setTimeout((function(){o=!1}),300);var t=e-1,a=e+1,i=e-2,l=e+2;c-1>3&&(e<=0?t=c-1:e>=c-1&&(a=0),t<=0?i=c-1:a>=c-1&&(l=0),0==e?(t=c-1,i=c-2,l=e+1):e==c-1&&(t=e-1,a=0,l=1),n[i].className=s,n[l].className=s,n[t].className=s+" prev",n[e].className=s+" active",n[a].className=s+" next")}}function u(){o||(i==c-1?i=0:i++,l(i))}function m(){o||(0==i?i=c-1:i--,l(i))}n[c-1].classList.add("prev"),n[0].classList.add("active"),n[1].classList.add("next"),t=e.getElementsByClassName("carousel__button--next")[0],a=e.getElementsByClassName("carousel__button--prev")[0],t.addEventListener("click",u),a.addEventListener("click",m),o=!1}(document)}));
//# sourceMappingURL=index.d7074c3f.js.map
