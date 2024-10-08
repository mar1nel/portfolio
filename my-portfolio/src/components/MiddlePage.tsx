import React from "react";
import TextBoxComponent from "./TextBoxComponent";
import "./MiddlePage.css";
import ArrowIconGreen from "../icons/ArrowIconGreen";
import JobComponent from "./JobComponent";
import ArrowIconWhite from "../icons/ArrowIconWhite";
import Tiles from "../icons/Tiles";
import BrokenTextBoxComponent from "./BrokenTextBoxComponent";

const MiddlePage: React.FC = () => {
  const jobDescription1 = `
    I was part of a team responsible for creating designs for the biggest marketplace platform from New Guinea (3 months Project Based).
    I used my skills in wireframing, prototyping, and visual design. I was responsible for creating UI flows and reviewing prototypes for accuracy.
    This project allowed me to gain experience in working with design systems, conducting usability testing. I was paying close attention to details,
    checking text for typos and managing icons, as well as performing tasks like photoshop model adjustments. Also, my role was to ensure all designs
    met the standards set by the lead designer before they were presented along with Usability Testing and Interface Design process. The app it's currently on Google Play and AppStore.
  `;

  const jobDescription2 = `
    Our team developed a robust web-based video player that provides a seamless and high-quality video playback experience. The video player includes features such as play, pause, forward, rewind, volume control, and full-screen mode. The application is designed to be intuitive and user-friendly, ensuring that users can easily navigate and enjoy their video content.
    `;

  const jobDescription3 = `
    I was responsible for conducting comprehensive end-to-end testing for a Cypress React application. This project spanned over five months and allowed me to leverage my skills in both 
    automatic and manual testing methodologies. As part of my role, I actively engaged in developing and executing test plans, meticulously ensuring the accuracy and reliability of the application. 
    I employed Cypress, a powerful testing framework, to automate various test cases, providing efficient and reliable feedback on the application's functionality. Throughout the project, 
    I closely collaborated with the development team, sharing valuable insights and recommendations to address any security-related and E2E issues.
    `;

  return (
    <div>
      <div className="middle-container">
        <div className="horizontal-container-1">
          <div className="horizontal-container-1-buttons">
            <TextBoxComponent title="SKILLS" />
            <TextBoxComponent title="TOOLS" />
          </div>

          <div id="about" className="tile-over">
            <Tiles />
          </div>

          <div className="text-content">
            <div>
              <p className="normal-text">
                Web Design <br />
                Basic Animation <br />
                Typography <br />
                UI/UX Design <br />
                Motion Design <br />
                Basic Programming C/C++ <br />
                <br />
                <span className="highlighted-text">
                  Angular/ReactJS <br />
                  JavaScript/SASS/HTML <br />
                  Cypress Automation E2E
                </span>
              </p>
            </div>
            <div className="text-tools normal-text">
              <p>
                Node Package Manager <br />
                GitHub <br />
                Git Kraken <br />
                Figma <br />
                Adobe Tools <br />
              </p>
            </div>
          </div>
        </div>
        <div className="horizontal-container-2">
          <TextBoxComponent title="EDUCATION" />
          <div className="text-content">
            <div className="education-text">
              <span
                className="letter-spacing-wide"
                style={{ color: "#55E27D" }}
              >
                INFORMATICS
              </span>{" "}
              | Polytechnic University of Timisoara - Bachelor's Degree
            </div>
          </div>
        </div>
      </div>

      <div className="additional-box">
        <TextBoxComponent title="AWARDS" size="small" />
        <div className="awards-text ">
          <p className="awards-item">
            <span className="awards-highlight letter-spacing-wide">
              ITEC 2022{" "}
              <span className="arrow-spacing">
                <ArrowIconGreen />
              </span>
            </span>{" "}
            Ui/ Ux for Advanced Probe 2nd Place and 150$ Prize
          </p>
          <p className="awards-item ">
            <span className="awards-highlight letter-spacing-wide">
              Unihack22{" "}
              <span className="arrow-spacing">
                <ArrowIconGreen />
              </span>
            </span>{" "}
            Web Development Beginners Probe 11th Place Participating Award
          </p>
          <p className="awards-item">
            <span className="awards-highlight letter-spacing-wide">
              ITEC 2023{" "}
              <span className="arrow-spacing">
                <ArrowIconGreen />
              </span>
            </span>{" "}
            Web Development Advanced Probe 8th Place Participating Award
          </p>
        </div>
      </div>
      <div style={{ marginTop: "60px", marginLeft: "17%" }}>
        <TextBoxComponent title="experience" size="supreme" />
      </div>

      <div className="tile-over">
        <Tiles />
      </div>

      <div className="job">
        <JobComponent
          company="TheTalented CO"
          role="Junior FE Developer & Manual/Automation Tester"
          date="| Jul 2023 - Nov 2023 | NY, USA - remote"
          description={jobDescription3}
        />
      </div>
      <div className="job">
        <JobComponent
          company="Nokia"
          role="Junior Web Developer"
          date="| Dec 2022 - Feb 2023 | Timis, Romania - onsite"
          description={jobDescription2}
        />
      </div>
      <div className="job">
        <JobComponent
          company="Unifun"
          role="Junior User Interface Designer"
          date="| Jun 2021 - Oct 2022 | Moldova - onsite"
          description={jobDescription1}
        />
      </div>

      <div className="horizontal-container-3">
        <TextBoxComponent title="CONTACTS" size="big" />
        <div>
          <TextBoxComponent title="ABOUT ME" size="big" />
        </div>
      </div>
      <div className="text-content-contacts">
        <div>
          <div className="contact-item gap-50px">
            <span className="letter-spacing-wide" style={{ color: "#55E27D" }}>
              Behance:
            </span>
            <div className="underline">behance.net/ababiivicu</div>{" "}
            <span className="arrow-spacing-white">
              <ArrowIconWhite />
            </span>
          </div>
          <div className="contact-item gap-100px">
            <span className="letter-spacing-wide" style={{ color: "#55E27D" }}>
              Email:
            </span>
            2002.mar1nel@gmail.com
          </div>
          <div className="contact-item unde gap-50px">
            <span className="letter-spacing-wide" style={{ color: "#55E27D" }}>
              LinkedIn:
            </span>
            <div className="underline">Ababii Vicu-Marin</div>{" "}
            <span className="arrow-spacing-white">
              <ArrowIconWhite />
            </span>
          </div>
        </div>
        <div className="click-to-view-text-1 underline">
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
        </div>
        <div className="click-to-view-text-2 underline">
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
        </div>
        <div className="click-to-view-text-3 underline">
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
          <div className="text-content-about-me"> CLICK TO VIEW</div>
        </div>
      </div>

      <BrokenTextBoxComponent />
    </div>
  );
};

export default MiddlePage;
