const today = new Date();
const year = document.getElementById("CurrentYear").innerHTML = `${today.getFullYear()}`;
const day = document.getElementById("LastModified").innerHTML = `${new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "medium" }).format(today)}`;


const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});



// const enquiriesDisplay = document.querySelector();
let numEnquiries = (window.localStorage.getItem("numEnquiries-Is")) || 0;

// if (numEnquiries !== 0) {
//     enquiriesDisplay.textContent = numEnquiries;
// }
// else {
//     enquiriesDisplay.textContent = `This is your first enquiry!`;
// }

numEnquiries++;

localStorage.setItem("numEnquiries-Is", numEnquiries);


const services = [
    { id: "DB", name: "Design and Build"},
    { id: "CONT", name: "Construction Contract"},
    { id: "PM", name: "Project Management" },
    { id: "QS", name: "Quantity Surveying" },
    { id: "CA", name: "Contract Administration" },
    { id: "ArB", name: "Arbitration" },
    { id: "INT", name: "Internship" },
    { id: "EQP", name: "Eqipment Hire" },
];

const selectService = document.getElementById("service");

services.forEach((service) => {
    let option = document.createElement("option")
    option.textContent = service.name;
    option.value = service.id;
    document.getElementById("service").appendChild(option);
  
});
