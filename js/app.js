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
           var list = $(".skills li");
           var visibleImage = 1;

           list.eq(visibleImage).show();

           left.on("click", function(event){
               var firstChild = $(".container ul > li:first-child");

               firstChild.appendTo(firstChild.parent("ul"));

               list.eq(visibleImage).hide(0);
               visibleImage++;
               if(visibleImage >= list.length){
                   visibleImage = 0;
               }
               list.eq(visibleImage).show(0);
           });

           right.on("click",function(event){
               var lastChild = $(".container ul > li:last-child");
               lastChild.prependTo(lastChild.parent("ul"));

               list.eq(visibleImage).hide(0);
               visibleImage--;
               if(visibleImage < 0){
                   visibleImage = list.length-1;
               }
               list.eq(visibleImage).show(0);
           });
       }

       function autoSlide(){
           var visibleImage = 0;
           var quotations = $(".testimonials .images li");
           var circles = $(".testimonials .slider li");

           quotations.eq(visibleImage).show();
           circles.eq(visibleImage).addClass("fulfill");

           var slide = function(){
               quotations.eq(visibleImage).hide(0);
               circles.eq(visibleImage).removeClass("fulfill");
               visibleImage++;
               if(visibleImage >= quotations.length){
                   visibleImage = 0;
               }
               quotations.eq(visibleImage).show(0);
               circles.eq(visibleImage).addClass("fulfill");
           };

           setInterval(slide, 3000);
       }

       function watchMore(){
           var hiddenRows = $(".hidden");
           var more = $(".more");

           more.on("click", function(event){
               for(var i = 0; i < 3; i++){
                   hiddenRows.eq(i).fadeIn(1000).removeClass("hidden");
               }
               hiddenRows = $(".hidden");
           });
       }

       function showPicture(){

           $(".lightBoxTrigger").on("click", function(event) {
               var image_src = $(this).siblings("img:first-of-type").attr("src");
               var x;

               if ($('#lightbox').length > 0) {
                   $('#content').html('<img src="' + image_src + '" />');
                   $('#lightbox').show();
               }

               else {
                   var lightbox =
                       '<div id="lightbox">' +
                       '<button class="x">X</button>' +
                       '<div id="content">' +
                       '<img src="' + image_src +'" />' +
                       '</div>' +
                       '</div>';
                   $('body').append(lightbox);
                   x = $("button.x");
               }
               if(x.length !== 0) {
                   console.log(x);
                   x.click(function (event) {
                       $('#lightbox').hide();
                   });
               }
           });
       }

       return {
           sticky:sticky,
           slider:slider,
           autoSlide:autoSlide,
           watchMore:watchMore,
           showPicture:showPicture
       }
   };
    var app = new Application();
    app.sticky();
    app.slider();
    app.autoSlide();
    app.watchMore();
    app.showPicture();
});