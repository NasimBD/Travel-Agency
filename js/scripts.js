$(document).ready(function () {

    $('.how-prefer-item').each(function (itemInd, item) {
        $(this).hover(function () {
        })
    })


    var leftBase = 3 * 5.555;
    var leftBaseHover = 5.555;
    var $howPreferItem = $('.how-prefer-item');
    var howPreferItemLen = $howPreferItem.length;

    
    function initialLeft() { //sets initial left position 
        $howPreferItem.css('left', function (i, cV) {
            //console.log( i*leftBase +'%')
            return i * leftBase + '%';
        })
    }
    initialLeft()


    
    $howPreferItem.hover(function () { //what happens on mouseenter and mouseleave p.168 Action
            var indx = $('.how-prefer-item').index(this);
            var nthChild = indx + 1 //typeof $('.how-prefer-item').index(this) -->number
            //console.log( nthChild);
            
            $howPreferItem.each(function (itemInd, item) {
                if (itemInd <= indx) {
                    $(item).css({
                        left: leftBaseHover * itemInd + '%'
                    });
                    //console.log(itemInd, leftBaseHover*itemInd+'%')
                } else if (itemInd > indx) {
                    $(item).css({
                        left: (100 - leftBaseHover * (howPreferItemLen - itemInd)) + '%'
                    });
                    //console.log(itemInd, (100 - leftBaseHover*(howPreferItemLen - itemInd))+'%')
                } //else if
            })//each
        }//mouseenter handler function end
     ,
        initialLeft //mouseleave handler function نباید اینجا () باشد 
    )//hover event end
//--------------------------------------------------------------


// CLOSE A TOGGLE MENU WITH AN OUTSIDE CLICK
 $(document).mouseup(function (evnt) {
     var goalEle = $('.menu-items') //I'm adding the first condition
    if(!$('.menu-button').is(evnt.target) && !goalEle.is(evnt.target) && goalEle.has(evnt.target).length === 0){
        $('.menu-button').prop('checked',false);
    }
 })
//.menu-items does not a child as .menu-button but due to the configuration,
//it's located under the button so we should take care of it.


//Another way:
// $(document).click(function (evnt) {
//     if($(evnt.target).closest('.menu').length === 0){
//         $('.menu-button').prop('checked',false); // to close .menu-items
//     }
// })


// Another less nice solution:
// $('.menu-items, .menu-items li').click(function (evnt) {
//     //evnt.stopPropagation();
// })
//
// $('main, footer, .slider-card').click(function () {
//     $('.menu-button').prop('checked',false);
// })
//Always locate nav outside the navigation so that later you can just close the menu
// just by $('main, footer').click... Sadly if you now add nav or anything that encompasses
//menu, when you click on .menu-button, it would simultaneously open and close and no effect...


//javascript way:
// document.addEventListener('mouseup', function(e) {
//     var container = document.getElementById('container');
//     if (!container.contains(e.target)) {
//         container.style.display = 'none';
//     }
// });
//--------------------------------------------------------------


// elevator from WebDesign_2\A.Daei_course\session_4\js\elevator
    $(".menu-items a").click(function(evnt){//just for Deals
        evnt.preventDefault(); //I added this
        $("body , html").animate({scrollTop: $(this.hash).offset().top}, 1000) // .hash Definitive js p.570 //me: works with html solely.
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

// OR Definitive js p.802
		// $('.elevator').click(function () {
		// 	window.scrollTo({
		// 		left:0,
		// 		top:0,
		// 		behavior :'smooth'
		// 	});
		// })
//--------------------------------------------------------------


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



}) //ready end

//hover(enterHandler, leaveHandler) p.168 Action
//hover(handler)
