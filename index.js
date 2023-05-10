const dates = document.getElementById("date");
const prints = document.getElementById("print");
const savebtn = document.getElementById("save");
const dateregex =
  /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
let newdata;

//function

dates.addEventListener("input", handlechange);
savebtn.addEventListener("click", check);

function handlechange(event) {
  newdata = event.target.value;
  console.log(newdata);
}

function check() {
  if (newdata != null) {
    if (dateregex.test(save)) {
      prints.innerHTML = "";

      let enddate = newdata(newdata);
      let timerId = setInterval(() => countdown(enddate, timerId), 1000);
    }
  } else {
    prints.innerHTML = "invalid date";
  }
}

//date

function time() {
  const month = new Date().getMonth();
  const date = new Date().getDate();
  const months = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const currentMonth = months[month];
  const year1 = new Date().getFullYear();

  clearInterval(timeId);
  document.getElementById("time").innerHTML =
    date + "/" + currentMonth + "/" + year1;
}

//bday
function countdown(enddate, timerId) {
  const bday = document.getElementById("bday");
  let currentDate = new Date();
  let weird = currentDate.getFullYear();
  const years = new Date().getFullYear();

  let remainingMonths =
    (years - weird) * 12 + (enddate.getMonth() - currentDate.getMonth());

  if (remaintime <= 0) {
    bday.innerHTML = "Happy birthday!!";
    clearInterval(timerId);
    return;
  }

  bday.innerHTML = "Your birthday date countdown" + remainingMonths + "months";
}
let timeId = setInterval(time, 10);