$(document).ready(function(){
    
    let newArray = [];
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

    // Shuffles Array 
    function shuffleArray(array){
        let len = array.length;
        for(let i=0; i<=len-1; i++){
        let rand = Math.floor((Math.random() * (array.length-1)) + 0);  
        newArray.push(array[rand]);
        array.splice(rand,1);        
        }
        return newArray;
    }   

    function game(){
        
        let level = $("input[type=radio][name=level]:checked").val();              
        gameArray(level);
        newArray = shuffleArray(characterArray); 
        console.log(newArray)       
    }

})