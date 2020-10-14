$(document).ready(function(){

    $(".char").one("click",function(){
        // Remove previous character info
        for(let i=1; i<=6; i++){
            $("#data"+i).html("");
        }          
        $("#character-info").show();
        funFacts($(this).attr("id"))
    })

    $("#reset").click(function(){
         $("#character-info").hide();                 
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
                $("#data1").html("Name: Luke Skywalker" );
                $("#data2").html("Height: 172");
                $("#data3").html("Mass: 77 ");
                $("#data4").html("Hair-colour: blond");
                $("#data5").html("Mass: 77 ");
                $("#data6").html("Hair-colour: blond");
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