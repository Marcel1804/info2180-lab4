//the events handler for the maze
window.onload = function(){

//change the colour of one section(top-left) of the maze
let colourChange = document.getElementById("boundary1");
    colourChange.addEventListener("mouseover",function (){
    colourChange.classList.add("youlose");});
let status=0;

//make all boundaries glow red on hover
let areas=document.querySelectorAll(".boundary");
     areas[0].addEventListener("mouseover",function () {
       for(let i=1; i<6;i++)
       {
         areas[i].classList.add("youlose");
       }
       status=1;
     });
     
//congratulate the user when them reach the end
let end = document.getElementById("end");
    end.addEventListener("mouseover",function (){
    if(status===0)
    alert(" You win!");
    });

}
//load on the html file to full load before run
