//Dom Elements
const time = document.getElementById("time"),
  Ampm = document.getElementById("ampm"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

//show Am Pm
const showAmPm = true;

//show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12hr format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;
  Ampm.innerHTML = `${showAmPm ? amPm : ""}`;
  setTimeout(showTime, 1000);
}

//Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //morning
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    greeting.textContent = "Good Morning,";
    var morning = [
      "url('../img/morning1.jpg')",
      "url('../img/morning2.jpg')",
      "url('../img/morning.jpg')"
    ];
    var i = 0;
    function change() {
      document.body.style.backgroundImage = morning[i];
      if (i == 0) {
        document.body.style.color = "white";
      } else {
        document.body.style.color = "black";
      }
      i++;

      if (i > morning.length - 1) {
        i = 0;
      }
    }
    setInterval(change, 5000);
  } else if (hour <= 15) {
    //Afternoon
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon,";
    document.body.style.color = "white";
    var afternoon = [
      "url('../img/afternoon1.jpg')",
      "url('../img/afternoon2.jpg')",
      "url('../img/afternoon.jpg')"
    ];
    var i = 0;
    function change() {
      document.body.style.backgroundImage = afternoon[i];
      i++;

      if (i > afternoon.length - 1) {
        i = 0;
      }
    }
    setInterval(change, 5000);
  } else if (hour <= 19) {
    //Evening
    document.body.style.backgroundImage = "url('../img/evening.jpg')";
    greeting.textContent = "Good Evening,";
    var evening = [
      "url('../img/evening1.jpg')",
      "url('../img/evening2.jpg')",
      "url('../img/evening.jpg')"
    ];
    var i = 0;
    function change() {
      document.body.style.backgroundImage = evening[i];
      if (i == 2) {
        document.body.style.color = "black";
      } else {
        document.body.style.color = "white";
      }
      i++;

      if (i > evening.length - 1) {
        i = 0;
      }
    }
    setInterval(change, 5000);
  } else {
    //Night
    document.body.style.backgroundImage = "url('../img/night.jpg')";
    greeting.textContent = "Good Night,";
    document.body.style.color = "white";
    var night = [
      "url('../img/night1.jpg')",
      "url('../img/night2.jpg')",
      "url('../img/night.jpg')"
    ];
    var i = 0;
    function change() {
      document.body.style.backgroundImage = night[i];
      i++;

      if (i > night.length - 1) {
        i = 0;
      }
    }
    setInterval(change, 5000);
  }
}

//Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

//set Name
function setName(e) {
  if (e.type === "keypress") {
    //make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

//Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

//set Focus
function setFocus(e) {
  if (e.type === "keypress") {
    //make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//run
showTime();
setBgGreet();
getName();
getFocus();
