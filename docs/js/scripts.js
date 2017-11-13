$(function (){
  console.log('init');


  $('.select').click(function(e){
    $(this).toggleClass('select--active');
  });

  VK.Widgets.Group("vk_groups", {mode: 1, width: "185", height: "170", color1: "FFFFFF", color2: "2B587A", color3: "5B7FA6"}, 21248567);
});
