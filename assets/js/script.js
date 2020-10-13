$(document).ready(function(){

    // Global Variables
    let newArray = [];
    let click = 0;
    let checkArray = []; 
    
    // function to show level select modal
    $("#start").one("click", function(){
        $("#levelSelect").show();
    })

    // function to remove level select modal
    // Removes level select Modal and starts game    
    $("#level").click(function(){
        if($("input[type=radio][name=level]:checked").length===1){
            $("#levelSelect").hide();
            $("#start").html("<h5>"+"Match the cards!"+"</h5>");          
            game();            
        }
        else{
            for(let i=0; i<=5; i++){
                $(".choose").fadeOut(300);
                $(".choose").fadeIn(300);
            }           
        }      
    });    

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
    
    // Add character class to elements
    function characterClass(){             
        for (let i=1; i<newArray.length+1; i++){
            $("#char_" + i).addClass(newArray[i-1]);                       
        }
    }

    function game(){        
        let level = $("input[type=radio][name=level]:checked").val();
        // Define character array based on level selected               
        gameArray(level);
        // Shuffle character array 
        newArray = shuffleArray(characterArray);
        // Assign shuffled array's character to a specific div               
        characterClass();
        $(".card").click(function(){
            // Allow cards to be clicked under certain conditions
            if(click<=1){
                click += 1;
                // Remove card class then add then add remaining class to an Array for comparison            
                $(this).removeClass("card");
                console.log($(this).removeClass("card"));                     
                checkArray.push($(this).attr("class"));                
                if (click===2){
                // Run check to see if the cards match 
                matchCheck(checkArray);           
                }
            }
        });             
    }
})