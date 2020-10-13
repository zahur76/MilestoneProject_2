$(document).ready(function(){
    

    // function to show level select modal
    $("#start").click(function(){
        $("#levelSelect").show();
    })

    // function to remove level select modal
    $("#level").click(function(){
        $("#levelSelect").hide()
        game()
    })    

    // Defines characterArray depending on level selected
    function gameArray(level){        
        let mainArray = ["yoda","yoda","vader","vader","luke","luke","r2","r2","solo","solo","cpo","cpo","boba","boba","chewy","chewy"];             
        if(level==="easy"){                
                characterArray = mainArray.splice(0,8);
                $(".medium").hide("slow"); 
                $(".hard").hide("slow");                
        }
            else if(level==="medium"){
                characterArray = mainArray.splice(0,12);
                $(".hard").hide("slow");                
        }
            else if(level==="hard"){
                characterArray = mainArray.splice(0,16);                               
        }         
    }

    function game(){
        let level = $("input[type=radio][name=level]:checked").val(); 
        console.log($("input[type=radio][name=level]:checked").val())       
        gameArray(level);
    }

})