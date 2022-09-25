import styled from "styled-components";

export const HomeWrapper = styled.div`
  body {
    max-width: 500px;
    min-width: 375px;
  }

  .forma1 {
    font-family: "IBM Plex Sans", sans-serif;
    position: absolute;
    right: 0px;
  }

  header {
    display: flex;
    justify-content: flex-start;
    padding: 20px;

    h3 {
      font-family: "IBM Plex Sans", sans-serif;
      font-size: 2rem;
    }

    .forma-item {
      display: none;
    }
  }

  .text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    padding: 7%;

    h1 {
      font-family: "IBM Plex Sans", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 3rem;
      line-height: 48px;
      /* or 120% */

      letter-spacing: -0.454545px;

      color: #191826;
    }

    p {
      font-family: "IBM Plex Sans", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1.1rem;
      line-height: 26px;
      /* or 162% */

      color: #191826;
    }
  }

  .mobile-phone-picture {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #191826;
    border-radius: 12px;
    margin-top: 45%;
  }

  .mobile-phone-picture > picture {
    position: relative;
    top: -100px;
  }

  .cell-phone-container-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    position: absolute;
    width: 100%;
    height: 546px;
    left: 0px;
    top: 1020px;

    background: #fa7453;
    border-radius: 12px;

    h6 {
      width: 302px;
      height: 40px;
      left: 36px;
      top: 1050px;

      font-family: "IBM Plex Sans", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;

      color: #fcfaf9;
    }

    .description-text {
      width: 302px;
      height: 140px;
      left: 36px;
      top: 1102px;

      font-family: "IBM Plex Sans", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;

      color: #fcfaf9;
    }

    .dolar {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 7px;
      width: 75%;

      p {
        color: #ffffff;
      }
    }

    .price {
      font-family: "IBM Plex Sans", sans-serif;
      font-size: 5rem;
      font-style: normal;
      font-weight: 700;
    }

    .month {
      font-family: "IBM Plex Sans", sans-serif;
      font-size: 1.5rem;
    }

    .download-button-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 15px;

      width: 75%;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        padding: 6%;
        width: 100%;
        border-radius: 10px;
        border: none;

        font-family: "IBM Plex Sans", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 32px;
        /* identical to box height, or 178% */

        text-align: center;
        letter-spacing: -0.18px;
      }

      .iOS-button {
        color: #ffffff;
        background-color: #000000;
      }

      .android {
        background-color: #ffffff;
      }
    }
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 450px;
    gap: 20px;
    width: 100%;

    padding: 10%;

    h3 {
      font-size: 2rem;
      font-family: "IBM Plex Sans", sans-serif;
    }

    .footer-container {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 30px;
      width: 100%;

      .social-network-container {
        margin-top: 6%;
        margin-bottom: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 20px;
      }
    }
  }

  @media screen and (min-width: 501px) {
    min-width: 784px;

    .forma1 {
      width: 100%;
    }

    header {
      .forma-item {
        display: flex;
        position: absolute;
        right: 0%;
        top: 0%;
      }
    }

    .text-container {
      width: 70%;
    }

    .mobile-phone-picture {
      margin-top: 30%;
    }

    .mobile-phone-picture > picture {
      top: -130px;
      right: 120px;
    }
    .cell-phone-container-info {
      display: flex;
      justify-content: center;
      align-items: center;

      left: 230px;
      top: 870px;

      gap: 40px;
      width: 65%;
      height: 700px;

      .text-phone-offer {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;
        flex-direction: column;
        padding-left: 13%;
      }

      .description-text {
        width: 87%;
        font-size: 22px;
        line-height: 35px;
      }
    }

    footer {
      margin-top: 400px;
      padding: 5%;

      .footer-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 150px;
      }

      .text-info-footer {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        width: 60%;
      }
    }
  }

  @media screen and (min-width: 960px) {
    min-width: 100vw;

    .forma1 {
      display: flex;
      flex-direction: column;
      z-index: 2;
      background: url("../img/wallpapers/wallpaperInteristellar.jpg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: 100vh;
    }

    header {
      h3 {
        font-size: 3rem;
        margin-left: 12%;
        margin-top: 3%;
      }
    }

    .text-container {
      align-items: flex-start;
      width: 80%;
      margin-left: 15%;

      h1 {
        font-size: 8rem;
        line-height: 120px;
        margin-left: -15%;
      }

      p {
        font-size: 1.5rem;
        line-height: 40px;
        width: 70%;
        margin-left: -15%;
      }
    }

    .mobile-phone-picture  > picture{

      margin-left: -20%;

    }

    .container-download-app {
      width: 1110px;
      height: 600px;

      margin-left: 18%;
      margin-top: -10%;

      border-radius: 12px;
      width: 58%;
    }

    .cell-phone-container-info {
      width: 25%;
      left: 880px;
      top: 1150px;
    }

    footer {
      .footer-container {
        align-items: center;

        gap: 80px;
      }

      .text-info-footer {
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 90px;
        width: 30%;
      }

      .social-network-container {
        margin-top: 0% !important;
        margin-bottom: 0% !important;
      }
    }
  }
`;
