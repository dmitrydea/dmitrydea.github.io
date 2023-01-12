jQuery(document).ready(function(){  
  jQuery('.go-connection').click(function(e){
    e.preventDefault();
    jQuery('#ct-newsletter-popup').fadeIn();
  });
  jQuery('.go-buy').click(function(e){
    e.preventDefault();
    jQuery('#ct-buy-popup').fadeIn();
  });
  jQuery('#ct-buy-popup .ct-newsletter-close, #ct-buy-popup .ct-newsletter-hide span').click(function(){
    jQuery('#ct-buy-popup').fadeOut();
  });
  jQuery('#ct-newsletter-popup .ct-newsletter-close, #ct-newsletter-popup .ct-newsletter-hide span').click(function(){
    jQuery('#ct-newsletter-popup').fadeOut();
  });
}); 