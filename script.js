let botoncito = document.getElementById("botoncito"); 
let menu = document.getElementById("me");
botoncito.addEventListener("click", prueba); 

function prueba()
{
    if(menu.style.display == "none")
    {
        menu.style.display = "block";

    }
    else 
    {
        menu.style.display = "none";
    }
    
}