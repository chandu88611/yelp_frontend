"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import RootLayout from "./layout";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [txt, setTxt] = useState("");
  const toRotate = ["Runs in all Market"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setloading] = useState(false);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const faqContentLeft = [
    {
      question: "What is AI trading?",
      answer:
        "AI trading, also known as algorithmic trading or automated trading, refers to the use of artificial intelligence and machine learning algorithms to analyze financial markets, identify trading opportunities, and execute trades automatically without human intervention.",
    },
    {
      question: "How does Algo trading work?",
      answer:
        "Algo trading systems use historical market data to train machine learning models that recognize patterns and trends. These models are then used to make predictions about future market movements and generate trading signals. When certain conditions are met, the AI system executes trades based on predefined algorithms and rules.",
    },
    {
      question: "What are the advantages of Algo trading?",
      answer:
        "Algo trading offers several advantages including increased speed and efficiency in executing trades, the ability to process vast amounts of data in real-time, the elimination of human emotions from trading decisions, and the potential for better risk management and improved trading performance.",
    },
  ];

  const faqContentRight = [
    {
      question: "Is Algo trading suitable for beginners?",
      answer:
        "While Algo trading can be powerful, it’s important for beginners to understand the risks involved and have a basic understanding of financial markets and trading principles. Some Algo trading platforms offer user-friendly interfaces and educational resources to help beginners get started.",
    },
    {
      question: "How do I evaluate the performance of an Algo trading system?",
      answer:
        "The performance of an Algo trading system can be evaluated based on metrics such as profitability, risk-adjusted returns, drawdowns, win rate, and consistency of performance over time. It’s also important to consider factors such as transparency, reliability, and the track record of the Algo system provider.",
    },
    {
      question: "Can I customize the parameters of an Algo trading system?",
      answer:
        "Yes, many Algo trading platforms allow users to customize parameters such as risk tolerance, position sizing, trading frequency, and specific trading rules to align with their individual preferences and investment goals.",
    },
  ];

  const text = "uns in all Market";
  const period = 100;
  const [displayText, setDisplayText] = useState("R");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 700 });
    const interval = setInterval(() => {
      if (textIndex === text.length) {
        setTextIndex(0);
        setDisplayText("R");
        return;
      }
      // Append one letter from the text to the display text
      setDisplayText((prevText) => prevText + text[textIndex]);
      // Move to the next letter in the text
      setTextIndex((prevIndex) => prevIndex + 1);
    }, period);
    return () => clearInterval(interval);
  }, [textIndex]);
  return (
    <>
      <section>
        <div
          className="banner-1 cover-image sptb-2 sptb-tab bg-background2"
          data-bs-image-src="../assets/images/banners/banner1.jpg"
          style={{
            background:
              'url("../assets/images/banners/banner1.jpg") center center',
          }}
        >
          <div className="header-text text-1 mb-0">
            <div className="container">
              <div className="text-center text-white mb-7">
                <h1 className="mb-1 underline  ">
                  Welcome To The Biggest Business Directory
                </h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable.
                </p>
              </div>
              <div className="row">
                <div className="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
                  <div className="search-background py-3 px-4 bg-white-transparent">
                    <div className="form row row-sm">
                      <div className="form-group col-xl-4 col-lg-3 col-md-12 mb-0">
                        <div
                          className="xdsoft_autocomplete"
                          style={{ display: "block", width: "521.2px" }}
                        >
                          <input
                            type="text"
                            className="form-control input-lg keywords-input xdsoft_input"
                            id="text4"
                            placeholder=" Phrase or Keywords"
                            autoComplete="off"
                            style={{ fontSize: 15, background: "white" }}
                          />
                          <div
                            className="xdsoft_autocomplete_dropdown"
                            style={{
                              left: 0,
                              top: 46,
                              marginLeft: 0,
                              marginRight: 0,
                              width: 521,
                            }}
                          />
                          <input
                            readOnly=""
                            className="xdsoft_autocomplete_hint"
                            style={{
                              boxSizing: "border-box",
                              borderStyle: "solid",
                              borderCollapse: "separate",
                              borderWidth: "0.8px",
                              padding: "6px 12px",
                              margin: 0,
                              maxHeight: "none",
                              minHeight: 0,
                              maxWidth: "none",
                              minWidth: 0,
                              width: "521.2px",
                              letterSpacing: "normal",
                              lineHeight: 24,
                              outlineWidth: 0,
                              fontFamily: "Roboto, sans-serif",
                              fontVariant: "normal",
                              fontStyle: "normal",
                              fontSize: 15,
                              fontWeight: 400,
                              flex: "0 1 auto",
                              justifyContent: "normal",
                              borderRadius: 3,
                              boxShadow: "none",
                              height: 46,
                              position: "absolute",
                              zIndex: 1,
                              borderColor: "transparent",
                              outlineColor: "transparent",
                              left: 0,
                              top: 0,
                              background:
                                "none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group col-xl-3 col-lg-3 col-md-12 mb-0">
                        <input
                          type="text"
                          className="form-control input-lg location-input"
                          id="text5"
                          placeholder="Enter Location"
                        />
                        <span>
                          <img
                            src="../assets/images/svgs/gps.svg"
                            className="location-gps"
                            alt="img"
                          />
                        </span>
                      </div>
                      <div className="form-group col-xl-3 col-lg-3 col-md-12 select2-lg mb-0">
                        <select
                          className="form-control select2-show-search border-bottom-0 select2-hidden-accessible"
                          data-placeholder="Select Category"
                          data-select2-id="select2-data-1-b9ix"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <optgroup label="Categories">
                            <option data-select2-id="select2-data-3-h8lw">
                              Select Category
                            </option>
                            <option value={0}>All Categories</option>
                            <option value={1}>Hotels</option>
                            <option value={2}>Restaurant</option>
                            <option value={3}>Events</option>
                            <option value={4}>Cinema</option>
                            <option value={5}>Gym</option>
                            <option value={6}>Shop &amp; Store</option>
                            <option value={7}>Tours &amp; Travels</option>
                            <option value={8}>Cafe</option>
                            <option value={9}>Mobile Store</option>
                            <option value={10}>College</option>
                          </optgroup>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-2-i2cm"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-p3nw-container"
                              aria-controls="select2-p3nw-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-p3nw-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Select Category"
                              >
                                Select Category
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-12 mb-0">
                        <a
                          href="javascript:void(0)"
                          className="btn btn-lg btn-block btn-secondary"
                        >
                          Search Here
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /header-text */}
        </div>
      </section>
      <section className="categories">
        <div className="container">
          <div
            id="small-categories"
            className="owl-carousel owl-carousel-icons2 owl-loaded owl-drag"
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-7954px, 0px, 0px)",
                  transition: "all",
                  width: 13637,
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Education Icon Svg */}
                            <svg
                              viewBox="0 0 512 512.001"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m500.742188 310.6875-16.910157-7.453125c-3.8125-1.679687-8.269531.050781-9.949219 3.863281-1.683593 3.8125.046876 8.257813 3.863282 9.941406l16.910156 7.464844c1.148438.5 1.386719 1.207032 1.386719 1.71875 0 .503906-.238281 1.207032-1.386719 1.710938l-138.230469 60.957031c-.867187.382813-1.972656.382813-2.847656 0-43.414063-19.144531-29.1875-12.871094-67.65625-29.839844l50.148437-23.078125c18.097657 10.96875 47.980469 2.609375 47.980469-15.816406 0-11.613281-12.757812-20.710938-29.046875-20.710938-18.304687 0-31.710937 11.421876-28.605468 24.363282l-58.910157 27.113281c-6.253906-2.757813-45.882812-20.230469-52.132812-22.988281-1.855469-.8125-1.867188-2.609375 0-3.429688l138.222656-60.957031c.875-.382813 1.980469-.382813 2.855469 0 67.898437 29.933594-4.355469-1.917969 93.695312 41.316406 3.8125 1.683594 8.269532-.046875 9.949219-3.863281 1.679687-3.8125-.050781-8.257812-3.863281-9.949219l-54.570313-24.054687v-126.339844c0-20.578125 0-29.476562 0-50.523438 0-13.777343-11.214843-24.921874-24.917969-24.921874h-68.792968v-23.691407c0-22.886719-18.621094-41.519531-41.511719-41.519531h-28.519531c-4.175782 0-7.546875 3.378906-7.546875 7.546875 0 4.171875 3.371093 7.542969 7.546875 7.542969h28.519531c14.570313 0 26.421875 11.863281 26.421875 26.429687v23.691407h-12.246094v-23.691407c0-7.816406-6.359375-14.183593-14.175781-14.183593h-131.199219c-7.816406 0-14.183594 6.367187-14.183594 14.183593v23.691407h-12.242187v-23.691407c0-14.566406 11.859375-26.429687 26.425781-26.429687h72.496094c4.167969 0 7.546875-3.371094 7.546875-7.542969 0-4.167969-3.378906-7.546875-7.546875-7.546875h-72.496094c-22.886718 0-41.519531 18.632812-41.519531 41.519531v23.691407h-68.78125c-13.742187 0-24.921875 11.179687-24.921875 24.921874v183.03125c0 4.164063 3.371094 7.542969 7.546875 7.542969 4.164063 0 7.542969-3.378906 7.542969-7.542969v-85.425781c11.421875 15.976563 28.488281 27.648438 48.257812 32.09375v22.128907c0 8.886718 7.234375 16.121093 16.125 16.121093h22.667969c8.890625 0 16.125-7.234375 16.125-16.121093v-20.15625h165.113281v20.15625c0 8.886718 7.234375 16.121093 16.121094 16.121093h22.671875c8.890625 0 16.121094-7.234375 16.121094-16.121093v-22.128907c19.773437-4.441406 36.84375-16.117187 48.261719-32.09375v72.597657l-24.035157-10.59375c-4.746093-2.09375-10.28125-2.09375-15.03125 0l-138.21875 60.945312c-13.867187 6.117188-13.847656 24.949219 0 31.058594l26.335938 11.609375v4.949219h-175.804688c-24.660156 0-44.710937-20.050782-44.710937-44.699219v-10.261719c0-4.164062-3.378906-7.542969-7.542969-7.542969-4.175781 0-7.546875 3.378907-7.546875 7.542969v10.261719c0 32.96875 26.820312 59.789062 59.800781 59.789062h175.808594v55.949219c0 11.097656 9.617187 20.070312 24.96875 26.851562v9.933594l-25.449219 33.785156c-2.507812 3.332032-1.839844 8.0625 1.488282 10.566407 3.328124 2.507812 8.058593 1.84375 10.566406-1.488281l13.394531-17.78125v13.242187c0 4.167969 3.378906 7.546875 7.546875 7.546875 4.164062 0 7.542969-3.378906 7.542969-7.546875v-13.234375l13.390625 17.773438c1.484375 1.972656 3.746094 3.007812 6.035156 3.007812 6.152344 0 9.785156-7.085938 6.019531-12.085938l-25.445312-33.78125v-4.476562c70.210937 20.835938 198.738281 8.226562 198.738281-32.316406v-75.984375l26.335938-11.609375c6.410156-2.828125 10.394531-8.785156 10.394531-15.523438 0-6.75-3.984375-12.707031-10.394531-15.535156zm-145.734376 3.847656c9.15625 0 13.953126 4.175782 13.953126 5.621094s-4.796876 5.617188-13.953126 5.617188c-9.085937 0-13.957031-4.160157-13.957031-5.617188 0-1.445312 4.796875-5.621094 13.957031-5.621094zm-218.878906-272.109375h129.378906v22.785157h-129.378906zm-32.953125 199.535157c0 .566406-.464843 1.03125-1.035156 1.03125h-22.667969c-.570312 0-1.035156-.464844-1.035156-1.03125v-20.203126c.902344.027344 1.804688.046876 2.710938.046876h22.027343zm0-35.246094h-22.027343c-.910157 0-1.808594-.035156-2.710938-.070313v-20.605469c0-.570312.464844-1.035156 1.035156-1.035156h22.667969c.570313 0 1.035156.464844 1.035156 1.035156zm220.027344 35.246094c0 .566406-.460937 1.03125-1.03125 1.03125h-22.667969c-.570312 0-1.03125-.464844-1.03125-1.03125v-20.15625h22.027344c.902344 0 1.804688-.015626 2.703125-.046876zm0-35.316407c-.898437.035157-1.796875.070313-2.703125.070313h-22.03125v-20.675782c0-.570312.464844-1.035156 1.03125-1.035156h22.671875c.570313 0 1.03125.464844 1.03125 1.035156zm15.09375-2.386719v-18.222656c0-8.890625-7.234375-16.121094-16.125-16.121094h-22.667969c-8.890625 0-16.125 7.230469-16.125 16.121094v20.675782h-165.113281v-20.675782c0-8.890625-7.234375-16.121094-16.125-16.121094h-22.667969c-8.890625 0-16.125 7.230469-16.125 16.121094v18.222656c-27.804687-7.792968-48.257812-33.347656-48.257812-63.601562v-50.523438c0-5.421874 4.40625-9.828124 9.832031-9.828124h351.804687c5.828126 0 9.828126 4.773437 9.828126 9.828124v50.523438c0 30.253906-20.453126 55.8125-48.257813 63.601562zm-77.71875 235.195313c-7.484375-4.214844-9.878906-8.007813-9.878906-10.109375 0-7.101562 0-62.625 0-69.328125l9.878906 4.355469zm198.734375-10.109375c0 3.269531-5.785156 10.601562-27.453125 17.324219-41.703125 12.921875-111.988281 13.570312-156.191406-.796875v-74.96875c7.179687 3.324218-3.28125-1.328125 71.824219 31.789062 4.777343 2.105469 10.238281 2.113282 15.027343 0l96.792969-42.675781zm0 0" />
                            </svg>
                            {/*Education Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Education </h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">7</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                70+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Computer Icon Svg */}
                            <svg
                              style={{
                                enableBackground: "new 0 0 511.999 511.999",
                              }}
                              version="1.1"
                              viewBox="0 0 511.999 511.999"
                              x="0px"
                              xmlns="http://www.w3.org/2000/svg"
                              y="0px"
                            >
                              <g>
                                <g>
                                  <path d="M386.455,198.212l-53.811-53.811c-3.253-3.254-8.528-3.255-11.784,0c-3.254,3.253-3.254,8.529,0,11.783l47.92,47.92 l-47.92,47.919c-3.254,3.253-3.254,8.529,0,11.783c1.628,1.628,3.76,2.441,5.892,2.441c2.132,0,4.265-0.814,5.891-2.44 l53.811-53.811C389.709,206.742,389.709,201.466,386.455,198.212z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M143.223,204.102l47.919-47.92c3.254-3.253,3.254-8.529,0-11.783c-3.253-3.254-8.529-3.254-11.783,0l-53.811,53.811 c-3.254,3.253-3.254,8.529,0,11.783l53.811,53.811c1.626,1.628,3.759,2.441,5.891,2.441s4.265-0.814,5.891-2.442 c3.254-3.253,3.254-8.529,0-11.783L143.223,204.102z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M283.22,118.176c-4.386-1.39-9.07,1.041-10.458,5.427L223.356,279.57c-1.39,4.387,1.04,9.07,5.427,10.46 c0.838,0.266,1.685,0.391,2.519,0.391c3.535,0,6.816-2.269,7.941-5.818l49.404-155.967 C290.037,124.248,287.607,119.565,283.22,118.176z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M471.246,24.766H40.754C18.283,24.766,0,43.049,0,65.52v59.227c0,4.602,3.731,8.332,8.332,8.332 c4.601,0,8.332-3.731,8.332-8.332V65.52c0-13.284,10.807-24.09,24.09-24.09h430.492c13.284,0,24.09,10.807,24.09,24.09v284.411 h-52.21c-4.602,0-8.332,3.731-8.332,8.332s3.731,8.332,8.332,8.332h52.21v15.273c0,13.284-10.807,24.09-24.09,24.09h-155.41 H196.164H40.754c-13.284,0-24.09-10.807-24.09-24.09v-15.273h398.688c4.602,0,8.332-3.731,8.332-8.332s-3.731-8.332-8.332-8.332 H16.664V152.522c0-4.602-3.731-8.332-8.332-8.332c-4.601,0-8.332,3.73-8.332,8.332V381.87c0,22.472,18.283,40.754,40.754,40.754 H183.54l-20.494,47.945h-40.034c-4.602,0-8.332,3.731-8.332,8.332s3.731,8.332,8.332,8.332h265.975 c4.602,0,8.332-3.731,8.332-8.332s-3.731-8.332-8.332-8.332h-40.034l-20.494-47.945h142.786c22.472,0,40.754-18.282,40.754-40.754 V65.52C512,43.049,493.717,24.766,471.246,24.766z M330.83,470.568H181.17l14.238-33.31h121.185L330.83,470.568z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M262.924,379.679c-1.914-2.906-5.583-4.299-8.952-3.457c-3.517,0.879-6.116,4.048-6.291,7.67 c-0.364,7.534,9.106,11.629,14.33,6.172C264.674,387.282,265.089,382.887,262.924,379.679z"></path>
                                </g>
                              </g>
                              <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g />
                              <g />
                              <g /> <g /> <g /> <g /> <g /> <g />
                            </svg>
                            {/*Computer Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Computer</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">20</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                120+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Construction Icon Svg */}
                            <svg
                              style={{
                                enableBackground: "new 0 0 511.999 511.999",
                              }}
                              version="1.1"
                              viewBox="0 0 511.999 511.999"
                              x="0px"
                              xmlns="http://www.w3.org/2000/svg"
                              y="0px"
                            >
                              <g>
                                <g>
                                  <path d="M453.034,361.322c-2.808-1.164-6.04-0.521-8.19,1.628l-82.126,82.126c-2.149,2.15-2.792,5.382-1.628,8.19 c1.162,2.809,3.904,4.639,6.943,4.639h82.126c4.151,0,7.515-3.364,7.515-7.515v-82.126 C457.673,365.225,455.842,362.485,453.034,361.322z M386.173,442.876l56.469-56.469v56.469H386.173z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M507.361,240.867c-2.808-1.164-6.04-0.521-8.19,1.628l-22.507,22.507V111.971c0-4.151-3.365-7.515-7.515-7.515h-57.741 l20.96-20.96c0.003-0.003,0.006-0.007,0.009-0.01l20.196-20.196c4.327-4.327,6.71-10.083,6.71-16.203s-2.383-11.874-6.71-16.203 L429.219,7.53c-4.327-4.327-10.083-6.71-16.203-6.71s-11.875,2.383-16.203,6.71l-20.206,20.206l-24.416,24.416l-52.303,52.303 H66.62V30.11c0-4.151-3.365-7.515-7.515-7.515C26.515,22.597,0,49.11,0,81.702v319.186c0,0.555,0.064,1.095,0.178,1.615 c1.038,13.829,7.021,26.678,17.02,36.432C27.886,449.359,41.995,455.1,56.927,455.1h229.638l-43.249,43.249 c-2.149,2.15-2.792,5.381-1.629,8.19c1.163,2.808,3.904,4.639,6.943,4.639h255.855c4.15,0,7.515-3.364,7.515-7.515V247.81 C512,244.771,510.168,242.03,507.361,240.867z M407.443,18.159c3.072-3.074,8.077-3.074,11.149,0l23.355,23.355 c3.074,3.073,3.074,8.076,0,11.15l-14.891,14.892L392.55,33.051L407.443,18.159z M381.922,43.679l34.505,34.504l-13.789,13.789 l-34.503-34.504L381.922,43.679z M496.972,332.252h-13.865c-4.151,0-7.515,3.364-7.515,7.515c0,4.151,3.364,7.515,7.515,7.515 h13.865v22.646h-13.865c-4.151,0-7.515,3.364-7.515,7.515s3.364,7.515,7.515,7.515h13.865v22.645h-13.865 c-4.151,0-7.515,3.364-7.515,7.515c0,4.151,3.364,7.515,7.515,7.515h13.865v22.646h-13.865c-4.151,0-7.515,3.365-7.515,7.515 c0,4.151,3.364,7.515,7.515,7.515h13.865v35.842h-230.2l75.908-75.907c2.935-2.936,2.935-7.693,0-10.628 c-0.337-0.337-0.699-0.629-1.078-0.889c-2.926-2.004-6.952-1.709-9.551,0.889l-30.456,30.456H56.928 c-22.792,0-41.14-17.794-41.862-40.545c0.043-1.428,0.154-2.844,0.332-4.244c0.001-0.008,0.002-0.016,0.003-0.024 c0.084-0.665,0.185-1.327,0.3-1.985c0.013-0.075,0.027-0.15,0.04-0.225c0.105-0.587,0.223-1.171,0.352-1.753 c0.036-0.162,0.074-0.324,0.112-0.485c0.114-0.492,0.237-0.981,0.369-1.468c0.072-0.264,0.147-0.525,0.224-0.788 c0.11-0.382,0.224-0.763,0.345-1.14c0.121-0.377,0.25-0.75,0.381-1.123c0.091-0.261,0.181-0.522,0.279-0.781 c0.183-0.492,0.377-0.979,0.577-1.462c0.057-0.139,0.113-0.28,0.172-0.419c0.257-0.6,0.524-1.193,0.806-1.779 c0.012-0.025,0.023-0.05,0.035-0.075c5.878-12.164,17.183-21.233,30.75-24.047c0.038-0.008,0.076-0.017,0.114-0.025 c0.622-0.127,1.25-0.236,1.882-0.337c0.105-0.017,0.21-0.038,0.317-0.054c0.571-0.087,1.148-0.155,1.725-0.22 c0.162-0.018,0.323-0.043,0.486-0.059c0.557-0.056,1.119-0.093,1.681-0.128c0.178-0.011,0.356-0.03,0.534-0.039 c0.736-0.037,1.478-0.056,2.223-0.056c4.15,0,7.515-3.364,7.515-7.515v-54.489c0-4.151-3.365-7.515-7.515-7.515 c-4.15,0-7.515,3.364-7.515,7.515v47.447c-12.69,1.605-24.469,7.265-33.757,16.335c-0.977,0.954-1.903,1.946-2.805,2.954V81.702 c0-21.741,15.826-39.858,36.561-43.436v73.705v152.777v0.001c0,4.15,3.365,7.515,7.515,7.515c4.15,0,7.515-3.365,7.515-7.515 v-0.001V119.486h218.24l-41.544,41.544c-2.935,2.936-2.935,7.693,0,10.628c2.935,2.934,7.693,2.934,10.627,0l54.373-54.373 c0.002-0.002,0.003-0.004,0.005-0.005l49.185-49.185l34.503,34.505l-4.048,4.048c-0.003,0.003-0.007,0.006-0.01,0.009 l-151.528,151.53l-34.504-34.504l29.868-29.868c2.935-2.936,2.935-7.693,0-10.628c-2.935-2.934-7.693-2.934-10.627,0 l-35.183,35.182c-0.188,0.188-0.364,0.387-0.529,0.591c-0.055,0.068-0.104,0.141-0.156,0.212c-0.106,0.141-0.21,0.283-0.307,0.431 c-0.055,0.086-0.105,0.174-0.157,0.263c-0.083,0.14-0.163,0.282-0.236,0.427c-0.048,0.094-0.091,0.189-0.135,0.287 c-0.067,0.147-0.129,0.297-0.186,0.447c-0.02,0.053-0.046,0.103-0.065,0.156l-14.641,41.475l-9.982,28.279 c-0.132,0.376-0.227,0.758-0.298,1.143h-24.992c-4.15,0-7.515,3.364-7.515,7.515c0,4.151,3.365,7.515,7.515,7.515h208.114 c4.151,0,7.515-3.364,7.515-7.515c0-4.151-3.364-7.515-7.515-7.515H193.093l45.83-16.178c0.038-0.014,0.074-0.033,0.112-0.047 c0.178-0.066,0.353-0.14,0.526-0.219c0.069-0.032,0.138-0.062,0.205-0.095c0.18-0.09,0.357-0.189,0.531-0.295 c0.056-0.034,0.114-0.065,0.169-0.1c0.181-0.116,0.357-0.243,0.53-0.377c0.043-0.033,0.088-0.062,0.13-0.096 c0.209-0.168,0.414-0.349,0.608-0.543l154.644-154.643h65.255v160.546L354.137,387.53c-2.935,2.936-2.935,7.693,0,10.628 c0.183,0.183,0.374,0.355,0.571,0.516c1.378,1.123,3.061,1.685,4.743,1.685s3.366-0.562,4.743-1.685 c0.197-0.16,0.388-0.333,0.571-0.516c0.003-0.003,0,0,0.003-0.003L496.972,265.95V332.252z M222.677,265.696l-21.526,7.599 l-14.342-14.342l7.599-21.526L222.677,265.696z"></path>
                                </g>
                              </g>
                              <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g />
                              <g />
                              <g /> <g /> <g /> <g /> <g /> <g />
                            </svg>
                            {/*Construction Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Construction</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">8</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                140+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Furniture Icon Svg */}
                            <svg
                              style={{ enableBackground: "new 0 0 512 512" }}
                              version="1.1"
                              viewBox="0 0 512 512"
                              x="0px"
                              xmlns="http://www.w3.org/2000/svg"
                              y="0px"
                            >
                              <g>
                                <g>
                                  <path d="M511.168,344.981c0.789-2.112,1.067-4.437,0.341-6.784l-42.176-137.067V74.667c0-29.397-23.915-53.333-53.333-53.333H96 c-29.419,0-53.333,23.936-53.333,53.333v126.464L0.491,338.197c-0.725,2.325-0.448,4.651,0.341,6.784 C0.32,347.243,0,349.568,0,352v85.333V480c0,5.888,4.779,10.667,10.667,10.667h42.667C59.221,490.667,64,485.888,64,480v-32h384 v32c0,5.888,4.779,10.667,10.667,10.667h42.667c5.888,0,10.667-4.779,10.667-10.667v-42.667V352 C512,349.568,511.68,347.243,511.168,344.981z M64,74.667c0-17.643,14.357-32,32-32h320c17.643,0,32,14.357,32,32V192h-28.992 l-9.941-39.765C405.483,137.963,392.704,128,378.005,128h-68.672c-17.643,0-32,14.357-32,32v32h-42.667v-31.979 c0-17.643-14.357-32-32-32h-68.672c-14.699,0-27.477,9.984-31.061,24.235L92.992,192H64V74.667z M397.099,209.237 c-2.048,2.603-5.12,4.096-8.427,4.096h-79.339c-5.867,0-10.667-4.779-10.667-10.667V160c0-5.888,4.8-10.667,10.667-10.667h68.693 c4.907,0,9.152,3.307,10.347,8.064l10.667,42.667C399.851,203.285,399.147,206.613,397.099,209.237z M213.355,160v42.56 c0,0.043-0.021,0.064-0.021,0.107c0,0.021,0,0.043,0,0.043c-0.021,5.867-4.8,10.624-10.645,10.624h-79.339 c-3.328,0-6.379-1.493-8.427-4.096c-2.048-2.624-2.752-5.973-1.941-9.173l10.667-42.667c1.195-4.736,5.44-8.064,10.368-8.064 h68.672C208.555,149.333,213.355,154.112,213.355,160z M61.205,213.333h32.107c1.131,3.2,2.603,6.272,4.757,9.045 c6.144,7.808,15.339,12.288,25.259,12.288h79.339c13.888,0,25.621-8.96,30.037-21.333h46.592 c4.416,12.395,16.149,21.333,30.037,21.333h79.339c9.92,0,19.093-4.48,25.237-12.288c2.155-2.752,3.627-5.845,4.757-9.045h32.128 l32.939,107.051C482.496,320.235,481.28,320,480,320H32c-1.28,0-2.496,0.235-3.712,0.384L61.205,213.333z M42.667,469.333H21.333 V448h21.333V469.333z M490.667,469.333h-21.333V448h21.333V469.333z M490.667,426.667H21.333V352 c0-5.888,4.8-10.667,10.667-10.667h448c5.867,0,10.667,4.779,10.667,10.667V426.667z"></path>
                                </g>
                              </g>
                              <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g />
                              <g />
                              <g /> <g /> <g /> <g /> <g /> <g />
                            </svg>
                            {/*Furniture Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Furnitures</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">8</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                140+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Electronics Icon Svg */}
                            <svg
                              viewBox="0 -24 480 480"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m440 0h-400c-22.082031.0273438-39.9726562 17.917969-40 40v272c.0273438 22.082031 17.917969 39.972656 40 40h400c22.082031-.027344 39.972656-17.917969 40-40v-272c-.027344-22.082031-17.917969-39.9726562-40-40zm24 312c0 13.253906-10.746094 24-24 24h-400c-13.253906 0-24-10.746094-24-24v-272c0-13.253906 10.746094-24 24-24h400c13.253906 0 24 10.746094 24 24zm0 0" />
                              <path d="m440 32h-400c-4.417969 0-8 3.582031-8 8v272c0 4.417969 3.582031 8 8 8h400c4.417969 0 8-3.582031 8-8v-272c0-4.417969-3.582031-8-8-8zm-8 272h-384v-256h384zm0 0" />
                              <path d="m472 368h-464c-4.417969 0-8 3.582031-8 8 .0390625 30.910156 25.089844 55.960938 56 56h368c30.910156-.039062 55.960938-25.089844 56-56 0-4.417969-3.582031-8-8-8zm-48 48h-368c-19-.019531-35.375-13.386719-39.199219-32h446.398438c-3.824219 18.613281-20.199219 31.980469-39.199219 32zm0 0" />
                              <path d="m56 408h368c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-368c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8zm0 0" />
                            </svg>
                            {/*Electronics Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Electronics</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">8</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                240+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned animated owl-animated-out fadeOutDown"
                  style={{ width: "543.2px", marginRight: 25, left: 568 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Health Icon Svg */}
                            <svg
                              style={{
                                enableBackground: "new 0 0 427.972 427.972",
                              }}
                              version="1.1"
                              viewBox="0 0 427.972 427.972"
                              x="0px"
                              xmlns="http://www.w3.org/2000/svg"
                              y="0px"
                            >
                              <g>
                                <path d="M426.398,238.441l-7.616-111.077c-0.494-7.195-3.766-13.761-9.212-18.488c-5.447-4.727-12.408-7.042-19.6-6.517 c-14.137,1.03-25.101,12.94-24.961,27.113l0.899,90.552l-39.225,50.237c-6.262,8.019-16.651,11.239-26.075,8.824l42.678-55.422 c7.491-9.728,6.246-23.821-2.833-32.084c-4.847-4.412-11.115-6.592-17.657-6.134c-6.539,0.457-12.446,3.485-16.634,8.528 l-64.473,77.645c-10.633,12.806-16.399,29.024-16.238,45.668l1.001,103.112c0.04,4.11,3.38,7.421,7.49,7.427l107.354,0.146 c0.003,0,0.007,0,0.01,0c2.1,0,4.104-0.88,5.524-2.427c1.423-1.55,2.13-3.625,1.947-5.722l-4.382-50.472l71.267-94.714 C423.474,264.256,427.286,251.401,426.398,238.441z M403.677,265.619l-72.994,97.01c-1.112,1.478-1.639,3.315-1.479,5.158 l3.922,45.174l-91.746-0.125l-0.929-95.695c-0.128-13.099,4.411-25.862,12.779-35.94l64.473-77.646 c1.545-1.861,3.725-2.978,6.137-3.146c2.413-0.172,4.728,0.635,6.517,2.264c3.351,3.049,3.81,8.25,1.045,11.839l-48.431,62.893 c-1.27,1.649-1.797,3.751-1.456,5.804c0.341,2.053,1.52,3.872,3.254,5.022c17.332,11.495,40.938,7.657,53.737-8.737l40.839-52.305 c1.046-1.338,1.605-2.992,1.589-4.69l-0.925-93.174c-0.063-6.275,4.792-11.548,11.051-12.005c3.198-0.23,6.267,0.793,8.678,2.885 c2.412,2.093,3.86,5,4.079,8.186l7.616,111.077C412.074,248.831,409.321,258.118,403.677,265.619z"></path>
                                <path d="M121.81,193.973c-4.188-5.043-10.095-8.072-16.634-8.528c-6.535-0.456-12.809,1.722-17.655,6.134 c-9.081,8.264-10.326,22.357-2.835,32.085l42.679,55.422c-9.418,2.412-19.814-0.804-26.076-8.824l-39.225-50.237l0.899-90.552 c0.14-14.173-10.823-26.083-24.96-27.113c-7.182-0.521-14.151,1.789-19.6,6.517c-5.446,4.727-8.718,11.293-9.212,18.488 L1.574,238.441c-0.889,12.96,2.924,25.815,10.734,36.196l71.268,94.714l-4.382,50.472c-0.183,2.096,0.524,4.172,1.947,5.722 c1.421,1.547,3.425,2.427,5.524,2.427c0.003,0,0.007,0,0.01,0l107.354-0.146c4.11-0.006,7.45-3.317,7.49-7.427l1.002-103.112 c0.161-16.643-5.605-32.861-16.238-45.667L121.81,193.973z M186.592,412.836l-91.745,0.125l3.922-45.174 c0.16-1.843-0.366-3.68-1.479-5.158l-72.995-97.01c-5.644-7.5-8.397-16.788-7.756-26.151l7.617-111.077 c0.219-3.186,1.667-6.093,4.079-8.186c2.187-1.898,4.926-2.917,7.792-2.917c0.294,0,0.589,0.011,0.886,0.032 c6.259,0.456,11.112,5.729,11.05,12.005l-0.925,93.174c-0.017,1.698,0.543,3.352,1.589,4.69l40.839,52.305 c12.801,16.394,36.405,20.23,53.738,8.738c1.734-1.15,2.913-2.969,3.254-5.022s-0.187-4.156-1.456-5.805l-48.432-62.892 c-2.764-3.59-2.305-8.79,1.047-11.84c1.789-1.629,4.101-2.43,6.515-2.264c2.413,0.168,4.593,1.286,6.138,3.147l64.473,77.646 c8.368,10.079,12.907,22.842,12.779,35.94L186.592,412.836z"></path>
                                <path d="M360.908,84.394c0-22.542-8.779-43.735-24.719-59.675C320.249,8.778,299.057,0,276.514,0 c-22.542,0-43.735,8.778-59.676,24.718l-2.852,2.853l-2.853-2.853C195.194,8.778,174.001,0,151.458,0 c-22.542,0-43.735,8.778-59.676,24.718c-32.904,32.905-32.904,86.445,0.001,119.351l116.899,116.899 c1.465,1.464,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197l116.899-116.9C352.129,128.129,360.908,106.936,360.908,84.394z M213.987,245.059L102.39,133.462c-27.057-27.057-27.057-71.081,0-98.138C115.496,22.218,132.923,15,151.458,15 c18.536,0,35.962,7.218,49.069,20.325l8.156,8.156c1.406,1.407,3.313,2.197,5.303,2.197s3.897-0.791,5.304-2.197l8.155-8.156 C240.552,22.218,257.979,15,276.514,15c18.536,0,35.962,7.218,49.068,20.325c13.107,13.107,20.326,30.533,20.326,49.069 s-7.219,35.962-20.326,49.069L213.987,245.059z"></path>
                              </g>
                              <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g />
                              <g />
                              <g /> <g /> <g /> <g /> <g /> <g />
                            </svg>
                            {/*Health Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Health</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">7</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                160+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                  style={{ width: "543.2px", marginRight: 25, left: 568 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Real-Estate Icon Svg */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <path d="M465.775,116.467l-28.326-10.895V57.198c0-4.142-3.357-7.5-7.5-7.5H412.6V7.5c0-4.142-3.357-7.5-7.5-7.5   c-4.143,0-7.5,3.358-7.5,7.5v42.198h-17.349c-4.143,0-7.5,3.358-7.5,7.5v23.49L250.409,33.633   c-2.307-0.887-4.901-0.582-6.939,0.818c-2.037,1.399-3.254,3.711-3.254,6.182v58.769H188.95V73.769c0-4.142-3.358-7.5-7.5-7.5   s-7.5,3.358-7.5,7.5v25.633h-24.634c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h124.035l-0.001,18.132h-9.058   c-0.003,0-0.006-0.001-0.01-0.001H98.617c-0.003,0-0.006,0.001-0.01,0.001h-9.058v-18.132h29.767c4.142,0,7.5-3.358,7.5-7.5   c0-4.142-3.358-7.5-7.5-7.5H82.049c-4.142,0-7.5,3.358-7.5,7.5v33.132c0,4.142,3.358,7.5,7.5,7.5h9.068v34.701h-42.2   c-4.142,0-7.5,3.358-7.5,7.5v33.132c0,4.142,3.358,7.5,7.5,7.5h9.066v274.131c0,4.142,3.358,7.5,7.5,7.5h182.205   c0.01,0,0.019,0.001,0.029,0.001h215.366c4.143,0,7.5-3.358,7.5-7.5V123.467C470.583,120.364,468.672,117.581,465.775,116.467z    M387.751,64.698h34.698v35.105l-34.698-13.346V64.698z M455.583,128.618v17.061L255.217,68.615V51.554L455.583,128.618z    M106.117,147.534h150.665v34.701H106.117V147.534z M56.417,197.235h42.2h165.665h42.2l-0.002,18.132H56.417V197.235z    M157.382,263.502v233.496h-18.133V263.502H157.382z M172.382,263.502h18.133v233.496h-18.133V263.502z M205.515,263.502h18.134   v233.496h-18.134V263.502z M238.649,263.502h18.133v233.496h-18.133V263.502z M271.782,263.502h18.135v233.497h-18.135V263.502z    M289.917,248.502h-25.635h-33.104c-0.01,0-0.019-0.001-0.029-0.001c-0.01,0-0.019,0.001-0.029,0.001h-33.076   c-0.01,0-0.019-0.001-0.029-0.001c-0.01,0-0.019,0.001-0.029,0.001h-33.075c-0.01,0-0.019-0.001-0.029-0.001   c-0.01,0-0.019,0.001-0.029,0.001h-33.075c-0.01,0-0.019-0.001-0.029-0.001c-0.01,0-0.019,0.001-0.029,0.001H98.617H72.983v-18.133   h216.934V248.502z M106.117,263.502h18.132v233.496h-18.132V263.502z M72.983,263.502h18.134v233.497H72.983V263.502z M304.917,497   V230.367h9.064c4.142,0,7.5-3.357,7.5-7.499l0.002-33.132c0-1.989-0.79-3.897-2.196-5.304c-1.407-1.407-3.314-2.197-5.304-2.197   h-42.2v-34.701h9.067c4.142,0,7.5-3.358,7.5-7.5l0.001-33.132c0-1.989-0.79-3.896-2.196-5.303   c-1.407-1.407-3.314-2.197-5.304-2.197h-25.634V84.686l200.366,77.065V497H304.917z" />
                                <path d="M396.815,165.667h-33.132c-4.143,0-7.5,3.358-7.5,7.5v33.131c0,4.142,3.357,7.5,7.5,7.5h33.132c4.143,0,7.5-3.358,7.5-7.5   v-33.131C404.315,169.024,400.958,165.667,396.815,165.667z M389.315,198.798h-18.132v-18.131h18.132V198.798z" />
                                <path d="M396.815,248.499h-33.132c-4.143,0-7.5,3.358-7.5,7.5v33.132c0,4.142,3.357,7.5,7.5,7.5h33.132c4.143,0,7.5-3.358,7.5-7.5   v-33.132C404.315,251.857,400.958,248.499,396.815,248.499z M389.315,281.631h-18.132V263.5h18.132V281.631z" />
                                <path d="M396.815,331.333h-33.132c-4.143,0-7.5,3.358-7.5,7.5v33.132c0,4.142,3.357,7.5,7.5,7.5h33.132c4.143,0,7.5-3.358,7.5-7.5   v-33.132C404.315,334.691,400.958,331.333,396.815,331.333z M389.315,364.465h-18.132v-18.132h18.132V364.465z" />
                                <path d="M396.815,414.167h-33.132c-4.143,0-7.5,3.358-7.5,7.5v33.131c0,4.142,3.357,7.5,7.5,7.5h33.132c4.143,0,7.5-3.358,7.5-7.5   v-33.131C404.315,417.524,400.958,414.167,396.815,414.167z M389.315,447.298h-18.132v-18.131h18.132V447.298z" />
                              </g>
                            </svg>
                            {/*Real-Estate Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Real Estate</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">12</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                40+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                  style={{ width: "543.2px", marginRight: 25, left: 568 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Cloth Icon Svg */}
                            <svg
                              viewBox="-59 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m206.949219 412c0-5.519531-4.480469-10-10-10s-10 4.480469-10 10 4.480469 10 10 10 10-4.480469 10-10zm0 0" />
                              <path d="m186.949219 140h20c5.523437 0 10-4.476562 10-10s-4.476563-10-10-10h-20c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10zm0 0" />
                              <path d="m186.949219 180h20c5.523437 0 10-4.476562 10-10s-4.476563-10-10-10h-20c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10zm0 0" />
                              <path d="m393.648438 447.664062c-21.539063-85.746093-38.757813-172.550781-116.613282-255.953124l7.542969-71.710938h12.371094c33.085937 0 60-26.914062 60-60s-26.914063-60-60-60c-16.941407 0-12.71875 0-33.058594 0-16.199219 0-28.476563 12.9375-29.683594 25.765625l-4.382812 46.167969c-.921875 4.691406-5.003907 8.066406-9.8125 8.066406h-46.121094c-4.808594 0-8.890625-3.375-9.8125-8.066406l-4.382813-46.167969c-1.214843-13.007813-13.5-25.765625-29.683593-25.765625-20.421875 0-15.882813 0-33.0625 0-33.082031 0-60 26.914062-60 60s26.917969 60 60 60h12.375l7.546875 71.753906c-44.492188 48.089844-78.886719 112.523438-97.210938 182.40625-2.480468 9.433594-13.390625 51.003906-19.328125 73.433594-1.085937 4.109375.542969 8.457031 4.066407 10.839844 51.085937 34.542968 119.46875 53.566406 192.550781 53.566406 73.15625 0 141.558593-19.042969 192.609375-53.621094 3.480468-2.355468 5.113281-6.640625 4.089844-10.714844zm-101.488282-427.664062h4.792969c22.054687 0 40 17.945312 40 40s-17.945313 40-40 40h-10.269531l6.9375-65.957031c.644531-4.757813.113281-9.578125-1.460938-14.042969zm-195.210937 80c-22.054688 0-40-17.945312-40-40s17.945312-40.011719 40-40.011719h4.789062c-1.65625 4.640625-2.082031 9.484375-1.453125 14.0625l6.933594 65.949219zm31.21875-79.820312c1.222656.21875 2.441406.199218 3.609375-.023438 4.015625.710938 7.238281 3.804688 8.046875 7.910156l4.382812 46.167969c1.214844 13.007813 13.5 25.765625 29.683594 25.765625h46.121094c14.722656 0 27.167969-10.539062 29.59375-25.0625.035156-.234375.066406-.46875.089843-.703125l4.378907-46.160156c.808593-4.070313 4.027343-7.195313 8.0625-7.917969 1.167969.222656 2.386719.238281 3.609375.019531 5.015625.917969 8.835937 5.71875 8.042968 11.238281-.015624.121094-.03125.246094-.042968.371094l-16.074219 152.824219-57.46875 19.707031c-2.097656.71875-4.410156.71875-6.5.003906l-57.476563-19.710937-16.070312-152.824219c-.015625-.132812-.03125-.265625-.050781-.394531-.765625-5.277344 2.851562-10.25 8.0625-11.210937zm-89.164063 359.058593c.546875-2.085937 1.109375-4.167969 1.6875-6.242187 26.722656 23.371094 67.539063 39.941406 115.027344 46.277344.449219.058593.894531.085937 1.335938.085937 4.933593 0 9.226562-3.652344 9.898437-8.675781.730469-5.476563-3.117187-10.503906-8.589844-11.234375-47.324219-6.3125-88.316406-24.046875-111.140625-47.835938 18.769532-56.414062 48.382813-107.738281 85.15625-147.179687l44.113282 15.128906-35.789063 28.628906c-4.3125 3.449219-5.011719 9.742188-1.5625 14.054688s9.742187 5.015625 14.058594 1.5625l43.75-35 43.753906 35c4.292969 3.433594 10.589844 2.769531 14.054687-1.5625 3.453126-4.3125 2.753907-10.605469-1.558593-14.054688l-35.789063-28.628906 44.144532-15.140625c37.0625 39.394531 66.792968 90.375 85.71875 146.519531-22.695313 24.152344-63.914063 42.144532-111.734376 48.515625-5.472656.730469-9.320312 5.757813-8.589843 11.234375.667969 5.023438 4.964843 8.679688 9.898437 8.679688.441406 0 .886719-.03125 1.332032-.089844 47.960937-6.390625 89.019531-23.191406 115.707031-46.910156 1.105469 3.925781 2.167969 7.871094 3.167969 11.835937 0 0 .9375 3.707031 2.398437 9.519531-38.738281 30.308594-98.882813 48.273438-162.503906 48.273438-63.152344 0-123.0625-17.769531-161.886719-47.761719zm157.945313 112.761719c-66.320313 0-128.292969-16.386719-175.4375-46.265625 2.382812-9.023437 5.308593-20.140625 8.082031-30.6875 42.214844 29.59375 103.4375 46.953125 167.355469 46.953125 64.25 0 125.613281-17.472656 167.789062-47.273438.941407 3.746094 1.914063 7.601563 2.878907 11.445313 1.71875 6.824219 3.417968 13.578125 4.902343 19.46875-47.121093 29.9375-109.144531 46.359375-175.570312 46.359375zm0 0" />
                            </svg>
                            {/*Cloth Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Clothing</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">3</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                40+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                  style={{ width: "543.2px", marginRight: 25, left: 568 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Restaurant Icon Svg */}
                            <svg
                              viewBox="0 -1 511.99871 511"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m380.589844 204.039062 30.082031-1.90625c.050781-.003906.105469-.007812.160156-.011718 21.4375-1.808594 40.679688-13.039063 52.796875-30.820313l23.78125-34.890625c20.699219-30.375 28.71875-67.0625 22.574219-103.300781-1.207031-7.117187-4.847656-13.675781-10.246094-18.460937-5.402343-4.789063-12.347656-7.617188-19.558593-7.960938-36.726563-1.757812-72.175782 10.605469-99.847657 34.796875l-31.789062 27.792969c-16.199219 14.160156-25.042969 34.609375-24.269531 56.113281.003906.050781.003906.105469.007812.160156l1.714844 30.089844c.667968 11.730469-3.632813 23.304687-11.777344 31.734375l-248.351562 255.132812c-6.648438 6.933594-10.082032 16.445313-9.664063 26.785157.460937 11.382812 5.683594 22.5625 13.972656 29.910156 7.488281 6.636719 17.78125 10.417969 28.070313 10.417969 1.101562 0 2.203125-.042969 3.300781-.132813 10.316406-.824219 19.351563-5.371093 25.46875-12.847656l223.464844-277.085937c7.410156-9.117188 18.386719-14.773438 30.109375-15.515626zm-42.039063 5.859376-223.445312 277.0625c-3.414063 4.171874-8.664063 6.742187-14.78125 7.230468-7.277344.582032-14.738281-1.839844-19.964844-6.472656-5.226563-4.636719-8.523437-11.753906-8.816406-19.046875-.25-6.128906 1.667969-11.648437 5.363281-15.5l248.332031-255.113281c11.132813-11.519532 16.992188-27.296875 16.085938-43.289063l-1.714844-30.011719c-.582031-16.832031 6.351563-32.835937 19.035156-43.925781l31.789063-27.792969c24.671875-21.566406 56.289062-32.578124 89.015625-31.023437 3.726562.179687 7.3125 1.640625 10.105469 4.117187 2.792968 2.472657 4.671874 5.863282 5.296874 9.539063 5.476563 32.308594-1.671874 65.011719-20.125 92.089844l-23.78125 34.894531c-9.488281 13.921875-24.546874 22.722656-41.328124 24.164062l-30 1.898438c-15.984376 1.015625-30.945313 8.726562-41.066407 21.179688zm0 0" />
                              <path d="m497.820312 440.570312-166.519531-151.667968c-3.132812-2.855469-7.984375-2.628906-10.84375.503906-2.851562 3.132812-2.625 7.988281.507813 10.84375l166.476562 151.632812c3.960938 3.660157 6.207032 9.054688 6.328125 15.1875.144531 7.296876-2.71875 14.597657-7.660156 19.539063-4.9375 4.9375-12.226563 7.808594-19.539063 7.660156-6.132812-.121093-11.527343-2.367187-15.148437-6.285156l-148.382813-162.90625c-2.855468-3.136719-7.710937-3.359375-10.84375-.507813-3.132812 2.855469-3.359374 7.710938-.503906 10.84375l148.417969 162.945313c6.523437 7.054687 15.8125 11.054687 26.160156 11.257813.269531.003906.535157.007812.804688.007812 11.121093 0 22.242187-4.511719 29.886719-12.160156 7.835937-7.835938 12.378906-19.308594 12.152343-30.695313-.203125-10.347656-4.199219-19.636719-11.292969-26.199219zm0 0" />
                              <path d="m92.609375 202.585938c12.703125 11.703124 29.207031 18.375 46.472656 18.789062.054688.003906.109375.003906.160157.003906l30.140624.09375c11.75.035156 23.042969 5.023438 30.96875 13.660156l13.277344 14.574219c1.515625 1.664063 3.589844 2.507813 5.675782 2.507813 1.84375 0 3.695312-.660156 5.164062-2 3.136719-2.855469 3.363281-7.710938.507812-10.84375l-13.296874-14.59375c-10.828126-11.804688-26.226563-18.601563-42.246094-18.65625l-30.058594-.09375c-13.355469-.339844-26.125-5.453125-36.019531-14.410156l-87.347657-103.835938c-.890624-1.0625-.824218-2.601562.15625-3.582031.671876-.675781 1.460938-.773438 1.871094-.773438s1.199219.097657 1.875.773438l79.507813 79.511719c7.859375 7.859374 20.648437 7.859374 28.507812-.003907l9.34375-9.339843v-.003907l16.589844-16.589843s.003906 0 .003906-.003907c0 0 .003907-.003906.003907-.003906l9.339843-9.339844c7.859375-7.859375 7.859375-20.648437 0-28.507812l-79.507812-79.507813c-1.03125-1.03125-1.03125-2.714844 0-3.746094.980469-.980468 2.519531-1.046874 3.582031-.15625l103.835938 87.351563c8.960937 9.890625 14.074218 22.664063 14.414062 36.015625l.089844 30.0625c.054687 16.015625 6.855468 31.414062 18.675781 42.265625l14.226563 12.957031c3.136718 2.855469 7.988281 2.628906 10.84375-.503906 2.851562-3.136719 2.625-7.988281-.507813-10.84375l-14.203125-12.9375c-8.660156-7.945312-13.644531-19.242188-13.683594-30.988281l-.09375-30.140625c0-.054688 0-.109375-.003906-.164063-.414062-17.265625-7.085938-33.769531-18.789062-46.472656-.21875-.238281-.453126-.464844-.703126-.675781l-104.222656-87.671875c-7.203125-6.0625-17.65625-5.609375-24.3125 1.046875-7.019531 7.019531-7.019531 18.4375 0 25.453125l79.507813 79.511719c1.875 1.875 1.875 4.925781 0 6.800781l-3.917969 3.914062-88.613281-88.609375c-2.996094-3-7.855469-3-10.851563 0-2.996094 2.996094-2.996094 7.855469 0 10.851563l88.613282 88.613281-5.742188 5.738281-88.613281-88.609375c-2.996094-2.996094-7.855469-2.996094-10.851563 0-3 2.996094-3 7.855469 0 10.851563l88.609375 88.613281-3.914062 3.917969c-1.875 1.875-4.925781 1.875-6.800781 0l-79.511719-79.507813c-3.398438-3.398437-7.917969-5.273437-12.726563-5.273437s-9.328125 1.875-12.726562 5.273437c-6.65625 6.65625-7.105469 17.109375-1.046875 24.316406l87.675781 104.21875c.207031.25.433594.484376.671875.703126zm0 0" />
                            </svg>
                            {/*Restaurant Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Restaurant</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">6</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                65+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-out fadeOutDown owl-animated-in fadeInDowm"
                  style={{ width: "543.2px", marginRight: 25, left: 568 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Automobile Icon Svg */}
                            <svg
                              style={{ enableBackground: "new 0 0 512 512" }}
                              version="1.1"
                              viewBox="0 0 512 512"
                              x="0px"
                              xmlns="http://www.w3.org/2000/svg"
                              y="0px"
                            >
                              <g>
                                <g>
                                  <path d="M476.158,231.363l-13.259-53.035c3.625-0.77,6.345-3.986,6.345-7.839v-8.551c0-18.566-15.105-33.67-33.67-33.67h-60.392 V110.63c0-9.136-7.432-16.568-16.568-16.568H50.772c-9.136,0-16.568,7.432-16.568,16.568V256c0,4.427,3.589,8.017,8.017,8.017 c4.427,0,8.017-3.589,8.017-8.017V110.63c0-0.295,0.239-0.534,0.534-0.534h307.841c0.295,0,0.534,0.239,0.534,0.534v145.372 c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017v-9.088h94.569c0.008,0,0.014,0.002,0.021,0.002 c0.008,0,0.015-0.001,0.022-0.001c11.637,0.008,21.518,7.646,24.912,18.171h-24.928c-4.427,0-8.017,3.589-8.017,8.017v17.102 c0,13.851,11.268,25.119,25.119,25.119h9.086v35.273h-20.962c-6.886-19.883-25.787-34.205-47.982-34.205 s-41.097,14.322-47.982,34.205h-3.86v-60.393c0-4.427-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.589-8.017,8.017v60.391H192.817 c-6.886-19.883-25.787-34.205-47.982-34.205s-41.097,14.322-47.982,34.205H50.772c-0.295,0-0.534-0.239-0.534-0.534v-17.637 h34.739c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017H8.017c-4.427,0-8.017,3.589-8.017,8.017 s3.589,8.017,8.017,8.017h26.188v17.637c0,9.136,7.432,16.568,16.568,16.568h43.304c-0.002,0.178-0.014,0.355-0.014,0.534 c0,27.996,22.777,50.772,50.772,50.772s50.772-22.776,50.772-50.772c0-0.18-0.012-0.356-0.014-0.534h180.67 c-0.002,0.178-0.014,0.355-0.014,0.534c0,27.996,22.777,50.772,50.772,50.772c27.995,0,50.772-22.776,50.772-50.772 c0-0.18-0.012-0.356-0.014-0.534h26.203c4.427,0,8.017-3.589,8.017-8.017v-85.511C512,251.989,496.423,234.448,476.158,231.363z M375.182,144.301h60.392c9.725,0,17.637,7.912,17.637,17.637v0.534h-78.029V144.301z M375.182,230.881v-52.376h71.235 l13.094,52.376H375.182z M144.835,401.904c-19.155,0-34.739-15.583-34.739-34.739s15.584-34.739,34.739-34.739 c19.155,0,34.739,15.583,34.739,34.739S163.99,401.904,144.835,401.904z M427.023,401.904c-19.155,0-34.739-15.583-34.739-34.739 s15.584-34.739,34.739-34.739c19.155,0,34.739,15.583,34.739,34.739S446.178,401.904,427.023,401.904z M495.967,299.29h-9.086 c-5.01,0-9.086-4.076-9.086-9.086v-9.086h18.171V299.29z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M144.835,350.597c-9.136,0-16.568,7.432-16.568,16.568c0,9.136,7.432,16.568,16.568,16.568 c9.136,0,16.568-7.432,16.568-16.568C161.403,358.029,153.971,350.597,144.835,350.597z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M427.023,350.597c-9.136,0-16.568,7.432-16.568,16.568c0,9.136,7.432,16.568,16.568,16.568 c9.136,0,16.568-7.432,16.568-16.568C443.591,358.029,436.159,350.597,427.023,350.597z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M332.96,316.393H213.244c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017H332.96 c4.427,0,8.017-3.589,8.017-8.017S337.388,316.393,332.96,316.393z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M127.733,282.188H25.119c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h102.614 c4.427,0,8.017-3.589,8.017-8.017S132.16,282.188,127.733,282.188z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M278.771,173.37c-3.13-3.13-8.207-3.13-11.337,0.001l-71.292,71.291l-37.087-37.087c-3.131-3.131-8.207-3.131-11.337,0 c-3.131,3.131-3.131,8.206,0,11.337l42.756,42.756c1.565,1.566,3.617,2.348,5.668,2.348s4.104-0.782,5.668-2.348l76.96-76.96 C281.901,181.576,281.901,176.501,278.771,173.37z"></path>
                                </g>
                              </g>
                              <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g />
                              <g />
                              <g /> <g /> <g /> <g /> <g /> <g />
                            </svg>
                            {/*Automobile Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">AutoMobile</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">5</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                50+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                  style={{ width: "543.2px", marginRight: 25, left: 569 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Service Icon Svg */}
                            <svg
                              style={{ enableBackground: "new 0 0 512 512" }}
                              version="1.1"
                              viewBox="0 0 512 512"
                              x="0px"
                              xmlns="http://www.w3.org/2000/svg"
                              y="0px"
                            >
                              <g>
                                <g>
                                  <path d="M408.274,56.527h-0.087c-4.503,0-8.109,3.65-8.109,8.153c0,4.503,3.694,8.153,8.196,8.153s8.153-3.65,8.153-8.153 C416.427,60.177,412.776,56.527,408.274,56.527z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M290.912,389.623l-77.599-32.332c-3.455-1.439-5.686-4.787-5.686-8.53v-16.46l14.509-8.06 c12.431-6.907,20.621-19.485,21.908-33.647l0.032-0.351h7.576c14.086,0,25.546-11.46,25.546-25.546v-15.703 c2.284-5.523,8.696-23.2,8.696-47.587c0-33.695-13.199-65.487-37.165-89.521c-9.17-9.195-19.542-16.838-30.794-22.799 c-0.392-27.598-28.021-49.953-61.942-49.953s-61.55,22.355-61.943,49.953c-11.252,5.96-21.624,13.603-30.794,22.799 c-23.966,24.034-37.165,55.825-37.165,89.521c0,24.387,6.412,42.063,8.696,47.587v15.703c0,14.086,11.46,25.546,25.546,25.546 h7.576l0.031,0.351c1.287,14.162,9.478,26.741,21.909,33.647l14.509,8.06v16.46c0,3.742-2.232,7.09-5.686,8.53l-77.599,32.332 C8.271,394.957,0,407.364,0,421.231v52.178c0,14.086,11.46,25.546,25.546,25.546h260.892c14.086,0,25.546-11.46,25.546-25.546 v-52.178C311.983,407.364,303.712,394.957,290.912,389.623z M260.892,264.696c0,5.095-4.145,9.24-9.24,9.24h-6.093l3.261-35.873 h2.832c5.095,0,9.24,4.145,9.24,9.24V264.696z M155.992,55.44c21.355,0,39.325,11.054,44.29,25.933 c-13.966-4.898-28.895-7.453-44.29-7.453s-30.323,2.555-44.29,7.453C116.666,66.494,134.636,55.44,155.992,55.44z M60.331,273.936 c-5.095,0-9.24-4.145-9.24-9.24v-17.393c0-5.095,4.145-9.24,9.24-9.24h2.832l3.261,35.873H60.331z M97.768,309.987 c-7.711-4.284-12.792-12.086-13.59-20.87l-6.207-68.273c10.664-0.067,29.363-0.975,51.23-5.506 c44.72-9.265,81.204-29.479,105.507-58.455c2.894-3.449,2.443-8.592-1.008-11.485c-3.45-2.894-8.592-2.443-11.486,1.008 c-53.04,63.24-151.327,58.059-152.671,57.977v0.009c-0.412-0.025-0.829-0.03-1.253,0.009c-4.484,0.408-7.789,4.373-7.381,8.857 l0.772,8.501h-1.35c-5.708,0-10.985,1.883-15.243,5.058c-1.478-6.864-2.694-15.508-2.694-25.41 c0-29.348,11.509-57.05,32.406-78.007c21.333-21.393,50.167-33.175,81.191-33.175s59.857,11.781,81.191,33.175 c20.897,20.955,32.406,48.659,32.406,78.007c0,9.901-1.215,18.547-2.694,25.411c-4.258-3.176-9.534-5.059-15.243-5.059h-1.35 l0.773-8.502c0.22-2.409-0.644-4.792-2.355-6.503l-17.393-17.393c-3.184-3.184-8.346-3.184-11.529,0 c-3.184,3.184-3.184,8.345,0,11.529l14.693,14.693l-5.805,63.855c-6.658,5.889-27.775,20.588-72.694,20.588 c-4.503,0-8.153,3.65-8.153,8.153s3.65,8.153,8.153,8.153c31.214,0,52.574-6.536,66.428-13.435 c-2.189,2.859-4.96,5.289-8.203,7.091l-45.291,25.162c-8.099,4.499-17.769,4.499-25.867,0L97.768,309.987z M104.943,372.341 c9.55-3.979,15.72-13.235,15.72-23.58v-7.402l14.476,8.043c6.529,3.626,13.69,5.441,20.853,5.441s14.324-1.813,20.853-5.441 l14.476-8.043v7.402c0,10.347,6.17,19.602,15.72,23.58l8.552,3.563c-15.294,17.756-30.075,26.578-40.086,30.892 c-11.073,4.771-18.74,5.163-19.516,5.192c-0.776-0.028-8.443-0.421-19.516-5.192c-10.011-4.313-24.791-13.136-40.086-30.892 L104.943,372.341z M52.178,482.65H25.546c-5.095,0-9.24-4.145-9.24-9.24v-52.178c0-2.248,0.417-4.422,1.189-6.436l27.952,22.363 c4.279,3.422,6.731,8.527,6.731,14.006V482.65z M243.499,451.163v31.486H68.484v-31.486c0-10.46-4.684-20.205-12.851-26.739 l-25.921-20.737l50.923-21.218c26.865,33.228,54.02,42.37,67.203,44.879v27.582c0,4.503,3.65,8.153,8.153,8.153 s8.153-3.65,8.153-8.153v-27.582c13.184-2.509,40.338-11.651,67.203-44.879l50.923,21.218l-25.921,20.737 C248.183,430.958,243.499,440.704,243.499,451.163z M295.677,473.41c0,5.095-4.145,9.24-9.24,9.24h-26.633v-31.486 c0-5.479,2.453-10.583,6.731-14.007l27.952-22.362c0.772,2.014,1.189,4.188,1.189,6.436V473.41z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M145.944,243.765c-3.896-8.085-13.292-13.311-23.939-13.311s-20.043,5.225-23.939,13.311 c-1.954,4.056-0.25,8.929,3.807,10.884c4.056,1.955,8.929,0.249,10.884-3.807c0.953-1.978,4.519-4.082,9.249-4.082 c4.73,0,8.295,2.103,9.249,4.082c1.404,2.917,4.318,4.617,7.351,4.617c1.187,0,2.393-0.261,3.533-0.81 C146.194,252.694,147.898,247.822,145.944,243.765z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M213.917,243.765c-3.895-8.085-13.291-13.311-23.939-13.311s-20.043,5.225-23.939,13.311 c-1.955,4.057-0.25,8.929,3.807,10.884c4.056,1.955,8.929,0.249,10.884-3.807c0.953-1.978,4.519-4.082,9.249-4.082 s8.295,2.103,9.249,4.082c1.404,2.917,4.318,4.617,7.351,4.617c1.187,0,2.393-0.261,3.533-0.81 C214.167,252.694,215.872,247.822,213.917,243.765z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M408.187,13.045c-57.243,0-103.813,46.57-103.813,103.813c0,30.035,12.718,57.98,35.132,77.723 c-11.247,18.412-23.453,29.023-23.578,29.131c-2.686,2.294-3.589,6.057-2.237,9.32c1.27,3.063,4.255,5.032,7.529,5.032 c0.214,0,0.43-0.009,0.647-0.025c1.341-0.107,31.956-2.721,59.114-20.983c8.851,2.4,17.984,3.616,27.207,3.616 c57.243,0,103.813-46.57,103.813-103.813C512,59.615,465.43,13.045,408.187,13.045z M408.187,204.365 c-8.93,0-17.757-1.349-26.236-4.011c-2.468-0.774-5.158-0.333-7.248,1.194c-10.038,7.327-21.056,12.056-30.517,15.084 c4.232-5.582,8.752-12.292,12.989-20.038c1.928-3.525,1.001-7.929-2.185-10.378c-21.805-16.751-34.31-42.032-34.31-69.358 c0-48.252,39.255-87.507,87.507-87.507c48.252,0,87.507,39.255,87.507,87.507C495.694,165.11,456.439,204.365,408.187,204.365z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M416.883,160.883h-0.544v-53.265h0.544c4.503,0,8.153-3.65,8.153-8.153s-3.65-8.153-8.153-8.153H399.49 c-4.503,0-8.153,3.65-8.153,8.153s3.65,8.153,8.153,8.153h0.544v53.265h-0.544c-4.503,0-8.153,3.65-8.153,8.153 c0,4.503,3.65,8.153,8.153,8.153h17.393c4.503,0,8.153-3.65,8.153-8.153C425.036,164.534,421.386,160.883,416.883,160.883z"></path>
                                </g>
                              </g>
                              <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g />
                              <g />
                              <g /> <g /> <g /> <g /> <g /> <g />
                            </svg>
                            {/*Service Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Services</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">4</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                80+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                  style={{ width: "543.2px", marginRight: 25, left: 568 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Beauty Icon Svg */}
                            <svg
                              viewBox="0 0 60 60"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g>
                                <path d="m32.7 8.778c-.2510745-.25995658-.6228779-.3642126-.9725073-.27269716-.3496295.09151544-.6226744.3645604-.7141899.71418984-.0915154.34962943.0127406.72143285.2726972.97250732l4.439 4.439c-.1911498.6866768.0039383 1.423039.51 1.925 1.761 1.761 3.081 3.34 6.107 3.7 2.2369515.2063115 4.3385883 1.1623377 5.964 2.713l4.9 4.9c1.031783.9890898 2.512863 1.3525968 3.8853314.9535914s2.4278147-1.4999048 2.7685001-2.888c.3406853-1.3880953-.0850484-2.8525016-1.1168315-3.8415914l-4.781-4.781c-1.5501651-1.6256415-2.5058101-3.7272148-2.712-5.964-.372-3.1-2.108-4.513-3.7-6.107-.5053974-.49936785-1.2377831-.69312269-1.924-.509l-4.439-4.439c-.3923789-.37897221-1.0160848-.37355237-1.4018186.01218143-.3857338.38573379-.3911536 1.00943968-.0121814 1.40181857l4.243 4.243-1.416 1.414-4.241-4.242c-.3923789-.37897221-1.0160848-.37355237-1.4018186.01218142-.3857338.3857338-.3911536 1.00943969-.0121814 1.40181858l4.242 4.242-1.414 1.414-4.243-4.242c-.3923789-.37897221-1.0160848-.37355237-1.4018186.01218142-.3857338.3857338-.3911536 1.00943969-.0121814 1.40181858l4.243 4.242-1.415 1.415zm16.564 2.809c.2578997 2.6823088 1.4152492 5.1985925 3.284 7.14l4.781 4.781c.7892615.7503703.8846332 1.9755302.221 2.839-.3726456.405477-.8919414.6451315-1.4422661.6656043-.5503246.0204728-1.0859914-.1799356-1.4877339-.5566043l-4.9-4.9c-1.9411763-1.8692481-4.4575237-3.0269794-7.14-3.285-2.358-.281-3.4-1.6-4.931-3.129l8.488-8.483c1.582 1.579 2.847 2.575 3.129 4.928z" />
                                <path d="m45.21 41.048c-1.209-3.508.345-8.237.769-16.013.0196496-.3572656-.1527923-.6978756-.4523686-.8935255-.2995763-.1956498-.6807741-.2166157-1-.055-.3192259.1616158-.5279818.4812599-.5476314.8385255-.412 7.581-1.933 12.234-.821 16.266-4.115.377-9.158 1.403-9.158 3.809.0824635.8303963.6005452 1.5541869 1.36 1.9l.489 2.445c-1.19.167-2.486.3-3.872.4v-6.917c2.1031686-2.238331 3.6249938-4.9585248 4.432-7.922 1.6-.423 4.591-1.89 4.591-6.946 0-2.339-.54-3.749-1.652-4.311-.5534634-.266995-1.1879399-.3127746-1.774-.128 0-.637-.022-1.268-.067-1.866-.0178386-.237121-.1195909-.4601251-.287-.629-3.858-3.89-5.52-4.026-12.72-4.026-4.788 0-6.585-2.736-7.23-4.368-.1156044-.2919097-.3615931-.5125786-.6642972-.5959205s-.6269762-.0196799-.8757028.1719205c-2.856 2.2-4.261 5.9-4.3 11.314-.5856649-.184515-1.219613-.1391053-1.773.127-1.117.562-1.657 1.972-1.657 4.311 0 5.04 2.971 6.513 4.574 6.94.8008288 2.9868397 2.33491 5.7263932 4.463 7.97v6.874c-10.237-.744-12.844-2.999-14.211-4.544 6.6-3.156 1.166-15.883 2.13-25.933.983-10.204 9.544-10.673 12.149-10.58.2148988.0236433.4319448-.01781492.623-.119 4.1926166-2.09297153 8.8982361-2.93746309 13.557-2.433.3553006.03840605.7041013-.11565592.9150123-.40415227.2109109-.28849634.2518897-.6675976.1075-.9945s-.4522117-.55194168-.8075123-.59034773c-4.9712617-.52664769-9.9905489.35234255-14.487 2.537-6.192-.159-13.141 2.984-14.049 12.392-1.006 10.5 4.444 23.172-1.99 24.654-.43340948.0272187-.80090493.328436-.91267137.7480702-.11176644.4196343.05721807.863739.41967137 1.1029298 1.63 1.5 2.839 5.216 16.665 6.182.3483131 1.3208937 1.5419553 2.2419849 2.908 2.244h8.94c1.3625076.0052842 2.5515019-.9229332 2.877-2.246 1.57-.109 3.033-.26 4.371-.451.91 4.548.758 3.3.758 5.691 0 1.6568542 1.3431458 3 3 3h14c1.6568542 0 3-1.3431458 3-3 0-2.536-.267-.568 1.64-10.1.7594548-.3458131 1.2775365-1.0696037 1.36-1.9 0-3.611-11.119-4.126-14.79-3.952zm-6.765-15.614c.023.011.555.3.555 2.526 0 2.675-1 3.966-2.048 4.587.3915128-2.2663855.596201-4.5611009.612-6.861.46-.263.771-.309.881-.252zm-28.445 2.526c0-2.221.532-2.515.555-2.526.11-.055.421-.01.88.253.0148497 2.2971082.2155041 4.5892507.6 6.854-1.045-.623-2.035-1.914-2.035-4.581zm5.569 9.261c-1.792-3.826-2.152-7.982-2.152-13.446 0-4.214.858-7.222 2.618-9.143 1.118 1.873 3.534 4.368 8.465 4.368 6.92 0 7.952.105 11.037 3.171.031.518.046 1.056.046 1.6 0 5.452-.364 9.6-2.177 13.445-2.1 4.471-5.094 6.738-8.906 6.738-3.842.004-6.846-2.262-8.931-6.733zm13.425 14.785h-8.94c-.2898028.0040895-.5671242-.1177566-.7601299-.3339768-.1930057-.2162201-.2827076-.5055421-.2458701-.7930232 0-.051-.011.715-.011-6.435 3.3655828 2.0335543 7.5833719 2.0243014 10.94-.024v6.58c.005641.264511-.0953646.520171-.280269.7094017-.1849043.1892307-.4381603.2961212-.702731.2965983zm18.006-9.006c6.09 0 10.231 1.264 10.941 2-.71.736-4.851 2-10.941 2s-10.231-1.264-10.941-2c.71-.736 4.851-2 10.941-2zm8 14c0 .5522847-.4477153 1-1 1h-14c-.5522847 0-1-.4477153-1-1v-1h10c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-10.18c-.65-3.25 1.034 5.171-1.234-6.167 6.1821627 1.5348259 12.6458373 1.5348259 18.828 0-1.686 8.429-1.414 6.367-1.414 9.167z" />
                              </g>
                            </svg>
                            {/*Beauty Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Beauty</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">10</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                80+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                  style={{ width: "543.2px", marginRight: 25, left: 568 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Education Icon Svg */}
                            <svg
                              viewBox="0 0 512 512.001"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m500.742188 310.6875-16.910157-7.453125c-3.8125-1.679687-8.269531.050781-9.949219 3.863281-1.683593 3.8125.046876 8.257813 3.863282 9.941406l16.910156 7.464844c1.148438.5 1.386719 1.207032 1.386719 1.71875 0 .503906-.238281 1.207032-1.386719 1.710938l-138.230469 60.957031c-.867187.382813-1.972656.382813-2.847656 0-43.414063-19.144531-29.1875-12.871094-67.65625-29.839844l50.148437-23.078125c18.097657 10.96875 47.980469 2.609375 47.980469-15.816406 0-11.613281-12.757812-20.710938-29.046875-20.710938-18.304687 0-31.710937 11.421876-28.605468 24.363282l-58.910157 27.113281c-6.253906-2.757813-45.882812-20.230469-52.132812-22.988281-1.855469-.8125-1.867188-2.609375 0-3.429688l138.222656-60.957031c.875-.382813 1.980469-.382813 2.855469 0 67.898437 29.933594-4.355469-1.917969 93.695312 41.316406 3.8125 1.683594 8.269532-.046875 9.949219-3.863281 1.679687-3.8125-.050781-8.257812-3.863281-9.949219l-54.570313-24.054687v-126.339844c0-20.578125 0-29.476562 0-50.523438 0-13.777343-11.214843-24.921874-24.917969-24.921874h-68.792968v-23.691407c0-22.886719-18.621094-41.519531-41.511719-41.519531h-28.519531c-4.175782 0-7.546875 3.378906-7.546875 7.546875 0 4.171875 3.371093 7.542969 7.546875 7.542969h28.519531c14.570313 0 26.421875 11.863281 26.421875 26.429687v23.691407h-12.246094v-23.691407c0-7.816406-6.359375-14.183593-14.175781-14.183593h-131.199219c-7.816406 0-14.183594 6.367187-14.183594 14.183593v23.691407h-12.242187v-23.691407c0-14.566406 11.859375-26.429687 26.425781-26.429687h72.496094c4.167969 0 7.546875-3.371094 7.546875-7.542969 0-4.167969-3.378906-7.546875-7.546875-7.546875h-72.496094c-22.886718 0-41.519531 18.632812-41.519531 41.519531v23.691407h-68.78125c-13.742187 0-24.921875 11.179687-24.921875 24.921874v183.03125c0 4.164063 3.371094 7.542969 7.546875 7.542969 4.164063 0 7.542969-3.378906 7.542969-7.542969v-85.425781c11.421875 15.976563 28.488281 27.648438 48.257812 32.09375v22.128907c0 8.886718 7.234375 16.121093 16.125 16.121093h22.667969c8.890625 0 16.125-7.234375 16.125-16.121093v-20.15625h165.113281v20.15625c0 8.886718 7.234375 16.121093 16.121094 16.121093h22.671875c8.890625 0 16.121094-7.234375 16.121094-16.121093v-22.128907c19.773437-4.441406 36.84375-16.117187 48.261719-32.09375v72.597657l-24.035157-10.59375c-4.746093-2.09375-10.28125-2.09375-15.03125 0l-138.21875 60.945312c-13.867187 6.117188-13.847656 24.949219 0 31.058594l26.335938 11.609375v4.949219h-175.804688c-24.660156 0-44.710937-20.050782-44.710937-44.699219v-10.261719c0-4.164062-3.378906-7.542969-7.542969-7.542969-4.175781 0-7.546875 3.378907-7.546875 7.542969v10.261719c0 32.96875 26.820312 59.789062 59.800781 59.789062h175.808594v55.949219c0 11.097656 9.617187 20.070312 24.96875 26.851562v9.933594l-25.449219 33.785156c-2.507812 3.332032-1.839844 8.0625 1.488282 10.566407 3.328124 2.507812 8.058593 1.84375 10.566406-1.488281l13.394531-17.78125v13.242187c0 4.167969 3.378906 7.546875 7.546875 7.546875 4.164062 0 7.542969-3.378906 7.542969-7.546875v-13.234375l13.390625 17.773438c1.484375 1.972656 3.746094 3.007812 6.035156 3.007812 6.152344 0 9.785156-7.085938 6.019531-12.085938l-25.445312-33.78125v-4.476562c70.210937 20.835938 198.738281 8.226562 198.738281-32.316406v-75.984375l26.335938-11.609375c6.410156-2.828125 10.394531-8.785156 10.394531-15.523438 0-6.75-3.984375-12.707031-10.394531-15.535156zm-145.734376 3.847656c9.15625 0 13.953126 4.175782 13.953126 5.621094s-4.796876 5.617188-13.953126 5.617188c-9.085937 0-13.957031-4.160157-13.957031-5.617188 0-1.445312 4.796875-5.621094 13.957031-5.621094zm-218.878906-272.109375h129.378906v22.785157h-129.378906zm-32.953125 199.535157c0 .566406-.464843 1.03125-1.035156 1.03125h-22.667969c-.570312 0-1.035156-.464844-1.035156-1.03125v-20.203126c.902344.027344 1.804688.046876 2.710938.046876h22.027343zm0-35.246094h-22.027343c-.910157 0-1.808594-.035156-2.710938-.070313v-20.605469c0-.570312.464844-1.035156 1.035156-1.035156h22.667969c.570313 0 1.035156.464844 1.035156 1.035156zm220.027344 35.246094c0 .566406-.460937 1.03125-1.03125 1.03125h-22.667969c-.570312 0-1.03125-.464844-1.03125-1.03125v-20.15625h22.027344c.902344 0 1.804688-.015626 2.703125-.046876zm0-35.316407c-.898437.035157-1.796875.070313-2.703125.070313h-22.03125v-20.675782c0-.570312.464844-1.035156 1.03125-1.035156h22.671875c.570313 0 1.03125.464844 1.03125 1.035156zm15.09375-2.386719v-18.222656c0-8.890625-7.234375-16.121094-16.125-16.121094h-22.667969c-8.890625 0-16.125 7.230469-16.125 16.121094v20.675782h-165.113281v-20.675782c0-8.890625-7.234375-16.121094-16.125-16.121094h-22.667969c-8.890625 0-16.125 7.230469-16.125 16.121094v18.222656c-27.804687-7.792968-48.257812-33.347656-48.257812-63.601562v-50.523438c0-5.421874 4.40625-9.828124 9.832031-9.828124h351.804687c5.828126 0 9.828126 4.773437 9.828126 9.828124v50.523438c0 30.253906-20.453126 55.8125-48.257813 63.601562zm-77.71875 235.195313c-7.484375-4.214844-9.878906-8.007813-9.878906-10.109375 0-7.101562 0-62.625 0-69.328125l9.878906 4.355469zm198.734375-10.109375c0 3.269531-5.785156 10.601562-27.453125 17.324219-41.703125 12.921875-111.988281 13.570312-156.191406-.796875v-74.96875c7.179687 3.324218-3.28125-1.328125 71.824219 31.789062 4.777343 2.105469 10.238281 2.113282 15.027343 0l96.792969-42.675781zm0 0" />
                            </svg>
                            {/*Education Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Education </h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">7</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                70+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                  style={{ width: "543.2px", marginRight: 25, left: 568 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Computer Icon Svg */}
                            <svg
                              style={{
                                enableBackground: "new 0 0 511.999 511.999",
                              }}
                              version="1.1"
                              viewBox="0 0 511.999 511.999"
                              x="0px"
                              xmlns="http://www.w3.org/2000/svg"
                              y="0px"
                            >
                              <g>
                                <g>
                                  <path d="M386.455,198.212l-53.811-53.811c-3.253-3.254-8.528-3.255-11.784,0c-3.254,3.253-3.254,8.529,0,11.783l47.92,47.92 l-47.92,47.919c-3.254,3.253-3.254,8.529,0,11.783c1.628,1.628,3.76,2.441,5.892,2.441c2.132,0,4.265-0.814,5.891-2.44 l53.811-53.811C389.709,206.742,389.709,201.466,386.455,198.212z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M143.223,204.102l47.919-47.92c3.254-3.253,3.254-8.529,0-11.783c-3.253-3.254-8.529-3.254-11.783,0l-53.811,53.811 c-3.254,3.253-3.254,8.529,0,11.783l53.811,53.811c1.626,1.628,3.759,2.441,5.891,2.441s4.265-0.814,5.891-2.442 c3.254-3.253,3.254-8.529,0-11.783L143.223,204.102z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M283.22,118.176c-4.386-1.39-9.07,1.041-10.458,5.427L223.356,279.57c-1.39,4.387,1.04,9.07,5.427,10.46 c0.838,0.266,1.685,0.391,2.519,0.391c3.535,0,6.816-2.269,7.941-5.818l49.404-155.967 C290.037,124.248,287.607,119.565,283.22,118.176z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M471.246,24.766H40.754C18.283,24.766,0,43.049,0,65.52v59.227c0,4.602,3.731,8.332,8.332,8.332 c4.601,0,8.332-3.731,8.332-8.332V65.52c0-13.284,10.807-24.09,24.09-24.09h430.492c13.284,0,24.09,10.807,24.09,24.09v284.411 h-52.21c-4.602,0-8.332,3.731-8.332,8.332s3.731,8.332,8.332,8.332h52.21v15.273c0,13.284-10.807,24.09-24.09,24.09h-155.41 H196.164H40.754c-13.284,0-24.09-10.807-24.09-24.09v-15.273h398.688c4.602,0,8.332-3.731,8.332-8.332s-3.731-8.332-8.332-8.332 H16.664V152.522c0-4.602-3.731-8.332-8.332-8.332c-4.601,0-8.332,3.73-8.332,8.332V381.87c0,22.472,18.283,40.754,40.754,40.754 H183.54l-20.494,47.945h-40.034c-4.602,0-8.332,3.731-8.332,8.332s3.731,8.332,8.332,8.332h265.975 c4.602,0,8.332-3.731,8.332-8.332s-3.731-8.332-8.332-8.332h-40.034l-20.494-47.945h142.786c22.472,0,40.754-18.282,40.754-40.754 V65.52C512,43.049,493.717,24.766,471.246,24.766z M330.83,470.568H181.17l14.238-33.31h121.185L330.83,470.568z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M262.924,379.679c-1.914-2.906-5.583-4.299-8.952-3.457c-3.517,0.879-6.116,4.048-6.291,7.67 c-0.364,7.534,9.106,11.629,14.33,6.172C264.674,387.282,265.089,382.887,262.924,379.679z"></path>
                                </g>
                              </g>
                              <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g />
                              <g />
                              <g /> <g /> <g /> <g /> <g /> <g />
                            </svg>
                            {/*Computer Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Computer</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">20</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                120+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown active"
                  style={{ width: "543.2px", marginRight: 25, left: 568 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Construction Icon Svg */}
                            <svg
                              style={{
                                enableBackground: "new 0 0 511.999 511.999",
                              }}
                              version="1.1"
                              viewBox="0 0 511.999 511.999"
                              x="0px"
                              xmlns="http://www.w3.org/2000/svg"
                              y="0px"
                            >
                              <g>
                                <g>
                                  <path d="M453.034,361.322c-2.808-1.164-6.04-0.521-8.19,1.628l-82.126,82.126c-2.149,2.15-2.792,5.382-1.628,8.19 c1.162,2.809,3.904,4.639,6.943,4.639h82.126c4.151,0,7.515-3.364,7.515-7.515v-82.126 C457.673,365.225,455.842,362.485,453.034,361.322z M386.173,442.876l56.469-56.469v56.469H386.173z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M507.361,240.867c-2.808-1.164-6.04-0.521-8.19,1.628l-22.507,22.507V111.971c0-4.151-3.365-7.515-7.515-7.515h-57.741 l20.96-20.96c0.003-0.003,0.006-0.007,0.009-0.01l20.196-20.196c4.327-4.327,6.71-10.083,6.71-16.203s-2.383-11.874-6.71-16.203 L429.219,7.53c-4.327-4.327-10.083-6.71-16.203-6.71s-11.875,2.383-16.203,6.71l-20.206,20.206l-24.416,24.416l-52.303,52.303 H66.62V30.11c0-4.151-3.365-7.515-7.515-7.515C26.515,22.597,0,49.11,0,81.702v319.186c0,0.555,0.064,1.095,0.178,1.615 c1.038,13.829,7.021,26.678,17.02,36.432C27.886,449.359,41.995,455.1,56.927,455.1h229.638l-43.249,43.249 c-2.149,2.15-2.792,5.381-1.629,8.19c1.163,2.808,3.904,4.639,6.943,4.639h255.855c4.15,0,7.515-3.364,7.515-7.515V247.81 C512,244.771,510.168,242.03,507.361,240.867z M407.443,18.159c3.072-3.074,8.077-3.074,11.149,0l23.355,23.355 c3.074,3.073,3.074,8.076,0,11.15l-14.891,14.892L392.55,33.051L407.443,18.159z M381.922,43.679l34.505,34.504l-13.789,13.789 l-34.503-34.504L381.922,43.679z M496.972,332.252h-13.865c-4.151,0-7.515,3.364-7.515,7.515c0,4.151,3.364,7.515,7.515,7.515 h13.865v22.646h-13.865c-4.151,0-7.515,3.364-7.515,7.515s3.364,7.515,7.515,7.515h13.865v22.645h-13.865 c-4.151,0-7.515,3.364-7.515,7.515c0,4.151,3.364,7.515,7.515,7.515h13.865v22.646h-13.865c-4.151,0-7.515,3.365-7.515,7.515 c0,4.151,3.364,7.515,7.515,7.515h13.865v35.842h-230.2l75.908-75.907c2.935-2.936,2.935-7.693,0-10.628 c-0.337-0.337-0.699-0.629-1.078-0.889c-2.926-2.004-6.952-1.709-9.551,0.889l-30.456,30.456H56.928 c-22.792,0-41.14-17.794-41.862-40.545c0.043-1.428,0.154-2.844,0.332-4.244c0.001-0.008,0.002-0.016,0.003-0.024 c0.084-0.665,0.185-1.327,0.3-1.985c0.013-0.075,0.027-0.15,0.04-0.225c0.105-0.587,0.223-1.171,0.352-1.753 c0.036-0.162,0.074-0.324,0.112-0.485c0.114-0.492,0.237-0.981,0.369-1.468c0.072-0.264,0.147-0.525,0.224-0.788 c0.11-0.382,0.224-0.763,0.345-1.14c0.121-0.377,0.25-0.75,0.381-1.123c0.091-0.261,0.181-0.522,0.279-0.781 c0.183-0.492,0.377-0.979,0.577-1.462c0.057-0.139,0.113-0.28,0.172-0.419c0.257-0.6,0.524-1.193,0.806-1.779 c0.012-0.025,0.023-0.05,0.035-0.075c5.878-12.164,17.183-21.233,30.75-24.047c0.038-0.008,0.076-0.017,0.114-0.025 c0.622-0.127,1.25-0.236,1.882-0.337c0.105-0.017,0.21-0.038,0.317-0.054c0.571-0.087,1.148-0.155,1.725-0.22 c0.162-0.018,0.323-0.043,0.486-0.059c0.557-0.056,1.119-0.093,1.681-0.128c0.178-0.011,0.356-0.03,0.534-0.039 c0.736-0.037,1.478-0.056,2.223-0.056c4.15,0,7.515-3.364,7.515-7.515v-54.489c0-4.151-3.365-7.515-7.515-7.515 c-4.15,0-7.515,3.364-7.515,7.515v47.447c-12.69,1.605-24.469,7.265-33.757,16.335c-0.977,0.954-1.903,1.946-2.805,2.954V81.702 c0-21.741,15.826-39.858,36.561-43.436v73.705v152.777v0.001c0,4.15,3.365,7.515,7.515,7.515c4.15,0,7.515-3.365,7.515-7.515 v-0.001V119.486h218.24l-41.544,41.544c-2.935,2.936-2.935,7.693,0,10.628c2.935,2.934,7.693,2.934,10.627,0l54.373-54.373 c0.002-0.002,0.003-0.004,0.005-0.005l49.185-49.185l34.503,34.505l-4.048,4.048c-0.003,0.003-0.007,0.006-0.01,0.009 l-151.528,151.53l-34.504-34.504l29.868-29.868c2.935-2.936,2.935-7.693,0-10.628c-2.935-2.934-7.693-2.934-10.627,0 l-35.183,35.182c-0.188,0.188-0.364,0.387-0.529,0.591c-0.055,0.068-0.104,0.141-0.156,0.212c-0.106,0.141-0.21,0.283-0.307,0.431 c-0.055,0.086-0.105,0.174-0.157,0.263c-0.083,0.14-0.163,0.282-0.236,0.427c-0.048,0.094-0.091,0.189-0.135,0.287 c-0.067,0.147-0.129,0.297-0.186,0.447c-0.02,0.053-0.046,0.103-0.065,0.156l-14.641,41.475l-9.982,28.279 c-0.132,0.376-0.227,0.758-0.298,1.143h-24.992c-4.15,0-7.515,3.364-7.515,7.515c0,4.151,3.365,7.515,7.515,7.515h208.114 c4.151,0,7.515-3.364,7.515-7.515c0-4.151-3.364-7.515-7.515-7.515H193.093l45.83-16.178c0.038-0.014,0.074-0.033,0.112-0.047 c0.178-0.066,0.353-0.14,0.526-0.219c0.069-0.032,0.138-0.062,0.205-0.095c0.18-0.09,0.357-0.189,0.531-0.295 c0.056-0.034,0.114-0.065,0.169-0.1c0.181-0.116,0.357-0.243,0.53-0.377c0.043-0.033,0.088-0.062,0.13-0.096 c0.209-0.168,0.414-0.349,0.608-0.543l154.644-154.643h65.255v160.546L354.137,387.53c-2.935,2.936-2.935,7.693,0,10.628 c0.183,0.183,0.374,0.355,0.571,0.516c1.378,1.123,3.061,1.685,4.743,1.685s3.366-0.562,4.743-1.685 c0.197-0.16,0.388-0.333,0.571-0.516c0.003-0.003,0,0,0.003-0.003L496.972,265.95V332.252z M222.677,265.696l-21.526,7.599 l-14.342-14.342l7.599-21.526L222.677,265.696z"></path>
                                </g>
                              </g>
                              <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g />
                              <g />
                              <g /> <g /> <g /> <g /> <g /> <g />
                            </svg>
                            {/*Construction Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Construction</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">8</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                140+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                  style={{ width: "543.2px", marginRight: 25, left: 569 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Furniture Icon Svg */}
                            <svg
                              style={{ enableBackground: "new 0 0 512 512" }}
                              version="1.1"
                              viewBox="0 0 512 512"
                              x="0px"
                              xmlns="http://www.w3.org/2000/svg"
                              y="0px"
                            >
                              <g>
                                <g>
                                  <path d="M511.168,344.981c0.789-2.112,1.067-4.437,0.341-6.784l-42.176-137.067V74.667c0-29.397-23.915-53.333-53.333-53.333H96 c-29.419,0-53.333,23.936-53.333,53.333v126.464L0.491,338.197c-0.725,2.325-0.448,4.651,0.341,6.784 C0.32,347.243,0,349.568,0,352v85.333V480c0,5.888,4.779,10.667,10.667,10.667h42.667C59.221,490.667,64,485.888,64,480v-32h384 v32c0,5.888,4.779,10.667,10.667,10.667h42.667c5.888,0,10.667-4.779,10.667-10.667v-42.667V352 C512,349.568,511.68,347.243,511.168,344.981z M64,74.667c0-17.643,14.357-32,32-32h320c17.643,0,32,14.357,32,32V192h-28.992 l-9.941-39.765C405.483,137.963,392.704,128,378.005,128h-68.672c-17.643,0-32,14.357-32,32v32h-42.667v-31.979 c0-17.643-14.357-32-32-32h-68.672c-14.699,0-27.477,9.984-31.061,24.235L92.992,192H64V74.667z M397.099,209.237 c-2.048,2.603-5.12,4.096-8.427,4.096h-79.339c-5.867,0-10.667-4.779-10.667-10.667V160c0-5.888,4.8-10.667,10.667-10.667h68.693 c4.907,0,9.152,3.307,10.347,8.064l10.667,42.667C399.851,203.285,399.147,206.613,397.099,209.237z M213.355,160v42.56 c0,0.043-0.021,0.064-0.021,0.107c0,0.021,0,0.043,0,0.043c-0.021,5.867-4.8,10.624-10.645,10.624h-79.339 c-3.328,0-6.379-1.493-8.427-4.096c-2.048-2.624-2.752-5.973-1.941-9.173l10.667-42.667c1.195-4.736,5.44-8.064,10.368-8.064 h68.672C208.555,149.333,213.355,154.112,213.355,160z M61.205,213.333h32.107c1.131,3.2,2.603,6.272,4.757,9.045 c6.144,7.808,15.339,12.288,25.259,12.288h79.339c13.888,0,25.621-8.96,30.037-21.333h46.592 c4.416,12.395,16.149,21.333,30.037,21.333h79.339c9.92,0,19.093-4.48,25.237-12.288c2.155-2.752,3.627-5.845,4.757-9.045h32.128 l32.939,107.051C482.496,320.235,481.28,320,480,320H32c-1.28,0-2.496,0.235-3.712,0.384L61.205,213.333z M42.667,469.333H21.333 V448h21.333V469.333z M490.667,469.333h-21.333V448h21.333V469.333z M490.667,426.667H21.333V352 c0-5.888,4.8-10.667,10.667-10.667h448c5.867,0,10.667,4.779,10.667,10.667V426.667z"></path>
                                </g>
                              </g>
                              <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g />
                              <g />
                              <g /> <g /> <g /> <g /> <g /> <g />
                            </svg>
                            {/*Furniture Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Furnitures</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">8</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                140+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                  style={{ width: "543.2px", marginRight: 25, left: 568 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Electronics Icon Svg */}
                            <svg
                              viewBox="0 -24 480 480"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m440 0h-400c-22.082031.0273438-39.9726562 17.917969-40 40v272c.0273438 22.082031 17.917969 39.972656 40 40h400c22.082031-.027344 39.972656-17.917969 40-40v-272c-.027344-22.082031-17.917969-39.9726562-40-40zm24 312c0 13.253906-10.746094 24-24 24h-400c-13.253906 0-24-10.746094-24-24v-272c0-13.253906 10.746094-24 24-24h400c13.253906 0 24 10.746094 24 24zm0 0" />
                              <path d="m440 32h-400c-4.417969 0-8 3.582031-8 8v272c0 4.417969 3.582031 8 8 8h400c4.417969 0 8-3.582031 8-8v-272c0-4.417969-3.582031-8-8-8zm-8 272h-384v-256h384zm0 0" />
                              <path d="m472 368h-464c-4.417969 0-8 3.582031-8 8 .0390625 30.910156 25.089844 55.960938 56 56h368c30.910156-.039062 55.960938-25.089844 56-56 0-4.417969-3.582031-8-8-8zm-48 48h-368c-19-.019531-35.375-13.386719-39.199219-32h446.398438c-3.824219 18.613281-20.199219 31.980469-39.199219 32zm0 0" />
                              <path d="m56 408h368c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-368c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8zm0 0" />
                            </svg>
                            {/*Electronics Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Electronics</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">8</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                240+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Health Icon Svg */}
                            <svg
                              style={{
                                enableBackground: "new 0 0 427.972 427.972",
                              }}
                              version="1.1"
                              viewBox="0 0 427.972 427.972"
                              x="0px"
                              xmlns="http://www.w3.org/2000/svg"
                              y="0px"
                            >
                              <g>
                                <path d="M426.398,238.441l-7.616-111.077c-0.494-7.195-3.766-13.761-9.212-18.488c-5.447-4.727-12.408-7.042-19.6-6.517 c-14.137,1.03-25.101,12.94-24.961,27.113l0.899,90.552l-39.225,50.237c-6.262,8.019-16.651,11.239-26.075,8.824l42.678-55.422 c7.491-9.728,6.246-23.821-2.833-32.084c-4.847-4.412-11.115-6.592-17.657-6.134c-6.539,0.457-12.446,3.485-16.634,8.528 l-64.473,77.645c-10.633,12.806-16.399,29.024-16.238,45.668l1.001,103.112c0.04,4.11,3.38,7.421,7.49,7.427l107.354,0.146 c0.003,0,0.007,0,0.01,0c2.1,0,4.104-0.88,5.524-2.427c1.423-1.55,2.13-3.625,1.947-5.722l-4.382-50.472l71.267-94.714 C423.474,264.256,427.286,251.401,426.398,238.441z M403.677,265.619l-72.994,97.01c-1.112,1.478-1.639,3.315-1.479,5.158 l3.922,45.174l-91.746-0.125l-0.929-95.695c-0.128-13.099,4.411-25.862,12.779-35.94l64.473-77.646 c1.545-1.861,3.725-2.978,6.137-3.146c2.413-0.172,4.728,0.635,6.517,2.264c3.351,3.049,3.81,8.25,1.045,11.839l-48.431,62.893 c-1.27,1.649-1.797,3.751-1.456,5.804c0.341,2.053,1.52,3.872,3.254,5.022c17.332,11.495,40.938,7.657,53.737-8.737l40.839-52.305 c1.046-1.338,1.605-2.992,1.589-4.69l-0.925-93.174c-0.063-6.275,4.792-11.548,11.051-12.005c3.198-0.23,6.267,0.793,8.678,2.885 c2.412,2.093,3.86,5,4.079,8.186l7.616,111.077C412.074,248.831,409.321,258.118,403.677,265.619z"></path>
                                <path d="M121.81,193.973c-4.188-5.043-10.095-8.072-16.634-8.528c-6.535-0.456-12.809,1.722-17.655,6.134 c-9.081,8.264-10.326,22.357-2.835,32.085l42.679,55.422c-9.418,2.412-19.814-0.804-26.076-8.824l-39.225-50.237l0.899-90.552 c0.14-14.173-10.823-26.083-24.96-27.113c-7.182-0.521-14.151,1.789-19.6,6.517c-5.446,4.727-8.718,11.293-9.212,18.488 L1.574,238.441c-0.889,12.96,2.924,25.815,10.734,36.196l71.268,94.714l-4.382,50.472c-0.183,2.096,0.524,4.172,1.947,5.722 c1.421,1.547,3.425,2.427,5.524,2.427c0.003,0,0.007,0,0.01,0l107.354-0.146c4.11-0.006,7.45-3.317,7.49-7.427l1.002-103.112 c0.161-16.643-5.605-32.861-16.238-45.667L121.81,193.973z M186.592,412.836l-91.745,0.125l3.922-45.174 c0.16-1.843-0.366-3.68-1.479-5.158l-72.995-97.01c-5.644-7.5-8.397-16.788-7.756-26.151l7.617-111.077 c0.219-3.186,1.667-6.093,4.079-8.186c2.187-1.898,4.926-2.917,7.792-2.917c0.294,0,0.589,0.011,0.886,0.032 c6.259,0.456,11.112,5.729,11.05,12.005l-0.925,93.174c-0.017,1.698,0.543,3.352,1.589,4.69l40.839,52.305 c12.801,16.394,36.405,20.23,53.738,8.738c1.734-1.15,2.913-2.969,3.254-5.022s-0.187-4.156-1.456-5.805l-48.432-62.892 c-2.764-3.59-2.305-8.79,1.047-11.84c1.789-1.629,4.101-2.43,6.515-2.264c2.413,0.168,4.593,1.286,6.138,3.147l64.473,77.646 c8.368,10.079,12.907,22.842,12.779,35.94L186.592,412.836z"></path>
                                <path d="M360.908,84.394c0-22.542-8.779-43.735-24.719-59.675C320.249,8.778,299.057,0,276.514,0 c-22.542,0-43.735,8.778-59.676,24.718l-2.852,2.853l-2.853-2.853C195.194,8.778,174.001,0,151.458,0 c-22.542,0-43.735,8.778-59.676,24.718c-32.904,32.905-32.904,86.445,0.001,119.351l116.899,116.899 c1.465,1.464,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197l116.899-116.9C352.129,128.129,360.908,106.936,360.908,84.394z M213.987,245.059L102.39,133.462c-27.057-27.057-27.057-71.081,0-98.138C115.496,22.218,132.923,15,151.458,15 c18.536,0,35.962,7.218,49.069,20.325l8.156,8.156c1.406,1.407,3.313,2.197,5.303,2.197s3.897-0.791,5.304-2.197l8.155-8.156 C240.552,22.218,257.979,15,276.514,15c18.536,0,35.962,7.218,49.068,20.325c13.107,13.107,20.326,30.533,20.326,49.069 s-7.219,35.962-20.326,49.069L213.987,245.059z"></path>
                              </g>
                              <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g />
                              <g />
                              <g /> <g /> <g /> <g /> <g /> <g />
                            </svg>
                            {/*Health Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Health</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">7</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                160+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Real-Estate Icon Svg */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <path d="M465.775,116.467l-28.326-10.895V57.198c0-4.142-3.357-7.5-7.5-7.5H412.6V7.5c0-4.142-3.357-7.5-7.5-7.5   c-4.143,0-7.5,3.358-7.5,7.5v42.198h-17.349c-4.143,0-7.5,3.358-7.5,7.5v23.49L250.409,33.633   c-2.307-0.887-4.901-0.582-6.939,0.818c-2.037,1.399-3.254,3.711-3.254,6.182v58.769H188.95V73.769c0-4.142-3.358-7.5-7.5-7.5   s-7.5,3.358-7.5,7.5v25.633h-24.634c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h124.035l-0.001,18.132h-9.058   c-0.003,0-0.006-0.001-0.01-0.001H98.617c-0.003,0-0.006,0.001-0.01,0.001h-9.058v-18.132h29.767c4.142,0,7.5-3.358,7.5-7.5   c0-4.142-3.358-7.5-7.5-7.5H82.049c-4.142,0-7.5,3.358-7.5,7.5v33.132c0,4.142,3.358,7.5,7.5,7.5h9.068v34.701h-42.2   c-4.142,0-7.5,3.358-7.5,7.5v33.132c0,4.142,3.358,7.5,7.5,7.5h9.066v274.131c0,4.142,3.358,7.5,7.5,7.5h182.205   c0.01,0,0.019,0.001,0.029,0.001h215.366c4.143,0,7.5-3.358,7.5-7.5V123.467C470.583,120.364,468.672,117.581,465.775,116.467z    M387.751,64.698h34.698v35.105l-34.698-13.346V64.698z M455.583,128.618v17.061L255.217,68.615V51.554L455.583,128.618z    M106.117,147.534h150.665v34.701H106.117V147.534z M56.417,197.235h42.2h165.665h42.2l-0.002,18.132H56.417V197.235z    M157.382,263.502v233.496h-18.133V263.502H157.382z M172.382,263.502h18.133v233.496h-18.133V263.502z M205.515,263.502h18.134   v233.496h-18.134V263.502z M238.649,263.502h18.133v233.496h-18.133V263.502z M271.782,263.502h18.135v233.497h-18.135V263.502z    M289.917,248.502h-25.635h-33.104c-0.01,0-0.019-0.001-0.029-0.001c-0.01,0-0.019,0.001-0.029,0.001h-33.076   c-0.01,0-0.019-0.001-0.029-0.001c-0.01,0-0.019,0.001-0.029,0.001h-33.075c-0.01,0-0.019-0.001-0.029-0.001   c-0.01,0-0.019,0.001-0.029,0.001h-33.075c-0.01,0-0.019-0.001-0.029-0.001c-0.01,0-0.019,0.001-0.029,0.001H98.617H72.983v-18.133   h216.934V248.502z M106.117,263.502h18.132v233.496h-18.132V263.502z M72.983,263.502h18.134v233.497H72.983V263.502z M304.917,497   V230.367h9.064c4.142,0,7.5-3.357,7.5-7.499l0.002-33.132c0-1.989-0.79-3.897-2.196-5.304c-1.407-1.407-3.314-2.197-5.304-2.197   h-42.2v-34.701h9.067c4.142,0,7.5-3.358,7.5-7.5l0.001-33.132c0-1.989-0.79-3.896-2.196-5.303   c-1.407-1.407-3.314-2.197-5.304-2.197h-25.634V84.686l200.366,77.065V497H304.917z" />
                                <path d="M396.815,165.667h-33.132c-4.143,0-7.5,3.358-7.5,7.5v33.131c0,4.142,3.357,7.5,7.5,7.5h33.132c4.143,0,7.5-3.358,7.5-7.5   v-33.131C404.315,169.024,400.958,165.667,396.815,165.667z M389.315,198.798h-18.132v-18.131h18.132V198.798z" />
                                <path d="M396.815,248.499h-33.132c-4.143,0-7.5,3.358-7.5,7.5v33.132c0,4.142,3.357,7.5,7.5,7.5h33.132c4.143,0,7.5-3.358,7.5-7.5   v-33.132C404.315,251.857,400.958,248.499,396.815,248.499z M389.315,281.631h-18.132V263.5h18.132V281.631z" />
                                <path d="M396.815,331.333h-33.132c-4.143,0-7.5,3.358-7.5,7.5v33.132c0,4.142,3.357,7.5,7.5,7.5h33.132c4.143,0,7.5-3.358,7.5-7.5   v-33.132C404.315,334.691,400.958,331.333,396.815,331.333z M389.315,364.465h-18.132v-18.132h18.132V364.465z" />
                                <path d="M396.815,414.167h-33.132c-4.143,0-7.5,3.358-7.5,7.5v33.131c0,4.142,3.357,7.5,7.5,7.5h33.132c4.143,0,7.5-3.358,7.5-7.5   v-33.131C404.315,417.524,400.958,414.167,396.815,414.167z M389.315,447.298h-18.132v-18.131h18.132V447.298z" />
                              </g>
                            </svg>
                            {/*Real-Estate Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Real Estate</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">12</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                40+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Cloth Icon Svg */}
                            <svg
                              viewBox="-59 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m206.949219 412c0-5.519531-4.480469-10-10-10s-10 4.480469-10 10 4.480469 10 10 10 10-4.480469 10-10zm0 0" />
                              <path d="m186.949219 140h20c5.523437 0 10-4.476562 10-10s-4.476563-10-10-10h-20c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10zm0 0" />
                              <path d="m186.949219 180h20c5.523437 0 10-4.476562 10-10s-4.476563-10-10-10h-20c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10zm0 0" />
                              <path d="m393.648438 447.664062c-21.539063-85.746093-38.757813-172.550781-116.613282-255.953124l7.542969-71.710938h12.371094c33.085937 0 60-26.914062 60-60s-26.914063-60-60-60c-16.941407 0-12.71875 0-33.058594 0-16.199219 0-28.476563 12.9375-29.683594 25.765625l-4.382812 46.167969c-.921875 4.691406-5.003907 8.066406-9.8125 8.066406h-46.121094c-4.808594 0-8.890625-3.375-9.8125-8.066406l-4.382813-46.167969c-1.214843-13.007813-13.5-25.765625-29.683593-25.765625-20.421875 0-15.882813 0-33.0625 0-33.082031 0-60 26.914062-60 60s26.917969 60 60 60h12.375l7.546875 71.753906c-44.492188 48.089844-78.886719 112.523438-97.210938 182.40625-2.480468 9.433594-13.390625 51.003906-19.328125 73.433594-1.085937 4.109375.542969 8.457031 4.066407 10.839844 51.085937 34.542968 119.46875 53.566406 192.550781 53.566406 73.15625 0 141.558593-19.042969 192.609375-53.621094 3.480468-2.355468 5.113281-6.640625 4.089844-10.714844zm-101.488282-427.664062h4.792969c22.054687 0 40 17.945312 40 40s-17.945313 40-40 40h-10.269531l6.9375-65.957031c.644531-4.757813.113281-9.578125-1.460938-14.042969zm-195.210937 80c-22.054688 0-40-17.945312-40-40s17.945312-40.011719 40-40.011719h4.789062c-1.65625 4.640625-2.082031 9.484375-1.453125 14.0625l6.933594 65.949219zm31.21875-79.820312c1.222656.21875 2.441406.199218 3.609375-.023438 4.015625.710938 7.238281 3.804688 8.046875 7.910156l4.382812 46.167969c1.214844 13.007813 13.5 25.765625 29.683594 25.765625h46.121094c14.722656 0 27.167969-10.539062 29.59375-25.0625.035156-.234375.066406-.46875.089843-.703125l4.378907-46.160156c.808593-4.070313 4.027343-7.195313 8.0625-7.917969 1.167969.222656 2.386719.238281 3.609375.019531 5.015625.917969 8.835937 5.71875 8.042968 11.238281-.015624.121094-.03125.246094-.042968.371094l-16.074219 152.824219-57.46875 19.707031c-2.097656.71875-4.410156.71875-6.5.003906l-57.476563-19.710937-16.070312-152.824219c-.015625-.132812-.03125-.265625-.050781-.394531-.765625-5.277344 2.851562-10.25 8.0625-11.210937zm-89.164063 359.058593c.546875-2.085937 1.109375-4.167969 1.6875-6.242187 26.722656 23.371094 67.539063 39.941406 115.027344 46.277344.449219.058593.894531.085937 1.335938.085937 4.933593 0 9.226562-3.652344 9.898437-8.675781.730469-5.476563-3.117187-10.503906-8.589844-11.234375-47.324219-6.3125-88.316406-24.046875-111.140625-47.835938 18.769532-56.414062 48.382813-107.738281 85.15625-147.179687l44.113282 15.128906-35.789063 28.628906c-4.3125 3.449219-5.011719 9.742188-1.5625 14.054688s9.742187 5.015625 14.058594 1.5625l43.75-35 43.753906 35c4.292969 3.433594 10.589844 2.769531 14.054687-1.5625 3.453126-4.3125 2.753907-10.605469-1.558593-14.054688l-35.789063-28.628906 44.144532-15.140625c37.0625 39.394531 66.792968 90.375 85.71875 146.519531-22.695313 24.152344-63.914063 42.144532-111.734376 48.515625-5.472656.730469-9.320312 5.757813-8.589843 11.234375.667969 5.023438 4.964843 8.679688 9.898437 8.679688.441406 0 .886719-.03125 1.332032-.089844 47.960937-6.390625 89.019531-23.191406 115.707031-46.910156 1.105469 3.925781 2.167969 7.871094 3.167969 11.835937 0 0 .9375 3.707031 2.398437 9.519531-38.738281 30.308594-98.882813 48.273438-162.503906 48.273438-63.152344 0-123.0625-17.769531-161.886719-47.761719zm157.945313 112.761719c-66.320313 0-128.292969-16.386719-175.4375-46.265625 2.382812-9.023437 5.308593-20.140625 8.082031-30.6875 42.214844 29.59375 103.4375 46.953125 167.355469 46.953125 64.25 0 125.613281-17.472656 167.789062-47.273438.941407 3.746094 1.914063 7.601563 2.878907 11.445313 1.71875 6.824219 3.417968 13.578125 4.902343 19.46875-47.121093 29.9375-109.144531 46.359375-175.570312 46.359375zm0 0" />
                            </svg>
                            {/*Cloth Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Clothing</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">3</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                40+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Restaurant Icon Svg */}
                            <svg
                              viewBox="0 -1 511.99871 511"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m380.589844 204.039062 30.082031-1.90625c.050781-.003906.105469-.007812.160156-.011718 21.4375-1.808594 40.679688-13.039063 52.796875-30.820313l23.78125-34.890625c20.699219-30.375 28.71875-67.0625 22.574219-103.300781-1.207031-7.117187-4.847656-13.675781-10.246094-18.460937-5.402343-4.789063-12.347656-7.617188-19.558593-7.960938-36.726563-1.757812-72.175782 10.605469-99.847657 34.796875l-31.789062 27.792969c-16.199219 14.160156-25.042969 34.609375-24.269531 56.113281.003906.050781.003906.105469.007812.160156l1.714844 30.089844c.667968 11.730469-3.632813 23.304687-11.777344 31.734375l-248.351562 255.132812c-6.648438 6.933594-10.082032 16.445313-9.664063 26.785157.460937 11.382812 5.683594 22.5625 13.972656 29.910156 7.488281 6.636719 17.78125 10.417969 28.070313 10.417969 1.101562 0 2.203125-.042969 3.300781-.132813 10.316406-.824219 19.351563-5.371093 25.46875-12.847656l223.464844-277.085937c7.410156-9.117188 18.386719-14.773438 30.109375-15.515626zm-42.039063 5.859376-223.445312 277.0625c-3.414063 4.171874-8.664063 6.742187-14.78125 7.230468-7.277344.582032-14.738281-1.839844-19.964844-6.472656-5.226563-4.636719-8.523437-11.753906-8.816406-19.046875-.25-6.128906 1.667969-11.648437 5.363281-15.5l248.332031-255.113281c11.132813-11.519532 16.992188-27.296875 16.085938-43.289063l-1.714844-30.011719c-.582031-16.832031 6.351563-32.835937 19.035156-43.925781l31.789063-27.792969c24.671875-21.566406 56.289062-32.578124 89.015625-31.023437 3.726562.179687 7.3125 1.640625 10.105469 4.117187 2.792968 2.472657 4.671874 5.863282 5.296874 9.539063 5.476563 32.308594-1.671874 65.011719-20.125 92.089844l-23.78125 34.894531c-9.488281 13.921875-24.546874 22.722656-41.328124 24.164062l-30 1.898438c-15.984376 1.015625-30.945313 8.726562-41.066407 21.179688zm0 0" />
                              <path d="m497.820312 440.570312-166.519531-151.667968c-3.132812-2.855469-7.984375-2.628906-10.84375.503906-2.851562 3.132812-2.625 7.988281.507813 10.84375l166.476562 151.632812c3.960938 3.660157 6.207032 9.054688 6.328125 15.1875.144531 7.296876-2.71875 14.597657-7.660156 19.539063-4.9375 4.9375-12.226563 7.808594-19.539063 7.660156-6.132812-.121093-11.527343-2.367187-15.148437-6.285156l-148.382813-162.90625c-2.855468-3.136719-7.710937-3.359375-10.84375-.507813-3.132812 2.855469-3.359374 7.710938-.503906 10.84375l148.417969 162.945313c6.523437 7.054687 15.8125 11.054687 26.160156 11.257813.269531.003906.535157.007812.804688.007812 11.121093 0 22.242187-4.511719 29.886719-12.160156 7.835937-7.835938 12.378906-19.308594 12.152343-30.695313-.203125-10.347656-4.199219-19.636719-11.292969-26.199219zm0 0" />
                              <path d="m92.609375 202.585938c12.703125 11.703124 29.207031 18.375 46.472656 18.789062.054688.003906.109375.003906.160157.003906l30.140624.09375c11.75.035156 23.042969 5.023438 30.96875 13.660156l13.277344 14.574219c1.515625 1.664063 3.589844 2.507813 5.675782 2.507813 1.84375 0 3.695312-.660156 5.164062-2 3.136719-2.855469 3.363281-7.710938.507812-10.84375l-13.296874-14.59375c-10.828126-11.804688-26.226563-18.601563-42.246094-18.65625l-30.058594-.09375c-13.355469-.339844-26.125-5.453125-36.019531-14.410156l-87.347657-103.835938c-.890624-1.0625-.824218-2.601562.15625-3.582031.671876-.675781 1.460938-.773438 1.871094-.773438s1.199219.097657 1.875.773438l79.507813 79.511719c7.859375 7.859374 20.648437 7.859374 28.507812-.003907l9.34375-9.339843v-.003907l16.589844-16.589843s.003906 0 .003906-.003907c0 0 .003907-.003906.003907-.003906l9.339843-9.339844c7.859375-7.859375 7.859375-20.648437 0-28.507812l-79.507812-79.507813c-1.03125-1.03125-1.03125-2.714844 0-3.746094.980469-.980468 2.519531-1.046874 3.582031-.15625l103.835938 87.351563c8.960937 9.890625 14.074218 22.664063 14.414062 36.015625l.089844 30.0625c.054687 16.015625 6.855468 31.414062 18.675781 42.265625l14.226563 12.957031c3.136718 2.855469 7.988281 2.628906 10.84375-.503906 2.851562-3.136719 2.625-7.988281-.507813-10.84375l-14.203125-12.9375c-8.660156-7.945312-13.644531-19.242188-13.683594-30.988281l-.09375-30.140625c0-.054688 0-.109375-.003906-.164063-.414062-17.265625-7.085938-33.769531-18.789062-46.472656-.21875-.238281-.453126-.464844-.703126-.675781l-104.222656-87.671875c-7.203125-6.0625-17.65625-5.609375-24.3125 1.046875-7.019531 7.019531-7.019531 18.4375 0 25.453125l79.507813 79.511719c1.875 1.875 1.875 4.925781 0 6.800781l-3.917969 3.914062-88.613281-88.609375c-2.996094-3-7.855469-3-10.851563 0-2.996094 2.996094-2.996094 7.855469 0 10.851563l88.613282 88.613281-5.742188 5.738281-88.613281-88.609375c-2.996094-2.996094-7.855469-2.996094-10.851563 0-3 2.996094-3 7.855469 0 10.851563l88.609375 88.613281-3.914062 3.917969c-1.875 1.875-4.925781 1.875-6.800781 0l-79.511719-79.507813c-3.398438-3.398437-7.917969-5.273437-12.726563-5.273437s-9.328125 1.875-12.726562 5.273437c-6.65625 6.65625-7.105469 17.109375-1.046875 24.316406l87.675781 104.21875c.207031.25.433594.484376.671875.703126zm0 0" />
                            </svg>
                            {/*Restaurant Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Restaurant</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">6</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                65+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Automobile Icon Svg */}
                            <svg
                              style={{ enableBackground: "new 0 0 512 512" }}
                              version="1.1"
                              viewBox="0 0 512 512"
                              x="0px"
                              xmlns="http://www.w3.org/2000/svg"
                              y="0px"
                            >
                              <g>
                                <g>
                                  <path d="M476.158,231.363l-13.259-53.035c3.625-0.77,6.345-3.986,6.345-7.839v-8.551c0-18.566-15.105-33.67-33.67-33.67h-60.392 V110.63c0-9.136-7.432-16.568-16.568-16.568H50.772c-9.136,0-16.568,7.432-16.568,16.568V256c0,4.427,3.589,8.017,8.017,8.017 c4.427,0,8.017-3.589,8.017-8.017V110.63c0-0.295,0.239-0.534,0.534-0.534h307.841c0.295,0,0.534,0.239,0.534,0.534v145.372 c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017v-9.088h94.569c0.008,0,0.014,0.002,0.021,0.002 c0.008,0,0.015-0.001,0.022-0.001c11.637,0.008,21.518,7.646,24.912,18.171h-24.928c-4.427,0-8.017,3.589-8.017,8.017v17.102 c0,13.851,11.268,25.119,25.119,25.119h9.086v35.273h-20.962c-6.886-19.883-25.787-34.205-47.982-34.205 s-41.097,14.322-47.982,34.205h-3.86v-60.393c0-4.427-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.589-8.017,8.017v60.391H192.817 c-6.886-19.883-25.787-34.205-47.982-34.205s-41.097,14.322-47.982,34.205H50.772c-0.295,0-0.534-0.239-0.534-0.534v-17.637 h34.739c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017H8.017c-4.427,0-8.017,3.589-8.017,8.017 s3.589,8.017,8.017,8.017h26.188v17.637c0,9.136,7.432,16.568,16.568,16.568h43.304c-0.002,0.178-0.014,0.355-0.014,0.534 c0,27.996,22.777,50.772,50.772,50.772s50.772-22.776,50.772-50.772c0-0.18-0.012-0.356-0.014-0.534h180.67 c-0.002,0.178-0.014,0.355-0.014,0.534c0,27.996,22.777,50.772,50.772,50.772c27.995,0,50.772-22.776,50.772-50.772 c0-0.18-0.012-0.356-0.014-0.534h26.203c4.427,0,8.017-3.589,8.017-8.017v-85.511C512,251.989,496.423,234.448,476.158,231.363z M375.182,144.301h60.392c9.725,0,17.637,7.912,17.637,17.637v0.534h-78.029V144.301z M375.182,230.881v-52.376h71.235 l13.094,52.376H375.182z M144.835,401.904c-19.155,0-34.739-15.583-34.739-34.739s15.584-34.739,34.739-34.739 c19.155,0,34.739,15.583,34.739,34.739S163.99,401.904,144.835,401.904z M427.023,401.904c-19.155,0-34.739-15.583-34.739-34.739 s15.584-34.739,34.739-34.739c19.155,0,34.739,15.583,34.739,34.739S446.178,401.904,427.023,401.904z M495.967,299.29h-9.086 c-5.01,0-9.086-4.076-9.086-9.086v-9.086h18.171V299.29z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M144.835,350.597c-9.136,0-16.568,7.432-16.568,16.568c0,9.136,7.432,16.568,16.568,16.568 c9.136,0,16.568-7.432,16.568-16.568C161.403,358.029,153.971,350.597,144.835,350.597z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M427.023,350.597c-9.136,0-16.568,7.432-16.568,16.568c0,9.136,7.432,16.568,16.568,16.568 c9.136,0,16.568-7.432,16.568-16.568C443.591,358.029,436.159,350.597,427.023,350.597z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M332.96,316.393H213.244c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017H332.96 c4.427,0,8.017-3.589,8.017-8.017S337.388,316.393,332.96,316.393z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M127.733,282.188H25.119c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h102.614 c4.427,0,8.017-3.589,8.017-8.017S132.16,282.188,127.733,282.188z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M278.771,173.37c-3.13-3.13-8.207-3.13-11.337,0.001l-71.292,71.291l-37.087-37.087c-3.131-3.131-8.207-3.131-11.337,0 c-3.131,3.131-3.131,8.206,0,11.337l42.756,42.756c1.565,1.566,3.617,2.348,5.668,2.348s4.104-0.782,5.668-2.348l76.96-76.96 C281.901,181.576,281.901,176.501,278.771,173.37z"></path>
                                </g>
                              </g>
                              <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g />
                              <g />
                              <g /> <g /> <g /> <g /> <g /> <g />
                            </svg>
                            {/*Automobile Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">AutoMobile</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">5</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                50+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Service Icon Svg */}
                            <svg
                              style={{ enableBackground: "new 0 0 512 512" }}
                              version="1.1"
                              viewBox="0 0 512 512"
                              x="0px"
                              xmlns="http://www.w3.org/2000/svg"
                              y="0px"
                            >
                              <g>
                                <g>
                                  <path d="M408.274,56.527h-0.087c-4.503,0-8.109,3.65-8.109,8.153c0,4.503,3.694,8.153,8.196,8.153s8.153-3.65,8.153-8.153 C416.427,60.177,412.776,56.527,408.274,56.527z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M290.912,389.623l-77.599-32.332c-3.455-1.439-5.686-4.787-5.686-8.53v-16.46l14.509-8.06 c12.431-6.907,20.621-19.485,21.908-33.647l0.032-0.351h7.576c14.086,0,25.546-11.46,25.546-25.546v-15.703 c2.284-5.523,8.696-23.2,8.696-47.587c0-33.695-13.199-65.487-37.165-89.521c-9.17-9.195-19.542-16.838-30.794-22.799 c-0.392-27.598-28.021-49.953-61.942-49.953s-61.55,22.355-61.943,49.953c-11.252,5.96-21.624,13.603-30.794,22.799 c-23.966,24.034-37.165,55.825-37.165,89.521c0,24.387,6.412,42.063,8.696,47.587v15.703c0,14.086,11.46,25.546,25.546,25.546 h7.576l0.031,0.351c1.287,14.162,9.478,26.741,21.909,33.647l14.509,8.06v16.46c0,3.742-2.232,7.09-5.686,8.53l-77.599,32.332 C8.271,394.957,0,407.364,0,421.231v52.178c0,14.086,11.46,25.546,25.546,25.546h260.892c14.086,0,25.546-11.46,25.546-25.546 v-52.178C311.983,407.364,303.712,394.957,290.912,389.623z M260.892,264.696c0,5.095-4.145,9.24-9.24,9.24h-6.093l3.261-35.873 h2.832c5.095,0,9.24,4.145,9.24,9.24V264.696z M155.992,55.44c21.355,0,39.325,11.054,44.29,25.933 c-13.966-4.898-28.895-7.453-44.29-7.453s-30.323,2.555-44.29,7.453C116.666,66.494,134.636,55.44,155.992,55.44z M60.331,273.936 c-5.095,0-9.24-4.145-9.24-9.24v-17.393c0-5.095,4.145-9.24,9.24-9.24h2.832l3.261,35.873H60.331z M97.768,309.987 c-7.711-4.284-12.792-12.086-13.59-20.87l-6.207-68.273c10.664-0.067,29.363-0.975,51.23-5.506 c44.72-9.265,81.204-29.479,105.507-58.455c2.894-3.449,2.443-8.592-1.008-11.485c-3.45-2.894-8.592-2.443-11.486,1.008 c-53.04,63.24-151.327,58.059-152.671,57.977v0.009c-0.412-0.025-0.829-0.03-1.253,0.009c-4.484,0.408-7.789,4.373-7.381,8.857 l0.772,8.501h-1.35c-5.708,0-10.985,1.883-15.243,5.058c-1.478-6.864-2.694-15.508-2.694-25.41 c0-29.348,11.509-57.05,32.406-78.007c21.333-21.393,50.167-33.175,81.191-33.175s59.857,11.781,81.191,33.175 c20.897,20.955,32.406,48.659,32.406,78.007c0,9.901-1.215,18.547-2.694,25.411c-4.258-3.176-9.534-5.059-15.243-5.059h-1.35 l0.773-8.502c0.22-2.409-0.644-4.792-2.355-6.503l-17.393-17.393c-3.184-3.184-8.346-3.184-11.529,0 c-3.184,3.184-3.184,8.345,0,11.529l14.693,14.693l-5.805,63.855c-6.658,5.889-27.775,20.588-72.694,20.588 c-4.503,0-8.153,3.65-8.153,8.153s3.65,8.153,8.153,8.153c31.214,0,52.574-6.536,66.428-13.435 c-2.189,2.859-4.96,5.289-8.203,7.091l-45.291,25.162c-8.099,4.499-17.769,4.499-25.867,0L97.768,309.987z M104.943,372.341 c9.55-3.979,15.72-13.235,15.72-23.58v-7.402l14.476,8.043c6.529,3.626,13.69,5.441,20.853,5.441s14.324-1.813,20.853-5.441 l14.476-8.043v7.402c0,10.347,6.17,19.602,15.72,23.58l8.552,3.563c-15.294,17.756-30.075,26.578-40.086,30.892 c-11.073,4.771-18.74,5.163-19.516,5.192c-0.776-0.028-8.443-0.421-19.516-5.192c-10.011-4.313-24.791-13.136-40.086-30.892 L104.943,372.341z M52.178,482.65H25.546c-5.095,0-9.24-4.145-9.24-9.24v-52.178c0-2.248,0.417-4.422,1.189-6.436l27.952,22.363 c4.279,3.422,6.731,8.527,6.731,14.006V482.65z M243.499,451.163v31.486H68.484v-31.486c0-10.46-4.684-20.205-12.851-26.739 l-25.921-20.737l50.923-21.218c26.865,33.228,54.02,42.37,67.203,44.879v27.582c0,4.503,3.65,8.153,8.153,8.153 s8.153-3.65,8.153-8.153v-27.582c13.184-2.509,40.338-11.651,67.203-44.879l50.923,21.218l-25.921,20.737 C248.183,430.958,243.499,440.704,243.499,451.163z M295.677,473.41c0,5.095-4.145,9.24-9.24,9.24h-26.633v-31.486 c0-5.479,2.453-10.583,6.731-14.007l27.952-22.362c0.772,2.014,1.189,4.188,1.189,6.436V473.41z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M145.944,243.765c-3.896-8.085-13.292-13.311-23.939-13.311s-20.043,5.225-23.939,13.311 c-1.954,4.056-0.25,8.929,3.807,10.884c4.056,1.955,8.929,0.249,10.884-3.807c0.953-1.978,4.519-4.082,9.249-4.082 c4.73,0,8.295,2.103,9.249,4.082c1.404,2.917,4.318,4.617,7.351,4.617c1.187,0,2.393-0.261,3.533-0.81 C146.194,252.694,147.898,247.822,145.944,243.765z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M213.917,243.765c-3.895-8.085-13.291-13.311-23.939-13.311s-20.043,5.225-23.939,13.311 c-1.955,4.057-0.25,8.929,3.807,10.884c4.056,1.955,8.929,0.249,10.884-3.807c0.953-1.978,4.519-4.082,9.249-4.082 s8.295,2.103,9.249,4.082c1.404,2.917,4.318,4.617,7.351,4.617c1.187,0,2.393-0.261,3.533-0.81 C214.167,252.694,215.872,247.822,213.917,243.765z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M408.187,13.045c-57.243,0-103.813,46.57-103.813,103.813c0,30.035,12.718,57.98,35.132,77.723 c-11.247,18.412-23.453,29.023-23.578,29.131c-2.686,2.294-3.589,6.057-2.237,9.32c1.27,3.063,4.255,5.032,7.529,5.032 c0.214,0,0.43-0.009,0.647-0.025c1.341-0.107,31.956-2.721,59.114-20.983c8.851,2.4,17.984,3.616,27.207,3.616 c57.243,0,103.813-46.57,103.813-103.813C512,59.615,465.43,13.045,408.187,13.045z M408.187,204.365 c-8.93,0-17.757-1.349-26.236-4.011c-2.468-0.774-5.158-0.333-7.248,1.194c-10.038,7.327-21.056,12.056-30.517,15.084 c4.232-5.582,8.752-12.292,12.989-20.038c1.928-3.525,1.001-7.929-2.185-10.378c-21.805-16.751-34.31-42.032-34.31-69.358 c0-48.252,39.255-87.507,87.507-87.507c48.252,0,87.507,39.255,87.507,87.507C495.694,165.11,456.439,204.365,408.187,204.365z"></path>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M416.883,160.883h-0.544v-53.265h0.544c4.503,0,8.153-3.65,8.153-8.153s-3.65-8.153-8.153-8.153H399.49 c-4.503,0-8.153,3.65-8.153,8.153s3.65,8.153,8.153,8.153h0.544v53.265h-0.544c-4.503,0-8.153,3.65-8.153,8.153 c0,4.503,3.65,8.153,8.153,8.153h17.393c4.503,0,8.153-3.65,8.153-8.153C425.036,164.534,421.386,160.883,416.883,160.883z"></path>
                                </g>
                              </g>
                              <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g />
                              <g />
                              <g /> <g /> <g /> <g /> <g /> <g />
                            </svg>
                            {/*Service Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Services</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">4</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                80+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <a href="business-list.html" />
                          <div className="cat-img category-svg">
                            {/*Beauty Icon Svg */}
                            <svg
                              viewBox="0 0 60 60"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g>
                                <path d="m32.7 8.778c-.2510745-.25995658-.6228779-.3642126-.9725073-.27269716-.3496295.09151544-.6226744.3645604-.7141899.71418984-.0915154.34962943.0127406.72143285.2726972.97250732l4.439 4.439c-.1911498.6866768.0039383 1.423039.51 1.925 1.761 1.761 3.081 3.34 6.107 3.7 2.2369515.2063115 4.3385883 1.1623377 5.964 2.713l4.9 4.9c1.031783.9890898 2.512863 1.3525968 3.8853314.9535914s2.4278147-1.4999048 2.7685001-2.888c.3406853-1.3880953-.0850484-2.8525016-1.1168315-3.8415914l-4.781-4.781c-1.5501651-1.6256415-2.5058101-3.7272148-2.712-5.964-.372-3.1-2.108-4.513-3.7-6.107-.5053974-.49936785-1.2377831-.69312269-1.924-.509l-4.439-4.439c-.3923789-.37897221-1.0160848-.37355237-1.4018186.01218143-.3857338.38573379-.3911536 1.00943968-.0121814 1.40181857l4.243 4.243-1.416 1.414-4.241-4.242c-.3923789-.37897221-1.0160848-.37355237-1.4018186.01218142-.3857338.3857338-.3911536 1.00943969-.0121814 1.40181858l4.242 4.242-1.414 1.414-4.243-4.242c-.3923789-.37897221-1.0160848-.37355237-1.4018186.01218142-.3857338.3857338-.3911536 1.00943969-.0121814 1.40181858l4.243 4.242-1.415 1.415zm16.564 2.809c.2578997 2.6823088 1.4152492 5.1985925 3.284 7.14l4.781 4.781c.7892615.7503703.8846332 1.9755302.221 2.839-.3726456.405477-.8919414.6451315-1.4422661.6656043-.5503246.0204728-1.0859914-.1799356-1.4877339-.5566043l-4.9-4.9c-1.9411763-1.8692481-4.4575237-3.0269794-7.14-3.285-2.358-.281-3.4-1.6-4.931-3.129l8.488-8.483c1.582 1.579 2.847 2.575 3.129 4.928z" />
                                <path d="m45.21 41.048c-1.209-3.508.345-8.237.769-16.013.0196496-.3572656-.1527923-.6978756-.4523686-.8935255-.2995763-.1956498-.6807741-.2166157-1-.055-.3192259.1616158-.5279818.4812599-.5476314.8385255-.412 7.581-1.933 12.234-.821 16.266-4.115.377-9.158 1.403-9.158 3.809.0824635.8303963.6005452 1.5541869 1.36 1.9l.489 2.445c-1.19.167-2.486.3-3.872.4v-6.917c2.1031686-2.238331 3.6249938-4.9585248 4.432-7.922 1.6-.423 4.591-1.89 4.591-6.946 0-2.339-.54-3.749-1.652-4.311-.5534634-.266995-1.1879399-.3127746-1.774-.128 0-.637-.022-1.268-.067-1.866-.0178386-.237121-.1195909-.4601251-.287-.629-3.858-3.89-5.52-4.026-12.72-4.026-4.788 0-6.585-2.736-7.23-4.368-.1156044-.2919097-.3615931-.5125786-.6642972-.5959205s-.6269762-.0196799-.8757028.1719205c-2.856 2.2-4.261 5.9-4.3 11.314-.5856649-.184515-1.219613-.1391053-1.773.127-1.117.562-1.657 1.972-1.657 4.311 0 5.04 2.971 6.513 4.574 6.94.8008288 2.9868397 2.33491 5.7263932 4.463 7.97v6.874c-10.237-.744-12.844-2.999-14.211-4.544 6.6-3.156 1.166-15.883 2.13-25.933.983-10.204 9.544-10.673 12.149-10.58.2148988.0236433.4319448-.01781492.623-.119 4.1926166-2.09297153 8.8982361-2.93746309 13.557-2.433.3553006.03840605.7041013-.11565592.9150123-.40415227.2109109-.28849634.2518897-.6675976.1075-.9945s-.4522117-.55194168-.8075123-.59034773c-4.9712617-.52664769-9.9905489.35234255-14.487 2.537-6.192-.159-13.141 2.984-14.049 12.392-1.006 10.5 4.444 23.172-1.99 24.654-.43340948.0272187-.80090493.328436-.91267137.7480702-.11176644.4196343.05721807.863739.41967137 1.1029298 1.63 1.5 2.839 5.216 16.665 6.182.3483131 1.3208937 1.5419553 2.2419849 2.908 2.244h8.94c1.3625076.0052842 2.5515019-.9229332 2.877-2.246 1.57-.109 3.033-.26 4.371-.451.91 4.548.758 3.3.758 5.691 0 1.6568542 1.3431458 3 3 3h14c1.6568542 0 3-1.3431458 3-3 0-2.536-.267-.568 1.64-10.1.7594548-.3458131 1.2775365-1.0696037 1.36-1.9 0-3.611-11.119-4.126-14.79-3.952zm-6.765-15.614c.023.011.555.3.555 2.526 0 2.675-1 3.966-2.048 4.587.3915128-2.2663855.596201-4.5611009.612-6.861.46-.263.771-.309.881-.252zm-28.445 2.526c0-2.221.532-2.515.555-2.526.11-.055.421-.01.88.253.0148497 2.2971082.2155041 4.5892507.6 6.854-1.045-.623-2.035-1.914-2.035-4.581zm5.569 9.261c-1.792-3.826-2.152-7.982-2.152-13.446 0-4.214.858-7.222 2.618-9.143 1.118 1.873 3.534 4.368 8.465 4.368 6.92 0 7.952.105 11.037 3.171.031.518.046 1.056.046 1.6 0 5.452-.364 9.6-2.177 13.445-2.1 4.471-5.094 6.738-8.906 6.738-3.842.004-6.846-2.262-8.931-6.733zm13.425 14.785h-8.94c-.2898028.0040895-.5671242-.1177566-.7601299-.3339768-.1930057-.2162201-.2827076-.5055421-.2458701-.7930232 0-.051-.011.715-.011-6.435 3.3655828 2.0335543 7.5833719 2.0243014 10.94-.024v6.58c.005641.264511-.0953646.520171-.280269.7094017-.1849043.1892307-.4381603.2961212-.702731.2965983zm18.006-9.006c6.09 0 10.231 1.264 10.941 2-.71.736-4.851 2-10.941 2s-10.231-1.264-10.941-2c.71-.736 4.851-2 10.941-2zm8 14c0 .5522847-.4477153 1-1 1h-14c-.5522847 0-1-.4477153-1-1v-1h10c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-10.18c-.65-3.25 1.034 5.171-1.234-6.167 6.1821627 1.5348259 12.6458373 1.5348259 18.828 0-1.686 8.429-1.414 6.367-1.414 9.167z" />
                              </g>
                            </svg>
                            {/*Beauty Icon Svg */}
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-0">Beauty</h5>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="d-flex">
                          <div className="border-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">10</span>
                              Cities
                            </div>
                          </div>
                          <div className="float-end col-6">
                            <div className="p-3 text-center">
                              <span className="font-weight-bold fs-16">
                                80+
                              </span>
                              Listings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev">
                <span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next">
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div className="owl-dots disabled" />
          </div>
        </div>
      </section>
      <section className="sptb bg-white">
        <div className="container">
          <div className="section-title center-block text-center">
            <h2>Latest Listings</h2>
            <p>
              Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
              vehicula
            </p>
          </div>
          <div
            id="myCarousel1"
            className="owl-carousel owl-carousel-icons2 owl-loaded owl-drag"
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-2272px, 0px, 0px)",
                  transition: "all",
                  width: 6251,
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="item-card2-img">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/b1.jpg"
                          alt="img"
                          className="cover-image"
                        />
                        <div className="item-card2-icons">
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-l"
                          >
                            <i className="fa fa-home" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-r"
                          >
                            <i className="fa fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="blog--category">beauty &amp; Spa</div>
                      </div>
                      <div className="card-body pb-0">
                        <div className="item-card2">
                          <div className="item-card2-desc">
                            <div className="item-card2-text">
                              <a href="business.html" className="text-dark">
                                <h4 className="mb-0">Sear Beauty &amp; Spa</h4>
                              </a>
                            </div>
                            <div className="pt-3">
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-map-marker me-2" />
                                  Mannorstead, China
                                </p>
                              </a>
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-phone me-2" />
                                  +63 965-865-956
                                </p>
                              </a>
                              <p className="pb-0 pt-0 mb-2 mt-2">
                                <i className="fa fa-clock-o me-2" />
                                8am - 6pm
                                <a>
                                  <span className="badge badge-danger ms-2 fs-13">
                                    Closed
                                  </span>
                                </a>
                              </p>
                            </div>
                            <p className="">
                              Lorem ipsum dolor sit amet, quis int nostrum
                              exercitationem
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="item-card2-footer">
                          <div className="item-card2-footer-u">
                            <div className="d-flex">
                              <div className="d-inline-flex">
                                <div
                                  className="rating-star sm my-rating-5"
                                  data-rating="4.5"
                                >
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-86{fill:url(#86_SVGID_1_);}.svg-hovered-86{fill:url(#86_SVGID_2_);}.svg-active-86{fill:url(#86_SVGID_3_);}.svg-rated-86{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="86_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-86"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-86{fill:url(#86_SVGID_1_);}.svg-hovered-86{fill:url(#86_SVGID_2_);}.svg-active-86{fill:url(#86_SVGID_3_);}.svg-rated-86{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="86_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-86"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-86{fill:url(#86_SVGID_1_);}.svg-hovered-86{fill:url(#86_SVGID_2_);}.svg-active-86{fill:url(#86_SVGID_3_);}.svg-rated-86{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="86_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-86"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-86{fill:url(#86_SVGID_1_);}.svg-hovered-86{fill:url(#86_SVGID_2_);}.svg-active-86{fill:url(#86_SVGID_3_);}.svg-rated-86{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="86_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-86"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-86{fill:url(#86_SVGID_1_);}.svg-hovered-86{fill:url(#86_SVGID_2_);}.svg-active-86{fill:url(#86_SVGID_3_);}.svg-rated-86{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="86_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-empty-86"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                                (75 Reviews)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="item-card2-img">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/v1.jpg"
                          alt="img"
                          className="cover-image"
                        />
                        <div className="item-card2-icons">
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-l"
                          >
                            <i className="fa fa-home" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-r"
                          >
                            <i className="fa fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="blog--category">automobiles</div>
                      </div>
                      <div className="card-body pb-0">
                        <div className="item-card2">
                          <div className="item-card2-desc">
                            <div className="item-card2-text">
                              <a href="business.html" className="text-dark">
                                <h4 className="mb-0">Seep Automobiles</h4>
                              </a>
                            </div>
                            <div className="pt-3">
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-map-marker me-2" />
                                  East Hardfolk, UK
                                </p>
                              </a>
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-phone me-2" />
                                  +63 968-569-854
                                </p>
                              </a>
                              <p className="pb-0 pt-0 mb-2 mt-2">
                                <i className="fa fa-clock-o me-2" />
                                9am - 7pm
                                <a>
                                  <span className="badge badge-success ms-2 fs-13">
                                    Open Now
                                  </span>
                                </a>
                              </p>
                            </div>
                            <p className="">
                              Lorem ipsum dolor sit amet, quis int nostrum
                              exercitationem
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="item-card2-footer">
                          <div className="item-card2-footer-u">
                            <div className="d-flex">
                              <div className="d-inline-flex">
                                <div
                                  className="rating-star sm my-rating-5"
                                  data-rating="2.5"
                                >
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-567{fill:url(#567_SVGID_1_);}.svg-hovered-567{fill:url(#567_SVGID_2_);}.svg-active-567{fill:url(#567_SVGID_3_);}.svg-rated-567{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="567_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-567"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-567{fill:url(#567_SVGID_1_);}.svg-hovered-567{fill:url(#567_SVGID_2_);}.svg-active-567{fill:url(#567_SVGID_3_);}.svg-rated-567{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="567_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-567"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-567{fill:url(#567_SVGID_1_);}.svg-hovered-567{fill:url(#567_SVGID_2_);}.svg-active-567{fill:url(#567_SVGID_3_);}.svg-rated-567{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="567_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-empty-567"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-567{fill:url(#567_SVGID_1_);}.svg-hovered-567{fill:url(#567_SVGID_2_);}.svg-active-567{fill:url(#567_SVGID_3_);}.svg-rated-567{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="567_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-empty-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-empty-567"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-567{fill:url(#567_SVGID_1_);}.svg-hovered-567{fill:url(#567_SVGID_2_);}.svg-active-567{fill:url(#567_SVGID_3_);}.svg-rated-567{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="567_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-empty-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-empty-567"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                                (14 Reviews)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned animated owl-animated-out fadeOutDown"
                  style={{ width: "543.2px", marginRight: 25, left: 568 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="power-ribbon power-ribbon-top-left text-warning">
                        <span className="bg-warning">
                          <i className="fa fa-bolt" />
                        </span>
                      </div>
                      <div className="item-card2-img">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/f3.jpg"
                          alt="img"
                          className="cover-image"
                        />
                        <div className="item-card2-icons">
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-l"
                          >
                            <i className="fa fa-cutlery" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-r"
                          >
                            <i className="fa fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="blog--category">Restaurant</div>
                      </div>
                      <div className="card-body pb-0">
                        <div className="item-card2">
                          <div className="item-card2-desc">
                            <div className="item-card2-text">
                              <a href="business.html" className="text-dark">
                                <h4 className="mb-0">Somik Restaurant</h4>
                              </a>
                            </div>
                            <div className="pt-3">
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-map-marker me-2" />
                                  Factdale, Canada
                                </p>
                              </a>
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-phone me-2" />
                                  +63 854-968-854
                                </p>
                              </a>
                              <p className="pb-0 pt-0 mb-2 mt-2">
                                <i className="fa fa-clock-o me-2" />
                                10am - 7pm
                                <a>
                                  <span className="badge badge-danger ms-2 fs-13">
                                    Closed
                                  </span>
                                </a>
                              </p>
                            </div>
                            <p className="">
                              Lorem ipsum dolor sit amet, quis int nostrum
                              exercitationem
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="item-card2-footer">
                          <div className="item-card2-footer-u">
                            <div className="d-flex">
                              <div className="d-inline-flex">
                                <div
                                  className="rating-star sm my-rating-5"
                                  data-rating={3}
                                >
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-345{fill:url(#345_SVGID_1_);}.svg-hovered-345{fill:url(#345_SVGID_2_);}.svg-active-345{fill:url(#345_SVGID_3_);}.svg-rated-345{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="345_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-345"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-345{fill:url(#345_SVGID_1_);}.svg-hovered-345{fill:url(#345_SVGID_2_);}.svg-active-345{fill:url(#345_SVGID_3_);}.svg-rated-345{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="345_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-345"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-345{fill:url(#345_SVGID_1_);}.svg-hovered-345{fill:url(#345_SVGID_2_);}.svg-active-345{fill:url(#345_SVGID_3_);}.svg-rated-345{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="345_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-345"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-345{fill:url(#345_SVGID_1_);}.svg-hovered-345{fill:url(#345_SVGID_2_);}.svg-active-345{fill:url(#345_SVGID_3_);}.svg-rated-345{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="345_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-empty-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-empty-345"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-345{fill:url(#345_SVGID_1_);}.svg-hovered-345{fill:url(#345_SVGID_2_);}.svg-active-345{fill:url(#345_SVGID_3_);}.svg-rated-345{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="345_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-empty-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-empty-345"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                                (42 Reviews)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                  style={{ width: "543.2px", marginRight: 25, left: 568 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="power-ribbon power-ribbon-top-left text-warning">
                        <span className="bg-warning">
                          <i className="fa fa-bolt" />
                        </span>
                      </div>
                      <div className="item-card2-img">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/f1.jpg"
                          alt="img"
                          className="cover-image"
                        />
                        <div className="item-card2-icons">
                          <a
                            href="business.html"
                            className="item-card2-icons-l"
                          >
                            <i className="fa fa-cutlery" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-r"
                          >
                            <i className="fa fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="blog--category">Restaurant</div>
                      </div>
                      <div className="card-body pb-0">
                        <div className="item-card2">
                          <div className="item-card2-desc">
                            <div className="item-card2-text">
                              <a href="business.html" className="text-dark">
                                <h4 className="mb-0">Somik Restaurant</h4>
                              </a>
                            </div>
                            <div className="pt-3">
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-map-marker me-2" />
                                  Florida, USA
                                </p>
                              </a>
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-phone me-2" />
                                  +63 658-865-965
                                </p>
                              </a>
                              <p className="pb-0 pt-0 mb-2 mt-2">
                                <i className="fa fa-clock-o me-2" />
                                10am - 9pm
                                <a>
                                  <span className="badge badge-success ms-2 fs-13">
                                    Open Now
                                  </span>
                                </a>
                              </p>
                            </div>
                            <p className="">
                              Lorem ipsum dolor sit amet, quis int nostrum
                              exercitationem
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="item-card2-footer">
                          <div className="item-card2-footer-u">
                            <div className="d-flex">
                              <div className="d-inline-flex">
                                <div
                                  className="rating-star sm my-rating-5"
                                  data-rating={4}
                                >
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-26{fill:url(#26_SVGID_1_);}.svg-hovered-26{fill:url(#26_SVGID_2_);}.svg-active-26{fill:url(#26_SVGID_3_);}.svg-rated-26{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="26_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-26"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-26{fill:url(#26_SVGID_1_);}.svg-hovered-26{fill:url(#26_SVGID_2_);}.svg-active-26{fill:url(#26_SVGID_3_);}.svg-rated-26{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="26_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-26"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-26{fill:url(#26_SVGID_1_);}.svg-hovered-26{fill:url(#26_SVGID_2_);}.svg-active-26{fill:url(#26_SVGID_3_);}.svg-rated-26{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="26_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-26"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-26{fill:url(#26_SVGID_1_);}.svg-hovered-26{fill:url(#26_SVGID_2_);}.svg-active-26{fill:url(#26_SVGID_3_);}.svg-rated-26{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="26_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-26"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-26{fill:url(#26_SVGID_1_);}.svg-hovered-26{fill:url(#26_SVGID_2_);}.svg-active-26{fill:url(#26_SVGID_3_);}.svg-rated-26{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="26_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-empty-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-empty-26"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                                (25 Reviews)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown active"
                  style={{ width: "543.2px", marginRight: 25, left: 569 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="power-ribbon power-ribbon-top-left text-warning">
                        <span className="bg-warning">
                          <i className="fa fa-bolt" />
                        </span>
                      </div>
                      <div className="item-card2-img">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/h4.jpg"
                          alt="img"
                          className="cover-image"
                        />
                        <div className="item-card2-icons">
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-l"
                          >
                            <i className="fa fa-home" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-r"
                          >
                            <i className="fa fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="blog--category">Hotel</div>
                      </div>
                      <div className="card-body pb-0">
                        <div className="item-card2">
                          <div className="item-card2-desc">
                            <div className="item-card2-text">
                              <a href="business.html" className="text-dark">
                                <h4 className="mb-0">GilkonStar Hotel</h4>
                              </a>
                            </div>
                            <div className="pt-3">
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-map-marker me-2" />
                                  Hollowstead, USA
                                </p>
                              </a>
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-phone me-2" />
                                  +63 658-965-865
                                </p>
                              </a>
                              <p className="pb-0 pt-0 mb-2 mt-2">
                                <i className="fa fa-clock-o me-2" />
                                9am - 9pm
                                <a>
                                  <span className="badge badge-success ms-2 fs-13">
                                    Open Now
                                  </span>
                                </a>
                              </p>
                            </div>
                            <p className="">
                              Lorem ipsum dolor sit amet, quis int nostrum
                              exercitationem
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="item-card2-footer ">
                          <div className="item-card2-footer-u">
                            <div className="d-flex">
                              <div className="d-inline-flex">
                                <div
                                  className="rating-star sm my-rating-5"
                                  data-rating="4.5"
                                >
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-841{fill:url(#841_SVGID_1_);}.svg-hovered-841{fill:url(#841_SVGID_2_);}.svg-active-841{fill:url(#841_SVGID_3_);}.svg-rated-841{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="841_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-841"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-841{fill:url(#841_SVGID_1_);}.svg-hovered-841{fill:url(#841_SVGID_2_);}.svg-active-841{fill:url(#841_SVGID_3_);}.svg-rated-841{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="841_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-841"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-841{fill:url(#841_SVGID_1_);}.svg-hovered-841{fill:url(#841_SVGID_2_);}.svg-active-841{fill:url(#841_SVGID_3_);}.svg-rated-841{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="841_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-841"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-841{fill:url(#841_SVGID_1_);}.svg-hovered-841{fill:url(#841_SVGID_2_);}.svg-active-841{fill:url(#841_SVGID_3_);}.svg-rated-841{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="841_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-841"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-841{fill:url(#841_SVGID_1_);}.svg-hovered-841{fill:url(#841_SVGID_2_);}.svg-active-841{fill:url(#841_SVGID_3_);}.svg-rated-841{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="841_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-empty-841"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                                (27 Reviews)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                  style={{ width: "543.2px", marginRight: 25, left: 568 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="item-card2-img">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/b1.jpg"
                          alt="img"
                          className="cover-image"
                        />
                        <div className="item-card2-icons">
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-l"
                          >
                            <i className="fa fa-home" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-r"
                          >
                            <i className="fa fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="blog--category">beauty &amp; Spa</div>
                      </div>
                      <div className="card-body pb-0">
                        <div className="item-card2">
                          <div className="item-card2-desc">
                            <div className="item-card2-text">
                              <a href="business.html" className="text-dark">
                                <h4 className="mb-0">Sear Beauty &amp; Spa</h4>
                              </a>
                            </div>
                            <div className="pt-3">
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-map-marker me-2" />
                                  Mannorstead, China
                                </p>
                              </a>
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-phone me-2" />
                                  +63 965-865-956
                                </p>
                              </a>
                              <p className="pb-0 pt-0 mb-2 mt-2">
                                <i className="fa fa-clock-o me-2" />
                                8am - 6pm
                                <a>
                                  <span className="badge badge-danger ms-2 fs-13">
                                    Closed
                                  </span>
                                </a>
                              </p>
                            </div>
                            <p className="">
                              Lorem ipsum dolor sit amet, quis int nostrum
                              exercitationem
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="item-card2-footer">
                          <div className="item-card2-footer-u">
                            <div className="d-flex">
                              <div className="d-inline-flex">
                                <div
                                  className="rating-star sm my-rating-5"
                                  data-rating="4.5"
                                >
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-86{fill:url(#86_SVGID_1_);}.svg-hovered-86{fill:url(#86_SVGID_2_);}.svg-active-86{fill:url(#86_SVGID_3_);}.svg-rated-86{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="86_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-86"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-86{fill:url(#86_SVGID_1_);}.svg-hovered-86{fill:url(#86_SVGID_2_);}.svg-active-86{fill:url(#86_SVGID_3_);}.svg-rated-86{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="86_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-86"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-86{fill:url(#86_SVGID_1_);}.svg-hovered-86{fill:url(#86_SVGID_2_);}.svg-active-86{fill:url(#86_SVGID_3_);}.svg-rated-86{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="86_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-86"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-86{fill:url(#86_SVGID_1_);}.svg-hovered-86{fill:url(#86_SVGID_2_);}.svg-active-86{fill:url(#86_SVGID_3_);}.svg-rated-86{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="86_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-86"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-86{fill:url(#86_SVGID_1_);}.svg-hovered-86{fill:url(#86_SVGID_2_);}.svg-active-86{fill:url(#86_SVGID_3_);}.svg-rated-86{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="86_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-empty-86"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                                (75 Reviews)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                  style={{ width: "543.2px", marginRight: 25, left: 568 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="item-card2-img">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/v1.jpg"
                          alt="img"
                          className="cover-image"
                        />
                        <div className="item-card2-icons">
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-l"
                          >
                            <i className="fa fa-home" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-r"
                          >
                            <i className="fa fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="blog--category">automobiles</div>
                      </div>
                      <div className="card-body pb-0">
                        <div className="item-card2">
                          <div className="item-card2-desc">
                            <div className="item-card2-text">
                              <a href="business.html" className="text-dark">
                                <h4 className="mb-0">Seep Automobiles</h4>
                              </a>
                            </div>
                            <div className="pt-3">
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-map-marker me-2" />
                                  East Hardfolk, UK
                                </p>
                              </a>
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-phone me-2" />
                                  +63 968-569-854
                                </p>
                              </a>
                              <p className="pb-0 pt-0 mb-2 mt-2">
                                <i className="fa fa-clock-o me-2" />
                                9am - 7pm
                                <a>
                                  <span className="badge badge-success ms-2 fs-13">
                                    Open Now
                                  </span>
                                </a>
                              </p>
                            </div>
                            <p className="">
                              Lorem ipsum dolor sit amet, quis int nostrum
                              exercitationem
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="item-card2-footer">
                          <div className="item-card2-footer-u">
                            <div className="d-flex">
                              <div className="d-inline-flex">
                                <div
                                  className="rating-star sm my-rating-5"
                                  data-rating="2.5"
                                >
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-567{fill:url(#567_SVGID_1_);}.svg-hovered-567{fill:url(#567_SVGID_2_);}.svg-active-567{fill:url(#567_SVGID_3_);}.svg-rated-567{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="567_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-567"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-567{fill:url(#567_SVGID_1_);}.svg-hovered-567{fill:url(#567_SVGID_2_);}.svg-active-567{fill:url(#567_SVGID_3_);}.svg-rated-567{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="567_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-567"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-567{fill:url(#567_SVGID_1_);}.svg-hovered-567{fill:url(#567_SVGID_2_);}.svg-active-567{fill:url(#567_SVGID_3_);}.svg-rated-567{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="567_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-empty-567"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-567{fill:url(#567_SVGID_1_);}.svg-hovered-567{fill:url(#567_SVGID_2_);}.svg-active-567{fill:url(#567_SVGID_3_);}.svg-rated-567{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="567_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-empty-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-empty-567"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-567{fill:url(#567_SVGID_1_);}.svg-hovered-567{fill:url(#567_SVGID_2_);}.svg-active-567{fill:url(#567_SVGID_3_);}.svg-rated-567{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="567_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="567_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-empty-567"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-empty-567"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                                (14 Reviews)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="power-ribbon power-ribbon-top-left text-warning">
                        <span className="bg-warning">
                          <i className="fa fa-bolt" />
                        </span>
                      </div>
                      <div className="item-card2-img">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/f3.jpg"
                          alt="img"
                          className="cover-image"
                        />
                        <div className="item-card2-icons">
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-l"
                          >
                            <i className="fa fa-cutlery" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-r"
                          >
                            <i className="fa fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="blog--category">Restaurant</div>
                      </div>
                      <div className="card-body pb-0">
                        <div className="item-card2">
                          <div className="item-card2-desc">
                            <div className="item-card2-text">
                              <a href="business.html" className="text-dark">
                                <h4 className="mb-0">Somik Restaurant</h4>
                              </a>
                            </div>
                            <div className="pt-3">
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-map-marker me-2" />
                                  Factdale, Canada
                                </p>
                              </a>
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-phone me-2" />
                                  +63 854-968-854
                                </p>
                              </a>
                              <p className="pb-0 pt-0 mb-2 mt-2">
                                <i className="fa fa-clock-o me-2" />
                                10am - 7pm
                                <a>
                                  <span className="badge badge-danger ms-2 fs-13">
                                    Closed
                                  </span>
                                </a>
                              </p>
                            </div>
                            <p className="">
                              Lorem ipsum dolor sit amet, quis int nostrum
                              exercitationem
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="item-card2-footer">
                          <div className="item-card2-footer-u">
                            <div className="d-flex">
                              <div className="d-inline-flex">
                                <div
                                  className="rating-star sm my-rating-5"
                                  data-rating={3}
                                >
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-345{fill:url(#345_SVGID_1_);}.svg-hovered-345{fill:url(#345_SVGID_2_);}.svg-active-345{fill:url(#345_SVGID_3_);}.svg-rated-345{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="345_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-345"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-345{fill:url(#345_SVGID_1_);}.svg-hovered-345{fill:url(#345_SVGID_2_);}.svg-active-345{fill:url(#345_SVGID_3_);}.svg-rated-345{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="345_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-345"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-345{fill:url(#345_SVGID_1_);}.svg-hovered-345{fill:url(#345_SVGID_2_);}.svg-active-345{fill:url(#345_SVGID_3_);}.svg-rated-345{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="345_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-345"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-345{fill:url(#345_SVGID_1_);}.svg-hovered-345{fill:url(#345_SVGID_2_);}.svg-active-345{fill:url(#345_SVGID_3_);}.svg-rated-345{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="345_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-empty-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-empty-345"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-345{fill:url(#345_SVGID_1_);}.svg-hovered-345{fill:url(#345_SVGID_2_);}.svg-active-345{fill:url(#345_SVGID_3_);}.svg-rated-345{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="345_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="345_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-empty-345"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-empty-345"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                                (42 Reviews)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="power-ribbon power-ribbon-top-left text-warning">
                        <span className="bg-warning">
                          <i className="fa fa-bolt" />
                        </span>
                      </div>
                      <div className="item-card2-img">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/f1.jpg"
                          alt="img"
                          className="cover-image"
                        />
                        <div className="item-card2-icons">
                          <a
                            href="business.html"
                            className="item-card2-icons-l"
                          >
                            <i className="fa fa-cutlery" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-r"
                          >
                            <i className="fa fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="blog--category">Restaurant</div>
                      </div>
                      <div className="card-body pb-0">
                        <div className="item-card2">
                          <div className="item-card2-desc">
                            <div className="item-card2-text">
                              <a href="business.html" className="text-dark">
                                <h4 className="mb-0">Somik Restaurant</h4>
                              </a>
                            </div>
                            <div className="pt-3">
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-map-marker me-2" />
                                  Florida, USA
                                </p>
                              </a>
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-phone me-2" />
                                  +63 658-865-965
                                </p>
                              </a>
                              <p className="pb-0 pt-0 mb-2 mt-2">
                                <i className="fa fa-clock-o me-2" />
                                10am - 9pm
                                <a>
                                  <span className="badge badge-success ms-2 fs-13">
                                    Open Now
                                  </span>
                                </a>
                              </p>
                            </div>
                            <p className="">
                              Lorem ipsum dolor sit amet, quis int nostrum
                              exercitationem
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="item-card2-footer">
                          <div className="item-card2-footer-u">
                            <div className="d-flex">
                              <div className="d-inline-flex">
                                <div
                                  className="rating-star sm my-rating-5"
                                  data-rating={4}
                                >
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-26{fill:url(#26_SVGID_1_);}.svg-hovered-26{fill:url(#26_SVGID_2_);}.svg-active-26{fill:url(#26_SVGID_3_);}.svg-rated-26{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="26_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-26"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-26{fill:url(#26_SVGID_1_);}.svg-hovered-26{fill:url(#26_SVGID_2_);}.svg-active-26{fill:url(#26_SVGID_3_);}.svg-rated-26{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="26_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-26"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-26{fill:url(#26_SVGID_1_);}.svg-hovered-26{fill:url(#26_SVGID_2_);}.svg-active-26{fill:url(#26_SVGID_3_);}.svg-rated-26{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="26_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-26"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-26{fill:url(#26_SVGID_1_);}.svg-hovered-26{fill:url(#26_SVGID_2_);}.svg-active-26{fill:url(#26_SVGID_3_);}.svg-rated-26{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="26_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-26"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-26{fill:url(#26_SVGID_1_);}.svg-hovered-26{fill:url(#26_SVGID_2_);}.svg-active-26{fill:url(#26_SVGID_3_);}.svg-rated-26{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="26_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="26_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-empty-26"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-empty-26"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                                (25 Reviews)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="power-ribbon power-ribbon-top-left text-warning">
                        <span className="bg-warning">
                          <i className="fa fa-bolt" />
                        </span>
                      </div>
                      <div className="item-card2-img">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/h4.jpg"
                          alt="img"
                          className="cover-image"
                        />
                        <div className="item-card2-icons">
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-l"
                          >
                            <i className="fa fa-home" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-r"
                          >
                            <i className="fa fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="blog--category">Hotel</div>
                      </div>
                      <div className="card-body pb-0">
                        <div className="item-card2">
                          <div className="item-card2-desc">
                            <div className="item-card2-text">
                              <a href="business.html" className="text-dark">
                                <h4 className="mb-0">GilkonStar Hotel</h4>
                              </a>
                            </div>
                            <div className="pt-3">
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-map-marker me-2" />
                                  Hollowstead, USA
                                </p>
                              </a>
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-phone me-2" />
                                  +63 658-965-865
                                </p>
                              </a>
                              <p className="pb-0 pt-0 mb-2 mt-2">
                                <i className="fa fa-clock-o me-2" />
                                9am - 9pm
                                <a>
                                  <span className="badge badge-success ms-2 fs-13">
                                    Open Now
                                  </span>
                                </a>
                              </p>
                            </div>
                            <p className="">
                              Lorem ipsum dolor sit amet, quis int nostrum
                              exercitationem
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="item-card2-footer ">
                          <div className="item-card2-footer-u">
                            <div className="d-flex">
                              <div className="d-inline-flex">
                                <div
                                  className="rating-star sm my-rating-5"
                                  data-rating="4.5"
                                >
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-841{fill:url(#841_SVGID_1_);}.svg-hovered-841{fill:url(#841_SVGID_2_);}.svg-active-841{fill:url(#841_SVGID_3_);}.svg-rated-841{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="841_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-841"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-841{fill:url(#841_SVGID_1_);}.svg-hovered-841{fill:url(#841_SVGID_2_);}.svg-active-841{fill:url(#841_SVGID_3_);}.svg-rated-841{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="841_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-841"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-841{fill:url(#841_SVGID_1_);}.svg-hovered-841{fill:url(#841_SVGID_2_);}.svg-active-841{fill:url(#841_SVGID_3_);}.svg-rated-841{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="841_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-841"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-841{fill:url(#841_SVGID_1_);}.svg-hovered-841{fill:url(#841_SVGID_2_);}.svg-active-841{fill:url(#841_SVGID_3_);}.svg-rated-841{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="841_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-841"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-841{fill:url(#841_SVGID_1_);}.svg-hovered-841{fill:url(#841_SVGID_2_);}.svg-active-841{fill:url(#841_SVGID_3_);}.svg-rated-841{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="841_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="841_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-841"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-empty-841"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                                (27 Reviews)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="item-card2-img">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/b1.jpg"
                          alt="img"
                          className="cover-image"
                        />
                        <div className="item-card2-icons">
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-l"
                          >
                            <i className="fa fa-home" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="item-card2-icons-r"
                          >
                            <i className="fa fa fa-heart-o" />
                          </a>
                        </div>
                        <div className="blog--category">beauty &amp; Spa</div>
                      </div>
                      <div className="card-body pb-0">
                        <div className="item-card2">
                          <div className="item-card2-desc">
                            <div className="item-card2-text">
                              <a href="business.html" className="text-dark">
                                <h4 className="mb-0">Sear Beauty &amp; Spa</h4>
                              </a>
                            </div>
                            <div className="pt-3">
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-map-marker me-2" />
                                  Mannorstead, China
                                </p>
                              </a>
                              <a href="mb-1">
                                <p className="pb-0 pt-0 mb-2 mt-2">
                                  <i className="fa fa-phone me-2" />
                                  +63 965-865-956
                                </p>
                              </a>
                              <p className="pb-0 pt-0 mb-2 mt-2">
                                <i className="fa fa-clock-o me-2" />
                                8am - 6pm
                                <a>
                                  <span className="badge badge-danger ms-2 fs-13">
                                    Closed
                                  </span>
                                </a>
                              </p>
                            </div>
                            <p className="">
                              Lorem ipsum dolor sit amet, quis int nostrum
                              exercitationem
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="item-card2-footer">
                          <div className="item-card2-footer-u">
                            <div className="d-flex">
                              <div className="d-inline-flex">
                                <div
                                  className="rating-star sm my-rating-5"
                                  data-rating="4.5"
                                >
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-86{fill:url(#86_SVGID_1_);}.svg-hovered-86{fill:url(#86_SVGID_2_);}.svg-active-86{fill:url(#86_SVGID_3_);}.svg-rated-86{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="86_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-86"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-86{fill:url(#86_SVGID_1_);}.svg-hovered-86{fill:url(#86_SVGID_2_);}.svg-active-86{fill:url(#86_SVGID_3_);}.svg-rated-86{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="86_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-86"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-86{fill:url(#86_SVGID_1_);}.svg-hovered-86{fill:url(#86_SVGID_2_);}.svg-active-86{fill:url(#86_SVGID_3_);}.svg-rated-86{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="86_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-86"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-86{fill:url(#86_SVGID_1_);}.svg-hovered-86{fill:url(#86_SVGID_2_);}.svg-active-86{fill:url(#86_SVGID_3_);}.svg-rated-86{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="86_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-active-86"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="jq-star"
                                    style={{ width: 35, height: 35 }}
                                  >
                                    <svg
                                      version={1.0}
                                      className="jq-star-svg"
                                      shapeRendering="geometricPrecision"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      width="305px"
                                      height="305px"
                                      viewBox="60 -62 309 309"
                                      style={{
                                        enableBackground: "new 64 -59 305 305",
                                        strokeWidth: 0,
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            ".svg-empty-86{fill:url(#86_SVGID_1_);}.svg-hovered-86{fill:url(#86_SVGID_2_);}.svg-active-86{fill:url(#86_SVGID_3_);}.svg-rated-86{fill:#f1c40f;}",
                                        }}
                                      />
                                      <linearGradient
                                        id="86_SVGID_1_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "lightgray" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_2_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <linearGradient
                                        id="86_SVGID_3_"
                                        gradientUnits="userSpaceOnUse"
                                        x1={0}
                                        y1={-50}
                                        x2={0}
                                        y2={250}
                                      >
                                        <stop
                                          offset={0}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                        <stop
                                          offset={1}
                                          style={{ stopColor: "#f1c40f" }}
                                        />
                                      </linearGradient>
                                      <polygon
                                        data-side="center"
                                        className="svg-empty-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                        style={{
                                          fill: "transparent",
                                          stroke: "#83829c",
                                        }}
                                      />
                                      <polygon
                                        data-side="left"
                                        className="svg-active-86"
                                        points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                      <polygon
                                        data-side="right"
                                        className="svg-empty-86"
                                        points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                        style={{ strokeOpacity: 0 }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                                (75 Reviews)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev">
                <span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next">
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div className="owl-dots disabled" />
          </div>
        </div>
      </section>
      <section className="sptb">
        <div className="container">
          <div className="section-title center-block text-center">
            <h2>Listing Styles</h2>
            <p>
              Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
              vehicula
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div
                id="myCarousel"
                className="owl-carousel testimonial-owl-carousel owl-loaded owl-drag"
              >
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-4545px, 0px, 0px)",
                      transition: "all",
                      width: 6819,
                    }}
                  >
                    <div
                      className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown cloned"
                      style={{ width: "543.2px", marginRight: 25, left: 1201 }}
                    >
                      <div className="item card mb-0 overflow-hidden">
                        <div className="row g-0">
                          <div className="col-lg-6">
                            <div className="h-100">
                              <img
                                src="../assets/images/products/products/bakery4.jpg"
                                alt="img"
                                className="w-100 h-100"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card-body p-7">
                              <h2>New Backery Cakes</h2>
                              <p className="fs-16 mt-4">
                                we denounce with righteous indignation and
                                dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so
                                blinded by desire, that they cannot foresee the
                                pain and trouble that are bound to ensue; and
                                equal blame belongs to those who fail in their
                                duty through weakness of will, which is the same
                                as saying through shrinking from toil and pain
                              </p>
                              <a
                                className="btn btn-lg btn-secondary px-6"
                                href="javascript:void(0)"
                              >
                                View Listings
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown cloned"
                      style={{ width: "543.2px", marginRight: 25, left: 1201 }}
                    >
                      <div className="item card mb-0 overflow-hidden">
                        <div className="row g-0">
                          <div className="col-lg-6">
                            <div className="h-100">
                              <img
                                src="../assets/images/products/products/h1.jpg"
                                alt="img"
                                className="w-100 h-100"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card-body p-7">
                              <h2>RealEstate Listings</h2>
                              <p className="fs-16 mt-4">
                                we denounce with righteous indignation and
                                dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so
                                blinded by desire, that they cannot foresee the
                                pain and trouble that are bound to ensue; and
                                equal blame belongs to those who fail in their
                                duty through weakness of will, which is the same
                                as saying through shrinking from toil and pain
                              </p>
                              <a
                                className="btn btn-lg btn-secondary px-6"
                                href="javascript:void(0)"
                              >
                                View Listings
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item animated owl-animated-in fadeInDowm cloned owl-animated-out fadeOutDown"
                      style={{ width: "543.2px", marginRight: 25, left: 568 }}
                    >
                      <div className="item card mb-0 overflow-hidden">
                        <div className="row g-0">
                          <div className="col-lg-6">
                            <div className="h-100">
                              <img
                                src="../assets/images/products/products/b4.jpg"
                                alt="img"
                                className="w-100 h-100"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card-body p-7">
                              <h2>Modern Beauty &amp; Spa</h2>
                              <p className="fs-16 mt-4">
                                we denounce with righteous indignation and
                                dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so
                                blinded by desire, that they cannot foresee the
                                pain and trouble that are bound to ensue; and
                                equal blame belongs to those who fail in their
                                duty through weakness of will, which is the same
                                as saying through shrinking from toil and pain
                              </p>
                              <a
                                className="btn btn-lg btn-secondary px-6"
                                href="javascript:void(0)"
                              >
                                View Listings
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item animated owl-animated-out fadeOutDown owl-animated-in fadeInDowm"
                      style={{ width: "543.2px", marginRight: 25, left: 568 }}
                    >
                      <div className="item card mb-0 overflow-hidden">
                        <div className="row g-0">
                          <div className="col-lg-6">
                            <div className="h-100">
                              <img
                                src="../assets/images/products/products/f4.jpg"
                                alt="img"
                                className="w-100 h-100"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card-body p-7">
                              <h2>Best Restaurants &amp; Hotels</h2>
                              <p className="fs-16 mt-4">
                                we denounce with righteous indignation and
                                dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so
                                blinded by desire, that they cannot foresee the
                                pain and trouble that are bound to ensue; and
                                equal blame belongs to those who fail in their
                                duty through weakness of will, which is the same
                                as saying through shrinking from toil and pain
                              </p>
                              <a
                                className="btn btn-lg btn-secondary px-6"
                                href="javascript:void(0)"
                              >
                                View Listings
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                      style={{ width: "543.2px", marginRight: 25, left: 569 }}
                    >
                      <div className="item card mb-0 overflow-hidden">
                        <div className="row g-0">
                          <div className="col-lg-6">
                            <div className="h-100">
                              <img
                                src="../assets/images/products/products/ed3.jpg"
                                alt="img"
                                className="w-100 h-100"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card-body p-7">
                              <h2>Educational Universties</h2>
                              <p className="fs-16 mt-4">
                                we denounce with righteous indignation and
                                dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so
                                blinded by desire, that they cannot foresee the
                                pain and trouble that are bound to ensue; and
                                equal blame belongs to those who fail in their
                                duty through weakness of will, which is the same
                                as saying through shrinking from toil and pain
                              </p>
                              <a
                                className="btn btn-lg btn-secondary px-6"
                                href="javascript:void(0)"
                              >
                                View Listings
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                      style={{ width: "543.2px", marginRight: 25, left: 568 }}
                    >
                      <div className="item card mb-0 overflow-hidden">
                        <div className="row g-0">
                          <div className="col-lg-6">
                            <div className="h-100">
                              <img
                                src="../assets/images/products/products/yoga2.jpg"
                                alt="img"
                                className="w-100 h-100"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card-body p-7">
                              <h2>Yoga &amp; Meditation Centers</h2>
                              <p className="fs-16 mt-4">
                                we denounce with righteous indignation and
                                dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so
                                blinded by desire, that they cannot foresee the
                                pain and trouble that are bound to ensue; and
                                equal blame belongs to those who fail in their
                                duty through weakness of will, which is the same
                                as saying through shrinking from toil and pain
                              </p>
                              <a
                                className="btn btn-lg btn-secondary px-6"
                                href="javascript:void(0)"
                              >
                                View Listings
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                      style={{ width: "543.2px", marginRight: 25, left: 568 }}
                    >
                      <div className="item card mb-0 overflow-hidden">
                        <div className="row g-0">
                          <div className="col-lg-6">
                            <div className="h-100">
                              <img
                                src="../assets/images/products/products/bakery4.jpg"
                                alt="img"
                                className="w-100 h-100"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card-body p-7">
                              <h2>New Backery Cakes</h2>
                              <p className="fs-16 mt-4">
                                we denounce with righteous indignation and
                                dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so
                                blinded by desire, that they cannot foresee the
                                pain and trouble that are bound to ensue; and
                                equal blame belongs to those who fail in their
                                duty through weakness of will, which is the same
                                as saying through shrinking from toil and pain
                              </p>
                              <a
                                className="btn btn-lg btn-secondary px-6"
                                href="javascript:void(0)"
                              >
                                View Listings
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                      style={{ width: "543.2px", marginRight: 25, left: 568 }}
                    >
                      <div className="item card mb-0 overflow-hidden">
                        <div className="row g-0">
                          <div className="col-lg-6">
                            <div className="h-100">
                              <img
                                src="../assets/images/products/products/h1.jpg"
                                alt="img"
                                className="w-100 h-100"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card-body p-7">
                              <h2>RealEstate Listings</h2>
                              <p className="fs-16 mt-4">
                                we denounce with righteous indignation and
                                dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so
                                blinded by desire, that they cannot foresee the
                                pain and trouble that are bound to ensue; and
                                equal blame belongs to those who fail in their
                                duty through weakness of will, which is the same
                                as saying through shrinking from toil and pain
                              </p>
                              <a
                                className="btn btn-lg btn-secondary px-6"
                                href="javascript:void(0)"
                              >
                                View Listings
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item animated owl-animated-in fadeInDowm active"
                      style={{ width: "543.2px", marginRight: 25 }}
                    >
                      <div className="item card mb-0 overflow-hidden">
                        <div className="row g-0">
                          <div className="col-lg-6">
                            <div className="h-100">
                              <img
                                src="../assets/images/products/products/b4.jpg"
                                alt="img"
                                className="w-100 h-100"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card-body p-7">
                              <h2>Modern Beauty &amp; Spa</h2>
                              <p className="fs-16 mt-4">
                                we denounce with righteous indignation and
                                dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so
                                blinded by desire, that they cannot foresee the
                                pain and trouble that are bound to ensue; and
                                equal blame belongs to those who fail in their
                                duty through weakness of will, which is the same
                                as saying through shrinking from toil and pain
                              </p>
                              <a
                                className="btn btn-lg btn-secondary px-6"
                                href="javascript:void(0)"
                              >
                                View Listings
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item animated owl-animated-out fadeOutDown owl-animated-in fadeInDowm cloned"
                      style={{ width: "543.2px", marginRight: 25, left: 1141 }}
                    >
                      <div className="item card mb-0 overflow-hidden">
                        <div className="row g-0">
                          <div className="col-lg-6">
                            <div className="h-100">
                              <img
                                src="../assets/images/products/products/f4.jpg"
                                alt="img"
                                className="w-100 h-100"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card-body p-7">
                              <h2>Best Restaurants &amp; Hotels</h2>
                              <p className="fs-16 mt-4">
                                we denounce with righteous indignation and
                                dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so
                                blinded by desire, that they cannot foresee the
                                pain and trouble that are bound to ensue; and
                                equal blame belongs to those who fail in their
                                duty through weakness of will, which is the same
                                as saying through shrinking from toil and pain
                              </p>
                              <a
                                className="btn btn-lg btn-secondary px-6"
                                href="javascript:void(0)"
                              >
                                View Listings
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown cloned"
                      style={{ width: "543.2px", marginRight: 25, left: 1141 }}
                    >
                      <div className="item card mb-0 overflow-hidden">
                        <div className="row g-0">
                          <div className="col-lg-6">
                            <div className="h-100">
                              <img
                                src="../assets/images/products/products/ed3.jpg"
                                alt="img"
                                className="w-100 h-100"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card-body p-7">
                              <h2>Educational Universties</h2>
                              <p className="fs-16 mt-4">
                                we denounce with righteous indignation and
                                dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so
                                blinded by desire, that they cannot foresee the
                                pain and trouble that are bound to ensue; and
                                equal blame belongs to those who fail in their
                                duty through weakness of will, which is the same
                                as saying through shrinking from toil and pain
                              </p>
                              <a
                                className="btn btn-lg btn-secondary px-6"
                                href="javascript:void(0)"
                              >
                                View Listings
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown cloned"
                      style={{ width: "543.2px", marginRight: 25, left: 1201 }}
                    >
                      <div className="item card mb-0 overflow-hidden">
                        <div className="row g-0">
                          <div className="col-lg-6">
                            <div className="h-100">
                              <img
                                src="../assets/images/products/products/yoga2.jpg"
                                alt="img"
                                className="w-100 h-100"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card-body p-7">
                              <h2>Yoga &amp; Meditation Centers</h2>
                              <p className="fs-16 mt-4">
                                we denounce with righteous indignation and
                                dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so
                                blinded by desire, that they cannot foresee the
                                pain and trouble that are bound to ensue; and
                                equal blame belongs to those who fail in their
                                duty through weakness of will, which is the same
                                as saying through shrinking from toil and pain
                              </p>
                              <a
                                className="btn btn-lg btn-secondary px-6"
                                href="javascript:void(0)"
                              >
                                View Listings
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                  >
                    <span aria-label="Previous">‹</span>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <span aria-label="Next">›</span>
                  </button>
                </div>
                <div className="owl-dots disabled" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sptb bg-patterns bg-white">
        <div className="container">
          <div className="section-title center-block text-center">
            <h2>Featured Listings</h2>
            <p>
              Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
              vehicula
            </p>
          </div>
          <div
            id="myCarousel2"
            className="owl-carousel owl-carousel-icons2 owl-loaded owl-drag"
          >
            {/* Wrapper for carousel items */}
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-3409px, 0px, 0px)",
                  transition: "all",
                  width: 6251,
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="item-card7-imgs">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/v4.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a href="business.html" className="text-white">
                          AutoMobile
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a href="business.html" className="text-dark">
                              <h4 className="">Gittbo AutoMobiles</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            <li>
                              <a href="javascript:void(0)">
                                <span className="">
                                  <i className="icon icon-eye me-1" /> 22 Views
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                London
                              </a>
                            </li>
                            <li className="mb-md-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-event text-muted me-1" />
                                5 hours ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                12 654 86596
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/male/18.jpg"
                              alt="image"
                              className="avatar brround  me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Wendy Peake
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="javascript:void(0)"
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Add Wishlist"
                              aria-label="Add Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="item-card7-imgs">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/f2.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a href="business.html" className="text-white">
                          Restaurant
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a href="business.html" className="text-dark">
                              <h4 className="">Chinese Restaurant</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            <li>
                              <a href="javascript:void(0)">
                                <span className="">
                                  <i className="icon icon-eye me-1" /> 12 Views
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                UK
                              </a>
                            </li>
                            <li className="mb-md-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-event text-muted me-1" />
                                1 hours ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                14 675 65430
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/female/12.jpg"
                              alt="image"
                              className="avatar brround  me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Wendy Peake
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="javascript:void(0)"
                              className="text-pink"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Remove from Wishlist"
                              aria-label="Remove from Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned animated owl-animated-out fadeOutDown"
                  style={{ width: "543.2px", marginRight: 25, left: 568 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="arrow-ribbon bg-primary">
                        Open at 5'o clock
                      </div>
                      <div className="item-card7-imgs">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/j3.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a href="business.html" className="text-white">
                          Beauty
                        </a>
                        <h4 className="mb-0">18% Off</h4>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text  d-flex">
                            <a href="business.html" className="text-dark">
                              <h4 className="">FrogeBeauty &amp; Spa</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            <li>
                              <a href="javascript:void(0)">
                                <span className="">
                                  <i className="icon icon-eye me-1" /> 632 Views
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                USA
                              </a>
                            </li>
                            <li className="mb-md-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-event text-muted me-1" />
                                22 hours ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                14 675 65430
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/female/19.jpg"
                              alt="image"
                              className="avatar brround  me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Elizabeth
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="business.html"
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Add Wishlist"
                              aria-label="Add Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                  style={{ width: "543.2px", marginRight: 25, left: 568 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="arrow-ribbon bg-success">Open</div>
                      <div className="item-card7-imgs">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/b3.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a href="business.html" className="text-white">
                          Beauty &amp; Spa
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a href="business.html" className="text-dark">
                              <h4 className="">Golik Beauty &amp; Spa</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            <li>
                              <a href="javascript:void(0)">
                                <span className="">
                                  <i className="icon icon-eye me-1" /> 12 Views
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                Canada
                              </a>
                            </li>
                            <li className="mb-md-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-event text-muted me-1" />
                                1 hour ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                14 352 69855
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/female/17.jpg"
                              alt="image"
                              className="avatar brround  me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Victoria
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="javascript:void(0)"
                              className="text-pink"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Remove from Wishlist"
                              aria-label="Remove from Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                  style={{ width: "543.2px", marginRight: 25, left: 569 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="item-card7-imgs">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/h3.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a href="business.html" className="text-white">
                          RealEstate
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a href="business.html" className="text-dark">
                              <h4 className="">2Bk Deluxe Flat</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            <li>
                              <a href="javascript:void(0)">
                                <span className="">
                                  <i className="icon icon-eye me-1" /> 9 Views
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                USA
                              </a>
                            </li>
                            <li className="mb-md-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-event text-muted me-1" />
                                2 hours ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                14 358 96584
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/male/17.jpg"
                              alt="image"
                              className="avatar brround  me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Christopher
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="javascript:void(0)"
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Add Wishlist"
                              aria-label="Add Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown"
                  style={{ width: "543.2px", marginRight: 25, left: 568 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="item-card7-imgs">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/v4.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a href="business.html" className="text-white">
                          AutoMobile
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a href="business.html" className="text-dark">
                              <h4 className="">Gittbo AutoMobiles</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            <li>
                              <a href="javascript:void(0)">
                                <span className="">
                                  <i className="icon icon-eye me-1" /> 22 Views
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                London
                              </a>
                            </li>
                            <li className="mb-md-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-event text-muted me-1" />
                                5 hours ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                12 654 86596
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/male/18.jpg"
                              alt="image"
                              className="avatar brround  me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Wendy Peake
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="javascript:void(0)"
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Add Wishlist"
                              aria-label="Add Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm owl-animated-out fadeOutDown active"
                  style={{ width: "543.2px", marginRight: 25, left: 568 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="item-card7-imgs">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/f2.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a href="business.html" className="text-white">
                          Restaurant
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a href="business.html" className="text-dark">
                              <h4 className="">Chinese Restaurant</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            <li>
                              <a href="javascript:void(0)">
                                <span className="">
                                  <i className="icon icon-eye me-1" /> 12 Views
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                UK
                              </a>
                            </li>
                            <li className="mb-md-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-event text-muted me-1" />
                                1 hours ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                14 675 65430
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/female/12.jpg"
                              alt="image"
                              className="avatar brround  me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Wendy Peake
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="javascript:void(0)"
                              className="text-pink"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Remove from Wishlist"
                              aria-label="Remove from Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item animated owl-animated-in fadeInDowm"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="arrow-ribbon bg-primary">
                        Open at 5'o clock
                      </div>
                      <div className="item-card7-imgs">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/j3.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a href="business.html" className="text-white">
                          Beauty
                        </a>
                        <h4 className="mb-0">18% Off</h4>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text  d-flex">
                            <a href="business.html" className="text-dark">
                              <h4 className="">FrogeBeauty &amp; Spa</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            <li>
                              <a href="javascript:void(0)">
                                <span className="">
                                  <i className="icon icon-eye me-1" /> 632 Views
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                USA
                              </a>
                            </li>
                            <li className="mb-md-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-event text-muted me-1" />
                                22 hours ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                14 675 65430
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/female/19.jpg"
                              alt="image"
                              className="avatar brround  me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Elizabeth
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="business.html"
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Add Wishlist"
                              aria-label="Add Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="arrow-ribbon bg-success">Open</div>
                      <div className="item-card7-imgs">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/b3.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a href="business.html" className="text-white">
                          Beauty &amp; Spa
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a href="business.html" className="text-dark">
                              <h4 className="">Golik Beauty &amp; Spa</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            <li>
                              <a href="javascript:void(0)">
                                <span className="">
                                  <i className="icon icon-eye me-1" /> 12 Views
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                Canada
                              </a>
                            </li>
                            <li className="mb-md-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-event text-muted me-1" />
                                1 hour ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                14 352 69855
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/female/17.jpg"
                              alt="image"
                              className="avatar brround  me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Victoria
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="javascript:void(0)"
                              className="text-pink"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Remove from Wishlist"
                              aria-label="Remove from Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="item-card7-imgs">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/h3.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a href="business.html" className="text-white">
                          RealEstate
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a href="business.html" className="text-dark">
                              <h4 className="">2Bk Deluxe Flat</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            <li>
                              <a href="javascript:void(0)">
                                <span className="">
                                  <i className="icon icon-eye me-1" /> 9 Views
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                USA
                              </a>
                            </li>
                            <li className="mb-md-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-event text-muted me-1" />
                                2 hours ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                14 358 96584
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/male/17.jpg"
                              alt="image"
                              className="avatar brround  me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Christopher
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="javascript:void(0)"
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Add Wishlist"
                              aria-label="Add Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "543.2px", marginRight: 25 }}
                >
                  <div className="item">
                    <div className="card mb-0 overflow-hidden">
                      <div className="item-card7-imgs">
                        <a href="business.html" className="absolute-link" />
                        <img
                          src="../assets/images/products/products/v4.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a href="business.html" className="text-white">
                          AutoMobile
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a href="business.html" className="text-dark">
                              <h4 className="">Gittbo AutoMobiles</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            <li>
                              <a href="javascript:void(0)">
                                <span className="">
                                  <i className="icon icon-eye me-1" /> 22 Views
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-location-pin text-muted me-1" />
                                London
                              </a>
                            </li>
                            <li className="mb-md-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-event text-muted me-1" />
                                5 hours ago
                              </a>
                            </li>
                            <li className="mb-0">
                              <a href="javascript:void(0)" className="icons">
                                <i className="icon icon-phone text-muted me-1" />
                                12 654 86596
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/male/18.jpg"
                              alt="image"
                              className="avatar brround  me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Wendy Peake
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="javascript:void(0)"
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Add Wishlist"
                              aria-label="Add Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev">
                <span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next">
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div className="owl-dots disabled" />
          </div>
        </div>
      </section>
      <section>
        <div
          className="about-1 cover-image sptb bg-background-color"
          data-bs-image-src="../assets/images/banners/banner5.jpg"
          style={{
            background:
              'url("../assets/images/banners/banner5.jpg") center center',
          }}
        >
          <div className="content-text mb-0 text-white info">
            <div className="container">
              <div className="row text-center">
                <div className="col-lg-3 col-md-6">
                  <div className="counter-status status md-lg-0">
                    <div className="counter-icon text-secondary">
                      <i className="icon icon-docs" />
                    </div>
                    <h5>Total Listings</h5>
                    <h2 className="counter mb-0">17,846</h2>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="counter-status status-1 md-lg-0">
                    <div className="counter-icon text-warning">
                      <i className="icon icon-rocket" />
                    </div>
                    <h5>Featured Listings</h5>
                    <h2 className="counter mb-0">5,463</h2>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="counter-status mb-md-0">
                    <div className="counter-icon">
                      <i className="icon icon-people" />
                    </div>
                    <h5> Our Clients</h5>
                    <h2 className="counter mb-0">7,569</h2>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="counter-status status mb-0">
                    <div className="counter-icon text-success">
                      <i className="icon icon-emotsmile" />
                    </div>
                    <h5>Happy Customers</h5>
                    <h2 className="counter mb-0">7,253</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
