$(document).ready(function(){
    // Handling the all posts filter toggling (start)

    let filterButtonClicked = false;

    $('.all-blog-posts-filter-btn').click(function(){
        filterButtonClicked = !filterButtonClicked;

        if(filterButtonClicked){
            $('.all-blog-posts-filter-menu-parent').fadeIn('slow');
            $(".all-blog-posts-filter-btn .all-blog-posts-filter-label-arrow").removeClass('fa-chevron-down');
            $(".all-blog-posts-filter-btn .all-blog-posts-filter-label-arrow").addClass('fa-chevron-up');
        }

        else{
            $('.all-blog-posts-filter-menu-parent').fadeOut('slow');
            $(".all-blog-posts-filter-btn .all-blog-posts-filter-label-arrow").addClass('fa-chevron-down');
            $(".all-blog-posts-filter-btn .all-blog-posts-filter-label-arrow").removeClass('fa-chevron-up');
        }
        
    });

    // Handling the all posts filter toggling (end)
})