document.getElementById("lefteye") .style.backgroundColor= "purple";
document.getElementById("head") .style.transform= "rotate(15deg)";
//Put a 2-pixel-wide, solid black border around his body
document.getElementById("body") .style.border= "2px black solid";
//Round the corners of his mouth
document.getElementById("mouth").style.borderRadius = "4px";
//Put yellow dots around his right eye
document.getElementById("righteye").style.border= "4px yellow dotted";
//Change his left arm's color.
document.getElementById("leftarm").style.backgroundColor= "#FF00FF";
//Change the text color.
document.getElementById("body").style.color= "#FF0000";
//Give Douglas hair.
document.getElementById("head").style.borderTop= "5px black solid";
//Tilt Douglas's head to the other Side.
document.getElementById("head") .style.transform= "rotate(-15deg)";
//Make Douglas's nose round.
document.getElementById("nose").style.borderRadius= "50%";
//Make Douglas's right arm green.
document.getElementById("rightarm").style.backgroundColor= "#35DE1F";
//Make Douglas,s lips pink.
document.getElementById("mouth").style.backgroundColor= "#DE1FD1";
//moving the right eye
let rightEye= document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);
 function moveUpDown(e) {
let robotPart= e.target;
let top= 0;
let id= setInterval(frame,10) 
// draw every 10ms
 function frame() {
robotPart.style.top= top + '%';
top++;
if(top === 20) {
clearInterval(id);
    }
  }
}
//Moving the left arm
let leftArm= document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);
function moveRightLeft(e) {
let robotPart= e.target;
let left= 0;
let id= setInterval(frame, 10)
function frame () {
robotPart.style.left= left + '%';
left++;
if (left===70){
clearInterval(id);
  }
 }
}
//moving the left eye
let leftEye = document.getElementById("lefteye");
leftEye.addEventListener("click", moveUpDown);
//moving the right arm
let rightArm= document.getElementById("rightarm");
rightArm.addEventListener("click", moveLeftRight);
function moveLeftRight(e) {
let robotPart= e.target;
let right= 0;
let id= setInterval(frame, 10)
function frame () {
robotPart.style.right= right + '%';
right++;
if (right===70){
clearInterval(id);
  }
 }
}
