const today = new Date();
const year = document.getElementById("CurrentYear").innerHTML = `${today.getFullYear()}`;
const day = document.getElementById("LastModified").innerHTML = `${new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "medium" }).format(today)}`;


// const reviewsDisplay = document.querySelector();
let numReviews = (window.localStorage.getItem("numReviews-Is")) || 0;

// if (numReviews !== 0) {
//     reviewsDisplay.textContent = numReviews;
// }
// else {
//     reviewsDisplay.textContent = `This is your first review!`;
// }

numReviews++;

localStorage.setItem("numReviews-Is", numReviews);