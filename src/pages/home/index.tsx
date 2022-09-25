import forma1 from "../../assets/forma1.png";
import forma2 from "../../assets/forma2.png";
import forma3 from "../../assets/forma3.png";

import formaItem from "../../assets/formaItem.png";

import mobilePicture from "../../assets/MobilePhonePicture.png";
import TabletMobilePicture from "../../assets/TabletMobilePhonePicture.png";
import DesktopMobilePicture from "../../assets/DesktopMobilePicture.png";

import { HomeWrapper } from "./style";

export function Home() {
  return (
    <HomeWrapper>
      
      <picture className="forma1">
        <source media="(min-width:960px)" srcSet={forma3} />
        <source media="(min-width:501px)" srcSet={forma2} />

        <img src={forma1} alt="forma1" />
      </picture>

      <header>
        <h3> equalizer </h3>
        <picture className="forma-item">
          <source media="(min-width:960px)" srcSet={formaItem} />
          <source media="(min-width:501px)" srcSet={formaItem} />

          <img src={formaItem} alt="forma" />
        </picture>
      </header>
      <main>
        <section>
          <div className="text-container">
            <h1>We make your music sound extraordinary.</h1>
            <p>
              A system audio equalizer specifically designed for Android and
              iOS. Freely tune the way your music sounds with a professional
              grade parametric EQ & volume mixer. Control bass, mids, treble,
              gain control, reverb, and more!
            </p>
          </div>
        </section>

        <section>
          <div className="container-download-app">
            <div className="mobile-phone-picture">
              <picture>
                <source
                  media="(min-width:960px)"
                  srcSet={DesktopMobilePicture}
                />
                <source
                  media="(min-width:501px)"
                  srcSet={TabletMobilePicture}
                />
                <img src={mobilePicture} alt="mobile phone" />
              </picture>
            </div>

            <div className="cell-phone-container-info">
              <div className="text-phone-offer">
                <h6>Premium EQ</h6>
                <p className="description-text">
                  Get expert-level control with a robust equalizer, volume
                  mixer, and spatial audio. Take your listening experience to a
                  whole new level and access all our incredible features!
                </p>
              </div>

              <div className="dolar">
                <p className="price">$4</p>
                <p className="month">/ month</p>
              </div>

              <div className="download-button-container">
                <button className="iOS-button">
                  <svg
                    width="18"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.683 4.681c1.359 0 2.798.745 3.821 2.029-3.356 1.851-2.812 6.674.58 7.965-.467 1.04-.69 1.504-1.292 2.425-.839 1.285-2.02 2.886-3.486 2.897-1.302.014-1.637-.852-3.403-.842-1.766.009-2.134.857-3.437.845C4 19.987 2.88 18.542 2.042 17.257-.302 13.667-.549 9.45.897 7.207c1.029-1.592 2.651-2.523 4.175-2.523 1.551 0 2.527.856 3.812.856 1.247 0 2.005-.859 3.8-.859ZM12.291 0c.178 1.215-.315 2.405-.968 3.246-.697.904-1.901 1.603-3.066 1.566-.213-1.163.332-2.36.995-3.167C9.978.756 11.224.074 12.291 0Z"
                      fill="#FCFAF9"
                    />
                  </svg>
                  iOS Download
                </button>
                <button className="android">
                  <svg
                    width="17"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.362 6.638v8.35c0 .502-.334.836-.836.836h-.836v2.924c0 .669-.583 1.252-1.251 1.252-.67 0-1.252-.583-1.252-1.252v-2.924H7.515v2.924c0 .669-.583 1.252-1.252 1.252s-1.252-.583-1.252-1.252v-2.924h-.836c-.501 0-.836-.334-.836-.835v-8.35h10.023Zm2.088 0c.669 0 1.252.586 1.252 1.251v5.848c0 .668-.583 1.252-1.252 1.252s-1.252-.584-1.252-1.252V7.889c0-.665.583-1.25 1.252-1.25Zm-14.198 0c.669 0 1.252.586 1.252 1.251v5.848c0 .668-.583 1.252-1.252 1.252S0 14.405 0 13.737V7.889c0-.665.583-1.25 1.252-1.25ZM11.776.126a.4.4 0 0 1 .583 0 .401.401 0 0 1 0 .583l-1.085 1.084c.35.234.667.52.942.846.66.782 1.081 1.8 1.139 2.902l.002.034c.003.075.005.15.005.227H3.34c0-.076.002-.152.006-.227l.002-.034a4.908 4.908 0 0 1 1.138-2.902 4.52 4.52 0 0 1 .942-.846L4.343.71a.4.4 0 0 1 0-.583.4.4 0 0 1 .583 0l1.12 1.118.053.051c.664-.333 1.41-.499 2.24-.5h.024c.83.001 1.575.167 2.24.5l.052-.051ZM6.262 3.09a.626.626 0 1 0 0 1.252.626.626 0 0 0 0-1.252Zm4.178 0a.626.626 0 1 0 0 1.252.626.626 0 0 0 0-1.252Z"
                      fill="#191826"
                    />
                  </svg>
                  Android Download
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-container">
          <div className="text-info-footer">
          <h3>equalizer</h3>
            <p>
              All rights reserved © Equalizer 2021 Have any problems? Contact us
              via social media or email us at{" "}
              <strong>equalizer@example.com</strong>
            </p>
          </div>
          <div className="social-network-container">
            <a href="#">
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0Z"
                  fill="#191826"
                />
              </svg>
            </a>
            <a href="#">
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058ZM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0Zm0 4.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27Zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666Zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
                  fill="#191826"
                />
              </svg>
            </a>
            <a href="#">
              <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 2.172a8.192 8.192 0 0 1-2.357.646 4.11 4.11 0 0 0 1.805-2.27 8.22 8.22 0 0 1-2.606.996A4.096 4.096 0 0 0 13.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 0 1 1.392 1a4.109 4.109 0 0 0 1.27 5.478 4.086 4.086 0 0 1-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 0 1-1.853.07 4.106 4.106 0 0 0 3.833 2.849A8.25 8.25 0 0 1 0 14.658a11.616 11.616 0 0 0 6.29 1.843c7.618 0 11.923-6.434 11.663-12.205A8.354 8.354 0 0 0 20 2.172Z"
                  fill="#191826"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </HomeWrapper>
  );
}

export default Home;
