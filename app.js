var app = (function app() {
   "use strict";
   var cakes = [], Cake, observer, i;
   window.onload = function start() {
       observer();
       // log(gateau1);
       // log(gateau1.miam());
   };

   observer = function observer() {

       byId("input_submit").onclick = function action1() {
            var counter = byId("cake_count").value, block;
           for (i=0; i < counter; i++) {
               cakes.push(new Cake());
               log(cakes);
               block = document.createElement("div");
               block.classList.add("block");
               block.text = "Cake";
               tools.appendChild(block);
               log(block);
           }
           cakes.push(new Cake());
       };
     };

       Cake = function Cake() {
       this.flavor = byId("cake_flavor").value || "default flavor";
   };

   }());
