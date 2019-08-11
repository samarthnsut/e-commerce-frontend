
$(".category").hide();



var menu= document.querySelectorAll("#navbar a");

$.each(menu,function(index,value){

    $(value).click(function(event){
        event.preventDefault();
        targetID=this.textContent.trim().toLowerCase()
        temp = targetID.split(" ")
        targetID=temp[0];
        var target=document.getElementById(targetID)
        console.log(target)
         
        if(targetID=="men")
        $("#men").show();


        var interval=setInterval(function(){
            var cord = target.getBoundingClientRect()
            if(cord.top<=0)
            {clearInterval(interval)
            return;
        }
        window.scrollBy(0,20);
        },5)
        
    })
})

$("#men-head").click(function(){
    $("#men").hide();

})
$(".press").click(function(){
    alert("sorry!!!!!   product not available")
})



