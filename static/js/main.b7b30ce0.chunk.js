(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/1.0a88fe12.png"},function(e,t,a){e.exports=a.p+"static/media/2.10df7455.png"},function(e,t,a){e.exports=a.p+"static/media/3.549596dc.png"},function(e,t,a){e.exports=a.p+"static/media/4.2589290c.png"},function(e,t,a){e.exports=a.p+"static/media/5.0a8b1a89.png"},function(e,t,a){e.exports=a.p+"static/media/6.36e80c8d.webp"},function(e,t,a){e.exports=a.p+"static/media/7.cabd9079.webp"},function(e,t,a){e.exports=a.p+"static/media/8.07235760.webp"},function(e,t,a){e.exports=a(28)},,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),o=(a(23),a(24),a(25),a(3)),m=a(2),i=a(30);const u=()=>c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"links"},c.a.createElement(o.b,{to:"/"},"Shop"),c.a.createElement(o.b,{to:"/cart"},c.a.createElement(i.a,{size:32}))));var d=a(7),p=a.n(d),s=a(8),E=a.n(s),C=a(9),g=a.n(C),N=a(10),b=a.n(N),v=a(11),f=a.n(v),h=a(12),I=a.n(h),T=a(13),k=a.n(T),x=a(14),S=a.n(x);const w=[{id:1,productName:"IPhone",price:999,productImage:p.a},{id:2,productName:"Macbook Pro 2022 (M1)",price:1999,productImage:E.a},{id:3,productName:"Cannon M50 Camera",price:699,productImage:g.a},{id:4,productName:"WLS Van Gogh Denim Jacket",price:228,productImage:b.a},{id:5,productName:"LED Light Strips",price:19.99,productImage:f.a},{id:6,productName:"SPECTRUM LS TEE",price:68,productImage:I.a},{id:7,productName:"AUTO SERVICE SHIRT by GOLF WANG",price:120,productImage:k.a},{id:8,productName:"DON'T TRIP UNSTRUCTURED HAT",price:40,productImage:S.a}],F=Object(n.createContext)(null),O=()=>{let e={};for(let t=1;t<w.length+1;t++)e[t]=0;return e},P=e=>{const[t,a]=Object(n.useState)(O()),r={cartItems:t,addToCart:e=>{a(t=>({...t,[e]:t[e]+1}))},updateCartItemCount:(e,t)=>{a(a=>({...a,[t]:e}))},removeFromCart:e=>{a(t=>({...t,[e]:t[e]-1}))},getTotalCartAmount:()=>{let e=0;for(const a in t)if(t[a]>0){let n=w.find(e=>e.id===Number(a));e+=t[a]*n.price}return e},checkout:()=>{a(O())}};return c.a.createElement(F.Provider,{value:r},e.children)},A=e=>{const{id:t,productName:a,price:r,productImage:l}=e.data,{addToCart:o,cartItems:m}=Object(n.useContext)(F),i=m[t];return c.a.createElement("div",{className:"product"},c.a.createElement("img",{src:l}),c.a.createElement("div",{className:"description"},c.a.createElement("p",null,c.a.createElement("b",null,a)),c.a.createElement("p",null," $",r)),c.a.createElement("button",{className:"addToCartBttn",onClick:()=>o(t)},"Add To Cart ",i>0&&c.a.createElement(c.a.Fragment,null," (",i,")")))};a(26);const L=()=>c.a.createElement("div",{className:"shop"},c.a.createElement("div",{className:"shopTitle"},c.a.createElement("h1",null,"FastCart")),c.a.createElement("div",{className:"products"},w.map(e=>c.a.createElement(A,{data:e})))),R=e=>{const{id:t,productName:a,price:r,productImage:l}=e.data,{cartItems:o,addToCart:m,removeFromCart:i,updateCartItemCount:u}=Object(n.useContext)(F);return c.a.createElement("div",{className:"cartItem"},c.a.createElement("img",{src:l}),c.a.createElement("div",{className:"description"},c.a.createElement("p",null,c.a.createElement("b",null,a)),c.a.createElement("p",null," Price: $",r),c.a.createElement("div",{className:"countHandler"},c.a.createElement("button",{onClick:()=>i(t)}," - "),c.a.createElement("input",{value:o[t],onChange:e=>u(Number(e.target.value),t)}),c.a.createElement("button",{onClick:()=>m(t)}," + "))))};a(27);const j=()=>{const{cartItems:e,getTotalCartAmount:t,checkout:a}=Object(n.useContext)(F),r=t(),l=Object(m.o)();return c.a.createElement("div",{className:"cart"},c.a.createElement("div",null,c.a.createElement("h1",null,"Your Cart Items")),c.a.createElement("div",{className:"cart"},w.map(t=>{if(0!==e[t.id])return c.a.createElement(R,{data:t})})),r>0?c.a.createElement("div",{className:"checkout"},c.a.createElement("p",null," Subtotal: $",r," "),c.a.createElement("button",{onClick:()=>l("/")}," Continue Shopping "),c.a.createElement("button",{onClick:()=>{a(),l("/checkout")}}," ","Checkout"," ")):c.a.createElement("h1",null," Your Shopping Cart is Empty"))};var D=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(P,null,c.a.createElement(o.a,null,c.a.createElement(u,null),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",element:c.a.createElement(L,null)}),c.a.createElement(m.a,{path:"/cart",element:c.a.createElement(j,null)})))))};var M=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then(t=>{let{getCLS:a,getFID:n,getFCP:c,getLCP:r,getTTFB:l}=t;a(e),n(e),c(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null))),M()}],[[15,1,2]]]);
//# sourceMappingURL=main.b7b30ce0.chunk.js.map