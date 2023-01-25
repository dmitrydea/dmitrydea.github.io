jQuery(document).ready(function(){  
  jQuery('.go-connection').click(function(e){
    e.preventDefault();
    jQuery('#ct-newsletter-popup').fadeIn();
  });
  jQuery('.go-buy').click(function(e){
    e.preventDefault();
    jQuery('#ct-buy-popup').fadeIn();
  });
  jQuery('.go-happy').click(function(e){
    e.preventDefault();
    jQuery('#ct-happy-popup').fadeIn();
  });
  jQuery('#ct-buy-popup .ct-newsletter-close, #ct-buy-popup .ct-newsletter-hide span').click(function(){
    jQuery('#ct-buy-popup').fadeOut();
  });
  jQuery('#ct-newsletter-popup .ct-newsletter-close, #ct-newsletter-popup .ct-newsletter-hide span').click(function(){
    jQuery('#ct-newsletter-popup').fadeOut();
  });
  jQuery('#ct-happy-popup .ct-newsletter-close, #ct-happy-popup .ct-newsletter-hide span').click(function(){
    jQuery('#ct-happy-popup').fadeOut();
  });
  jQuery('[data-fancybox="gallery"]').fancybox({
    loop: true
  });
  jQuery('.grid-item-inner').click(function(e){
    e.preventDefault();
    jQuery(this).find("a").click();
  });
  //
}); 