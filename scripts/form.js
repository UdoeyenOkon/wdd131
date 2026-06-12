const today = new Date();
const year = document.getElementById("CurrentYear").innerHTML = `${today.getFullYear()}`;
const day = document.getElementById("LastModified").innerHTML = `${new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "medium" }).format(today)}`;

const products = [
    {id: "fc-1888", name: "flux capacitor", averagerating: 4.5},
    {id: "fc-2050", name: "power laces", averagerating: 4.7},
    {id: "fs-1987", name: "time circuits", averagerating: 3.5},
    {id: "ac-2000", name: "low voltage reactor", averagerating: 3.9},
    {id: "jj-1969", name: "warp equalizer", averagerating: 5.0}
];

const selectProduct = document.getElementById("product");

products.forEach((product) => {
    let option = document.createElement("option")
    option.textContent = product.name;
    option.value = product.id;
    // document.getElementById("product").appendChild(option);
    selectProduct.appendChild(option);
});

