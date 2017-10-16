//the events handler for the maze
window.onload = function(){

//change the colour of one section(top-left) of the maze
let colourChange = document.getElementById("boundary1");
    colourChange.addEventListener("mouseover",function (){
    colourChange.classList.add("youlose");});

//make all boundaries glow red on hover
let areas=document.querySelectorAll(".boundary");
     areas[0].addEventListener("mouseover",function () {
       for(let i=1; i<6;i++)
       {
         areas[i].classList.add("youlose");
       }
     });

}
//load on the html file to full load before run
