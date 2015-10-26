/**
 * Created by pc on 2015-10-22.
 */

$(function(){

   var Application = function(){

       function sticky() {
           var menu = $("nav");
           var lastTopPosition = 0;
           var section = $('[data-nav="navi"]');
           var links = $("nav a");

           $(window).scroll(function (event) {
               if(menu.hasClass("sticky") === false && $(this).scrollTop() > menu.offset().top){
                   lastTopPosition = menu.offset().top;
                   menu.addClass("sticky");
               }

               if(menu.hasClass("sticky") && $(this).scrollTop() < lastTopPosition){
                   menu.removeClass("sticky");
               }

               section.each(function(index){
                   if(index + 1 >= section.length){
                       if(section.eq(index).offset().top < $(window).scrollTop()) {
                           links.eq(index).addClass("active");
                       } else {
                           links.eq(index).removeClass("active");
                       }
                   } else {
                       if (section.eq(index).offset().top < $(window).scrollTop() &&
                           section.eq(index + 1).offset().top > $(window).scrollTop()) {
                           links.eq(index).addClass("active");
                       } else {
                           links.eq(index).removeClass("active");
                       }
                   }
               });
           });
       }

       function slider(){
           var left = $(".left");
           var right = $(".right");
           var list = $(".container ul");
           var elements = list.length;

           left.click(function(event){
               list.children(0).appendTo(list);
           });

           right.click(function(event){
                list.children(elements - 1).appendTo(list);
           });
       }

       return {
           sticky:sticky,
           slider:slider
       }
   };
    var app = new Application();
    app.sticky();
    //app.slider();

    function slider(){
        console.log("jestem w sliderze");
        var left = $(".left");
        var right = $(".right");
        var list = $(".container ul");
        var elements = list.length;

        //var firstChild = $(".container ul > li:first-child");
        //firstChild.appendTo(firstChild.parent("ul"));

        //var lastChild = $(".container ul > li:last-child");

        left.on("click" ,function(event){
            var firstChild = $(".container ul > li:first-child");
            firstChild.appendTo(firstChild.parent("ul"));
            console.log("lewy klik");
            //list.children(0).appendTo(list);
        });

        right.click(function(event){
            var lastChild = $(".container ul > li:last-child");
            lastChild.prependTo(lastChild.parent("ul"));
            console.log("Prawy klik");
            //list.children(elements - 1).appendTo(list);
        });
    }
    var slid = slider();
});