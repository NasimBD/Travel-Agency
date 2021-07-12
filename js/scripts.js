$(document).ready(function () {

    $('.how-prefer-item').each(function (itemInd, item) {
        $(this).hover(function () {
        })
    })


    var leftBase = 3 * 5.555;
    var leftBaseHover = 5.555;
    var $howPreferItem = $('.how-prefer-item');
    var howPreferItemLen = $howPreferItem.length;

    
    function initialLeft() {        //sets initial left position 
        $howPreferItem.css('left', function (i, cV) {
            return i * leftBase + '%';
        })
    }
    initialLeft()


    
    $howPreferItem.hover(function () { 
            var indx = $('.how-prefer-item').index(this);
            var nthChild = indx + 1
            
            $howPreferItem.each(function (itemInd, item) {
                if (itemInd <= indx) {
                    $(item).css({
                        left: leftBaseHover * itemInd + '%'
                    });
                } else if (itemInd > indx) {
                    $(item).css({
                        left: (100 - leftBaseHover * (howPreferItemLen - itemInd)) + '%'
                    });
                } 
            })
        }
     ,
        initialLeft
    )

// CLOSE A TOGGLE MENU WITH AN OUTSIDE CLICK
 $(document).mouseup(function (evnt) {
     var goalEle = $('.menu-items')
    if(!$('.menu-button').is(evnt.target) && !goalEle.is(evnt.target) && goalEle.has(evnt.target).length === 0){
        $('.menu-button').prop('checked',false);
    }
 })





// elevator
    $(".menu-items a").click(function(evnt){
        evnt.preventDefault(); 
        $("body , html").animate({scrollTop: $(this.hash).offset().top}, 1000)
    })


    $(window).scroll(function(){
        if($(window).scrollTop() > 400 && $(window).width() >= 769){
            $(".elevator").fadeIn()
        }else{
            $(".elevator").fadeOut()
        }
    });


    $(".elevator").click(function(){
        $("body , html").animate({scrollTop:0} , 1000)
    })



// nav.primary layout after scrolling a definite distance:
$(window).scroll(function () {
    if($('html,body').scrollTop()>100){
        if($(window).width() >= 992){
            $('.primary').addClass('primaryOnScroll').find('.logoContainer').addClass('logoContainerScroll');
        }
    }else{
        $('.primary').removeClass('primaryOnScroll').find('.logoContainer').removeClass('logoContainerScroll');
    }
})

}) 
