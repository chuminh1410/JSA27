var count1 = 0;
var count2 = 0;
var count3 = 0;


var btn1 = document.getElementById("btn1");
var disp1 = document.getElementById("display1");

btn1.onclick = function () {
    count1++;
    disp1.innerHTML = "Bạn đã mua tổng cộng :  " + count1 + " apple."; 
}



var btn2 = document.getElementById("btn2");
var disp2 = document.getElementById("display2")

btn2.onclick = function () {
    count2++;
    disp2.innerHTML = "Bạn đã mua tổng cộng :  " + count2 + " melon."; 
}



var btn3 = document.getElementById("btn3");
var disp3 = document.getElementById("display3");

btn3.onclick = function () {
    count3++;
    disp3.innerHTML = "Bạn đã mua tổng cộng :  " + count3 + " mango."; 
}