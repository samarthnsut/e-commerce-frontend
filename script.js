
$(".category").hide();



var menu= document.querySelectorAll("#navbar a");

for(var i=0;i<menu.length;i++)
{
    $(menu[i]).click(function(event){
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
        window.scrollBy(0,50);
        },20)
        
    })
}




