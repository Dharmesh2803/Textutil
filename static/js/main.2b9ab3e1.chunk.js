(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(2),o=a.n(r);a(12);function c(e){const[t,a]=Object(l.useState)("");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container mt-5",style:{color:"light"===e.mode?"black":"white"}},n.a.createElement("div",{className:"mb-3 "},n.a.createElement("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label"},n.a.createElement("h1",null,"Enter Your Text")),n.a.createElement("textarea",{className:"form-control ",id:"exampleFormControlTextarea1",rows:"8",value:t,onChange:e=>{console.log("text chenge"),a(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"grey",color:"light"===e.mode?"black":"white"}}),n.a.createElement("button",{type:"button",className:"btn btn-primary mt-2 ",onClick:()=>{a(t.toUpperCase())}},"upCase"),n.a.createElement("button",{type:"button",className:"btn btn-danger mt-2 mx-3 ",onClick:()=>{a(t.toLocaleLowerCase())}},"LowCase"),n.a.createElement("button",{type:"button",className:"btn btn-dark mt-2 mx-2 ",onClick:()=>{a("")}},"Clear"))),n.a.createElement("div",{className:"container mt-4",style:{color:"light"===e.mode?"black":"white"}},n.a.createElement("h4",null,"YourText summary "),n.a.createElement("p",null,t.split(" ").length," words and ",t.length," characters"),n.a.createElement("p",null,.008*t.split(" ").length," Minute read"),n.a.createElement("h4",null,"Preview "),n.a.createElement("p",null,t.length>0?t:"Enter somethin to preview it here")))}function m(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",harf:"#"},e.Title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active ","aria-current":"page",harf:"#"},"Home")),n.a.createElement("li",{className:"nav-item"})))),n.a.createElement("div",{className:"form-check form-switch mx-4"},n.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggelMode}),n.a.createElement("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault"},"DarkMode"))))}function s(e){const[t,a]=Object(l.useState)("light"),r=(e,t)=>({message:e,type:t});return n.a.createElement(n.a.Fragment,null,n.a.createElement(m,{Title:"TextUtils",mode:t,toggelMode:()=>{"light"===t?(a("dark"),document.body.style.backgroundColor="grey",r("Dark mode has been enabled","success"),document.title="home-DarkMode"):(a("light"),document.body.style.backgroundColor="white",r("light mode has been enabled","success"),document.title="home-LightMode")}}),n.a.createElement(c,{mode:t}))}var i=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:r,getTTFB:o}=t;a(e),l(e),n(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s,null))),i()},3:function(e,t,a){e.exports=a(13)}},[[3,1,2]]]);
//# sourceMappingURL=main.2b9ab3e1.chunk.js.map