// import { certificates } from "./certificates";

const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const certificatesDiv = document.querySelector("#certs");

const certificates = [
  {
    certName: "HHTML and CSS in depth",
    imgSrc: "./images/certificates/HTML_CSS.jpg",
    alt: "HTML & CSS Certificates",
    organization: "Coursera",
    certDate: "Dec 18, 2022",
  },
  {
    certName: "Version Control",
    imgSrc: "./images/certificates/version_control.jpg",
    alt: "Version Control Certificate",
    organization: "Coursera",
    certDate: "Nov 15, 2022",
  },
];

function PageTransitions() {
  // Button Click active class

  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      // console.log("hi")
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }
  // Sections Active Class
  allSections.addEventListener("click", (e) => {
    console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from the other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      // hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
  // Toggle theme
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
    console.log("toggle");
  });
}
const addCertificates = () => {
  certificates.forEach((cert) => {
    const certDiv = document.createElement("div");
    certDiv.classList.add("certificate");
    const newCert = `
                <img src="${cert.imgSrc}" alt="${cert.alt}">
                <div class="certificate-text">
                    <h4>${cert.organization}</h4>
                    <p class="date">${cert.certDate}</p>
                    <p>${cert.certName}</p>
                </div>
              `;
    certDiv.innerHTML = newCert;

    certificatesDiv.append(certDiv);
  });
};

PageTransitions();
addCertificates();
