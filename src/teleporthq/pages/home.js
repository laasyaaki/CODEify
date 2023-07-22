import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import ImageSlider from '../components/image-slider'
import WhoUsComponent from '../components/who-us-component'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Togthr template</title>
        <meta property="og:title" content="Togthr template" />
      </Helmet>
      <section className="home-hero">
        <video
          src="/production-id-5183276-1080p (1).mp4"
          loop
          muted
          poster="/hero-bg.png"
          preload="auto"
          autoPlay
          playsInline
          className="home-video"
        ></video>
        <header data-thq="thq-navbar" className="home-navbar">
          <img alt="image" src="/logo.svg" className="home-branding" />
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <div className="home-hamburger">
              <img alt="image" src="/hamburger.svg" className="home-icon" />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container1">
                <img alt="image" src="/logo.svg" className="home-image" />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon1">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <span className="home-text">About</span>
                <span className="home-text01">Features</span>
                <span className="home-text02">Pricing</span>
                <span className="home-text03">Team</span>
                <span className="home-text04">Blog</span>
              </nav>
              <div className="home-container2">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon3">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon5">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon7">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-hero-content">
          <div className="home-header-container">
            <div className="home-header">
              <h1 className="home-heading">
                <span>Code... with Codeify</span>
                <br></br>
              </h1>
            </div>
            <p className="home-caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <button type="button" className="home-button button">
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-note">
        <h2 className="home-caption1">
          The most comprehensive lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna.
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
          <span className="home-text10">Objectives</span>
          <div className="home-container3">
            <div className="home-objectives-list">
              <div className="objective">
                <h3 className="home-text11">Growth</h3>
                <p className="home-text12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="objective home-objective1">
                <h3 className="home-text13">Develop</h3>
                <p className="home-text14">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="objective home-objective2">
                <h3 className="home-text15">Optimize</h3>
                <p className="home-text16">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container4">
        <h1 className="home-text17">Explore Our Courses</h1>
      </div>
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
        <div className="home-container5">
          <h1 className="home-text20">
            <span className="home-text21">Our Courses</span>
            <br></br>
            <br></br>
          </h1>
        </div>
        <div className="home-container6">
          <ImageSlider rootClassName="image-slider-root-class-name"></ImageSlider>
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
              <span>Get started today</span>
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
            image_src="https://images.unsplash.com/photo-1689351779949-35df2fe11464?ixid=M3w5MTMyMXwwfDF8YWxsfDIwfHx8fHx8Mnx8MTY4OTk4MDkwOXw&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="who-us-component-root-class-name"
          ></WhoUsComponent>
          <WhoUsComponent
            text="Founder/Global Executive Director"
            rootClassName="who-us-component-root-class-name2"
          ></WhoUsComponent>
          <WhoUsComponent
            text="Founder/Global Executive Director"
            image_src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHBlcnNvbnxlbnwwfHx8fDE2ODk5NzM5NTZ8MA&amp;ixlib=rb-4.0.3&amp;h=1500"
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
              <h3 className="home-header09">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="home-content05">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-element1">
              <h3 className="home-header10">
                Excepteur sint occaecat cupidatat non sunt in culpa qui officia
                deserunt mollit anim id est laborum?
              </h3>
              <p className="home-content06">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="home-element2">
              <h3 className="home-header11">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="home-content07">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="home-column1">
            <div className="home-element3">
              <h3 className="home-header12">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="home-content08">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="home-element4">
              <h3 className="home-header13">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="home-content09">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-element5">
              <h3 className="home-header14">Incididunt ut labore et dolore?</h3>
              <p className="home-content10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-content11">
          <div className="home-main">
            <div className="home-branding1">
              <img alt="image" src="/logo.svg" className="home-image3" />
              <span className="home-text38">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="home-links">
              <div className="home-column2">
                <span className="home-header15">Company</span>
                <div className="home-list">
                  <Link to="/" className="home-navlink">
                    About
                  </Link>
                  <Link to="/" className="home-navlink01">
                    Services
                  </Link>
                  <Link to="/" className="home-navlink02">
                    How
                  </Link>
                  <Link to="/" className="home-navlink03">
                    <span className="home-text39">Why</span>
                    <br></br>
                  </Link>
                </div>
              </div>
              <div className="home-column3">
                <span className="home-header16">Extern</span>
                <div className="home-list1">
                  <Link to="/" className="home-navlink04">
                    News
                  </Link>
                  <Link to="/" className="home-navlink05">
                    Articles
                  </Link>
                  <Link to="/" className="home-navlink06">
                    Blog
                  </Link>
                  <Link to="/" className="home-navlink07">
                    Privacy
                  </Link>
                  <Link to="/" className="home-navlink08">
                    Terms
                  </Link>
                  <Link to="/" className="home-navlink09">
                    Legal
                  </Link>
                  <Link to="/" className="home-navlink10">
                    Press
                  </Link>
                </div>
              </div>
              <div className="home-column4">
                <span className="home-header17">Social</span>
                <div className="home-list2">
                  <Link to="/" className="home-navlink11">
                    LinkedIn
                  </Link>
                  <Link to="/" className="home-navlink12">
                    Twitter
                  </Link>
                  <Link to="/" className="home-navlink13">
                    Instagram
                  </Link>
                  <Link to="/" className="home-navlink14">
                    Facebook
                  </Link>
                  <Link to="/" className="home-navlink15">
                    TikTok
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <span className="home-text41">
              © 2022 togthr - All rights reserved
            </span>
            <button data-role="scroll-top" className="home-button4 button">
              <img alt="image" src="/arrow.svg" className="home-image4" />
            </button>
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
