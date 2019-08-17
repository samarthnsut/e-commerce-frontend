
$(".category").hide();



var menu= document.querySelectorAll("#navbar a");

$.each(menu,function(index,value){

    $(value).click(function(event){
        event.preventDefault();
        targetID=this.textContent.trim().toLowerCase()
        temp = targetID.split(" ")
        targetID=temp[0];
        console.log(targetID)
        var target=document.getElementById(targetID)
        console.log(target)
         
        if(targetID=="men")
        $("#men").show();
        else if(targetID== 'women')
        $('#women').show();
        else if(targetID=="kids")
        $("#kids").show();
        else if(targetID=='electronics')
        $('#electronics').show();

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
$("#p-d1").click(function(){
    $.ajax({
 
        // The URL for the request
        url: "google.com",
     
        // The data to send (will be converted to a query string)
        data: {
            id: 123
        },
     
        // Whether this is a POST or GET request
        type: "GET",
     
        // The type of data we expect back
        dataType : "json",
    })
      // Code to run if the request succeeds (is done);
      // The response is passed to the function
      .done(function( json ) {
         $( "<h1>" ).text( json.title ).appendTo( "body" );
         $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
      })
      // Code to run if the request fails; the raw request and
      // status codes are passed to the function
      .fail(function( xhr, status, errorThrown ) {
        alert( "Sorry, there was a problem!" );
        console.log( "Error: " + errorThrown );
        console.log( "Status: " + status );
        console.dir( xhr );
      })
      // Code to run regardless of success or failure;
      .always(function( xhr, status ) {
        alert( "The request is complete!" );
      });
})


