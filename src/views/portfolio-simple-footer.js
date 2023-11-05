import React from 'react'

import { Helmet } from 'react-helmet'

import './portfolio-simple-footer.css'

const PortfolioSimpleFooter = (props) => {
  return (
    <div className="portfolio-simple-footer-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="portfolio-simple-footer-portfolio-simple-footer">
        <div className="portfolio-simple-footer-footericons">
          <div className="portfolio-simple-footer-icons">
            <img
              alt="phinstagramlogofill5299"
              src="/external/phinstagramlogofill5299-ijih.svg"
              className="portfolio-simple-footer-phinstagramlogofill"
            />
            <div className="portfolio-simple-footer-bilinkedin">
              <div className="portfolio-simple-footer-group">
                <img
                  alt="VectorI530"
                  src="/external/vectori530-3ff9.svg"
                  className="portfolio-simple-footer-vector"
                />
              </div>
            </div>
            <div className="portfolio-simple-footer-bienvelopefill">
              <div className="portfolio-simple-footer-group1">
                <img
                  alt="VectorI530"
                  src="/external/vectori530-zo8r.svg"
                  className="portfolio-simple-footer-vector1"
                />
              </div>
            </div>
          </div>
          <span className="portfolio-simple-footer-text">
            Madelyn Torff 2021
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <img
          alt="image137"
          src="/external/image137-3ggm.svg"
          className="portfolio-simple-footer-image"
        />
        <div className="portfolio-simple-footer-header">
          <span className="portfolio-simple-footer-text01">
            Burak Kelleroglu
          </span>
          <div className="portfolio-simple-footer-nav">
            <div className="portfolio-simple-footer-tabdefault">
              <span className="portfolio-simple-footer-text02 body18px">
                <span>About</span>
              </span>
            </div>
            <div className="portfolio-simple-footer-tabdefault1">
              <span className="portfolio-simple-footer-text04 body18px">
                <span>Projects</span>
              </span>
            </div>
            <div className="portfolio-simple-footer-tabdefault2">
              <span className="portfolio-simple-footer-text06 body18px">
                <span>Contacts</span>
              </span>
            </div>
          </div>
        </div>
        <div className="portfolio-simple-footer-projects">
          <div className="portfolio-simple-footer-frame3351">
            <span className="portfolio-simple-footer-text08 titleh2">
              <span>Projects</span>
            </span>
            <img
              alt="Rectangle195351"
              src="/external/rectangle195351-llu5-200h.png"
              className="portfolio-simple-footer-rectangle19"
            />
          </div>
          <div className="portfolio-simple-footer-project1">
            <div className="portfolio-simple-footer-projectnfo">
              <div className="portfolio-simple-footer-frame3350">
                <span className="portfolio-simple-footer-text10">
                  <span>Project Name</span>
                </span>
                <span className="portfolio-simple-footer-text12">
                  <span>
                    I created this personal project in order to show how to
                    create an interface in Figma using a portfolio as an
                    example.
                  </span>
                </span>
                <div className="portfolio-simple-footer-botosecudrio">
                  <span className="portfolio-simple-footer-text14">
                    <span>View Project</span>
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="pexelsellyfairytale38232071216"
              src="/external/pexelsellyfairytale38232071216-8ia-600h.png"
              className="portfolio-simple-footer-pexelsellyfairytale38232071"
            />
          </div>
          <div className="portfolio-simple-footer-project2">
            <img
              alt="Rectangle7157"
              src="/external/rectangle7157-odrtj-600h.png"
              className="portfolio-simple-footer-rectangle7"
            />
            <div className="portfolio-simple-footer-projectnfo1">
              <div className="portfolio-simple-footer-frame33501">
                <span className="portfolio-simple-footer-text16">
                  Project Name
                </span>
                <span className="portfolio-simple-footer-text17">
                  <span>
                    What was your role, your deliverables, if the project was
                    personal, freelancing.
                  </span>
                </span>
                <div className="portfolio-simple-footer-botosecudrio1">
                  <span className="portfolio-simple-footer-text19">
                    <span>View Project</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-simple-footer-project3">
            <div className="portfolio-simple-footer-projectnfo2">
              <div className="portfolio-simple-footer-frame33502">
                <span className="portfolio-simple-footer-text21">
                  <span>Project Name</span>
                </span>
                <span className="portfolio-simple-footer-text23">
                  <span>
                    You can also add in this description the type of the
                    project, if it was for web, mobile, electron.
                  </span>
                </span>
                <div className="portfolio-simple-footer-botosecudrio2">
                  <span className="portfolio-simple-footer-text25">
                    <span>View Project</span>
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="Rectangle7161"
              src="/external/rectangle7161-qf28-600h.png"
              className="portfolio-simple-footer-rectangle71"
            />
          </div>
        </div>
        <div className="portfolio-simple-footer-intro">
          <span className="portfolio-simple-footer-text27">
            <span>Product Manager</span>
          </span>
          <div className="portfolio-simple-footer-content">
            <span className="portfolio-simple-footer-text29">
              Hello, my name is Burak Kelleroglu
            </span>
            <div className="portfolio-simple-footer-subheadline">
              <span className="portfolio-simple-footer-text30">
                <span>
                  Short text with details about you, what you do or your
                  professional career. You can add more information on the about
                  page.
                </span>
              </span>
            </div>
            <button className="portfolio-simple-footer-buttons">
              <button className="portfolio-simple-footer-buttonprimary">
                <span className="portfolio-simple-footer-text32">
                  <span>Projects</span>
                </span>
              </button>
              <button className="portfolio-simple-footer-buttonsecondary">
                <span className="portfolio-simple-footer-text34">
                  <span>LinkedIn</span>
                </span>
              </button>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSimpleFooter
