$(document).ready(function(){

    let click = 0;

    $(".char").click(function(){
        if(click===0){
            click += 1;
            // Remove previous character info
            for(let i=1; i<=6; i++){
                $("#data"+i).html("");
            }
            // Add image icon to modal
            $(this).removeClass("char");
            let image = $(this).attr("class");        
            $(".myImage img").attr("src","assets/images/" + image +".png");
            $(".myImage img").attr("alt", image);           
            $("#character-info").show();
            funFacts($(this).attr("id"));                       
        }        
    });

    $("#reset").click(function(){
         $("#character-info").hide();
         click = 0;                 
    });
    
    // Starwars API character select 
    function getData(url, cb) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200){
                cb(JSON.parse(this.responseText));                
            }
            // Code executed if status is not 200
            else if (this.readyState == 4 && this.status != 200){                
                $("#data1").html("Name: Data unavailable" );
                $("#data2").html("Height: Data unavailable");
                $("#data3").html("Mass: Data unavailable");
                $("#data4").html("Hair-colour: Data unavailable");
                $("#data5").html("Eye colour: Data unavailable");
                $("#data6").html("Birth year: Data unavailable");
            }                                     
        };
        xhr.open("GET", url);
        xhr.send();
    }

    //Sends API data to HTML div
    function funFacts(num){            
        getData("https://ci-swapi.herokuapp.com/api/people/"+num+"/", function(data){            
            $("#data1").html("Name: " + data.name);
            $("#data2").html("Height: " + data.height);
            $("#data3").html("Mass: " + data.mass);
            $("#data4").html("Hair-colour: " + data.hair_color); 
            $("#data5").html("Eye Colour: " + data.eye_color);
            $("#data6").html("Birth year: " + data.birth_year);            
        });
    }    
});