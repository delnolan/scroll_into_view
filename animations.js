jQuery(document).ready(function(){
    if(jQuery('.animate-this')){
        /**
         * Set how far above the bottom of the viewport that you want the animation to kick in.
         */
        var animation_offset = 50;


        var viewport_height = jQuery(window).height();

        function animateScroll(action_point , animate_position, animate_padding, this_thing){
            console.log(this_thing);
            if(action_point > animate_position){
                this_thing.addClass('animate-view');
                this_thing.css('padding-top' , animate_padding+'px');
            }
        }

        jQuery('.animate-this').each(function(){
            let animate_padding = parseInt(jQuery(this).css('padding-top'));
            let set_padding = animate_padding + 50;
            var animate_position = jQuery(this).offset().top;
            var this_thing = jQuery(this);

            jQuery(this).css('padding-top' , set_padding+'px');

            jQuery(window).on('scroll', function(){
                var viewport_scroll = jQuery(window).scrollTop();
                var viewport_scroll_bottom = viewport_scroll + viewport_height;
                var action_point = viewport_scroll_bottom - animation_offset;
                animateScroll(action_point , animate_position, animate_padding , this_thing)
            });

        });
    }
});