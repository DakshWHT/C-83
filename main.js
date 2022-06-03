var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;

var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;

if(width < 992) { 
    document.getElementById("myCanvas").width = new_width; 
    document.getElementById("myCanvas").height = new_height; 
    document.body.style.overflow = "hidden"; 
}

canvas.addEventListener("touchstart", my_TS);
function my_TS(e){
    // AA 
    console.log("touchstart");
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("W_O_Line").value;
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
       console.log("touchmove");
       var C_P_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
       var C_P_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        color = document.getElementById("color").value;
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "  y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current position of x and y coordinates = ");
        console.log("x = " + C_P_of_touch_x + "y = " + C_P_of_touch_x);
        ctx.lineTo(C_P_of_touch_x, C_P_of_touch_y);
        ctx.stroke();

last_position_of_x = C_P_of_touch_x;
last_position_of_y = C_P_of_touch_y;
}


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    // AA 
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("W_O_Line").value;

   mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
       var C_P_of_mouse_x = e.clientX - canvas.offsetLeft;
       var C_P_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        color = document.getElementById("color").value;
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "  y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current position of x and y coordinates = ");
        console.log("x = " + C_P_of_mouse_x + "y = " + C_P_of_mouse_y);
        ctx.lineTo(C_P_of_mouse_x, C_P_of_mouse_y);
        ctx.stroke();
}

last_position_of_x = C_P_of_mouse_x;
last_position_of_y = C_P_of_mouse_y;

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){

    mouseEvent = "mouseup";

}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){

    mouseEvent = "mouseleave";
}

function clearArea(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}