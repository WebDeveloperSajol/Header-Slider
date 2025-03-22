$.fn.mySliderPlugin=function(){
    var fullScreenSection='<section class="fullScreen" hidden><i class="fas fa-solid fa-chevron-left" id="prevIcon"></i><img src="" id="maximizedImg" alt=""><i class="fas fa-solid fa-chevron-right" id="nextIcon"></i><i class="fa fa-times" aria-hidden="true" id="cancelIcon"></i></section>';
    
    $(this).parent().append(fullScreenSection);
    $(this).addClass("imagesSec");

    /////////////// events on this slider plugin ///////////////

    $("img").on("click",function(){
    $("#maximizedImg").attr("src",$(this).attr("src"));
    $(".fullScreen").fadeIn(200).css("display","flex");
    });
    
    
    $("#nextIcon").on("click",function(e){
    // e.stopPropagation();  //and remove the if statement in fullScreen event 
    var nextImg = $("[src ='"+$("#maximizedImg").attr("src")+"']").next().attr("src");

    if(nextImg ==undefined){
        nextImg=$("[src ='"+$("#maximizedImg").attr("src")+"']").siblings().first().attr("src");
    }
    $("#maximizedImg").fadeTo(200,0.50, function() {
        $('#maximizedImg').attr("src",nextImg);
        $('#maximizedImg').fadeTo(200,1);
    });
    })
    
    $("#prevIcon").on("click",function(e){
    var prevImg = $("[src ='"+$("#maximizedImg").attr("src")+"']").prev().attr("src");

    if(prevImg ==undefined){
        console.log($("[src ='"+$("#maximizedImg").attr("src")+"']").siblings());
        prevImg=$("[src ='"+$("#maximizedImg").attr("src")+"']").siblings().not("i").last().attr("src");
    }
    $("#maximizedImg").fadeTo(200,0.50, function() {
        $('#maximizedImg').attr("src",prevImg);
        $('#maximizedImg').fadeTo(200,1);
    });
    })


    $(".fullScreen").on("click",function(e){
    if($(e.target)[0] != $("#nextIcon")[0]  &&  $(e.target)[0] != $("#prevIcon")[0]){
        $(".fullScreen").fadeOut(200)
    }
    });


    $("#selectRandom").on("click",function(){
        var listOfImgs = $("img").not("#maximizedImg");
        var randomImg = listOfImgs[Math.floor(Math.random()*(listOfImgs.length))];
        
        $("#maximizedImg").attr("src",$(randomImg).attr("src"));
        $(".fullScreen").fadeIn(200).css("display","flex");
    });
}

$(".useSliderPlugin").mySliderPlugin();
