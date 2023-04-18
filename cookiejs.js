let cookies = 0;
let text = `${cookies} cookies`;
document.querySelector(".txt").innerHTML = text;

let cookieclick = document.querySelector(".cookieimg");
cookieclick.addEventListener("click", function(){
    cookieclick.style.transform = "scale(2)";
    cookies += 1 ;
    let text = `${cookies} cookies`;
    document.querySelector(".txt").innerHTML = text;
    cookieclick.style.transform="scale(1)";
});



