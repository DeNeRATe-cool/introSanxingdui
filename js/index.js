// 导航栏
// $('.nav ul li a').hover(function(){
//     $(this).addClass("active");
// },function(){
//     $(this).removeClass("active");
// });
$('.nav ul li').click(function(){
	$(this).addClass("active").siblings().removeClass('active');
	$('.cont').eq($(this).index()).addClass('selected').siblings().removeClass('selected');
});
//轮播图
if ($('.swiper-container').length > 0) {  
    var num = $('.gallery-top').find('.swiper-slide').length;  
    if (num > 3) {  
        var galleryTop = new Swiper('.gallery-top', {  
        	autoplay:{
        		delay:3000,
        	},
            loop: true, 
            // spaceBetween:10, 
            loopedSlides: num,  
            navigation: {  
                nextEl: '.swiper-button-next',  
                prevEl: '.swiper-button-prev',  
            }, 
        	disableOnInteraction:false, 
        });  
        var galleryThumbs = new Swiper('.gallery-thumbs', {  
            slidesPerView:5,  
            loop: true,  
            spaceBetween:10,
            loopedSlides: num,  
            centeredSlides: true,  
            slideToClickedSlide: true,  
        });  
    } else {  
        var galleryTop = new Swiper('.gallery-top', {
        	autoplay:{
        		delay:3000,
        	},
        	disableOnInteraction:false,
        	effect:'fade',  
        	loop: true,  
            loopedSlides:2,
            spaceBetween:10,
            navigation: {  
                nextEl: '.swiper-button-next',  
                prevEl: '.swiper-button-prev',  
            },  
        });  
        var galleryThumbs = new Swiper('.gallery-thumbs', {    
            loop: true,
            loopedSlides:2,   
            slidesPerView:2, 
            spaceBetween:10,
            slideToClickedSlide: true,
        	disableOnInteraction:false,
        });  
    }  
    galleryTop.controller.control = galleryThumbs;  
    galleryThumbs.controller.control = galleryTop;  
};


