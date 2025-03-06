"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

export default function addListing() {
  return (
    <>
      <section>
        <div
          className="bannerimg cover-image bg-background3"
          data-bs-image-src="../assets/images/banners/banner2.jpg"
          style={{
            background:
              'url("../assets/images/banners/banner2.jpg") center center',
          }}
        >
          <div className="header-text mb-0">
            <div className="container">
              <div className="text-center text-white">
                <h1>Ad Listing</h1>
                <ol className="breadcrumb text-center">
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0)">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0)">Pages</a>
                  </li>
                  <li
                    className="breadcrumb-item active text-white"
                    aria-current="page"
                  >
                    Ad Listing
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sptb">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8 col-md-12">
              <div className="card ">
                <div className="card-header ">
                  <h3 className="card-title">Add Listing</h3>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label text-dark">
                      Listing Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add List Name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Category</label>
                    <select
                      className="form-control form-select select2-show-search select2-hidden-accessible"
                      data-select2-id="select2-data-18-nujv"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option value={0} data-select2-id="select2-data-20-g37x">
                        Select Category
                      </option>
                      <option value={1}>RealEstate</option>
                      <option value={2}>Restaurant</option>
                      <option value={3}>Health &amp; Fitness</option>
                      <option value={4}>Travel</option>
                      <option value={5}>Computer</option>
                      <option value={6}>Electronics</option>
                      <option value={7}>Jobs</option>
                      <option value={8}>Beauty &amp; Spa</option>
                      <option value={9}>Clothing</option>
                      <option value={10}>Home &amp; Furinture</option>
                      <option value={11}>Vechicles</option>
                      <option value={12}>Education</option>
                      <option value={13}>Services</option>
                      <option value={14}>Events</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="select2-data-19-wpzk"
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
                          aria-labelledby="select2-7j27-container"
                          aria-controls="select2-7j27-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-7j27-container"
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
                      <span className="dropdown-wrapper" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Your Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add List Address"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add List Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Opening Days</label>
                    <select
                      className="form-control select2 select2-hidden-accessible"
                      data-placeholder="Choose Day"
                      multiple=""
                      data-select2-id="select2-data-1-ptmr"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option
                        value="AllDays"
                        selected=""
                        data-select2-id="select2-data-3-0yhj"
                      >
                        All Days
                      </option>
                      <option value="Sunday">Sunday</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="select2-data-2-bobb"
                      style={{ width: "100%" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--multiple"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex={-1}
                          aria-disabled="false"
                        >
                          <ul
                            className="select2-selection__rendered"
                            id="select2-fdiu-container"
                          >
                            <li
                              className="select2-selection__choice"
                              title="All Days"
                              data-select2-id="select2-data-4-ymp2"
                            >
                              <button
                                type="button"
                                className="select2-selection__choice__remove"
                                tabIndex={-1}
                                title="Remove item"
                                aria-label="Remove item"
                                aria-describedby="select2-fdiu-container-choice-v09y-AllDays"
                              >
                                <span aria-hidden="true">×</span>
                              </button>
                              <span
                                className="select2-selection__choice__display"
                                id="select2-fdiu-container-choice-v09y-AllDays"
                              >
                                All Days
                              </span>
                            </li>
                          </ul>
                          <span className="select2-search select2-search--inline">
                            <textarea
                              className="select2-search__field"
                              type="search"
                              tabIndex={0}
                              autoCorrect="off"
                              autoCapitalize="none"
                              spellCheck="false"
                              role="searchbox"
                              aria-autocomplete="list"
                              autoComplete="off"
                              aria-label="Search"
                              aria-describedby="select2-fdiu-container"
                              placeholder=""
                              style={{ width: "0.75em" }}
                              defaultValue={""}
                            />
                          </span>
                        </span>
                      </span>
                      <span className="dropdown-wrapper" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="form-label text-dark">
                          Opening Time
                        </label>
                        <select
                          className="form-control select2-show-search select2-hidden-accessible"
                          data-placeholder="Choose Time"
                          data-select2-id="select2-data-21-hjs4"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option
                            value={12}
                            data-select2-id="select2-data-23-x3js"
                          >
                            12am
                          </option>
                          <option value={1}>1am</option>
                          <option value={2}>2am</option>
                          <option value={3}>4am</option>
                          <option value={4}>4am</option>
                          <option value={5}>5am</option>
                          <option value={6}>6am</option>
                          <option value={7}>7am</option>
                          <option value={8}>8am</option>
                          <option value={9}>9am</option>
                          <option value={10}>10am</option>
                          <option value={11}>11am</option>
                          <option value={13}>12pm</option>
                          <option value={14}>1pm</option>
                          <option value={15}>2pm</option>
                          <option value={16}>3pm</option>
                          <option value={17}>4pm</option>
                          <option value={18}>5pm</option>
                          <option value={19}>6pm</option>
                          <option value={20}>7pm</option>
                          <option value={21}>8pm</option>
                          <option value={22}>9pm</option>
                          <option value={23}>10pm</option>
                          <option value={24}>11pm</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-22-3rvp"
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
                              aria-labelledby="select2-cnnk-container"
                              aria-controls="select2-cnnk-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-cnnk-container"
                                role="textbox"
                                aria-readonly="true"
                                title="12am"
                              >
                                12am
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
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="form-label text-dark">
                          Closing Time
                        </label>
                        <select
                          className="form-control select2-show-search select2-hidden-accessible"
                          data-placeholder="Choose Time"
                          data-select2-id="select2-data-24-5xbl"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option
                            value={12}
                            data-select2-id="select2-data-26-6wek"
                          >
                            12am
                          </option>
                          <option value={1}>1am</option>
                          <option value={2}>2am</option>
                          <option value={3}>4am</option>
                          <option value={4}>4am</option>
                          <option value={5}>5am</option>
                          <option value={6}>6am</option>
                          <option value={7}>7am</option>
                          <option value={8}>8am</option>
                          <option value={9}>9am</option>
                          <option value={10}>10am</option>
                          <option value={11}>11am</option>
                          <option value={13}>12pm</option>
                          <option value={14}>1pm</option>
                          <option value={15}>2pm</option>
                          <option value={16}>3pm</option>
                          <option value={17}>4pm</option>
                          <option value={18}>5pm</option>
                          <option value={19}>6pm</option>
                          <option value={20}>7pm</option>
                          <option value={21}>8pm</option>
                          <option value={22}>9pm</option>
                          <option value={23}>10pm</option>
                          <option value={24}>11pm</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-25-5xat"
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
                              aria-labelledby="select2-zyhc-container"
                              aria-controls="select2-zyhc-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-zyhc-container"
                                role="textbox"
                                aria-readonly="true"
                                title="12am"
                              >
                                12am
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
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Description</label>
                    <textarea
                      className="form-control"
                      name="example-textarea-input"
                      rows={6}
                      placeholder="text here.."
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Image Upload</label>
                    <input
                      id="demo"
                      type="file"
                      name="files"
                      accept=".jpg, .png, image/jpeg, image/png"
                      multiple=""
                      className="ff_fileupload_hidden"
                    />
                    <div className="ff_fileupload_wrap">
                      <div className="ff_fileupload_dropzone_wrap">
                        <button
                          className="ff_fileupload_dropzone"
                          type="button"
                          aria-label="Browse, drag-and-drop, or paste files to upload"
                        />
                      </div>
                      <table className="ff_fileupload_uploads" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card ">
                <div className="card-header">
                  <h3 className="card-title">Personal Information</h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group mb-0">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Number"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group mb-0">
                        <label className="form-label">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Social Media Information</h3>
                </div>
                <div className="card-body">
                  <div className="input-group mb-4">
                    <div className="input-group-text">
                      <div className="input-group-text w-7 p-0 border-0 bg-transparent">
                        <i className="fa fa-facebook tx-16 lh-0 op-6 text-center mx-auto" />
                      </div>
                    </div>
                    {/* input-group-text */}
                    <input
                      className="form-control"
                      placeholder="Facebook URL"
                      type="text"
                    />
                  </div>
                  <div className="input-group mb-4">
                    <div className="input-group-text">
                      <div className="input-group-text w-7 p-0 border-0 bg-transparent">
                        <i className="fa fa-twitter tx-16 lh-0 op-6 text-center mx-auto" />
                      </div>
                    </div>
                    {/* input-group-text */}
                    <input
                      className="form-control"
                      placeholder="Twitter URL"
                      type="text"
                    />
                  </div>
                  <div className="input-group mb-4">
                    <div className="input-group-text">
                      <div className="input-group-text w-7 p-0 border-0 bg-transparent">
                        <i className="fa fa-google-plus tx-16 lh-0 op-6 text-center mx-auto" />
                      </div>
                    </div>
                    <input
                      className="form-control"
                      placeholder="GooglePlus URL"
                      type="text"
                    />
                  </div>
                  <div className="input-group mb-4">
                    <div className="input-group-text">
                      <div className="input-group-text w-7 p-0 border-0 bg-transparent">
                        <i className="fa fa-map-marker tx-16 lh-0 op-6 text-center mx-auto" />
                      </div>
                    </div>
                    <input
                      className="form-control"
                      placeholder="GoogleMap Location URL"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Business Info</h3>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label">
                      Company Established year
                    </label>
                    <select
                      name="user[year]"
                      className="form-control select2 select2-hidden-accessible"
                      data-select2-id="select2-data-5-1b4g"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option value="">Year</option>
                      <option value={2020}>2020</option>
                      <option value={2019}>2019</option>
                      <option value={2018}>2018</option>
                      <option value={2017}>2017</option>
                      <option value={2016}>2016</option>
                      <option value={2015}>2015</option>
                      <option value={2014}>2014</option>
                      <option value={2013}>2013</option>
                      <option value={2012}>2012</option>
                      <option value={2011}>2011</option>
                      <option value={2010}>2010</option>
                      <option value={2009}>2009</option>
                      <option value={2008}>2008</option>
                      <option value={2007}>2007</option>
                      <option value={2006}>2006</option>
                      <option value={2005}>2005</option>
                      <option value={2004}>2004</option>
                      <option value={2003}>2003</option>
                      <option value={2002}>2002</option>
                      <option value={2001}>2001</option>
                      <option value={2000}>2000</option>
                      <option value={1999}>1999</option>
                      <option value={1998}>1998</option>
                      <option value={1997}>1997</option>
                      <option value={1996}>1996</option>
                      <option value={1995}>1995</option>
                      <option value={1994}>1994</option>
                      <option value={1993}>1993</option>
                      <option value={1992}>1992</option>
                      <option value={1991}>1991</option>
                      <option value={1990}>1990</option>
                      <option
                        selected="selected"
                        value={1989}
                        data-select2-id="select2-data-7-x8j0"
                      >
                        1989
                      </option>
                      <option value={1988}>1988</option>
                      <option value={1987}>1987</option>
                      <option value={1986}>1986</option>
                      <option value={1985}>1985</option>
                      <option value={1984}>1984</option>
                      <option value={1983}>1983</option>
                      <option value={1982}>1982</option>
                      <option value={1981}>1981</option>
                      <option value={1980}>1980</option>
                      <option value={1979}>1979</option>
                      <option value={1978}>1978</option>
                      <option value={1977}>1977</option>
                      <option value={1976}>1976</option>
                      <option value={1975}>1975</option>
                      <option value={1974}>1974</option>
                      <option value={1973}>1973</option>
                      <option value={1972}>1972</option>
                      <option value={1971}>1971</option>
                      <option value={1970}>1970</option>
                      <option value={1969}>1969</option>
                      <option value={1968}>1968</option>
                      <option value={1967}>1967</option>
                      <option value={1966}>1966</option>
                      <option value={1965}>1965</option>
                      <option value={1964}>1964</option>
                      <option value={1963}>1963</option>
                      <option value={1962}>1962</option>
                      <option value={1961}>1961</option>
                      <option value={1960}>1960</option>
                      <option value={1959}>1959</option>
                      <option value={1958}>1958</option>
                      <option value={1957}>1957</option>
                      <option value={1956}>1956</option>
                      <option value={1955}>1955</option>
                      <option value={1954}>1954</option>
                      <option value={1953}>1953</option>
                      <option value={1952}>1952</option>
                      <option value={1951}>1951</option>
                      <option value={1950}>1950</option>
                      <option value={1949}>1949</option>
                      <option value={1948}>1948</option>
                      <option value={1947}>1947</option>
                      <option value={1946}>1946</option>
                      <option value={1945}>1945</option>
                      <option value={1944}>1944</option>
                      <option value={1943}>1943</option>
                      <option value={1942}>1942</option>
                      <option value={1941}>1941</option>
                      <option value={1940}>1940</option>
                      <option value={1939}>1939</option>
                      <option value={1938}>1938</option>
                      <option value={1937}>1937</option>
                      <option value={1936}>1936</option>
                      <option value={1935}>1935</option>
                      <option value={1934}>1934</option>
                      <option value={1933}>1933</option>
                      <option value={1932}>1932</option>
                      <option value={1931}>1931</option>
                      <option value={1930}>1930</option>
                      <option value={1929}>1929</option>
                      <option value={1928}>1928</option>
                      <option value={1927}>1927</option>
                      <option value={1926}>1926</option>
                      <option value={1925}>1925</option>
                      <option value={1924}>1924</option>
                      <option value={1923}>1923</option>
                      <option value={1922}>1922</option>
                      <option value={1921}>1921</option>
                      <option value={1920}>1920</option>
                      <option value={1919}>1919</option>
                      <option value={1918}>1918</option>
                      <option value={1917}>1917</option>
                      <option value={1916}>1916</option>
                      <option value={1915}>1915</option>
                      <option value={1914}>1914</option>
                      <option value={1913}>1913</option>
                      <option value={1912}>1912</option>
                      <option value={1911}>1911</option>
                      <option value={1910}>1910</option>
                      <option value={1909}>1909</option>
                      <option value={1908}>1908</option>
                      <option value={1907}>1907</option>
                      <option value={1906}>1906</option>
                      <option value={1905}>1905</option>
                      <option value={1904}>1904</option>
                      <option value={1903}>1903</option>
                      <option value={1902}>1902</option>
                      <option value={1901}>1901</option>
                      <option value={1900}>1900</option>
                      <option value={1899}>1899</option>
                      <option value={1898}>1898</option>
                      <option value={1897}>1897</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="select2-data-6-eupb"
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
                          aria-labelledby="select2-useryear-pv-container"
                          aria-controls="select2-useryear-pv-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-useryear-pv-container"
                            role="textbox"
                            aria-readonly="true"
                            title={1989}
                          >
                            1989
                          </span>
                          <span
                            className="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation" />
                          </span>
                        </span>
                      </span>
                      <span className="dropdown-wrapper" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Services</label>
                    <select
                      className="form-control select2 select2-hidden-accessible"
                      data-placeholder="Choose Services"
                      multiple=""
                      data-select2-id="select2-data-8-xuly"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option>Select Category</option>
                      <option value={0}>All Categories</option>
                      <option value={1}>Hotels</option>
                      <option value={2}>Restaurant</option>
                      <option value={3}>Events</option>
                      <option value={4}>Cinema</option>{" "}
                      <option value={5}>Gym</option>
                      <option value={6}>Shop &amp; Store</option>
                      <option value={7}>Tours &amp; Travels</option>
                      <option value={8}>Cafe</option>
                      <option value={9}>Mobile Store</option>
                      <option value={10}>College</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="select2-data-9-4c9p"
                      style={{ width: "100%" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--multiple"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex={-1}
                          aria-disabled="false"
                        >
                          <ul
                            className="select2-selection__rendered"
                            id="select2-4k4u-container"
                          />
                          <span className="select2-search select2-search--inline">
                            <textarea
                              className="select2-search__field"
                              type="search"
                              tabIndex={0}
                              autoCorrect="off"
                              autoCapitalize="none"
                              spellCheck="false"
                              role="searchbox"
                              aria-autocomplete="list"
                              autoComplete="off"
                              aria-label="Search"
                              aria-describedby="select2-4k4u-container"
                              placeholder="Choose Services"
                              style={{ width: "100%" }}
                              defaultValue={""}
                            />
                          </span>
                        </span>
                      </span>
                      <span className="dropdown-wrapper" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">
                      Payment Methods
                    </label>
                    <select
                      className="form-control select2 select2-hidden-accessible"
                      data-placeholder="Choose Payment"
                      multiple=""
                      data-select2-id="select2-data-10-dw9n"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option
                        value="Cash"
                        selected=""
                        data-select2-id="select2-data-12-baor"
                      >
                        Cash
                      </option>
                      <option value="Net Banking">Net Banking</option>
                      <option value="Visa">Visa</option>
                      <option value="Master Card">Master Card</option>
                      <option value="Discover">Discover</option>
                      <option value="Americal Express">Americal Express</option>
                      <option value="Online Transaction">
                        Online Transaction
                      </option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="select2-data-11-4ii6"
                      style={{ width: "100%" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--multiple"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex={-1}
                          aria-disabled="false"
                        >
                          <ul
                            className="select2-selection__rendered"
                            id="select2-hjya-container"
                          >
                            <li
                              className="select2-selection__choice"
                              title="Cash"
                              data-select2-id="select2-data-13-utqc"
                            >
                              <button
                                type="button"
                                className="select2-selection__choice__remove"
                                tabIndex={-1}
                                title="Remove item"
                                aria-label="Remove item"
                                aria-describedby="select2-hjya-container-choice-mwzt-Cash"
                              >
                                <span aria-hidden="true">×</span>
                              </button>
                              <span
                                className="select2-selection__choice__display"
                                id="select2-hjya-container-choice-mwzt-Cash"
                              >
                                Cash
                              </span>
                            </li>
                          </ul>
                          <span className="select2-search select2-search--inline">
                            <textarea
                              className="select2-search__field"
                              type="search"
                              tabIndex={0}
                              autoCorrect="off"
                              autoCapitalize="none"
                              spellCheck="false"
                              role="searchbox"
                              aria-autocomplete="list"
                              autoComplete="off"
                              aria-label="Search"
                              aria-describedby="select2-hjya-container"
                              placeholder=""
                              style={{ width: "0.75em" }}
                              defaultValue={""}
                            />
                          </span>
                        </span>
                      </span>
                      <span className="dropdown-wrapper" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Fax</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Fax Number"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Toll Free</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Toll Free Number"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">
                      Certification
                    </label>
                    <select
                      className="form-control select2 select2-hidden-accessible"
                      data-placeholder="Choose Certification"
                      multiple=""
                      data-select2-id="select2-data-14-03m2"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option
                        value="Iso Certified"
                        selected=""
                        data-select2-id="select2-data-16-srn6"
                      >
                        Iso Certified
                      </option>
                      <option value="Government">Government</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="select2-data-15-bf7f"
                      style={{ width: "100%" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--multiple"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex={-1}
                          aria-disabled="false"
                        >
                          <ul
                            className="select2-selection__rendered"
                            id="select2-7j6f-container"
                          >
                            <li
                              className="select2-selection__choice"
                              title="Iso Certified"
                              data-select2-id="select2-data-17-62d5"
                            >
                              <button
                                type="button"
                                className="select2-selection__choice__remove"
                                tabIndex={-1}
                                title="Remove item"
                                aria-label="Remove item"
                                aria-describedby="select2-7j6f-container-choice-dtfp-Iso Certified"
                              >
                                <span aria-hidden="true">×</span>
                              </button>
                              <span
                                className="select2-selection__choice__display"
                                id="select2-7j6f-container-choice-dtfp-Iso Certified"
                              >
                                Iso Certified
                              </span>
                            </li>
                          </ul>
                          <span className="select2-search select2-search--inline">
                            <textarea
                              className="select2-search__field"
                              type="search"
                              tabIndex={0}
                              autoCorrect="off"
                              autoCapitalize="none"
                              spellCheck="false"
                              role="searchbox"
                              aria-autocomplete="list"
                              autoComplete="off"
                              aria-label="Search"
                              aria-describedby="select2-7j6f-container"
                              placeholder=""
                              style={{ width: "0.75em" }}
                              defaultValue={""}
                            />
                          </span>
                        </span>
                      </span>
                      <span className="dropdown-wrapper" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Package</h3>
                </div>
                <div className="card-body">
                  <div className="control-group form-group">
                    <label className="form-label text-dark">
                      Ad Post Package
                    </label>
                    <div className="d-md-flex ad-post-details">
                      <label className="custom-control custom-radio mb-2 me-4">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="radios1"
                          defaultValue="option1"
                          defaultChecked=""
                        />
                        <span className="custom-control-label">
                          <a className="text-muted">30 Days Free</a>
                        </span>
                      </label>
                      <label className="custom-control custom-radio  mb-2 me-4">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="radios1"
                          defaultValue="option2"
                        />
                        <span className="custom-control-label">
                          <a className="text-muted">60 days / 20$</a>
                        </span>
                      </label>
                      <label className="custom-control custom-radio  mb-2 me-4">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="radios1"
                          defaultValue="option3"
                        />
                        <span className="custom-control-label">
                          <a className="text-muted">6months / 50$</a>
                        </span>
                      </label>
                      <label className="custom-control custom-radio  mb-2">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="radios1"
                          defaultValue="option4"
                        />
                        <span className="custom-control-label">
                          <a className="text-muted">1 year / 80$</a>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Payments</h3>
                </div>
                <div className="card-body">
                  <div className="tab-content card-body border mb-0 b-0 br-3">
                    <div className="panel panel-secondary">
                      <div className=" tab-menu-heading border-0 ps-0 pe-0 pt-0">
                        <div className="tabs-menu1 ">
                          {/* Tabs */}
                          <ul className="nav panel-tabs">
                            <li>
                              <a
                                href="#tab5"
                                className="active"
                                data-bs-toggle="tab"
                              >
                                Credit/ Debit Card
                              </a>
                            </li>
                            <li>
                              <a href="#tab6" data-bs-toggle="tab">
                                Pay-pal
                              </a>
                            </li>
                            <li>
                              <a href="#tab7" data-bs-toggle="tab">
                                Net Banking
                              </a>
                            </li>
                            <li>
                              <a href="#tab8" data-bs-toggle="tab">
                                Gift Voucher
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="panel-body tabs-menu-body ps-0 pe-0 border-0">
                        <div className="tab-content">
                          <div className="tab-pane active " id="tab5">
                            <div className="form-group">
                              <label className="form-label">
                                CardHolder Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="name1"
                                placeholder="First Name"
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Card number</label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search for..."
                                />
                                <span className="input-group-text p-0 border-0">
                                  <button
                                    className="btn btn-info"
                                    type="button"
                                  >
                                    <i className="fa fa-cc-visa" /> &nbsp;
                                    <i className="fa fa-cc-amex" /> &nbsp;
                                    <i className="fa fa-cc-mastercard" />
                                  </button>
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-8">
                                <div className="form-group mb-sm-0">
                                  <label className="form-label">
                                    Expiration
                                  </label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className="form-control"
                                      placeholder="MM"
                                      name="expiremonth"
                                    />
                                    <input
                                      type="number"
                                      className="form-control"
                                      placeholder="YY"
                                      name="expireyear"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-4 ">
                                <div className="form-group mb-0">
                                  <label className="form-label">
                                    CVV <i className="fa fa-question-circle" />
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane " id="tab6">
                            <h6 className="font-weight-semibold">
                              Paypal is easiest way to pay online
                            </h6>
                            <p>
                              <a
                                href="javascript:void(0)"
                                className="btn btn-secondary"
                              >
                                <i className="fa fa-paypal" /> Log in my Paypal
                              </a>
                            </p>
                            <p className="mb-0">
                              <strong>Note:</strong> Nemo enim ipsam voluptatem
                              quia voluptas sit aspernatur aut odit aut fugit,
                              sed quia consequuntur magni dolores eos qui
                              ratione voluptatem sequi nesciunt.
                            </p>
                          </div>
                          <div className="tab-pane " id="tab7">
                            <div className="control-group form-group">
                              <div className="form-group">
                                <label className="form-label text-dark">
                                  All Banks
                                </label>
                                <select
                                  className="form-control form-select required category select2-no-search select2-hidden-accessible"
                                  data-select2-id="select2-data-27-roui"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                >
                                  <option
                                    value={0}
                                    data-select2-id="select2-data-29-qimv"
                                  >
                                    Select Bank
                                  </option>
                                  <option value={1}>
                                    Credit Agricole Group
                                  </option>
                                  <option value={2}>Bank of America</option>
                                  <option value={3}>
                                    Mitsubishi UFJ Financial Group
                                  </option>
                                  <option value={4}>BNP Paribas</option>
                                  <option value={5}>
                                    JPMorgan Chase &amp; Co.
                                  </option>
                                  <option value={6}>HSBC Holdings</option>
                                  <option value={7}>Bank of China</option>
                                  <option value={8}>
                                    Agricultural Bank of China
                                  </option>
                                  <option value={9}>
                                    China Construction Bank Corp.
                                  </option>
                                  <option value={10}>
                                    Industrial &amp; Commercial Bank of China,
                                    or ICBC
                                  </option>
                                </select>
                                <span
                                  className="select2 select2-container select2-container--default"
                                  dir="ltr"
                                  data-select2-id="select2-data-28-sj0d"
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
                                      aria-labelledby="select2-16kk-container"
                                      aria-controls="select2-16kk-container"
                                    >
                                      <span
                                        className="select2-selection__rendered"
                                        id="select2-16kk-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="Select Bank"
                                      >
                                        Select Bank
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
                            </div>
                            <p>
                              <a
                                href="javascript:void(0)"
                                className="btn btn-secondary"
                              >
                                Log in Bank
                              </a>
                            </p>
                          </div>
                          <div className="tab-pane " id="tab8">
                            <div className="form-group">
                              <label className="form-label">Gift Voucher</label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Your Gv Number"
                                />
                                <span className="input-group-text p-0 border-0">
                                  <button
                                    className="btn btn-info"
                                    type="button"
                                  >
                                    Apply
                                  </button>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row clearfix">
                      <div className="col-lg-12">
                        <div className="checkbox checkbox-info">
                          <label className="custom-control mt-4 form-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <span className="custom-control-label text-dark">
                              I agree with the Terms and Conditions.
                            </span>
                          </label>
                        </div>
                      </div>
                      <ul className=" mb-b-4 ">
                        <li className="float-end">
                          <a
                            href="javascript:void(0)"
                            className="btn btn-secondary  mb-0 me-2"
                          >
                            Continue
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="float-end mb-5 mb-lg-0">
                <a href="javascript:void(0)" className="btn btn-lg btn-success">
                  Submit Now
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Terms And Conditions</h3>
                </div>
                <div className="card-body p-0">
                  <ul className="list-unstyled widget-spec mb-0">
                    <li>
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />
                      Money Not Refundable
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />
                      You can renew your Premium ad after experted.
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />
                      Premium listings are active for depend on package.
                    </li>
                    <li className="ms-5 mb-0">
                      <a href="tips.html"> View more..</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Benefits Of Premium Ad</h3>
                </div>
                <div className="card-body p-0">
                  <ul className="list-unstyled widget-spec mb-0">
                    <li>
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />
                      Premium listings Active
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />
                      Premium listings are displayed on top
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />
                      Premium listings will be Show in Google results
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card mb-0 overflow-hidden">
                <div className="card-header">
                  <h3 className="card-title">Safety Tips For Buyers</h3>
                </div>
                <div className="card-body p-0">
                  <ul className="list-unstyled widget-spec  mb-0">
                    <li>
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />
                      Meet Seller at public Place
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />
                      Check item before you buy
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />
                      Pay only after collecting item
                    </li>
                    <li className="ms-5 mb-0">
                      <a href="tips.html"> View more..</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
