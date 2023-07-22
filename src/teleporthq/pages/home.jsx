import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavBarCorner from '../components/nav-bar-corner'
import ImageSlider from '../components/image-slider'
import WhoUsComponent from '../components/who-us-component'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Codeify</title>
        <meta property="og:title" content="Togthr template" />
      </Helmet>
      <NavBarCorner rootClassName="nav-bar-corner-root-class-name1"></NavBarCorner>
      <section className="home-hero">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1689005047173-b43ff68072ed?ixid=M3w5MTMyMXwwfDF8YWxsfDIyfHx8fHx8Mnx8MTY4OTk5MDcyMXw&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="home-image"
        />
        <div className="home-hero-content">
          <div className="home-header-container">
            <div className="home-header">
              <h1 className="home-heading">
                <span>Code... with Codeify</span>
                <br></br>
              </h1>
            </div>
            <p className="home-caption">
              <span>
                Creating a world where the generation now will be the technology
                leaders of the future
              </span>
              <br></br>
              <br></br>
              <span className="home-text05">
                Fall Registration Deadline: September 17th
              </span>
              <br></br>
            </p>
          </div>
          <button type="button" className="home-button button">
            <span>Get Registed Now</span>
          </button>
        </div>
      </section>
      <div className="home-container1"></div>
      <div className="home-container2">
        <h1 className="home-text08">
          <span>Our Purpose</span>
          <br></br>
        </h1>
      </div>
      <section className="home-note">
        <h2 className="home-caption1">
          Codeify&apos;s purpose is to provide the highest quality programming
          education to as many students as possible, no matter their steps. We
          are dedicated to providing free courses, with high quality education,
          including tutoring, actual programming experience, and the expertise
          needed for greatness
        </h2>
      </section>
      <section className="home-statistics">
        <div className="home-content">
          <div className="home-stat">
            <h3 className="home-header01">2000+</h3>
            <span className="home-caption2">Students Tutored</span>
          </div>
          <div className="home-stat1">
            <h3 className="home-header02">5:1</h3>
            <span className="home-caption3">Student to Faculty Ratio</span>
          </div>
          <div className="home-stat2">
            <h3 className="home-header03">$10,000</h3>
            <span className="home-caption4">Funding raised</span>
          </div>
        </div>
      </section>
      <section className="home-objectives">
        <div className="home-content01">
          <span className="home-text11">Objectives</span>
          <div className="home-container3">
            <div className="home-objectives-list">
              <div className="objective">
                <h3 className="home-text12">Access</h3>
                <p className="home-text13">
                  We want to ensure that as many students can get the education
                  that they want, without any barriers except for a computer and
                  a passion to learn.
                </p>
              </div>
              <div className="objective home-objective1">
                <h3 className="home-text14">Education</h3>
                <p className="home-text15">
                  We make sure that our team consists of qualified individuals.
                  We make sure that our courses are carefully selected for the
                  best success.
                </p>
              </div>
              <div className="objective home-objective2">
                <h3 className="home-text16">Growth</h3>
                <p className="home-text17">
                  We want students that finish a Codeify course excited to learn
                  more. We want them to develop a passion for learning and have
                  them grow not just as programmers but also as thinkers and
                  leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-growth">
        <div className="home-content02">
          <div className="home-header04">
            <div className="home-header05">
              <h2 className="home-heading1">
                <span>Quality education, free of cost</span>
                <br></br>
              </h2>
            </div>
            <p className="home-caption5">
              Codeify will ensure that your child has a quality education. This
              includes hands on projects, low student to faculty ratio, and
              qualified tutors that can ensure that your child can succeed no
              matter their level of expertise.
            </p>
          </div>
          <div className="home-testimonial">
            <div className="home-information"></div>
          </div>
        </div>
        <div className="home-images">
          <div className="home-square"></div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1603695762547-fba8b88ac8ad?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxraWQlMjBjb21wdXRlcnxlbnwwfHx8fDE2ODk5ODMyMDh8MA&amp;ixlib=rb-4.0.3&amp;w=1400"
            className="home-image1"
          />
        </div>
      </section>
      <section className="home-customer">
        <div className="home-container4">
          <h1 className="home-text20">
            <span className="home-text21">Our Courses</span>
            <br></br>
            <br></br>
          </h1>
        </div>
        <div className="home-container5">
          <ImageSlider
            heading="Introduction to Python"
            image_src1="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fFB5dGhvbnxlbnwwfHx8fDE2ODk5OTkzMjN8MA&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="image-slider-root-class-name"
          ></ImageSlider>
        </div>
      </section>
      <section className="home-create">
        <div className="home-content03">
          <div className="home-header06">
            <h2 className="home-heading2">
              <span>Register now!</span>
              <br></br>
              <span>Deadline: September 17th</span>
              <br></br>
            </h2>
          </div>
          <button className="home-button1 button">
            <span>
              <span>Get Registered Here</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-get-started">
        <div className="home-header-container1">
          <div className="home-header07">
            <h2 className="home-heading3">Interested in being a tutor?</h2>
            <p className="home-caption6">
              Sign up below to gain volunteer hours, experience, and more on
              your resume. If you are in high school, college, or beyond Codeify
              staff will train you to be a successful tutor so you can gain
              experience while helping a good cause
            </p>
          </div>
          <div className="home-button2">
            <button className="home-button3 button">
              <span>Become a Tutor here</span>
            </button>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGNvZGluZ3xlbnwwfHx8fDE2ODk5ODMwNDh8MA&amp;ixlib=rb-4.0.3&amp;w=600"
          className="home-image2"
        />
      </section>
      <h1 className="home-text32">Meet the Team</h1>
      <h1 className="home-heading4">
        <span>Executive Team</span>
        <br></br>
      </h1>
      <div className="home-meet-us">
        <div className="home-card-container">
          <WhoUsComponent
            text="Founder/Global Executive Director"
            text1="Laasya is a high school senior from Minnesota. She loves math and technology and wants to use STEM to help others. In her free time she enjoys biking and playing video games."
            heading="Laasya Aki"
            image_src="https://images.unsplash.com/photo-1689351779949-35df2fe11464?ixid=M3w5MTMyMXwwfDF8YWxsfDIwfHx8fHx8Mnx8MTY4OTk4MDkwOXw&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="who-us-component-root-class-name"
          ></WhoUsComponent>
          <WhoUsComponent
            text="Founder/Global Executive Director"
            text1="Andrew is a rising senior in Columbia, MO. He has been programming for 9 years and is passionate in AI and software."
            heading="Andrew Romitti"
            rootClassName="who-us-component-root-class-name2"
          ></WhoUsComponent>
          <WhoUsComponent
            text="Founder/Global Executive Director"
            text1="Pranavi is a rising senior from Math and Science Academy in Minnesota. She enjoys photography and videography. In her free time, she loves to spend time with friends and family and explore new places!"
            heading="Pranavi Verdere"
            image_src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxQZXJzb258ZW58MHx8fHwxNjg5OTgxNDA0fDA&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="who-us-component-root-class-name1"
          ></WhoUsComponent>
        </div>
      </div>
      <section className="home-faq">
        <div className="home-header08">
          <h2 className="home-heading5">
            <span>Frequently asked </span>
            <span className="home-text36">questions</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="home-content04">
          <div className="home-column">
            <div className="home-element">
              <h3 className="home-header09">Are we a 501(c) organization?</h3>
              <p className="home-content05">
                Yes! We are a &quot;almost&quot; certified 501(c) organization
                and if you want to search us our EIN is 
              </p>
            </div>
            <div className="home-element1">
              <h3 className="home-header10">
                What is required before the first class my child takes?
              </h3>
              <p className="home-content06">
                All that is required is a computer, internet connection, Zoom
                installed and updated, and the application replit. We will
                include all the instructions for how to do this in the
                guardian&apos;s meeting we hold before every session.
              </p>
            </div>
            <div className="home-element2">
              <h3 className="home-header11">How long do courses last?</h3>
              <p className="home-content07">
                There are 12 lectures in each course, and with each lecture
                being on Sunday&apos;s then that means that each course will be
                12 weeks long.
              </p>
            </div>
          </div>
          <div className="home-column1">
            <div className="home-element3">
              <h3 className="home-header12">
                What does a typical class look like?
              </h3>
              <p className="home-content08">
                We will send all guardians a zoom link to give to their children
                that will send them to a main zoom room. From there we will
                organize the students into breakout rooms where each class will
                have a small group of students that will have an hour and 30
                minute class.
              </p>
            </div>
            <div className="home-element4">
              <h3 className="home-header13">
                Can my child take multiple classes?
              </h3>
              <p className="home-content09">
                While you can only take one class per session, you can take as
                many classes as you want as long as you sign up for the session
                following in a new course
              </p>
            </div>
            <div className="home-element5">
              <h3 className="home-header14">
                What requirements do I need to be a tutor?
              </h3>
              <p className="home-content10">
                As long as you are currently in high school or beyond you are
                able to sign up to be a tutor. We will evaluate your application
                and interview you, and if accepted you will tutor in one of our
                courses and receive an hour and a half of volunteer hours every
                week a session
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-content11">
          <div className="home-main">
            <div className="home-branding">
              <span className="home-text38">Codeify</span>
            </div>
            <div className="home-links">
              <div className="home-column2">
                <span className="home-header15">Organization</span>
                <div className="home-list">
                  <Link to="/" className="home-navlink">
                    About
                  </Link>
                  <Link to="/" className="home-navlink1">
                    Services
                  </Link>
                  <Link to="/" className="home-navlink2">
                    How
                  </Link>
                  <Link to="/" className="home-navlink3">
                    <span className="home-text39">Why</span>
                    <br></br>
                  </Link>
                </div>
              </div>
              <div className="home-column3">
                <span className="home-header16">Social</span>
                <div className="home-list1">
                  <Link to="/" className="home-navlink4">
                    LinkedIn
                  </Link>
                  <Link to="/" className="home-navlink5">
                    Twitter
                  </Link>
                  <Link to="/" className="home-navlink6">
                    Instagram
                  </Link>
                  <Link to="/" className="home-navlink7">
                    Facebook
                  </Link>
                  <Link to="/" className="home-navlink8">
                    TikTok
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Script
          html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
        ></Script>
      </div>
    </div>
  )
}

export default Home
