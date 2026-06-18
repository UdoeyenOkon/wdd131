const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});



const today = new Date();
const year = document.getElementById("CurrentYear").innerHTML = `${today.getFullYear()}`;
const day = document.getElementById("LastModified").innerHTML = `${new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "medium" }).format(today)}`;


const services = [
    {
        type: "Arbitration",
        feesOrRate: "1% of the claims",
        availableDiscount: "No",
    },
    {
        type: "Construction Contract",
        feesOrRate: "15% of ETC",
        availableDiscount: "Negotiable",
    },
    {
        type: "Contract Administration",
        feesOrRate: "Professional scale of fees",
        availableDiscount: "Negotiable",
    },
    {
        type: "Design and Build",
        feesOrRate: "Professional scale of fees for design + 15% of ETC",
        availableDiscount: "40%",
    },
    {
        type: "Internship",
        feesOrRate: "Free of Charges",
        availableDiscount: "Allowances provided",
    },
    {
        type: "Project Management",
        feesOrRate: "1% of ETC",
        availableDiscount: "Negotiable",
    },
    {
        type: "Quantity Surveying",
        feesOrRate: "Professional scale of fees",
        availableDiscount: "Negotiable",
    },
    {
        type: "Big Mixer",
        feesOrRate: "#15,000/hr day",
        availableDiscount: "yes",
    },
    {
        type: "Small Mixer",
        feesOrRate: "#5,000/hr day",
        availableDiscount: "yes",
    },
    {
        type: "Compactor",
        feesOrRate: "#15,000/hr day",
        availableDiscount: "yes",
    },
    {
        type: "Scaffolding",
        feesOrRate: "#3,000/stand/storey floor/day",
        availableDiscount: "yes",
    },
    {
        type: "Light-Equipment",
        feesOrRate: "Negotiable",
        availableDiscount: "No",
    },
];

createTableRow(services);

function createTableRow(services) {
    services.forEach(service => {
        let tableRow = document.createElement("tr");
        let type = document.createElement("td");
        let price = document.createElement("td");
        let discount = document.createElement("td");
       
        type.textContent = service.type;
        price.textContent = service.feesOrRate;
        discount.textContent = service.availableDiscount;

        tableRow.appendChild(type);
        tableRow.appendChild(price);
        tableRow.appendChild(discount);
        
        document.querySelector(".pricing").appendChild(tableRow);
    });
}




