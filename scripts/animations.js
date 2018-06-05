$(function(){
    
    $("#content-wrapper").hide()
    $('#in-icon').bind("click", function () {
        $("#content-wrapper").show()
        $(this).hide().parent().slideUp(700);
    });
    $(".title").click(function(){ 
        goToByScroll(this.id)
        $(this).next('[data-content="wrapper"]').slideToggle()
    })  
    //inputy
    $(".form-element").append("<div class='input-outline' ></div>");
    $(".form-element").focusin(function(){
        $(this).find(".input-outline").animate({width:'100%'},250)
    })
    $(".form-element").focusout(function(){
        $(this).find(".input-outline").animate({width:'0%'})
    })
    //projectinfo
    $(".fa-info-circle").hover(function(){
        $(".projects-info").css({display:'inline'})
    },function(){
        $(".projects-info").css({display:'none'})
    })
    //technologie
    $(".tech").each(function(){
        let tech_name = $(this).data("tech")
        $(this).append(`<div class='tech-name' > ${tech_name} </div>`)
    })
    $(".tech").hover(function(){
        if($(this).index()%2!=0){ $(this).find(".tech-name").css({"background-color":"#333"}) }
        $(this).find(".tech-name").stop().slideToggle({duration:300})
    },function(){
        $(this).find(".tech-name").stop().slideToggle({duration:300})
    })
    //media
    let medias = [
        {class:".facebook",color:"#4267b2"},
        {class:".linkedin",color:"#0077b5"},
        {class:".github",color:"#24292e"}
    ]

    $(".mediax").append(`<div class='background-oly' ></div>`)
    
    
    medias.forEach(elem=>{
        $(elem.class).find(".background-oly").css({"background-color":elem.color})
        $(`.mediax${elem.class}`).css({color:elem.color})
        $(`.mediax${elem.class}`).hover(function(){
            $(this).find(".background-oly").animate({
                height:"100%",
            },{duration:200,queue:false})

        },function(){
            $(this).find(".background-oly").animate({
                height:"3%",
                color:elem.color
            },{duration:200,queue:false})
        })
    })
})
function goToByScroll(id,callback){
    let scrollValue = $("#"+id).offset().top;
    $('html,body').animate({scrollTop: scrollValue},'slow');
  }