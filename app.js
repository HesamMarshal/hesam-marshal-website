// import { certificates } from "./certificates";

const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const certificatesDiv = document.querySelector("#certs");

const certificates = [
  {
    certName: "HTML and CSS in depth",
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
  {
    certName: "Programming with Javascript",
    imgSrc: "./images/certificates/JavaScript_Meta.jpg",
    alt: "Programming with Javascript",
    organization: "Coursera",
    certDate: "Nov 20, 2022",
  },
  {
    certName: "Introduction to Front-End Development",
    imgSrc: "./images/certificates/Intro_to_frontend.jpg",
    alt: "Introduction to Front-End Development",
    organization: "Coursera",
    certDate: "Oct 28, 2022",
  },
  {
    certName: "Introduction to Database for Back-End Development",
    imgSrc: "./images/certificates/Intro_to_DB_for_Backend.jpg",
    alt: "Introduction to Database for Back-End Development",
    organization: "Coursera",
    certDate: "Dec 10, 2022",
  },
  {
    certName: "Introduction to Database",
    imgSrc: "./images/certificates/Intro_to_DB.jpg",
    alt: "Introduction to Database",
    organization: "Coursera",
    certDate: "Dec 10, 2022",
  },
  {
    certName: "Programming in Python",
    imgSrc: "./images/certificates/programming_in_python.jpg",
    alt: "Programming in Python",
    organization: "Coursera",
    certDate: "Dec 04, 2022",
  },
  {
    certName: "Introduction to Back-End Development",
    imgSrc: "./images/certificates/intro_to_back-end.jpg",
    alt: "Introduction to Back-End Development",
    organization: "Coursera",
    certDate: "Nov 17, 2022",
  },
  {
    certName: "Responsive Web Design",
    imgSrc: "./images/certificates/ResponsiveWeb.png",
    alt: "Responsive Web Design",
    organization: "freeCodeCamp",
    certDate: "Jun 4, 2022",
  },
  {
    certName: "Introduction to Machine Learning",
    imgSrc: "./images/certificates/Kaggle-Intro-to-Machine-Learning.png",
    alt: "Introduction to Machine Learning",
    organization: "Kaggle",
    certDate: "Dec 1, 2020",
  },
  {
    certName: "Python",
    imgSrc: "./images/certificates/Kaggle-Python.png",
    alt: "Python",
    organization: "Kaggle",
    certDate: "March 8, 2021",
  },
  {
    certName:
      "Microsoft Certified Solution Associate : <span> Web Applications Charter Member</span>",
    imgSrc: "./images/certificates/MCSD.jpg",
    alt: " Microsoft Certified Solution Associate : Web Applications Charter Member",
    organization: "Microsoft",
    certDate: "Sep 26, 2016",
  },
  {
    certName:
      "Microsoft Certified Solution Developer : <span>Web Applications</span>",
    imgSrc: "./images/certificates/Kaggle-Python.png",
    alt: "Microsoft Certified Solution Developer : Web Applications",
    organization: "Kaggle",
    certDate: " Jun 29, 2013",
  },

  {
    certName: "Microsoft Certified Professional",
    imgSrc: "./images/certificates/MCP.jpg",
    alt: "Microsoft Certified Professional",
    organization: "Microsoft",
    certDate: "Apr 3, 2013",
  },
  {
    certName:
      "Microsoft Specialist :<span> Programming in HTML5 with Javascript and CSS3</span>",
    imgSrc: "./images/certificates/MicrosoftSpecialist.jpg",
    alt: "Microsoft Specialist : Programming in HTML5 with Javascript and CSS3",
    organization: "Microsoft",
    certDate: "Apr 3, 2016",
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
