let count=0;
//Points
let R=[0,0,0]; //row-wise
let C=[0,0,0]; //column-wise
let D=[0,0]; //diagnol-wise

function color(index,cell) {  
  if(count++%2) {
    cell.style.backgroundColor="black";
    points(index,1);
  } else {
    cell.style.backgroundColor="white";
    points(index,-1);
  } 
    checkWin()
    cell.removeAttribute("onClick");
}

//checks for the winning case
function checkWin() {
  for(let i=0;i<3;i++) {
    if(R[i]===3||C[i]===3) {
      console.log("Black Wins");
      stop();
    }
    else if(R[i]===-3||C[i]===-3) {
      console.log("White Wins");  
      stop();
    }
  }
  if(D[0]===3 || D[1]===3) {
    console.log("Black Wins");
    stop();
  }
  else if(D[0]===-3 || D[1]===-3) {
    console.log("White Wins");
    stop();
  }
  else if(count===9) {
    console.log("Draw");
    stop();
  }
}

//awards points for each move
function points(index,point) {
  let i=index[0]
  let j=index[1];
  R[i-1]+=point,C[j-1]+=point;
  if(i+j===4)
    D[0]+=point;
  if(i===j)
    D[1]+=point;
 }

//reset
function reset() {
  window.location.reload();
}
//stop after result
function stop() {
  let cells=document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.removeAttribute('onclick')    
  });
}
//autoplay feature in progress