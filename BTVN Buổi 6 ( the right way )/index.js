// Tạo 1 var có 3 biến : Táo, Chuối và Xoài
var gioHang = {
    apple:0,
    melon:0,
    mango:0 ,
}

// Làm function cho button 
function clickME1() {
    gioHang.apple ++
    console.log(gioHang)
}

function clickME2() {
    gioHang.melon ++
    console.log(gioHang)
}

function clickME3() {
    gioHang.mango ++
    console.log(gioHang)
}


var myString = JSON.stringify(gioHang);
localStorage.setItem("user",myString);
var a = localStorage.getItem('user');
var newUser = JSON.parse(a);
console.log(newUser.apple);
