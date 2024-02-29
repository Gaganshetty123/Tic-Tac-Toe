let boxes=document.querySelectorAll(".box");
let rest=document.querySelector("#resetbtn");
let msg=document.querySelector(".winner")
let m=document.querySelector("#msg");
let newbtn=document.querySelector("#newbtn");
let val=true;
let count=0;
const winPatterns = [
                     [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
                  ];

resetbtn.addEventListener("click",()=>{
   for(let box of boxes){
      box.innerText="";
      val=true;
      box.disabled=false;
      count=0;
   }
});
boxes.forEach((box) => {
   box.addEventListener("click",()=>{
      if(val===true){
         box.classList.remove("c");
         box.innerText="O";
         box.classList.remove("c");
         val=false;
      }
      else{
         val=true;
         box.innerText="X";
         box.classList.add("c");
      }
      count++;
      box.disabled=true;
      let wu=checkWinner();
      if(count==9&&!wu){
         m.innerText=`Game is Drawn`;
         msg.classList.remove("hide");
         for(let box of boxes){
            box.innerText="";
            box.disabled=false;
            count=0;
            val=true;
         }
      }
   });
});
const showWinner=(winn)=>{
   m.innerText=`Winner is ${winn}`;
   msg.classList.remove("hide");
   val=true;
   for(let box of boxes){
      box.disabled=true;
   }
   
};
const checkWinner = () => {
   for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
         if (pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            count=0;
            return true;
         }
      }
   }
   
};
newbtn.addEventListener("click",()=>{
   msg.classList.add("hide");
   for(let box of boxes){
      box.innerText="";
      box.disabled=false;
      val=true;
   }
});