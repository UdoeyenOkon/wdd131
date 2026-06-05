const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});


const today = new Date();
const year = document.getElementById("CurrentYear").innerHTML = `${today.getFullYear()}`;
const day = document.getElementById("LastModified").innerHTML = `${new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "medium" }).format(today)}`;


// const humButton = document.querySelector("#menu");
// const navigation = document.querySelector(".navigation");

// hamButton.addEventListener("click", () => {
//     navigation.classList.toggle("viewable");
//     hamButton.classList.toggle("viewable");
// });

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Apia Samoa",
        location: "Apia Samoa",
        dedicated: "2005, September, 4",
        area: 18691,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/400x250/apia-samoa-temple-lds-460475-wallpaper.jpg"
    },
    {
        templeName: "Anchorage Alaska",
        location: "Alaska, United States",
        dedicated: "2004, February, 8",
        area: 11937,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/400x225/anchorage-temple-lds-253274-wallpaper.jpg"
    },
    {
        templeName: "Albuquerque New Mexico",
        location: "New Mexico, United States",
        dedicated: "2000, March, 5",
        area: 34245,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x400/albuquerque-temple-lds-137885-wallpaper.jpg"
    },

    // Add more temple objects here...
];

createTempleCard(temples);

const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
    document.querySelector(".pictures").innerHTML = "";
    createTempleCard(temples);
});


const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
    document.querySelector(".pictures").innerHTML = "";
    const oldTemples = temples.filter(temple => new Date(temple.dedicated) < new Date("1900, December, 31"));

    createTempleCard(oldTemples);
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
    document.querySelector(".pictures").innerHTML = "";
    const newTemples = temples.filter(temple => new Date(temple.dedicated) > new Date("2000, December, 31"));

    createTempleCard(newTemples);
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
    document.querySelector(".pictures").innerHTML = "";
    const largeTemples = temples.filter(temple => temple.area > 90000);

    createTempleCard(largeTemples);
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
    document.querySelector(".pictures").innerHTML = "";
    const smallTemples = temples.filter(temple => temple.area < 10000);

    createTempleCard(smallTemples);
});


function createTempleCard(templesToShow) {

    templesToShow.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label"> <strong>Location: </strong></span>${temple.location}`;
        dedication.innerHTML = `<span class="label"> <strong>Dedication: </strong></span>${temple.dedicated}`;
        area.innerHTML = `<span class="label"> <strong>Size: </strong></span>${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".pictures").appendChild(card);

    });
}