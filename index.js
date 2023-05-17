const dates = document.getElementById("date");
const prints = document.getElementById("print");
const savebtn = document.getElementById("save");
const remainingDaysContainer = document.getElementById("remainingDays");
const Clear = document.getElementById("Clear");
let inputDate;
let formattedDate;
let countdownInterval;

//function

dates.addEventListener("input", handlechange);
savebtn.addEventListener("click", countdown);
Clear.addEventListener("click", clearCountdown);

function clearCountdown() {
  clearInterval(countdownInterval);
  dates.value = "";
  remainingDaysContainer.textContent = "";
  const birthdayMessage = document.getElementById("birthday-message");
  birthdayMessage.innerHTML = "";
}

function handlechange(event) {
  inputDate = event.target.value;
  console.log(inputDate);
}

function getTodayDate() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1; // Months are zero-indexed, so add 1 to get the correct month
  const year = today.getFullYear();

  // Format the date as "YYYY-MM-DD"
  formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
}
setInterval(getTodayDate, 10);

function countdown() {
  let initialDate = new Date(formattedDate);
  let targetDate = new Date(inputDate);

  let timeDiff = targetDate.getTime() - initialDate.getTime(); // Calculate time difference in milliseconds

  // If the time difference is negative, add one year to it
  if (timeDiff < 0) {
    const oneYearMs = 365 * 24 * 60 * 60 * 1000; // One year in milliseconds
    timeDiff += oneYearMs;
  }

  const birthdayMessage = document.getElementById("birthday-message");
  if (timeDiff === 0) {
    const CakeImage = document.createElement("img");
    CakeImage.src =
      "https://marketplace.canva.com/EAFYJKGkaTQ/1/0/1600w/canva-white-and-gold-modern-greeting-happy-birthday-card-MAo89x0go4c.jpg";
    CakeImage.id = "cake-image";
    birthdayMessage.appendChild(CakeImage);
  } else {
    const remainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days and round up
    birthdayMessage.textContent = `Only ${remainingDays} days left until your birthday!`;
  }
  const remainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days and round up

  console.log(`Remaining days: ${remainingDays}`); // Output: Remaining days: 5
  remainingDaysContainer.innerHTML = remainingDays;
}
