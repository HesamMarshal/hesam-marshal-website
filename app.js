// import { certificates } from "./certificates";

const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const certificatesDiv = document.querySelector("#certs");
const aboutStatsDiv = document.querySelector("#about-stats");

const certificates = [
  {
    certName: "Advanced React",
    imgSrc: "Advanced_React.jpg",
    alt: "Advanced React Certificate by Hesamaddin Akrami",
    organization: "Coursera",
    certDate: "Jun 2, 2023",
  },
  {
    certName: "React Basic",
    imgSrc: "React_Basic.jpg",
    alt: "React Basic Certificate by Hesam Akrami",
    organization: "Coursera",
    certDate: "May 14, 2023",
  },
  {
    certName: "Principles of UX/UI Design",
    imgSrc: "UI_UX.jpg",
    alt: "Principles of UX/UI Design Certificate by Hesamaddin Akrami",
    organization: "Coursera",
    certDate: "Jan 17, 2023",
  },
  {
    certName: "HTML and CSS in depth",
    imgSrc: "HTML_CSS.jpg",
    alt: "HTML and CSS in depth Certificate",
    organization: "Coursera",
    certDate: "Dec 18, 2022",
  },
  {
    certName: "Version Control",
    imgSrc: "version_control.jpg",
    alt: "Version Control Certificate",
    organization: "Coursera",
    certDate: "Nov 15, 2022",
  },
  {
    certName: "Programming with Javascript",
    imgSrc: "JavaScript_Meta.jpg",
    alt: "Programming with Javascript",
    organization: "Coursera",
    certDate: "Nov 20, 2022",
  },
  {
    certName: "Introduction to Front-End Development",
    imgSrc: "Intro_to_frontend.jpg",
    alt: "Introduction to Front-End Development",
    organization: "Coursera",
    certDate: "Oct 28, 2022",
  },
  {
    certName: "Introduction to Database for Back-End Development",
    imgSrc: "Intro_to_DB_for_Backend.jpg",
    alt: "Introduction to Database for Back-End Development",
    organization: "Coursera",
    certDate: "Dec 10, 2022",
  },
  {
    certName: "Introduction to Database",
    imgSrc: "Intro_to_DB.jpg",
    alt: "Introduction to Database",
    organization: "Coursera",
    certDate: "Dec 10, 2022",
  },
  {
    certName: "Programming in Python",
    imgSrc: "programming_in_python.jpg",
    alt: "Programming in Python",
    organization: "Coursera",
    certDate: "Dec 04, 2022",
  },
  {
    certName: "Introduction to Back-End Development",
    imgSrc: "intro_to_back-end.jpg",
    alt: "Introduction to Back-End Development",
    organization: "Coursera",
    certDate: "Nov 17, 2022",
  },
  {
    certName: "Responsive Web Design",
    imgSrc: "ResponsiveWeb.png",
    alt: "Responsive Web Design",
    organization: "freeCodeCamp",
    certDate: "Jun 4, 2022",
  },
  {
    certName: "Introduction to Machine Learning",
    imgSrc: "Kaggle-Intro-to-Machine-Learning.png",
    alt: "Introduction to Machine Learning",
    organization: "Kaggle",
    certDate: "Dec 1, 2020",
  },
  {
    certName: "Python",
    imgSrc: "Kaggle-Python.png",
    alt: "Python",
    organization: "Kaggle",
    certDate: "March 8, 2021",
  },
  {
    certName:
      "Microsoft Certified Solution Associate : <span> Web Applications Charter Member</span>",
    imgSrc: "MCSD.jpg",
    alt: " Microsoft Certified Solution Associate : Web Applications Charter Member",
    organization: "Microsoft",
    certDate: "Sep 26, 2016",
  },
  {
    certName:
      "Microsoft Certified Solution Developer : <span>Web Applications</span>",
    imgSrc: "MCSD.jpg",
    alt: "Microsoft Certified Solution Developer : Web Applications",
    organization: "Microsoft",
    certDate: " Jun 29, 2013",
  },

  {
    certName: "Microsoft Certified Professional",
    imgSrc: "MCP.jpg",
    alt: "Microsoft Certified Professional",
    organization: "Microsoft",
    certDate: "Apr 3, 2013",
  },
  {
    certName:
      "Microsoft Specialist :<span> Programming in HTML5 with Javascript and CSS3</span>",
    imgSrc: "MicrosoftSpecialist.jpg",
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

const addAbout = () => {
  const skills = [
    {
      title: "React.js",
      progress: "85%",
      className: "reactjs",
    },
    {
      title: "JS & Node.js",
      progress: "75%",
      className: "js",
    },
    {
      title: "HTML 5",
      progress: "95%",
      className: "html",
    },
    {
      title: "CSS 3",
      progress: "85%",
      className: "css",
    },
    {
      title: "SCSS",
      progress: "75%",
      className: "scss",
    },
    {
      title: "TypeScript",
      progress: "50%",
      className: "type-script",
    },
    {
      title: "Pyhton",
      progress: "95%",
      className: "python",
    },
    {
      title: "C/C++",
      progress: "80%",
      className: "c-lang",
    },
    {
      title: "C#",
      progress: "80%",
      className: "c-sharp",
    },
    {
      title: "SQL",
      progress: "80%",
      className: "sql",
    },
    {
      title: "PHP",
      progress: "40%",
      className: "php",
    },
  ];
  console.log(skills);
  skills.forEach((skill) => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("progress-bar");
    const newSkill = `
            <p class="progress-title">${skill.title}</p>
            <div class="progress-container">
                <p class="progress-text">${skill.progress}</p>
                <div class="progress">
                  <span class=${skill.className}></span>
                </div>
            </div>
              `;
    skillDiv.innerHTML = newSkill;

    aboutStatsDiv.append(skillDiv);
  });
};

const addCertificates = () => {
  certificates.forEach((cert) => {
    const certDiv = document.createElement("div");
    certDiv.classList.add("certificate");
    const newCert = `
                <a href="./images/certificates/${cert.imgSrc}" target="_blank" >
                  <img src="./images/certificates/${cert.imgSrc}" alt="${cert.alt}">
                </a>
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
addAbout();
