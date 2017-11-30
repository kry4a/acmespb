$(function (){
  console.log('init');


  $('.select').click(function(e){
    $(this).toggleClass('select--active');
  });

  $('.navbar__toggler').click(function(e){
    var target = $(this).data('target');
    $('#'+target).toggleClass('nav--active');
  });


  function VK_Widget_Init(){
    $('#vk_groups').html('');
    var vk_width = $('.aside__item').width();
    
    VK.Widgets.Group("vk_groups", {mode: 0, width: vk_width, height: "170", color1: "FFFFFF", color2: "2B587A", color3: "5B7FA6"}, 21248567);
  };

  window.addEventListener('load', VK_Widget_Init, false);
  window.addEventListener('resize', VK_Widget_Init, false);


  if ($('.baron').length) {
    baron({
        root: '.baron',
        scroller: '.baron__scroller',
        bar: '.baron__bar',
        scrollingCls: '_scrolling',
        draggingCls: '_dragging'
    }).fix({
        elements: '.header__title',
        outside: 'header__title_state_fixed',
        before: 'header__title_position_top',
        after: 'header__title_position_bottom',
        clickable: true
    }).controls({
        // Element to be used as interactive track. Note: it could be different from 'track' param of baron.
        track: '.baron__track',
        forward: '.baron__down',
        backward: '.baron__up'
    });
  }
});
