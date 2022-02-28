$(document).ready(function(){
    $(".display-4").hover(function()
     {
        $(this).css("color",

        "blue");
    
    
     },
     function(){
        $(this).css("color","black")
            ;

     
    
    
    
    });

});


function loadRepo(){

    const xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){

        if(this.readyState==4 && this.status == 200)
        results=JSON.parse(this.response.Text)
        ;
        document.getElementById("repo1")
        .innerHTML=results[0].name;
        }
        xhttp.open("GET","https://api.github.com/users/Mikaeel9000/repos",true);
        xhttp.send()
    }



    
   


    repoList
   repoList[0].name
