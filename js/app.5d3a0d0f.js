(function(){"use strict";var t={5152:function(t,e,r){var a=r(8935),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("NavBar"),r("div",{staticClass:"py-12 md:px-20 sm:px-14 px-6"},[r("router-view")],1)],1)},o=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"relative mx-auto"},[r("nav",{staticClass:"flex justify-between bg-gray-600 text-white w-screen"},[r("div",{staticClass:"px-5 xl:px-12 py-6 flex w-full items-center"},[r("a",{staticClass:"text-3xl font-bold font-heading",attrs:{href:"#"}},[r("router-link",{staticClass:"hover:text-gray-200",attrs:{to:"/"}},[t._v(" Morfi App")])],1),r("ul",{staticClass:"hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12"},[r("li",[r("router-link",{staticClass:"hover:text-gray-200",attrs:{to:"/"}},[t._v("Home")])],1)]),r("div",{staticClass:"hidden xl:flex items-center space-x-5 items-center"},[r("a",{staticClass:"flex items-center hover:text-gray-200",attrs:{href:"#"},on:{click:function(e){return t.verCarrito()}}},[r("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"}})]),r("span",{staticClass:"flex absolute -mt-5 ml-4"},[r("span",{staticClass:"absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"},[t._v(t._s(t.cartQty))])])]),t.user&&t.user.isAdmin?r("router-link",{staticClass:"flex items-center hover:text-gray-200",attrs:{to:{name:"admin"}}},[r("svg",{staticClass:"w-6 h-6",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"}})]),t._v(" Admin ")]):t.user&&!t.user.isAdmin?r("router-link",{staticClass:"flex items-center hover:text-gray-200",attrs:{to:{name:"pedidos"}}},[r("svg",{staticClass:"w-6 h-6",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"}})]),t._v(" Mi cuenta ")]):t._e(),t.user?r("a",{on:{click:function(e){return t.logOut()}}},[r("svg",{staticClass:"w-6 h-6",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"}})])]):t._e(),t.user?t._e():r("router-link",{attrs:{to:"/login"}},[r("svg",{staticClass:"w-6 h-6",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"}})])])],1)]),r("a",{staticClass:"xl:hidden flex mr-6 items-center",attrs:{href:"#"},on:{click:function(e){return t.verCarrito()}}},[r("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"}})]),r("span",{staticClass:"flex absolute -mt-5 ml-4"},[r("span",{staticClass:"absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"},[t._v(t._s(t.cartQty))])])]),t.user&&t.user.isAdmin?r("router-link",{staticClass:"xl:hidden flex mr-6 items-center",attrs:{to:{name:"admin"}}},[r("svg",{staticClass:"w-6 h-6",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"}})]),t._v(" Admin ")]):t.user&&!t.user.isAdmin?r("router-link",{staticClass:"xl:hidden flex mr-6 items-center",attrs:{to:{name:"pedidos"}}},[r("svg",{staticClass:"w-6 h-6",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"}})]),t._v(" Mi cuenta ")]):t._e(),t.user?r("a",{staticClass:"xl:hidden flex mr-6 items-center",on:{click:function(e){return t.logOut()}}},[r("svg",{staticClass:"w-6 h-6",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"}})])]):t._e(),t.user?t._e():r("router-link",{staticClass:"xl:hidden flex mr-6 items-center",attrs:{to:"/login"}},[r("svg",{staticClass:"w-6 h-6",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"}})])]),r("a",{staticClass:"navbar-burger self-center mr-12 xl:hidden",attrs:{href:"#"}})],1)]),r("CarritoModal",{attrs:{showCart:t.showCart},on:{"cerrar-carrito":function(e){return t.closeCarrito()}}})],1)},i=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.showCart,expression:"showCart"}],staticClass:"min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"},[r("div",{staticClass:"absolute bg-black opacity-80 inset-0 z-0"}),r("div",{staticClass:"w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"},[r("div",{},[r("div",{staticClass:"text-center p-5 flex-auto justify-center"},[r("svg",{staticClass:"w16 h-16 ",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"}})])]),r("TablaCarrito",{attrs:{productos:t.cart}}),r("div",{staticClass:"p-3  mt-2 text-center space-x-4 md:block"},[r("button",{staticClass:"mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100",on:{click:function(e){return t.vaciarCarrito()}}},[t._v(" Vaciar Carrito ")]),r("button",{staticClass:"mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100",on:{click:function(e){return t.closeCarrito()}}},[t._v(" Cancelar ")]),r("button",{staticClass:"mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600",on:{click:function(e){return t.finalizarCompra()}}},[t._v("Finalizar Compra")])]),t.alert?r("div",[t._v(t._s(t.alert))]):t._e()],1)])])},c=[],d=r(4120),u=r(4665),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"min-w-full leading-normal"},[t._m(0),r("tbody",t._l(t.productos,(function(e,a){return r("tr",{key:a},[r("td",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},[r("div",[r("p",{staticClass:"text-gray-900 whitespace-no-wrap"},[t._v(" "+t._s(e.nombre)+" ")])])]),r("td",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},[r("p",{staticClass:"text-gray-900 whitespace-no-wrap"},[t._v(" "+t._s(e.cantidad))])]),r("td",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},[r("p",{staticClass:"text-gray-900 whitespace-no-wrap"},[t._v(" "+t._s(e.precio)+" ")])])])})),0)])},p=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{staticClass:"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"},[t._v(" Nombre ")]),r("th",{staticClass:"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"},[t._v(" Cantidad ")]),r("th",{staticClass:"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"},[t._v(" Precio ")])])])}],f={name:"tabla-carrito",props:{productos:{type:Array,required:!0}},mounted(){},data(){return{}},methods:{},computed:{}},g=f,h=r(1001),v=(0,h.Z)(g,m,p,!1,null,"58ea2f1f",null),w=v.exports,x={name:"carrito-modal",components:{TablaCarrito:w},props:{showCart:{type:Boolean,required:!0}},mounted(){},data(){return{alert:""}},methods:{...(0,u.nv)("cart",["setCompra","setEmptyCart"]),closeCarrito(){this.$emit("cerrar-carrito",!1)},vaciarCarrito(){this.setEmptyCart()},finalizarCompra(){if(this.user){var t=[this.cart];d.Z.guardarCompra(this.user.id,t),this.vaciarCarrito(),this.closeCarrito()}else this.alert="Debes iniciar sesion para finalizar la compra"}},computed:{...(0,u.Se)("user",["user"]),...(0,u.Se)("cart",["cart"])}},b=x,C=(0,h.Z)(b,l,c,!1,null,"b558a96e",null),y=C.exports,_={name:"nav-bar",props:{},components:{CarritoModal:y},data(){return{showCart:!1}},methods:{verCarrito(){this.showCart=!0},closeCarrito(){this.showCart=!1},logOut(){this.toSetUserStorage(null),this.$router.push("/").catch((()=>{}))},...(0,u.nv)("user",["setUser","toSetUserStorage"]),...(0,u.nv)("cart",["setCart"])},computed:{...(0,u.Se)("user",["user"]),...(0,u.Se)("cart",["cart","cartQty"])}},k=_,S=(0,h.Z)(k,n,i,!1,null,"052d1bf3",null),j=S.exports,M={name:"App",components:{NavBar:j},data(){return{}},mounted(){},methods:{}},P=M,E=(0,h.Z)(P,s,o,!1,null,null,null),$=E.exports,O=r(2809),z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 my-10"},t._l(t.productos,(function(e,a){return r("Producto",{key:a,attrs:{producto:e},on:{"ver-producto":t.showProducto}})})),1)])},T=[],U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative m-3 flex flex-wrap mx-auto"},[r("div",{staticClass:"relative max-w-sm min-w-[340px] bg-white  shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer"},[r("div",{staticClass:"overflow-x-hidden rounded-2xl relative"},[r("router-link",{attrs:{to:{name:"producto",params:{id:t.producto.id,producto:t.producto}}}},[r("img",{staticClass:"h-40 rounded-2xl w-full object-cover",attrs:{src:t.producto.imagen}})])],1),r("div",{staticClass:"mt-4 pl-2 mb-2 flex justify-between "},[r("div",[r("p",{staticClass:"text-lg font-semibold text-gray-900 mb-0"},[t._v(t._s(t.producto.nombre))]),r("p",{staticClass:"text-md text-gray-800 mt-0 font-bold"},[t._v("$"+t._s(t.producto.precio))])]),r("div",{staticClass:"flex flex-col-reverse mb-1 mr-4 group cursor-pointer"},[r("svg",{staticClass:"h-6 w-6 group-hover:opacity-70",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"gray"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}})])])])])])},A=[],Z={name:"producto-d",props:{producto:{type:Object,required:!0}},mounted(){},data(){return{}},methods:{},computed:{}},H=Z,N=(0,h.Z)(H,U,A,!1,null,"38a76dfd",null),B=N.exports,I={props:{},data(){return{producto:{}}},name:"ProductosView",components:{Producto:B},methods:{updateCart(t){console.log(t),this.$emit("add-to-cart",t),this.producto={}},showProducto(t){this.producto=t},closeProducto(){this.producto={}}},created(){this.$store.dispatch("getProductos")},computed:{productos(){return this.$store.getters.productos}}},R=I,V=(0,h.Z)(R,z,T,!1,null,null,null),D=V.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50  py-12 px-4 sm:px-6 lg:px-8  outline-none focus:outline-none bg-gray-800 bg-no-repeat bg-center bg-cover"},[r("div",{staticClass:"absolute bg-black opacity-60 inset-0 z-0"}),r("div",{staticClass:"max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10"},[t._m(0),r("form",{staticClass:"mt-8 space-y-6",attrs:{action:"#",method:"POST"}},[r("div",{staticClass:"relative"},[r("label",{staticClass:"text-sm font-bold text-gray-700 tracking-wide"},[t._v("Usuario")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",attrs:{type:"text",placeholder:"Ingrese Usuario"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),r("div",{staticClass:"mt-8 content-center"},[r("label",{staticClass:"text-sm font-bold text-gray-700 tracking-wide"},[t._v(" Password ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",attrs:{type:"password",placeholder:"Ingrese la clave"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._m(1),r("div",{staticClass:"flex items-center justify-between"},[r("div",{staticClass:"flex items-center"},[r("label",{staticClass:"ml-2 block font-bold text-sm text-red-600",attrs:{for:"error"}},[t._v(" "+t._s(t.alert)+" ")])])]),r("div",[r("button",{staticClass:"w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide\n                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300",attrs:{type:"button"},on:{click:function(e){return t.login()}}},[t._v(" Entrar ")])]),r("p",{staticClass:"flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500"},[r("span",[t._v("No tiene cuenta aún?")]),r("router-link",{staticClass:"text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300",attrs:{to:"/registro"}},[t._v("Registrarme")])],1)])])])},q=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("h2",{staticClass:"mt-6 text-3xl font-bold text-gray-900"},[t._v(" Bienvenido! ")]),r("p",{staticClass:"mt-2 text-sm text-gray-600"},[t._v("Inicie Sesión")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center justify-between"},[r("div",{staticClass:"flex items-center"},[r("input",{staticClass:"h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded",attrs:{id:"remember_me",name:"remember_me",type:"checkbox"}}),r("label",{staticClass:"ml-2 block text-sm text-gray-900",attrs:{for:"remember_me"}},[t._v(" Recordarme ")])]),r("div",{staticClass:"text-sm"},[r("a",{staticClass:"font-medium text-indigo-500 hover:text-indigo-500",attrs:{href:"#"}},[t._v(" Olvidaste tu contraseña? ")])])])}],J={data(){return{username:"",password:"",alert:""}},created(){this.toSetUsers()},computed:{...(0,u.Se)("user",["getUsers"])},methods:{...(0,u.nv)("user",["toSetUsers","toSetUserStorage"]),async login(){const t=await d.Z.getUsers(),e=t.find((t=>t.username===this.username&&t.password===this.password));e?(this.toSetUserStorage(e),this.$router.push("/")):this.alert="Usuario o contraseña incorrectos, intente nuevamente"}}},F=J,Q=(0,h.Z)(F,L,q,!1,null,null,null),Y=Q.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50  py-12 px-4 sm:px-6 lg:px-8  outline-none focus:outline-none bg-gray-800 bg-no-repeat bg-center bg-cover"},[r("div",{staticClass:"absolute bg-black opacity-60 inset-0 z-0"}),r("div",{staticClass:"max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10"},[t._m(0),r("form",{staticClass:"mt-8 space-y-6",attrs:{action:"#",method:"POST"}},[r("div",{staticClass:"relative"},[r("label",{staticClass:"text-sm font-bold text-gray-700 tracking-wide"},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",attrs:{required:"",type:"email",placeholder:"Ingrese su email"},domProps:{value:t.form.email},on:{keyup:function(e){return t.validarEmail()},input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t.alert.email?r("p",{staticClass:"text-red-500 bold text-xs "},[t._v(t._s(t.alert.email))]):t._e()]),r("div",{staticClass:"relative"},[r("label",{staticClass:"text-sm font-bold text-gray-700 tracking-wide"},[t._v("Usuario")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",attrs:{required:"",type:"text",placeholder:"Username"},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}})]),r("div",{staticClass:"mt-8 content-center"},[r("label",{staticClass:"text-sm font-bold text-gray-700 tracking-wide"},[t._v(" Password ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",attrs:{required:"",type:"password",placeholder:"Ingrese su password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),r("div",[r("button",{staticClass:"w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide\n                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300",attrs:{type:"button"},on:{click:function(e){return t.registrarUsuario()}}},[t._v(" Registrarme ")])]),r("p",{staticClass:"flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500"},[r("span",[t._v("¿Ya tenés cuenta?")]),r("router-link",{staticClass:"text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300",attrs:{to:"/login"}},[t._v("Iniciar Sesión")])],1)])])])},K=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("h2",{staticClass:"mt-6 text-3xl font-bold text-gray-900"},[t._v(" Registro ")])])}],W={data:()=>({form:{email:"",username:"",password:"",isAdmin:0},alert:{email:"",username:"",password:""}}),methods:{async registrarUsuario(){await d.Z.createUser(this.form),this.$router.push("/login")},validarEmail(){const t=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;this.alert.email=t.test(this.form.email)?"":"Formato de email inválido.",this.form.email||(this.alert.email="")}}},X=W,tt=(0,h.Z)(X,G,K,!1,null,null,null),et=tt.exports;a.Z.use(O.Z);const rt=[{path:"/",name:"home",component:D,props:!0},{path:"/login",name:"login",component:Y},{path:"/registro",name:"registro",component:et},{path:"/admin/producto/new",name:"new",component:()=>r.e(366).then(r.bind(r,1366)),props:!0},{path:"/admin/producto/edit/:id",name:"edit",component:()=>r.e(366).then(r.bind(r,1366)),props:!0},{path:"/pedidos",name:"pedidos",component:()=>r.e(869).then(r.bind(r,9869)),props:!0},{path:"/admin",name:"admin",component:()=>r.e(149).then(r.bind(r,9149)),props:!0},{path:"/producto/:id",name:"producto",component:()=>r.e(706).then(r.bind(r,7706)),props:!0}],at=new O.Z({routes:rt});var st=at,ot={namespaced:!0,state:{users:[],user:JSON.parse(localStorage.getItem("user"))||null},getters:{user:t=>t.user,getUsers(t){return t.users},getUserLogged(t){return t.user}},mutations:{setUsers(t,e){t.users=e},SET_USER:(t,e)=>{e?(delete e.password,t.user=e,localStorage.setItem("user",JSON.stringify(e))):(t.user=null,localStorage.removeItem("user"))}},actions:{toSetUsers:({commit:t})=>{d.Z.getUsers().then((e=>t("setUsers",e))).catch((t=>console.log(t)))},toSetUserStorage:({commit:t},e)=>{t("SET_USER",e)}}},nt={namespaced:!0,state:{cart:JSON.parse(localStorage.getItem("cart"))||[],showCart:!1},getters:{cart:t=>t.cart,cartQty(t){return t.cart.reduce(((t,e)=>t+e.cantidad),0)},showCart(t){return t.showCart},getCantProd:t=>e=>{const r=t.cart.find((t=>t.id==e));return r?r.cantidad:1}},mutations:{ADD_TO_CART:(t,e)=>{const r=t.cart.find((t=>t.id==e.id));r?(r.cantidad=e.cantidad,r.total=r.precio*e.cantidad):t.cart.push({...e,total:e.precio*e.cantidad}),localStorage.setItem("cart",JSON.stringify(t.cart))},EMPTY_CART:t=>{t.cart=[],localStorage.removeItem("cart")},SET_CART:(t,e)=>{e?(t.cart=e,localStorage.setItem("cart",JSON.stringify(e))):(t.cart=null,localStorage.removeItem("cart"))}},actions:{setCart:({commit:t},e)=>{t("SET_CART",e)},setEmptyCart:({commit:t})=>{t("EMPTY_CART")},toAddToCart:({commit:t},e)=>{t("ADD_TO_CART",e)}}};a.Z.use(u.ZP);const it=new u.ZP.Store({strict:!0,state:{productos:[]},getters:{productos:t=>t.productos},mutations:{SET_PRODUCTOS:(t,e)=>{t.productos=e}},actions:{getProductos:({commit:t})=>{d.Z.getProductos().then((e=>t("SET_PRODUCTOS",e))).catch((t=>console.log(t)))}},modules:{user:ot,cart:nt}});var lt=it;a.Z.config.productionTip=!1,new a.Z({router:st,store:lt,render:t=>t($)}).$mount("#app")},4120:function(t,e,r){var a=r(6166),s=r.n(a);const o="https://629571d563b5d108c19e1e1c.mockapi.io",n={getProductos:async()=>{try{const t=await s().get(o+"/productos");return t.data}catch(t){console.log(t)}},getUsers:async()=>{try{const t=await s().get(o+"/usuarios");return t.data}catch(t){console.log(t)}},deleteProducto:async t=>{try{const e=await s()["delete"](`${o}/productos/${t}`);return e.data}catch(e){console.log(e)}},createUser:async t=>{try{const e=await s().post(o+"/usuarios",t);return e.data}catch(e){console.log(e)}},saveProducto:async t=>{try{const e=await s().post(o+"/productos",t);return e.data}catch(e){console.log(e)}},updateProducto:async(t,e)=>{try{const r=await s().put(`${o}/productos/${t}`,e);return r.data}catch(r){console.log(r)}},getPedidos:async t=>{try{const e=await s().get(`${o}/usuarios/${t}/pedidos`);return e.data}catch(e){console.log(e)}},guardarCompra:async(t,e)=>{try{const r=await s().post(`${o}/usuarios/${t}/pedidos`,e);return r.data}catch(r){console.log(r)}}};e["Z"]=n}},e={};function r(a){var s=e[a];if(void 0!==s)return s.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,a,s,o){if(!a){var n=1/0;for(d=0;d<t.length;d++){a=t[d][0],s=t[d][1],o=t[d][2];for(var i=!0,l=0;l<a.length;l++)(!1&o||n>=o)&&Object.keys(r.O).every((function(t){return r.O[t](a[l])}))?a.splice(l--,1):(i=!1,o<n&&(n=o));if(i){t.splice(d--,1);var c=s();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[a,s,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,a){return r.f[a](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/"+t+"."+{149:"9b5b43b7",366:"1d42e2ed",706:"ee15a104",869:"99f89098"}[t]+".js"}}(),function(){r.miniCssF=function(t){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="app-morfi:";r.l=function(a,s,o,n){if(t[a])t[a].push(s);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==e+o){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",e+o),i.src=a),t[a]=[s];var m=function(e,r){i.onerror=i.onload=null,clearTimeout(p);var s=t[a];if(delete t[a],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(t){return t(r)})),e)return e(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/AppMorfiDeploy/"}(),function(){var t={143:0};r.f.j=function(e,a){var s=r.o(t,e)?t[e]:void 0;if(0!==s)if(s)a.push(s[2]);else{var o=new Promise((function(r,a){s=t[e]=[r,a]}));a.push(s[2]=o);var n=r.p+r.u(e),i=new Error,l=function(a){if(r.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var o=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,s[1](i)}};r.l(n,l,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,o,n=a[0],i=a[1],l=a[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(s in i)r.o(i,s)&&(r.m[s]=i[s]);if(l)var d=l(r)}for(e&&e(a);c<n.length;c++)o=n[c],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(d)},a=self["webpackChunkapp_morfi"]=self["webpackChunkapp_morfi"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(5152)}));a=r.O(a)})();
//# sourceMappingURL=app.5d3a0d0f.js.map