let boxes=document.querySelectorAll("#k");
let resetbtn=document.querySelector("#btn");
let newbtn=document.querySelector("#nbtn");
let labl=document.querySelector("#msg");
let msg_container=document.querySelector(".msg-container");
let cont=document.querySelector(".cont");
let turnO = true;
let winpatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],];

boxes.forEach
(   (box) => 
    {
        box.addEventListener("click",()=>
        {
            if(turnO===true)
            {
                box.innerText="O";
                turnO=false;
            }
            else
            {
                box.innerText="X";
                turnO=true;
            }
            box.disabled=true;
            checkWinner();
        });
       
    }   
  
);
const enabl=()=>
{
    for(box of boxes){
    box.disabled=false;
    box.classList.add("color-white");
    box.innerText="";
    cont.classList.remove("hide1");
    }
}
const showwinner=(winner)=>
{
    labl.innerText=`congratulations , winner is ${winner}`;
    msg_container.classList.remove("hide");
    console.log("done");
    for(let box of boxes){
        box.disabled=true;
    }
    cont.classList.add("hide1");
};
const checkWinner=()=>
{
    for(let pattern of winpatterns)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" &&pos2!="" &&pos3!="")
        {
            if(pos1===pos2&&pos2===pos3)
            {
                showwinner(pos1);
            }
        }
    }
}
const resetbn =()=>
{
    turnO=true;
    enabl();
    cont.classList.remove("hide1");
    msg_container.classList.add("hide");
};

newbtn.addEventListener("click",resetbn);
resetbtn.addEventListener("click",resetbn);