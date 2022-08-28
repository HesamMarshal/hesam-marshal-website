const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");

toggler.addEventListener("click", (e) => {
    console.log("clicked");
    navbar.classList.toggle("nav__expanded");
});

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        const targetTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

        // Remove previous active classed
        tabs.forEach((tab) => tab.classList.remove('active'));
        tabContents.forEach((tabContent) => tabContent.classList.remove('active'));
        console.log(`#${tab.dataset.tabTarget}`);
        console.log(targetTabContent);


        // add new active class
        tab.classList.add('active');
        targetTabContent.classList.add('active');
    });
});



const accordionHeader = document.querySelector(".accordion__header");
const accordion = document.querySelector(".accordion");

accordionHeader.addEventListener("click", (e) => {
    console.log("clicked");
    accordion.classList.toggle("accordion__expanded");
});

