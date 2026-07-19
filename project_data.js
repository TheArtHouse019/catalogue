var project_title = "Sanika Art House";

var mobile_no="+91 7888136525";
var contact_email = "thearthouse019@gmail.com";
var whatsapp_number = "+91 7888136525";
var youtube_link = "https://www.youtube.com/@sanikasArtHouse";
var insta_link = "https://instagram.com/the_arthouse___19";


$(document).ready(function(){
        $('.footer_mobile').html(mobile_no);
        $('.footer_email').html(contact_email);
        $('.footer_whatsapp').html(whatsapp_number);
        $('.footer_insta').attr('href',insta_link);
        $('.footer_youtube').attr('href',youtube_link);
});



