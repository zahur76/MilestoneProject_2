$(document).ready(function(){

    // Global Variables
    let newArray = [];
    let click = 0;
    let checkArray = [];
    let totalTurns = 0;
    let totalMatch = 0;
    
    // initilise home page
    gameStart();

    // Restart button to initialise all variables
    $("#reset").click(function(){                
        $("#turns").html("<h1>" + "0" + "</h1>");        
        let i;
        // Resets all classes
        for(i=1;i<=16;i++){
            $("#char_"+i).removeClass($("#char_"+i).attr("class")).addClass("card").removeAttr("style");;
        }
        totalMatch = 0;
        totalTurns = 0;
        click = 0;
        checkArray = [];
        characterArray = [];
        newArray = [];
        scroll();
        $("#gameEnd").hide();
        $("#levelSelect").show();
        $(".medium").show();
        $(".hard").show();
        for(let i=1; i<=4; i++){
            $("#data"+i).html("");
        }                        
    });

    // Replay button on Game end modal to initialise all variables
    $("#reset2").click(function(){                
        $("#turns").html("<h1>" + "0" + "</h1>");        
        let i;
        // Resets all classes
        for(i=1;i<=16;i++){
            $("#char_"+i).removeClass($("#char_"+i).attr("class")).addClass("card").removeAttr("style");
        }
        totalMatch = 0;
        totalTurns = 0;
        click = 0;
        checkArray = [];
        characterArray = [];
        newArray = [];
        scroll();
        $("#levelSelect").show();
        $("#gameEnd").hide();
        $(".medium").show();
        $(".hard").show();
        for(let i=1; i<=4; i++){
            $("#data"+i).html("");
        }                        
    });
    
    // function to show level select modal
    $("#start").one("click", function(){
        $("#reset").show("slow");
        $(".grid").show(1000); 
        $(".score").show("slow");
        $("#sound").show("slow");
        $(".fa-galactic-senate").hide();          
        document.getElementById("myAudio1").play();
        $("#levelSelect").show();
    });

    // Removes level select Modal and starts game    
    $("#level").click(function(){
        if($("input[type=radio][name=level]:checked").length===1){
            scroll();
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
    
    //Sound on/off button control function
    let sound = true;   
    $("#sound").click(function(){        
        if(sound===true){    
            sound= false;            
            $("#sound i").removeClass("fa-volume-up").addClass("fa-volume-mute");
            for (let i=2; i<=4; i++){
                 $("#myAudio" + i).attr("src","assets/sound/silence.mp3");
            }                      
        }
        else{
            sound= true;            
            $("#sound i").removeClass("fa-volume-mute").addClass("fa-volume-up");
            $("#myAudio2").attr("src","assets/sound/force-strong.mp3");
            $("#myAudio3").attr("src","assets/sound/most-impressive.mp3");
            $("#myAudio4").attr("src","assets/sound/sure.mp3");
        }
    });

    // Scroll screen to specific view point
    function scroll(){
        setTimeout(function(){
            window.scrollTo({
            top:200,
            left: 0,
            behavior: 'smooth',
            });
        },500);        
    }

    // Initial display settings for Home page
    function gameStart(){
        $(".grid").hide();
        $("#reset").hide();
        $(".score").hide();
        $("#sound").hide();

        for(let i=0; i<=4; i++){
            $("#start").fadeOut(500);
            $("#start").fadeIn(200);
        }
    }

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

    // Checks for card match 
    function matchCheck(array){        
        if (array[0]===array[1]){
            totalTurns += 1;
            $("#turns").html("<h1>" + totalTurns + "</h1>");                       
            totalMatch += 1;            
            if(totalMatch===(newArray.length)/2){
                // All cards have been matched and game ends
                document.getElementById("myAudio3").play();                
                funFacts();                
                $("#gameEnd").show();
                $("#finish").html("You took " + totalTurns + " turns to complete!");                                              
            }            
            else{
                // Not all cards have been matched
                document.getElementById("myAudio2").play();                                    
                $("."+ array[0]).off("click");               
                click = 0;          
                checkArray = [];         
            } 
        }        
        else if(array[0]!==array[1]){
            // Cards chosen are not the same
            totalTurns += 1;
            document.getElementById("myAudio4").play();
            $("#turns").html("<h1>" + totalTurns + "</h1>");                          
            // Return the card class and hide character class     
            setTimeout(function(){                                   
            $("."+ array[0]).addClass("card").removeAttr("style");;
            $("."+ array[1]).addClass("card").removeAttr("style");;           
            checkArray = []; 
            click = 0;                                
            }, 2000);                        
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
            if(click<=1 &&(($(this).attr("class")).length)>=6){
                click += 1;
                // Remove card class then add remaining class to an Array for comparison            
                $(this).removeClass("card");
                // Insert image to card              
                let remainingClass = $(this).attr("class");
                $(this).css("background-image", "url('assets/images/"+remainingClass+".png')");                                  
                checkArray.push($(this).attr("class"));                
                if (click===2){
                // Run check to see if the cards match 
                matchCheck(checkArray);           
                }
            }
        });             
    }

    // Starwars API character select 
    function getData(url, cb) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200){
                cb(JSON.parse(this.responseText));                
            }
            // Code executed if status is not 200
            else if (this.readyState == 4 && this.status != 200){                
                $("#data1").html("Name: Luke Skywalker" );
                $("#data2").html("Height: 172");
                $("#data3").html("Mass: 77 ");
                $("#data4").html("Hair-colour: blond");
            }                                     
        };
        xhr.open("GET", url);
        xhr.send();
    }

    //Sends API data to HTML div
    function funFacts(){ 
        // Add loading bar gif before data received
        for(let i=1 ; i<=6; i++){
            $("#data" + i).prepend($('<img>',{id:'theImg',src:'assets/images/load.gif',alt:"loading bar"}));  
        }                   
        let randomNum = Math.floor(Math.random() * 80);
        getData("https://swapi.dev/api/people/"+randomNum+"/", function(data){            
            $("#data1").html("Name: " + data.name);
            $("#data2").html("Height: " + data.height);
            $("#data3").html("Mass: " + data.mass);
            $("#data4").html("Hair-colour: " + data.hair_color);            
        });
    }  
});