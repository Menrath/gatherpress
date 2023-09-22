(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const t=window.wp.element,s=window.wp.domReady;var n=e.n(s);const a=window.wp.i18n,r=(e,t=!1)=>{for(const[s,n]of Object.entries(e)){let e=s;t&&(e+=t),addEventListener(e,(e=>{n(e.detail)}),!1)}};function i(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}window.wp.data;const l=({item:e,activeItem:s=!1,count:n,onTitleClick:a,defaultLimit:r})=>{const{title:l,value:o}=e,p=!(0===n&&"attending"!==o),c=s?"span":"a",m=i("post_id"),v=n>r;return(0,t.useEffect)((()=>{s&&((e,t=!1)=>{for(const[s,n]of Object.entries(e)){let e=s;t&&(e+=t);const a=new CustomEvent(e,{detail:n});dispatchEvent(a)}})({setRsvpSeeAllLink:v},m)})),p?(0,t.createElement)("div",{className:"gp-rsvp-response__navigation-item"},(0,t.createElement)(c,{className:"gp-rsvp-response__anchor","data-item":o,"data-toggle":"tab",href:"#",role:"tab","aria-controls":`#gp-rsvp-${o}`,onClick:e=>a(e,o)},l),(0,t.createElement)("span",{className:"gp-rsvp-response__count"},"(",n,")")):""},o=({items:s,activeValue:n,onTitleClick:a,defaultLimit:o})=>{const p={all:0,attending:0,not_attending:0,waiting_list:0};for(const[e,t]of Object.entries(i("responses")))p[e]=t.count;const[c,m]=(0,t.useState)(p),[v,d]=(0,t.useState)(!1),[u,_]=(0,t.useState)(!0),g=u?"span":"a";r({setRsvpCount:m},i("post_id"));let f=0;const E=s.map(((e,s)=>{const r=e.value===n;return r&&(f=s),(0,t.createElement)(l,{key:s,item:e,count:c[e.value],activeItem:r,onTitleClick:a,defaultLimit:o})}));return(0,t.useEffect)((()=>{e.g.document.addEventListener("click",(({target:e})=>{e.closest(".gp-rsvp-response__navigation-active")||d(!1)})),e.g.document.addEventListener("keydown",(({key:e})=>{"Escape"===e&&d(!1)}))})),(0,t.useEffect)((()=>{0===c.not_attending&&0===c.waiting_list?_(!0):_(!1)}),[c]),(0,t.createElement)("div",{className:"gp-rsvp-response__navigation-wrapper"},(0,t.createElement)("div",null,(0,t.createElement)(g,{href:"#",className:"gp-rsvp-response__navigation-active",onClick:e=>(e=>{e.preventDefault(),d(!v)})(e)},s[f].title)," ",(0,t.createElement)("span",null,"(",c[n],")")),!u&&v&&(0,t.createElement)("nav",{className:"gp-rsvp-response__navigation"},E))},p=({items:e,activeValue:s,onTitleClick:n,rsvpLimit:l,setRsvpLimit:p,defaultLimit:c})=>{let m;m=!1===l?(0,a.__)("See fewer","gatherpress"):(0,a.__)("See all","gatherpress");const[v,d]=(0,t.useState)(i("responses")[s].count>c);return r({setRsvpSeeAllLink:d},i("post_id")),(0,t.createElement)("div",{className:"gp-rsvp-response__header"},(0,t.createElement)("div",{className:"dashicons dashicons-groups"}),(0,t.createElement)(o,{items:e,activeValue:s,onTitleClick:n,defaultLimit:c}),v&&(0,t.createElement)("div",{className:"gp-rsvp-response__see-all"},(0,t.createElement)("a",{href:"#",onClick:e=>(e=>{e.preventDefault(),p(!1===l&&c)})(e)},m)))},c=({eventId:e,value:s,limit:n,responses:l=[]})=>{const[o,p]=(0,t.useState)(l);r({setRsvpResponse:p},e);let c="";return"object"==typeof o&&void 0!==o[s]&&(l=[...o[s].responses],n&&(l=l.splice(0,n)),c=l.map(((e,s)=>{const{profile:n,name:a,photo:r,role:i}=e;let{guests:l}=e;return l=l?" +"+l+" guest(s)":"",(0,t.createElement)("div",{key:s,className:"gp-rsvp-response__item"},(0,t.createElement)("figure",{className:"gp-rsvp-response__member-avatar"},(0,t.createElement)("a",{href:n},(0,t.createElement)("img",{alt:a,title:a,src:r}))),(0,t.createElement)("div",{className:"gp-rsvp-response__member-info"},(0,t.createElement)("div",{className:"gp-rsvp-response__member-name"},(0,t.createElement)("a",{href:n},a)),(0,t.createElement)("div",{className:"gp-rsvp-response__member-role"},i),(0,t.createElement)("small",{className:"gp-rsvp-response__guests"},l)))}))),(0,t.createElement)(t.Fragment,null,"attending"===s&&0===c.length&&(0,t.createElement)("div",{className:"gp-rsvp-response__no-responses"},!1===i("has_event_past")?(0,a.__)("No one is attending this event yet.","gatherpress"):(0,a.__)("No one went to this event.","gatherpress")),c)},m=({items:e,activeValue:s,limit:n=!1})=>{const a=i("post_id"),r=i("responses"),l=e.map(((e,i)=>{const{value:l}=e,o=l===s;return o?(0,t.createElement)("div",{key:i,className:`gp-rsvp-response__items gp-rsvp-response__${o}`,id:`gp-rsvp-${l}`,role:"tabpanel","aria-labelledby":`gp-rsvp-${l}-tab`},(0,t.createElement)(c,{eventId:a,value:l,limit:n,responses:r})):""}));return(0,t.createElement)("div",{className:"gp-rsvp-response__content"},l)},v=()=>{const e=i("has_event_past"),s=[{title:!1===e?(0,a.__)("Attending","gatherpress"):(0,a.__)("Went","gatherpress"),value:"attending"},{title:!1===e?(0,a.__)("Waiting List","gatherpress"):(0,a.__)("Wait Listed","gatherpress"),value:"waiting_list"},{title:!1===e?(0,a.__)("Not Attending","gatherpress"):(0,a.__)("Didn't Go","gatherpress"),value:"not_attending"}],[n,l]=(0,t.useState)("attending"),[o,c]=(0,t.useState)(8);return r({setRsvpStatus:l},i("post_id")),(0,t.createElement)("div",{className:"gp-rsvp-response"},(0,t.createElement)(p,{items:s,activeValue:n,onTitleClick:(e,t)=>{e.preventDefault(),l(t)},rsvpLimit:o,setRsvpLimit:c,defaultLimit:8}),(0,t.createElement)(m,{items:s,activeValue:n,limit:o}))};n()((()=>{const e=document.querySelectorAll('[data-gp_block_name="rsvp-response"]');for(let s=0;s<e.length;s++)(0,t.createRoot)(e[s]).render((0,t.createElement)(v,null))}))})();