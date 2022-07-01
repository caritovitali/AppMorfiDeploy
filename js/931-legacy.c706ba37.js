"use strict";(self["webpackChunkapp_morfi"]=self["webpackChunkapp_morfi"]||[]).push([[931],{4931:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.producto?r("div",{staticClass:"w-full max-w-xl p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"},[r("div",{},[r("div",{staticClass:"text-center p-5 flex-auto justify-center"},[r("svg",{staticClass:"w-16 h-16 inline",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"}})])]),r("div",{staticClass:"overflow-x-hidden rounded-2xl relative"},[r("img",{staticClass:"h-56 rounded-2xl w-full object-cover",attrs:{src:t.producto.imagen}}),r("div",[r("p",{staticClass:"text-lg font-semibold text-gray-900 mb-0"},[t._v(t._s(t.producto.nombre))]),r("p",{staticClass:"text-md text-gray-800 mt-0 font-bold"},[t._v("$"+t._s(t.producto.precio))])]),r("div",{staticClass:"flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1"},[r("button",{staticClass:" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"},[r("span",{staticClass:"m-auto text-2xl font-thin",on:{click:function(e){return t.restar()}}},[t._v("−")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.cantidad,expression:"cantidad"}],staticClass:"outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none",attrs:{type:"number",readonly:""},domProps:{value:t.cantidad},on:{input:function(e){e.target.composing||(t.cantidad=e.target.value)}}}),r("button",{staticClass:"bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"},[r("span",{staticClass:"m-auto text-2xl font-thin",on:{click:function(e){return t.sumar()}}},[t._v("+")])])])]),r("div",{staticClass:"p-3  mt-2 text-center space-x-4 md:block"},[r("button",{staticClass:"mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100",on:{click:function(e){return t.closeDetalle()}}},[t._v(" Atras ")]),r("button",{staticClass:"mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600",on:{click:function(e){return t.agregarAlCarrito()}}},[t._v("Agregar al carrito")])])])]):t._e()},a=[],n=r(7906),s=r(6198),d=r(3019),i=r(4120),c=r(4665),u={name:"producto-detalle",created:function(){this.getProduct()},mounted:function(){this.cantidad=this.getCantProd(this.productId)},data:function(){return{cantidad:1,productId:this.$route.params.id,producto:{}}},methods:(0,d.Z)((0,d.Z)({},(0,c.nv)("cart",["toAddToCart"])),{},{agregarAlCarrito:function(){var t=(0,d.Z)((0,d.Z)({},this.producto),{},{cantidad:this.cantidad});this.toAddToCart(t),this.$router.push("/"),this.cantidad=1},sumar:function(){this.cantidad++},restar:function(){this.cantidad--,this.cantidad<0&&(this.cantidad=1)},closeDetalle:function(){this.$router.push("/")},getProduct:function(){var t=this;return(0,s.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.producto=t.getProductById(t.productId),t.product){e.next=5;break}return e.next=4,i.Z.getProductById(t.productId);case 4:t.producto=e.sent;case 5:case"end":return e.stop()}}),e)})))()}}),computed:(0,d.Z)((0,d.Z)((0,d.Z)({},(0,c.Se)("cart",["getCantProd"])),(0,c.Se)(["getProductById"])),{},{product:function(){return this.getProductById(this.productId)}})},l=u,h=r(1001),p=(0,h.Z)(l,o,a,!1,null,"b002914c",null),g=p.exports}}]);
//# sourceMappingURL=931-legacy.c706ba37.js.map