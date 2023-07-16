$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");       
    }
  });
});
$(document).ready(function(){
  $('#toggle').click(function(){
    $('#menu-toggle').toggleClass('hide');
    $('.link-mobile').toggleClass('show');    
    $('.button-Homeback i').fadeToggle('hideHome');     
  })
  $('#back').click(function(){
    $('#menu-toggle').toggleClass('hide');
    $('.link-mobile').toggleClass('show');    
    $('.button-Homeback i').fadeToggle('hideHome');
  })
  $('.colum1').click(function(){
    $('#menu-con1').toggleClass('hide');
    $('.link-menu-con1').toggleClass('show');    
    $('#button-Homeback1 i').fadeToggle('hideHome2');
  })
  $('#back1').click(function(){
    $('#menu-con1').toggleClass('hide');
    $('.link-menu-con1').toggleClass('show');    
    $('#button-Homeback1 i').fadeToggle('hideHome2');
  })
  $('.colum2').click(function(){
    $('#menu-con2').toggleClass('hide');
    $('.link-menu-con2').toggleClass('show');    
    $('#button-Homeback2 i').fadeToggle('hideHome2');
  })
  $('#back2').click(function(){
    $('#menu-con2').toggleClass('hide');
    $('.link-menu-con2').toggleClass('show');    
    $('#button-Homeback2 i').fadeToggle('hideHome2');
  })
  $('.colum3').click(function(){
    $('#menu-con3').toggleClass('hide');
    $('.link-menu-con3').toggleClass('show');    
    $('#button-Homeback3 i').fadeToggle('hideHome2');
  })
  $('#back3').click(function(){
    $('#menu-con3').toggleClass('hide');
    $('.link-menu-con3').toggleClass('show');    
    $('#button-Homeback3 i').fadeToggle('hideHome2');
  })
  $('.colum4').click(function(){
    $('#menu-con4').toggleClass('hide');
    $('.link-menu-con4').toggleClass('show');    
    $('#button-Homeback4 i').fadeToggle('hideHome2');
  })
  $('#back4').click(function(){
    $('#menu-con4').toggleClass('hide');
    $('.link-menu-con4').toggleClass('show');    
    $('#button-Homeback4 i').fadeToggle('hideHome2');
  })
  $('.colum5').click(function(){
    $('#menu-con5').toggleClass('hide');
    $('.link-menu-con5').toggleClass('show');    
    $('#button-Homeback5 i').fadeToggle('hideHome2');
  })
  $('#back5').click(function(){
    $('#menu-con5').toggleClass('hide');
    $('.link-menu-con5').toggleClass('show');    
    $('#button-Homeback5 i').fadeToggle('hideHome2');
  })
})