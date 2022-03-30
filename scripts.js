
    $("#aman2").click(()=>{
        $("#aman1").show();
    })

 let a=document.getElementById("aman1");


    
    // $("#aman3").click((e)=>{
    //    e.preventDefault();

    // })

    $(window).click((e)=>{
        if(e.target==a){
            $("#aman1").hide();
        }
    })
