// 0: rock 1: paper 2: scissors
const play = document.getElementById("play");
const choice = document.getElementById("choice");
const result = document.getElementById("result");

const imageMatch = document.getElementById("imageMatch");

function randomMove()
{
  return Math.floor(Math.random() * (2 - 0 + 1)) + 0;
}

function game()
{
  let CPUMove = randomMove();
  let status="NONE";
  if(CPUMove == choice.value)
  {
    status = "DRAW";
  }
  else
  {
      switch(choice.value) {
        case "0":
          status = checkRock(CPUMove);
          break;
       case "1":
          status = checkPaper(CPUMove);
          break;
       case "2":
          status = checkScissors(CPUMove);
          break;
      default:
          status = "LOST";
          break;
    }
  }
  result.textContent = status;
  switch(status)
  {
    case "WON":
      imageMatch.setAttribute("src", "./won.png");
    case "LOST":
      imageMatch.setAttribute("src", "./lost.png");
    case "DRAW":
       imageMatch.setAttribute("src", "./draw.png");
  }          
}

function checkScissors(CPUMove)
{
    if(CPUMove == 1)
    {
      return "WON";
    }
    return "LOST";
}

function checkPaper(CPUMove)
{
    if(CPUMove == 0)
    {
      return "WON";
    }
    return "LOST";
}

function checkRock(CPUMove)
{
    if(CPUMove == 2)
    {
      return "WON";
    }
    return "LOST";
}

play.addEventListener("click", game);
