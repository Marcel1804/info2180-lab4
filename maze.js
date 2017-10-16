//the events handler for the maze
window.onload = function(){

//keep of user process
let session=0;

//start user session
let start =document.getElementById("start");
     start.addEventListener("mouseover",function(){
      if(status===0)
      updates.textContent=" Start";
     session = 1;
     });

//give the user instructions on how to continue
function con() {
          updates.textContent=" Click on 'S' to reset the maze";
  }

// give status message
let updates = document.getElementById("status");

//change the colour of one section(top-left) of the maze
let colourChange = document.getElementById("boundary1");
    colourChange.addEventListener("mouseover",function (){
    colourChange.classList.add("youlose");});

// keep track if the user touch the wall
let status=0;

//make all boundaries glow red on hover
let areas=document.querySelectorAll(".boundary");
    for(let j=0; j<6;j++)
        areas[j].addEventListener("mouseover",function () {
        for(let i=0; i<6;i++)
        {
          areas[i].classList.add("youlose");
        }
        status=1;
        updates.textContent="You lose! ";
        setTimeout(con,1000);
        });


//congratulate the user when them reach the end
let end = document.getElementById("end");
    end.addEventListener("mouseover",function (){
    if(status===0){
      updates.textContent="You win!";
      setTimeout(con,2000);
    }
    });

// reset the game
let resetMaze = document.getElementById("start");
    resetMaze.addEventListener("click",function () {
    for(let i=0; i<6;i++)
         {
           areas[i].classList.remove("youlose");
         }
         status=0;
         session=0;
         updates.textContent="Move your mouse over the 'S' to begin";

       });



}
//load on the html file to full load before run
