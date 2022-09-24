function clickME1() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount1 = Number(localStorage.clickcount1)+1;
      } else {
        localStorage.clickcount1 = 1;
      }
      document.getElementById("result1").innerHTML = "Bạn đã mua tổng cộng : " + localStorage.clickcount1 + " apple.";
    }
  }
  function clickME2() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount2 = Number(localStorage.clickcount2)+1;
      } else {
        localStorage.clickcount2 = 1;
      }
      document.getElementById("result2").innerHTML = "Bạn đã mua tổng cộng :  " + localStorage.clickcount2 + " melon.";
    }
  }
  function clickME3() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount3 = Number(localStorage.clickcount3)+1;
      } else {
        localStorage.clickcount3 = 1;
      }
      document.getElementById("result3").innerHTML = "Bạn đã mua tổng cộng :  " + localStorage.clickcount3 + " mango.";
    }
  }