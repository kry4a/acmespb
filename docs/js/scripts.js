$(function (){
  console.log('init');


  $('.select').click(function(e){
    $(this).toggleClass('select--active');
  });

  $('.navbar__toggler').click(function(e){
    var target = $(this).data('target');
    $('#'+target).toggleClass('nav--active');
  });

  VK.Widgets.Group("vk_groups", {mode: 1, width: "173", height: "170", color1: "FFFFFF", color2: "2B587A", color3: "5B7FA6"}, 21248567);
});
