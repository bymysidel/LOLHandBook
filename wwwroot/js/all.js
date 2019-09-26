$(document).ready(function(){
    setMargin();
    $(".slide_button").on("click",showSideBar);
});


function setMargin(){
    var regex = /(col-\w*-*\d+)/g;
    var classList = $(".sidebar").attr("class");
    var targetClass;
    while((temp = regex.exec(classList)) != null){
        console.log(regex.lastIndex);
        targetClass = temp[0];
    }
    $(".content").addClass(targetClass);
}


function convertBtnFunc(status){
    if(status == "show"){
        $(".slide_button").off().on("click",hideSideBar);
    }else{
        $(".slide_button").off().on("click",showSideBar);
    }
   
}

function showSideBar(){
   $(".sidebar").animate({left: '-=10em'},600,convertBtnFunc("show"));
}

function hideSideBar(){
    $(".sidebar").animate({left: '+=10em'},600,convertBtnFunc("hide"));
}
