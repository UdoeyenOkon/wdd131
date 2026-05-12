const today = new Date();
const year = document.getElementById("CurrentYear").innerHTML = `<span id="CurrentYear">${today.getFullYear()}</span>`;
const day = document.getElementById("LastModified").innerHTML = `<span id="LastModified">${new Intl.DateTimeFormat("en-US",
    {dateStyle: "full", timeStyle: "medium"}).format(today) }</span>`;
