// Slide-in

jQuery(document).ready(function(){
    jQuery(".slide_in_2").click(function(){
        jQuery(".slide_in_2_section").toggleClass("show_form_2");
    });
});
	
	
jQuery(document).ready(function(){
    jQuery(".close_icon_2").click(function(){
        jQuery(".slide_in_2_section").removeClass("show_form_2");
    });
});

jQuery(document).ready(function(){
    jQuery(".slide_in_2").click(function(){
        jQuery(".slide_in_2_label_section").toggleClass("hide_label_slide_in_2");
    });
});

jQuery(document).ready(function(){
    jQuery(".close_icon_2").click(function(){
        jQuery(".slide_in_2_label_section").removeClass("hide_label_slide_in_2");
    });
});

jQuery(document).ready(function(){
    jQuery(".label_close_icon").click(function(){
        jQuery(".slide_in_2_label_section").toggleClass("hide_label_and_slide_in_2");
    });
});