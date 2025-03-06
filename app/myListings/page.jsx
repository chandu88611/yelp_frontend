"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

export default function myListings() {
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
            <div className="text-center text-white">
              <h1 className="">My Listings</h1>
              <ol className="breadcrumb text-center">
                <li className="breadcrumb-item">
                  <a href="javascript:void(0)">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="javascript:void(0)">My Dashboard </a>
                </li>
                <li
                  className="breadcrumb-item active text-white"
                  aria-current="page"
                >
                  My Listings
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="sptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-12 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">My Dashboard</h3>
                </div>
                <div className="card-body text-center item-user">
                  <div className="profile-pic">
                    <div className="profile-pic-img">
                      <span
                        className="bg-success dots"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="online"
                        aria-label="online"
                      />
                      <img
                        src="../assets/images/faces/male/25.jpg"
                        className="brround"
                        alt="user"
                      />
                    </div>
                    <a href="userprofile.html" className="text-dark">
                      <h4 className="mt-3 mb-0 font-weight-semibold">
                        Robert McLean
                      </h4>
                    </a>
                  </div>
                </div>
                <aside className="app-sidebar doc-sidebar my-dash">
                  <div className="app-sidebar__user clearfix">
                    <ul className="side-menu">
                      <li>
                        <a className="side-menu__item" href="mydash.html">
                          <i className="typcn typcn-edit fs-20" />
                          <span className="side-menu__label ms-2">
                            Edit Profile
                          </span>
                        </a>
                      </li>
                      <li className="slide">
                        <a
                          className="side-menu__item"
                          data-bs-toggle="slide"
                          href="javascript:void(0)"
                        >
                          <i className="typcn typcn-heart-outline fs-20" />
                          <span className="side-menu__label ms-2">
                            My Favorite
                          </span>
                          <i className="angle fa fa-angle-right" />
                        </a>
                        <ul className="slide-menu">
                          <li>
                            <a className="slide-item" href="myfavorite.html">
                              <i className="fa fa-angle-right me-2" />
                              Favorite1
                            </a>
                          </li>
                          <li>
                            <a className="slide-item" href="myfavorite-2.html">
                              <i className="fa fa-angle-right me-2" />
                              Favorite2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="slide is-expanded">
                        <a
                          className="side-menu__item active"
                          data-bs-toggle="slide"
                          href="javascript:void(0)"
                        >
                          <i className="typcn typcn-briefcase fs-20" />
                          <span className="side-menu__label ms-2">
                            My Listings
                          </span>
                          <i className="angle fa fa-angle-right" />
                        </a>
                        <ul className="slide-menu">
                          <li className="active">
                            <a
                              className="slide-item active"
                              href="mylistings.html"
                            >
                              <i className="fa fa-angle-right me-2" />
                              My-Listing 01
                            </a>
                          </li>
                          <li>
                            <a className="slide-item" href="mylistings-2.html">
                              <i className="fa fa-angle-right me-2" />
                              My-Listing 02
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="slide">
                        <a
                          className="side-menu__item"
                          data-bs-toggle="slide"
                          href="javascript:void(0)"
                        >
                          <i className="typcn typcn-folder fs-20" />
                          <span className="side-menu__label ms-2">
                            Managed Listings
                          </span>
                          <i className="angle fa fa-angle-right" />
                        </a>
                        <ul className="slide-menu">
                          <li>
                            <a className="slide-item" href="manged.html">
                              <i className="fa fa-angle-right me-2" />
                              Managed Listing 01
                            </a>
                          </li>
                          <li>
                            <a className="slide-item" href="manged-2.html">
                              <i className="fa fa-angle-right me-2" />
                              Managed Listing 02
                            </a>
                          </li>
                          <li className="sub-slide">
                            <a
                              className="side-menu__item border-top-0 slide-item"
                              href="javascript:void(0)"
                              data-bs-toggle="sub-slide"
                            >
                              <span className="side-menu__label">
                                <i className="fa fa-angle-right me-2" />
                                Listings
                              </span>
                              <i className="sub-angle fa fa-angle-right" />
                            </a>
                            <ul className="child-sub-menu ">
                              <li>
                                <a
                                  className="slide-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-angle-right me-2 text-muted" />
                                  Managed Listing
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="side-menu__item" href="payments.html">
                          <i className="typcn typcn-credit-card fs-20" />
                          <span className="side-menu__label ms-2">
                            Payments
                          </span>
                        </a>
                      </li>
                      <li>
                        <a className="side-menu__item" href="orders.html">
                          <i className="typcn typcn-shopping-cart fs-20" />
                          <span className="side-menu__label ms-2">Orders</span>
                        </a>
                      </li>
                      <li>
                        <a className="side-menu__item" href="tips.html">
                          <i className="typcn typcn-flag-outline fs-20" />
                          <span className="side-menu__label ms-2">
                            Safety Tips
                          </span>
                        </a>
                      </li>
                      <li>
                        <a className="side-menu__item" href="settings.html">
                          <i className="typcn typcn-cog-outline fs-20" />
                          <span className="side-menu__label ms-2">
                            Settings
                          </span>
                        </a>
                      </li>
                      <li>
                        <a className="side-menu__item" href="login.html">
                          <i className="typcn typcn-power-outline fs-20" />
                          <span className="side-menu__label ms-2">Logout</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
              <div className="card my-select">
                <div className="card-header">
                  <h3 className="card-title">Search Ads</h3>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <div
                      className="xdsoft_autocomplete"
                      style={{ display: "block", width: "886.4px" }}
                    >
                      <input
                        type="text"
                        className="form-control keywords-input xdsoft_input"
                        id="text"
                        placeholder="What are you looking for?"
                        autoComplete="off"
                        style={{ fontSize: 15, background: "white" }}
                      />
                      <div
                        className="xdsoft_autocomplete_dropdown"
                        style={{
                          left: 0,
                          top: 39,
                          marginLeft: 0,
                          marginRight: 0,
                          width: 886,
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
                          width: "886.4px",
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
                          height: 39,
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
                  <div className="form-group">
                    <select
                      name="country"
                      id="select-countries"
                      className="form-control form-select select2-show-search select2-hidden-accessible"
                      data-select2-id="select2-data-select-countries"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option
                        value={1}
                        selected=""
                        data-select2-id="select2-data-2-t66b"
                      >
                        All Categories
                      </option>
                      <option value={2}>RealEstate</option>
                      <option value={3}>Restaurant</option>
                      <option value={4}>Beauty</option>
                      <option value={5}>Jobs</option>
                      <option value={6}>Services</option>
                      <option value={7}>AutoMobile</option>
                      <option value={8}>Education</option>
                      <option value={9}>Electronics</option>
                      <option value={10}>Pets &amp; Animals</option>
                      <option value={11}>Computer</option>
                      <option value={12}>Mobile</option>
                      <option value={13}>Events</option>
                      <option value={14}>Travel</option>
                      <option value={15}>Clothing</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="select2-data-1-0yj5"
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
                          aria-labelledby="select2-select-countries-container"
                          aria-controls="select2-select-countries-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-select-countries-container"
                            role="textbox"
                            aria-readonly="true"
                            title="All Categories"
                          >
                            All Categories
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
                  <div className="">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-block btn-secondary"
                    >
                      Search
                    </a>
                  </div>
                </div>
              </div>
              <div className="card mb-xl-0">
                <div className="card-header">
                  <h3 className="card-title">Safety Tips For Buyers</h3>
                </div>
                <div className="card-body p-0">
                  <ul className="list-unstyled widget-spec  mb-0">
                    <li className="">
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />
                      Meet Seller at public Place
                    </li>
                    <li className="">
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />
                      Check item before you buy
                    </li>
                    <li className="">
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
            <div className="col-xl-9 col-lg-12 col-md-12">
              <div className="card mb-0 overflow-hidden">
                <div className="card-header">
                  <h3 className="card-title">My Ads</h3>
                </div>
                <div className="card-body">
                  <div className="ads-tabs">
                    <div className="tabs-menus">
                      {/* Tabs */}
                      <ul className="nav panel-tabs">
                        <li className="">
                          <a
                            href="#tab1"
                            className="active"
                            data-bs-toggle="tab"
                          >
                            All Ads (14)
                          </a>
                        </li>
                        <li>
                          <a href="#tab2" data-bs-toggle="tab">
                            Published (08)
                          </a>
                        </li>
                        <li>
                          <a href="#tab3" data-bs-toggle="tab">
                            Featured (05)
                          </a>
                        </li>
                        <li>
                          <a href="#tab4" data-bs-toggle="tab">
                            Expired (01)
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content">
                      <div
                        className="tab-pane active table-responsive userprof-tab"
                        id="tab1"
                      >
                        <div className="card overflow-hidden card-absolute">
                          <div className="edit-buttons-absolute">
                            <a
                              className="btn btn-success btn-sm text-white"
                              href="edit-list.html"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Edit"
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="btn btn-danger btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                            <a
                              className="btn btn-info btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Save to Wishlist"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a
                              className="btn btn-secondary btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card9-imgs">
                                <a href="business.html" />
                                <img
                                  src="../assets/images/products/h4.png"
                                  alt="img"
                                  className="cover-image"
                                />
                              </div>
                              <div className="item-cardreview-absolute">
                                <div className="d-flex">
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-192{fill:url(#192_SVGID_1_);}.svg-hovered-192{fill:url(#192_SVGID_2_);}.svg-active-192{fill:url(#192_SVGID_3_);}.svg-rated-192{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="192_SVGID_1_"
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
                                          id="192_SVGID_2_"
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
                                          id="192_SVGID_3_"
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
                                          className="svg-empty-192"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-192"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-192"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-192{fill:url(#192_SVGID_1_);}.svg-hovered-192{fill:url(#192_SVGID_2_);}.svg-active-192{fill:url(#192_SVGID_3_);}.svg-rated-192{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="192_SVGID_1_"
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
                                          id="192_SVGID_2_"
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
                                          id="192_SVGID_3_"
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
                                          className="svg-empty-192"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-192"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-192"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-192{fill:url(#192_SVGID_1_);}.svg-hovered-192{fill:url(#192_SVGID_2_);}.svg-active-192{fill:url(#192_SVGID_3_);}.svg-rated-192{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="192_SVGID_1_"
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
                                          id="192_SVGID_2_"
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
                                          id="192_SVGID_3_"
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
                                          className="svg-empty-192"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-192"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-192"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-192{fill:url(#192_SVGID_1_);}.svg-hovered-192{fill:url(#192_SVGID_2_);}.svg-active-192{fill:url(#192_SVGID_3_);}.svg-rated-192{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="192_SVGID_1_"
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
                                          id="192_SVGID_2_"
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
                                          id="192_SVGID_3_"
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
                                          className="svg-empty-192"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-192"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-192"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-192{fill:url(#192_SVGID_1_);}.svg-hovered-192{fill:url(#192_SVGID_2_);}.svg-active-192{fill:url(#192_SVGID_3_);}.svg-rated-192{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="192_SVGID_1_"
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
                                          id="192_SVGID_2_"
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
                                          id="192_SVGID_3_"
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
                                          className="svg-empty-192"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-192"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-empty-192"
                                          points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="ms-2 font-weight-semibold">
                                    (124)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card border-0 mb-0">
                              <div className="card-body py-4">
                                <div className="item-card9">
                                  <div className="d-flex">
                                    <a href="business.html">RealEstate</a>
                                  </div>
                                  <a href="business.html" className="text-dark">
                                    <h4 className="font-weight-semibold mt-0">
                                      BHK RealEstates Consultancy
                                      <i className="ion-checkmark-circled text-success ms-1" />
                                    </h4>
                                  </a>
                                  <div className="item-card2-desc mt-3">
                                    <div className="item-card2-desc-cost">
                                      <h6 className="text-dark font-weight-normal mb-0 mt-0">
                                        <i className="fa fa-map-marker me-1" />
                                        New York, NY 10012, US-52014
                                      </h6>
                                      <h6 className="text-dark font-weight-normal mb-0 mt-2">
                                        <i className="fa fa-phone me-1" />
                                        <a href="javascript:void(0)">
                                          140 256-654-6859
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer py-3">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-1"
                                    >
                                      <i className="fa fa-clock-o" /> Every day
                                      <b>9am-10pm</b>
                                    </a>
                                  </div>
                                  <div className="col col-auto">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-2"
                                    >
                                      <i className="fa fa-heart-o" /> Add to
                                      favorities
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-0"
                                    >
                                      <i className="fa fa-eye" /> 254
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden card-absolute">
                          <div className="edit-buttons-absolute">
                            <a
                              className="btn btn-success btn-sm text-white"
                              href="edit-list.html"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Edit"
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="btn btn-danger btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                            <a
                              className="btn btn-info btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Save to Wishlist"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a
                              className="btn btn-secondary btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card9-imgs">
                                <a href="business.html" />
                                <img
                                  src="../assets/images/products/j2.png"
                                  alt="img"
                                  className="cover-image"
                                />
                              </div>
                              <div className="item-cardreview-absolute">
                                <div className="d-flex">
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-537{fill:url(#537_SVGID_1_);}.svg-hovered-537{fill:url(#537_SVGID_2_);}.svg-active-537{fill:url(#537_SVGID_3_);}.svg-rated-537{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="537_SVGID_1_"
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
                                          id="537_SVGID_2_"
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
                                          id="537_SVGID_3_"
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
                                          className="svg-empty-537"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-537"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-537"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-537{fill:url(#537_SVGID_1_);}.svg-hovered-537{fill:url(#537_SVGID_2_);}.svg-active-537{fill:url(#537_SVGID_3_);}.svg-rated-537{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="537_SVGID_1_"
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
                                          id="537_SVGID_2_"
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
                                          id="537_SVGID_3_"
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
                                          className="svg-empty-537"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-537"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-537"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-537{fill:url(#537_SVGID_1_);}.svg-hovered-537{fill:url(#537_SVGID_2_);}.svg-active-537{fill:url(#537_SVGID_3_);}.svg-rated-537{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="537_SVGID_1_"
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
                                          id="537_SVGID_2_"
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
                                          id="537_SVGID_3_"
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
                                          className="svg-empty-537"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-537"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-537"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-537{fill:url(#537_SVGID_1_);}.svg-hovered-537{fill:url(#537_SVGID_2_);}.svg-active-537{fill:url(#537_SVGID_3_);}.svg-rated-537{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="537_SVGID_1_"
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
                                          id="537_SVGID_2_"
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
                                          id="537_SVGID_3_"
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
                                          className="svg-empty-537"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-537"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-537"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-537{fill:url(#537_SVGID_1_);}.svg-hovered-537{fill:url(#537_SVGID_2_);}.svg-active-537{fill:url(#537_SVGID_3_);}.svg-rated-537{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="537_SVGID_1_"
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
                                          id="537_SVGID_2_"
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
                                          id="537_SVGID_3_"
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
                                          className="svg-empty-537"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-537"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-empty-537"
                                          points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="ms-2 font-weight-semibold">
                                    (174)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card border-0 mb-0">
                              <div className="card-body py-4">
                                <div className="item-card9">
                                  <div className="d-flex">
                                    <a href="business.html">Jobs</a>
                                  </div>
                                  <a href="business.html" className="text-dark">
                                    <h4 className="font-weight-semibold mt-0">
                                      Software Private Limited
                                      <i className="ion-checkmark-circled text-success ms-1" />
                                    </h4>
                                  </a>
                                  <div className="item-card2-desc mt-3">
                                    <div className="item-card2-desc-cost">
                                      <h6 className="text-dark font-weight-normal mb-0 mt-0">
                                        <i className="fa fa-map-marker me-1" />
                                        New York, NY 10012, US-52014
                                      </h6>
                                      <h6 className="text-dark font-weight-normal mb-0 mt-2">
                                        <i className="fa fa-phone me-1" />
                                        <a href="javascript:void(0)">
                                          140 256-654-6859
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer py-3">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-1"
                                    >
                                      <i className="fa fa-clock-o" /> Every day
                                      <b>9am-10pm</b>
                                    </a>
                                  </div>
                                  <div className="col col-auto">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-2"
                                    >
                                      <i className="fa fa-heart-o" /> Add to
                                      favorities
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-0"
                                    >
                                      <i className="fa fa-eye" /> 42
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden card-absolute">
                          <div className="edit-buttons-absolute">
                            <a
                              className="btn btn-success btn-sm text-white"
                              href="edit-list.html"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Edit"
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="btn btn-danger btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                            <a
                              className="btn btn-info btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Save to Wishlist"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a
                              className="btn btn-secondary btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card9-img">
                                <a href="business.html" />
                                <img
                                  src="../assets/images/products/pe1.png"
                                  alt="img"
                                  className="cover-image"
                                />
                              </div>
                              <div className="item-cardreview-absolute">
                                <div className="d-flex">
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-226{fill:url(#226_SVGID_1_);}.svg-hovered-226{fill:url(#226_SVGID_2_);}.svg-active-226{fill:url(#226_SVGID_3_);}.svg-rated-226{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="226_SVGID_1_"
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
                                          id="226_SVGID_2_"
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
                                          id="226_SVGID_3_"
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
                                          className="svg-empty-226"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-226"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-226"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-226{fill:url(#226_SVGID_1_);}.svg-hovered-226{fill:url(#226_SVGID_2_);}.svg-active-226{fill:url(#226_SVGID_3_);}.svg-rated-226{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="226_SVGID_1_"
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
                                          id="226_SVGID_2_"
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
                                          id="226_SVGID_3_"
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
                                          className="svg-empty-226"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-226"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-226"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-226{fill:url(#226_SVGID_1_);}.svg-hovered-226{fill:url(#226_SVGID_2_);}.svg-active-226{fill:url(#226_SVGID_3_);}.svg-rated-226{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="226_SVGID_1_"
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
                                          id="226_SVGID_2_"
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
                                          id="226_SVGID_3_"
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
                                          className="svg-empty-226"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-226"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-226"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-226{fill:url(#226_SVGID_1_);}.svg-hovered-226{fill:url(#226_SVGID_2_);}.svg-active-226{fill:url(#226_SVGID_3_);}.svg-rated-226{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="226_SVGID_1_"
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
                                          id="226_SVGID_2_"
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
                                          id="226_SVGID_3_"
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
                                          className="svg-empty-226"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-226"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-226"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-226{fill:url(#226_SVGID_1_);}.svg-hovered-226{fill:url(#226_SVGID_2_);}.svg-active-226{fill:url(#226_SVGID_3_);}.svg-rated-226{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="226_SVGID_1_"
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
                                          id="226_SVGID_2_"
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
                                          id="226_SVGID_3_"
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
                                          className="svg-empty-226"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-226"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-empty-226"
                                          points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="ms-2 font-weight-semibold">
                                    (321)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card border-0 mb-0">
                              <div className="card-body py-4">
                                <div className="item-card9">
                                  <div className="d-flex">
                                    <a href="business.html">Animals</a>
                                  </div>
                                  <a href="business.html" className="text-dark">
                                    <h4 className="font-weight-semibold mt-0">
                                      kenco petcenter
                                      <i className="ion-checkmark-circled text-success ms-1" />
                                    </h4>
                                  </a>
                                  <div className="item-card2-desc mt-3">
                                    <div className="item-card2-desc-cost">
                                      <h6 className="text-dark font-weight-normal mb-0 mt-0">
                                        <i className="fa fa-map-marker me-1" />
                                        New York, NY 10012, US-52014
                                      </h6>
                                      <h6 className="text-dark font-weight-normal mb-0 mt-2">
                                        <i className="fa fa-phone me-1" />
                                        <a href="javascript:void(0)">
                                          140 256-654-6859
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer py-3">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-1"
                                    >
                                      <i className="fa fa-clock-o" /> Every day
                                      <b>9am-10pm</b>
                                    </a>
                                  </div>
                                  <div className="col col-auto">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-2"
                                    >
                                      <i className="fa fa-heart-o" /> Add to
                                      favorities
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-0"
                                    >
                                      <i className="fa fa-eye" /> 17
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden card-absolute">
                          <div className="edit-buttons-absolute">
                            <a
                              className="btn btn-success btn-sm text-white"
                              href="edit-list.html"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Edit"
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="btn btn-danger btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                            <a
                              className="btn btn-info btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Save to Wishlist"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a
                              className="btn btn-secondary btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card2-img">
                                <a href="business.html" />
                                <img
                                  src="../assets/images/products/b3.png"
                                  alt="img"
                                  className="cover-image"
                                />
                              </div>
                              <div className="item-cardreview-absolute">
                                <div className="d-flex">
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-288{fill:url(#288_SVGID_1_);}.svg-hovered-288{fill:url(#288_SVGID_2_);}.svg-active-288{fill:url(#288_SVGID_3_);}.svg-rated-288{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="288_SVGID_1_"
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
                                          id="288_SVGID_2_"
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
                                          id="288_SVGID_3_"
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
                                          className="svg-empty-288"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-288"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-288"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-288{fill:url(#288_SVGID_1_);}.svg-hovered-288{fill:url(#288_SVGID_2_);}.svg-active-288{fill:url(#288_SVGID_3_);}.svg-rated-288{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="288_SVGID_1_"
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
                                          id="288_SVGID_2_"
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
                                          id="288_SVGID_3_"
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
                                          className="svg-empty-288"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-288"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-288"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-288{fill:url(#288_SVGID_1_);}.svg-hovered-288{fill:url(#288_SVGID_2_);}.svg-active-288{fill:url(#288_SVGID_3_);}.svg-rated-288{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="288_SVGID_1_"
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
                                          id="288_SVGID_2_"
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
                                          id="288_SVGID_3_"
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
                                          className="svg-empty-288"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-288"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-288"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-288{fill:url(#288_SVGID_1_);}.svg-hovered-288{fill:url(#288_SVGID_2_);}.svg-active-288{fill:url(#288_SVGID_3_);}.svg-rated-288{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="288_SVGID_1_"
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
                                          id="288_SVGID_2_"
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
                                          id="288_SVGID_3_"
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
                                          className="svg-empty-288"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-288"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-288"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-288{fill:url(#288_SVGID_1_);}.svg-hovered-288{fill:url(#288_SVGID_2_);}.svg-active-288{fill:url(#288_SVGID_3_);}.svg-rated-288{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="288_SVGID_1_"
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
                                          id="288_SVGID_2_"
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
                                          id="288_SVGID_3_"
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
                                          className="svg-empty-288"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-288"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-empty-288"
                                          points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="ms-2 font-weight-semibold">
                                    (142)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card border-0 mb-0">
                              <div className="card-body py-4">
                                <div className="item-card9">
                                  <div className="d-flex">
                                    <a href="business.html">Beauty &amp; Spa</a>
                                  </div>
                                  <a href="business.html" className="text-dark">
                                    <h4 className="font-weight-semibold mt-0">
                                      Goozer Beauty &amp; Spa
                                      <i className="ion-checkmark-circled text-success ms-1" />
                                    </h4>
                                  </a>
                                  <div className="item-card2-desc mt-3">
                                    <div className="item-card2-desc-cost">
                                      <h6 className="text-dark font-weight-normal mb-0 mt-0">
                                        <i className="fa fa-map-marker me-1" />
                                        New York, NY 10012, US-52014
                                      </h6>
                                      <h6 className="text-dark font-weight-normal mb-0 mt-2">
                                        <i className="fa fa-phone me-1" />
                                        <a href="javascript:void(0)">
                                          140 256-654-6859
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer py-3">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-1"
                                    >
                                      <i className="fa fa-clock-o" /> Every day
                                      <b>9am-10pm</b>
                                    </a>
                                  </div>
                                  <div className="col col-auto">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-2"
                                    >
                                      <i className="fa fa-heart-o" /> Add to
                                      favorities
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-0"
                                    >
                                      <i className="fa fa-eye" /> 356
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden card-absolute">
                          <div className="edit-buttons-absolute">
                            <a
                              className="btn btn-success btn-sm text-white"
                              href="edit-list.html"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Edit"
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="btn btn-danger btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                            <a
                              className="btn btn-info btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Save to Wishlist"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a
                              className="btn btn-secondary btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card2-img">
                                <a href="business.html" />
                                <img
                                  src="../assets/images/products/h6.png"
                                  alt="img"
                                  className="cover-image"
                                />
                              </div>
                              <div className="item-cardreview-absolute">
                                <div className="d-flex">
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-285{fill:url(#285_SVGID_1_);}.svg-hovered-285{fill:url(#285_SVGID_2_);}.svg-active-285{fill:url(#285_SVGID_3_);}.svg-rated-285{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="285_SVGID_1_"
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
                                          id="285_SVGID_2_"
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
                                          id="285_SVGID_3_"
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
                                          className="svg-empty-285"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-285"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-285"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-285{fill:url(#285_SVGID_1_);}.svg-hovered-285{fill:url(#285_SVGID_2_);}.svg-active-285{fill:url(#285_SVGID_3_);}.svg-rated-285{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="285_SVGID_1_"
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
                                          id="285_SVGID_2_"
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
                                          id="285_SVGID_3_"
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
                                          className="svg-empty-285"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-285"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-285"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-285{fill:url(#285_SVGID_1_);}.svg-hovered-285{fill:url(#285_SVGID_2_);}.svg-active-285{fill:url(#285_SVGID_3_);}.svg-rated-285{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="285_SVGID_1_"
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
                                          id="285_SVGID_2_"
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
                                          id="285_SVGID_3_"
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
                                          className="svg-empty-285"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-285"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-285"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-285{fill:url(#285_SVGID_1_);}.svg-hovered-285{fill:url(#285_SVGID_2_);}.svg-active-285{fill:url(#285_SVGID_3_);}.svg-rated-285{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="285_SVGID_1_"
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
                                          id="285_SVGID_2_"
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
                                          id="285_SVGID_3_"
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
                                          className="svg-empty-285"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-285"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-285"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-285{fill:url(#285_SVGID_1_);}.svg-hovered-285{fill:url(#285_SVGID_2_);}.svg-active-285{fill:url(#285_SVGID_3_);}.svg-rated-285{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="285_SVGID_1_"
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
                                          id="285_SVGID_2_"
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
                                          id="285_SVGID_3_"
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
                                          className="svg-empty-285"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-285"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-empty-285"
                                          points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="ms-2 font-weight-semibold">
                                    (324)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card border-0 mb-0">
                              <div className="card-body py-4">
                                <div className="item-card9">
                                  <div className="d-flex">
                                    <a href="business.html">Restaurant</a>
                                  </div>
                                  <a href="business.html" className="text-dark">
                                    <h4 className="font-weight-semibold mt-0">
                                      GilkonStar Hotel
                                      <i className="ion-checkmark-circled text-success ms-1" />
                                    </h4>
                                  </a>
                                  <div className="item-card2-desc mt-3">
                                    <div className="item-card2-desc-cost">
                                      <h6 className="text-dark font-weight-normal mb-0 mt-0">
                                        <i className="fa fa-map-marker me-1" />
                                        New York, NY 10012, US-52014
                                      </h6>
                                      <h6 className="text-dark font-weight-normal mb-0 mt-2">
                                        <i className="fa fa-phone me-1" />
                                        <a href="javascript:void(0)">
                                          140 256-654-6859
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer py-3">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-1"
                                    >
                                      <i className="fa fa-clock-o" /> Every day
                                      <b>9am-10pm</b>
                                    </a>
                                  </div>
                                  <div className="col col-auto">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-2"
                                    >
                                      <i className="fa fa-heart-o" /> Add to
                                      favorities
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-0"
                                    >
                                      <i className="fa fa-eye" /> 58
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden mb-0 card-absolute">
                          <div className="edit-buttons-absolute">
                            <a
                              className="btn btn-success btn-sm text-white"
                              href="edit-list.html"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Edit"
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="btn btn-danger btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                            <a
                              className="btn btn-info btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Save to Wishlist"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a
                              className="btn btn-secondary btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card2-img ">
                                <a href="business.html" />
                                <img
                                  src="../assets/images/products/v1.png"
                                  alt="img"
                                  className="cover-image"
                                />
                              </div>
                              <div className="item-cardreview-absolute">
                                <div className="d-flex">
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-493{fill:url(#493_SVGID_1_);}.svg-hovered-493{fill:url(#493_SVGID_2_);}.svg-active-493{fill:url(#493_SVGID_3_);}.svg-rated-493{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="493_SVGID_1_"
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
                                          id="493_SVGID_2_"
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
                                          id="493_SVGID_3_"
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
                                          className="svg-empty-493"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-493"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-493"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-493{fill:url(#493_SVGID_1_);}.svg-hovered-493{fill:url(#493_SVGID_2_);}.svg-active-493{fill:url(#493_SVGID_3_);}.svg-rated-493{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="493_SVGID_1_"
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
                                          id="493_SVGID_2_"
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
                                          id="493_SVGID_3_"
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
                                          className="svg-empty-493"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-493"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-493"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-493{fill:url(#493_SVGID_1_);}.svg-hovered-493{fill:url(#493_SVGID_2_);}.svg-active-493{fill:url(#493_SVGID_3_);}.svg-rated-493{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="493_SVGID_1_"
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
                                          id="493_SVGID_2_"
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
                                          id="493_SVGID_3_"
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
                                          className="svg-empty-493"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-493"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-493"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-493{fill:url(#493_SVGID_1_);}.svg-hovered-493{fill:url(#493_SVGID_2_);}.svg-active-493{fill:url(#493_SVGID_3_);}.svg-rated-493{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="493_SVGID_1_"
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
                                          id="493_SVGID_2_"
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
                                          id="493_SVGID_3_"
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
                                          className="svg-empty-493"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-493"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-493"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-493{fill:url(#493_SVGID_1_);}.svg-hovered-493{fill:url(#493_SVGID_2_);}.svg-active-493{fill:url(#493_SVGID_3_);}.svg-rated-493{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="493_SVGID_1_"
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
                                          id="493_SVGID_2_"
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
                                          id="493_SVGID_3_"
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
                                          className="svg-empty-493"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-493"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-empty-493"
                                          points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="ms-2 font-weight-semibold">
                                    (24)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card border-0 mb-0">
                              <div className="card-body py-4">
                                <div className="item-card9">
                                  <div className="d-flex">
                                    <a href="business.html">AutoMobile</a>
                                  </div>
                                  <a href="business.html" className="text-dark">
                                    <h4 className="font-weight-semibold mt-0">
                                      Seep Automobiles
                                      <i className="ion-checkmark-circled text-success ms-1" />
                                    </h4>
                                  </a>
                                  <div className="item-card2-desc mt-3">
                                    <div className="item-card2-desc-cost">
                                      <h6 className="text-dark font-weight-normal mb-0 mt-0">
                                        <i className="fa fa-map-marker me-1" />
                                        New York, NY 10012, US-52014
                                      </h6>
                                      <h6 className="text-dark font-weight-normal mb-0 mt-2">
                                        <i className="fa fa-phone me-1" />
                                        <a href="javascript:void(0)">
                                          140 256-654-6859
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer py-3">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-1"
                                    >
                                      <i className="fa fa-clock-o" /> Every day
                                      <b>9am-10pm</b>
                                    </a>
                                  </div>
                                  <div className="col col-auto">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-2"
                                    >
                                      <i className="fa fa-heart-o" /> Add to
                                      favorities
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-0"
                                    >
                                      <i className="fa fa-eye" /> 635
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="center-block text-center ">
                          <ul className="pagination mb-0 mt-5">
                            <li className="page-item page-prev disabled">
                              <a
                                className="page-link"
                                href="javascript:void(0)"
                                tabIndex={-1}
                              >
                                Prev
                              </a>
                            </li>
                            <li className="page-item active">
                              <a
                                className="page-link"
                                href="javascript:void(0)"
                              >
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="javascript:void(0)"
                              >
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="javascript:void(0)"
                              >
                                3
                              </a>
                            </li>
                            <li className="page-item page-next">
                              <a
                                className="page-link"
                                href="javascript:void(0)"
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="tab-pane table-responsive userprof-tab"
                        id="tab2"
                      >
                        <div className="card overflow-hidden card-absolute">
                          <div className="arrow-ribbon bg-secondary">
                            Published
                          </div>
                          <div className="edit-buttons-absolute">
                            <a
                              className="btn btn-success btn-sm text-white"
                              href="edit-list.html"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Edit"
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="btn btn-danger btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                            <a
                              className="btn btn-info btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Save to Wishlist"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a
                              className="btn btn-secondary btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card9-imgs">
                                <a href="business.html" />
                                <img
                                  src="../assets/images/products/h4.png"
                                  alt="img"
                                  className="cover-image"
                                />
                              </div>
                              <div className="item-cardreview-absolute">
                                <div className="d-flex">
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-959{fill:url(#959_SVGID_1_);}.svg-hovered-959{fill:url(#959_SVGID_2_);}.svg-active-959{fill:url(#959_SVGID_3_);}.svg-rated-959{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="959_SVGID_1_"
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
                                          id="959_SVGID_2_"
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
                                          id="959_SVGID_3_"
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
                                          className="svg-empty-959"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-959"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-959"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-959{fill:url(#959_SVGID_1_);}.svg-hovered-959{fill:url(#959_SVGID_2_);}.svg-active-959{fill:url(#959_SVGID_3_);}.svg-rated-959{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="959_SVGID_1_"
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
                                          id="959_SVGID_2_"
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
                                          id="959_SVGID_3_"
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
                                          className="svg-empty-959"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-959"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-959"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-959{fill:url(#959_SVGID_1_);}.svg-hovered-959{fill:url(#959_SVGID_2_);}.svg-active-959{fill:url(#959_SVGID_3_);}.svg-rated-959{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="959_SVGID_1_"
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
                                          id="959_SVGID_2_"
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
                                          id="959_SVGID_3_"
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
                                          className="svg-empty-959"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-959"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-959"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-959{fill:url(#959_SVGID_1_);}.svg-hovered-959{fill:url(#959_SVGID_2_);}.svg-active-959{fill:url(#959_SVGID_3_);}.svg-rated-959{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="959_SVGID_1_"
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
                                          id="959_SVGID_2_"
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
                                          id="959_SVGID_3_"
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
                                          className="svg-empty-959"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-959"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-959"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-959{fill:url(#959_SVGID_1_);}.svg-hovered-959{fill:url(#959_SVGID_2_);}.svg-active-959{fill:url(#959_SVGID_3_);}.svg-rated-959{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="959_SVGID_1_"
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
                                          id="959_SVGID_2_"
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
                                          id="959_SVGID_3_"
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
                                          className="svg-empty-959"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-959"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-empty-959"
                                          points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="ms-2 font-weight-semibold">
                                    (124)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card border-0 mb-0">
                              <div className="card-body py-4">
                                <div className="item-card9">
                                  <div className="d-flex">
                                    <a href="business.html">RealEstate</a>
                                  </div>
                                  <a href="business.html" className="text-dark">
                                    <h4 className="font-weight-semibold mt-0">
                                      BHK RealEstates Consultancy
                                      <i className="ion-checkmark-circled text-success ms-1" />
                                    </h4>
                                  </a>
                                  <div className="item-card2-desc mt-3">
                                    <div className="item-card2-desc-cost">
                                      <h6 className="text-dark font-weight-normal mb-0 mt-0">
                                        <i className="fa fa-map-marker me-1" />
                                        New York, NY 10012, US-52014
                                      </h6>
                                      <h6 className="text-dark font-weight-normal mb-0 mt-2">
                                        <i className="fa fa-phone me-1" />
                                        <a href="javascript:void(0)">
                                          140 256-654-6859
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer py-3">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-1"
                                    >
                                      <i className="fa fa-clock-o" /> Every day
                                      <b>9am-10pm</b>
                                    </a>
                                  </div>
                                  <div className="col col-auto">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-2"
                                    >
                                      <i className="fa fa-heart-o" /> Add to
                                      favorities
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-0"
                                    >
                                      <i className="fa fa-eye" /> 254
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden card-absolute">
                          <div className="arrow-ribbon bg-secondary">
                            Published
                          </div>
                          <div className="edit-buttons-absolute">
                            <a
                              className="btn btn-success btn-sm text-white"
                              href="edit-list.html"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Edit"
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="btn btn-danger btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                            <a
                              className="btn btn-info btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Save to Wishlist"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a
                              className="btn btn-secondary btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card9-imgs">
                                <a href="business.html" />
                                <img
                                  src="../assets/images/products/j2.png"
                                  alt="img"
                                  className="cover-image"
                                />
                              </div>
                              <div className="item-cardreview-absolute">
                                <div className="d-flex">
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-88{fill:url(#88_SVGID_1_);}.svg-hovered-88{fill:url(#88_SVGID_2_);}.svg-active-88{fill:url(#88_SVGID_3_);}.svg-rated-88{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="88_SVGID_1_"
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
                                          id="88_SVGID_2_"
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
                                          id="88_SVGID_3_"
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
                                          className="svg-empty-88"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-88"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-88"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-88{fill:url(#88_SVGID_1_);}.svg-hovered-88{fill:url(#88_SVGID_2_);}.svg-active-88{fill:url(#88_SVGID_3_);}.svg-rated-88{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="88_SVGID_1_"
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
                                          id="88_SVGID_2_"
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
                                          id="88_SVGID_3_"
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
                                          className="svg-empty-88"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-88"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-88"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-88{fill:url(#88_SVGID_1_);}.svg-hovered-88{fill:url(#88_SVGID_2_);}.svg-active-88{fill:url(#88_SVGID_3_);}.svg-rated-88{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="88_SVGID_1_"
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
                                          id="88_SVGID_2_"
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
                                          id="88_SVGID_3_"
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
                                          className="svg-empty-88"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-88"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-88"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-88{fill:url(#88_SVGID_1_);}.svg-hovered-88{fill:url(#88_SVGID_2_);}.svg-active-88{fill:url(#88_SVGID_3_);}.svg-rated-88{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="88_SVGID_1_"
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
                                          id="88_SVGID_2_"
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
                                          id="88_SVGID_3_"
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
                                          className="svg-empty-88"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-88"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-88"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-88{fill:url(#88_SVGID_1_);}.svg-hovered-88{fill:url(#88_SVGID_2_);}.svg-active-88{fill:url(#88_SVGID_3_);}.svg-rated-88{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="88_SVGID_1_"
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
                                          id="88_SVGID_2_"
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
                                          id="88_SVGID_3_"
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
                                          className="svg-empty-88"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-88"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-empty-88"
                                          points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="ms-2 font-weight-semibold">
                                    (174)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card border-0 mb-0">
                              <div className="card-body py-4">
                                <div className="item-card9">
                                  <div className="d-flex">
                                    <a href="business.html">Jobs</a>
                                  </div>
                                  <a href="business.html" className="text-dark">
                                    <h4 className="font-weight-semibold mt-0">
                                      Software Private Limited
                                      <i className="ion-checkmark-circled text-success ms-1" />
                                    </h4>
                                  </a>
                                  <div className="item-card2-desc mt-3">
                                    <div className="item-card2-desc-cost">
                                      <h6 className="text-dark font-weight-normal mb-0 mt-0">
                                        <i className="fa fa-map-marker me-1" />
                                        New York, NY 10012, US-52014
                                      </h6>
                                      <h6 className="text-dark font-weight-normal mb-0 mt-2">
                                        <i className="fa fa-phone me-1" />
                                        <a href="javascript:void(0)">
                                          140 256-654-6859
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer py-3">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-1"
                                    >
                                      <i className="fa fa-clock-o" /> Every day
                                      <b>9am-10pm</b>
                                    </a>
                                  </div>
                                  <div className="col col-auto">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-2"
                                    >
                                      <i className="fa fa-heart-o" /> Add to
                                      favorities
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-0"
                                    >
                                      <i className="fa fa-eye" /> 42
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden card-absolute">
                          <div className="arrow-ribbon bg-secondary">
                            Published
                          </div>
                          <div className="edit-buttons-absolute">
                            <a
                              className="btn btn-success btn-sm text-white"
                              href="edit-list.html"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Edit"
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="btn btn-danger btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                            <a
                              className="btn btn-info btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Save to Wishlist"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a
                              className="btn btn-secondary btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card9-img">
                                <a href="business.html" />
                                <img
                                  src="../assets/images/products/pe1.png"
                                  alt="img"
                                  className="cover-image"
                                />
                              </div>
                              <div className="item-cardreview-absolute">
                                <div className="d-flex">
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-341{fill:url(#341_SVGID_1_);}.svg-hovered-341{fill:url(#341_SVGID_2_);}.svg-active-341{fill:url(#341_SVGID_3_);}.svg-rated-341{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="341_SVGID_1_"
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
                                          id="341_SVGID_2_"
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
                                          id="341_SVGID_3_"
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
                                          className="svg-empty-341"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-341"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-341"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-341{fill:url(#341_SVGID_1_);}.svg-hovered-341{fill:url(#341_SVGID_2_);}.svg-active-341{fill:url(#341_SVGID_3_);}.svg-rated-341{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="341_SVGID_1_"
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
                                          id="341_SVGID_2_"
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
                                          id="341_SVGID_3_"
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
                                          className="svg-empty-341"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-341"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-341"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-341{fill:url(#341_SVGID_1_);}.svg-hovered-341{fill:url(#341_SVGID_2_);}.svg-active-341{fill:url(#341_SVGID_3_);}.svg-rated-341{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="341_SVGID_1_"
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
                                          id="341_SVGID_2_"
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
                                          id="341_SVGID_3_"
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
                                          className="svg-empty-341"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-341"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-341"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-341{fill:url(#341_SVGID_1_);}.svg-hovered-341{fill:url(#341_SVGID_2_);}.svg-active-341{fill:url(#341_SVGID_3_);}.svg-rated-341{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="341_SVGID_1_"
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
                                          id="341_SVGID_2_"
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
                                          id="341_SVGID_3_"
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
                                          className="svg-empty-341"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-341"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-341"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-341{fill:url(#341_SVGID_1_);}.svg-hovered-341{fill:url(#341_SVGID_2_);}.svg-active-341{fill:url(#341_SVGID_3_);}.svg-rated-341{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="341_SVGID_1_"
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
                                          id="341_SVGID_2_"
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
                                          id="341_SVGID_3_"
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
                                          className="svg-empty-341"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-341"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-empty-341"
                                          points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="ms-2 font-weight-semibold">
                                    (321)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card border-0 mb-0">
                              <div className="card-body py-4">
                                <div className="item-card9">
                                  <div className="d-flex">
                                    <a href="business.html">Animals</a>
                                  </div>
                                  <a href="business.html" className="text-dark">
                                    <h4 className="font-weight-semibold mt-0">
                                      kenco petcenter
                                      <i className="ion-checkmark-circled text-success ms-1" />
                                    </h4>
                                  </a>
                                  <div className="item-card2-desc mt-3">
                                    <div className="item-card2-desc-cost">
                                      <h6 className="text-dark font-weight-normal mb-0 mt-0">
                                        <i className="fa fa-map-marker me-1" />
                                        New York, NY 10012, US-52014
                                      </h6>
                                      <h6 className="text-dark font-weight-normal mb-0 mt-2">
                                        <i className="fa fa-phone me-1" />
                                        <a href="javascript:void(0)">
                                          140 256-654-6859
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer py-3">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-1"
                                    >
                                      <i className="fa fa-clock-o" /> Every day
                                      <b>9am-10pm</b>
                                    </a>
                                  </div>
                                  <div className="col col-auto">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-2"
                                    >
                                      <i className="fa fa-heart-o" /> Add to
                                      favorities
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-0"
                                    >
                                      <i className="fa fa-eye" /> 17
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden card-absolute">
                          <div className="arrow-ribbon bg-secondary">
                            Published
                          </div>
                          <div className="edit-buttons-absolute">
                            <a
                              className="btn btn-success btn-sm text-white"
                              href="edit-list.html"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Edit"
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="btn btn-danger btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                            <a
                              className="btn btn-info btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Save to Wishlist"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a
                              className="btn btn-secondary btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card2-img">
                                <a href="business.html" />
                                <img
                                  src="../assets/images/products/b3.png"
                                  alt="img"
                                  className="cover-image"
                                />
                              </div>
                              <div className="item-cardreview-absolute">
                                <div className="d-flex">
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-642{fill:url(#642_SVGID_1_);}.svg-hovered-642{fill:url(#642_SVGID_2_);}.svg-active-642{fill:url(#642_SVGID_3_);}.svg-rated-642{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="642_SVGID_1_"
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
                                          id="642_SVGID_2_"
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
                                          id="642_SVGID_3_"
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
                                          className="svg-empty-642"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-642"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-642"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-642{fill:url(#642_SVGID_1_);}.svg-hovered-642{fill:url(#642_SVGID_2_);}.svg-active-642{fill:url(#642_SVGID_3_);}.svg-rated-642{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="642_SVGID_1_"
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
                                          id="642_SVGID_2_"
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
                                          id="642_SVGID_3_"
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
                                          className="svg-empty-642"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-642"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-642"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-642{fill:url(#642_SVGID_1_);}.svg-hovered-642{fill:url(#642_SVGID_2_);}.svg-active-642{fill:url(#642_SVGID_3_);}.svg-rated-642{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="642_SVGID_1_"
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
                                          id="642_SVGID_2_"
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
                                          id="642_SVGID_3_"
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
                                          className="svg-empty-642"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-642"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-642"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-642{fill:url(#642_SVGID_1_);}.svg-hovered-642{fill:url(#642_SVGID_2_);}.svg-active-642{fill:url(#642_SVGID_3_);}.svg-rated-642{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="642_SVGID_1_"
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
                                          id="642_SVGID_2_"
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
                                          id="642_SVGID_3_"
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
                                          className="svg-empty-642"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-642"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-642"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-642{fill:url(#642_SVGID_1_);}.svg-hovered-642{fill:url(#642_SVGID_2_);}.svg-active-642{fill:url(#642_SVGID_3_);}.svg-rated-642{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="642_SVGID_1_"
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
                                          id="642_SVGID_2_"
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
                                          id="642_SVGID_3_"
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
                                          className="svg-empty-642"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-642"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-empty-642"
                                          points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="ms-2 font-weight-semibold">
                                    (142)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card border-0 mb-0">
                              <div className="card-body py-4">
                                <div className="item-card9">
                                  <div className="d-flex">
                                    <a href="business.html">Beauty &amp; Spa</a>
                                  </div>
                                  <a href="business.html" className="text-dark">
                                    <h4 className="font-weight-semibold mt-0">
                                      Goozer Beauty &amp; Spa
                                      <i className="ion-checkmark-circled text-success ms-1" />
                                    </h4>
                                  </a>
                                  <div className="item-card2-desc mt-3">
                                    <div className="item-card2-desc-cost">
                                      <h6 className="text-dark font-weight-normal mb-0 mt-0">
                                        <i className="fa fa-map-marker me-1" />
                                        New York, NY 10012, US-52014
                                      </h6>
                                      <h6 className="text-dark font-weight-normal mb-0 mt-2">
                                        <i className="fa fa-phone me-1" />
                                        <a href="javascript:void(0)">
                                          140 256-654-6859
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer py-3">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-1"
                                    >
                                      <i className="fa fa-clock-o" /> Every day
                                      <b>9am-10pm</b>
                                    </a>
                                  </div>
                                  <div className="col col-auto">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-2"
                                    >
                                      <i className="fa fa-heart-o" /> Add to
                                      favorities
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-0"
                                    >
                                      <i className="fa fa-eye" /> 356
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden card-absolute">
                          <div className="arrow-ribbon bg-secondary">
                            Published
                          </div>
                          <div className="edit-buttons-absolute">
                            <a
                              className="btn btn-success btn-sm text-white"
                              href="edit-list.html"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Edit"
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="btn btn-danger btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                            <a
                              className="btn btn-info btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Save to Wishlist"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a
                              className="btn btn-secondary btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card2-img">
                                <a href="business.html" />
                                <img
                                  src="../assets/images/products/h6.png"
                                  alt="img"
                                  className="cover-image"
                                />
                              </div>
                              <div className="item-cardreview-absolute">
                                <div className="d-flex">
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-775{fill:url(#775_SVGID_1_);}.svg-hovered-775{fill:url(#775_SVGID_2_);}.svg-active-775{fill:url(#775_SVGID_3_);}.svg-rated-775{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="775_SVGID_1_"
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
                                          id="775_SVGID_2_"
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
                                          id="775_SVGID_3_"
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
                                          className="svg-empty-775"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-775"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-775"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-775{fill:url(#775_SVGID_1_);}.svg-hovered-775{fill:url(#775_SVGID_2_);}.svg-active-775{fill:url(#775_SVGID_3_);}.svg-rated-775{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="775_SVGID_1_"
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
                                          id="775_SVGID_2_"
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
                                          id="775_SVGID_3_"
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
                                          className="svg-empty-775"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-775"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-775"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-775{fill:url(#775_SVGID_1_);}.svg-hovered-775{fill:url(#775_SVGID_2_);}.svg-active-775{fill:url(#775_SVGID_3_);}.svg-rated-775{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="775_SVGID_1_"
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
                                          id="775_SVGID_2_"
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
                                          id="775_SVGID_3_"
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
                                          className="svg-empty-775"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-775"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-775"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-775{fill:url(#775_SVGID_1_);}.svg-hovered-775{fill:url(#775_SVGID_2_);}.svg-active-775{fill:url(#775_SVGID_3_);}.svg-rated-775{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="775_SVGID_1_"
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
                                          id="775_SVGID_2_"
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
                                          id="775_SVGID_3_"
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
                                          className="svg-empty-775"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-775"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-775"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-775{fill:url(#775_SVGID_1_);}.svg-hovered-775{fill:url(#775_SVGID_2_);}.svg-active-775{fill:url(#775_SVGID_3_);}.svg-rated-775{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="775_SVGID_1_"
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
                                          id="775_SVGID_2_"
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
                                          id="775_SVGID_3_"
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
                                          className="svg-empty-775"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-775"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-empty-775"
                                          points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="ms-2 font-weight-semibold">
                                    (324)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card border-0 mb-0">
                              <div className="card-body py-4">
                                <div className="item-card9">
                                  <div className="d-flex">
                                    <a href="business.html">Restaurant</a>
                                  </div>
                                  <a href="business.html" className="text-dark">
                                    <h4 className="font-weight-semibold mt-0">
                                      GilkonStar Hotel
                                      <i className="ion-checkmark-circled text-success ms-1" />
                                    </h4>
                                  </a>
                                  <div className="item-card2-desc mt-3">
                                    <div className="item-card2-desc-cost">
                                      <h6 className="text-dark font-weight-normal mb-0 mt-0">
                                        <i className="fa fa-map-marker me-1" />
                                        New York, NY 10012, US-52014
                                      </h6>
                                      <h6 className="text-dark font-weight-normal mb-0 mt-2">
                                        <i className="fa fa-phone me-1" />
                                        <a href="javascript:void(0)">
                                          140 256-654-6859
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer py-3">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-1"
                                    >
                                      <i className="fa fa-clock-o" /> Every day
                                      <b>9am-10pm</b>
                                    </a>
                                  </div>
                                  <div className="col col-auto">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-2"
                                    >
                                      <i className="fa fa-heart-o" /> Add to
                                      favorities
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-0"
                                    >
                                      <i className="fa fa-eye" /> 58
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden mb-0 card-absolute">
                          <div className="arrow-ribbon bg-secondary">
                            Published
                          </div>
                          <div className="edit-buttons-absolute">
                            <a
                              className="btn btn-success btn-sm text-white"
                              href="edit-list.html"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Edit"
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="btn btn-danger btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                            <a
                              className="btn btn-info btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Save to Wishlist"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a
                              className="btn btn-secondary btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card2-img ">
                                <a href="business.html" />
                                <img
                                  src="../assets/images/products/v1.png"
                                  alt="img"
                                  className="cover-image"
                                />
                              </div>
                              <div className="item-cardreview-absolute">
                                <div className="d-flex">
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-936{fill:url(#936_SVGID_1_);}.svg-hovered-936{fill:url(#936_SVGID_2_);}.svg-active-936{fill:url(#936_SVGID_3_);}.svg-rated-936{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="936_SVGID_1_"
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
                                          id="936_SVGID_2_"
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
                                          id="936_SVGID_3_"
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
                                          className="svg-empty-936"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-936"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-936"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-936{fill:url(#936_SVGID_1_);}.svg-hovered-936{fill:url(#936_SVGID_2_);}.svg-active-936{fill:url(#936_SVGID_3_);}.svg-rated-936{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="936_SVGID_1_"
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
                                          id="936_SVGID_2_"
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
                                          id="936_SVGID_3_"
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
                                          className="svg-empty-936"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-936"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-936"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-936{fill:url(#936_SVGID_1_);}.svg-hovered-936{fill:url(#936_SVGID_2_);}.svg-active-936{fill:url(#936_SVGID_3_);}.svg-rated-936{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="936_SVGID_1_"
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
                                          id="936_SVGID_2_"
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
                                          id="936_SVGID_3_"
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
                                          className="svg-empty-936"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-936"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-936"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-936{fill:url(#936_SVGID_1_);}.svg-hovered-936{fill:url(#936_SVGID_2_);}.svg-active-936{fill:url(#936_SVGID_3_);}.svg-rated-936{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="936_SVGID_1_"
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
                                          id="936_SVGID_2_"
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
                                          id="936_SVGID_3_"
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
                                          className="svg-empty-936"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-936"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-936"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-936{fill:url(#936_SVGID_1_);}.svg-hovered-936{fill:url(#936_SVGID_2_);}.svg-active-936{fill:url(#936_SVGID_3_);}.svg-rated-936{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="936_SVGID_1_"
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
                                          id="936_SVGID_2_"
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
                                          id="936_SVGID_3_"
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
                                          className="svg-empty-936"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-936"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-empty-936"
                                          points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="ms-2 font-weight-semibold">
                                    (24)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card border-0 mb-0">
                              <div className="card-body py-4">
                                <div className="item-card9">
                                  <div className="d-flex">
                                    <a href="business.html">AutoMobile</a>
                                  </div>
                                  <a href="business.html" className="text-dark">
                                    <h4 className="font-weight-semibold mt-0">
                                      Seep Automobiles
                                      <i className="ion-checkmark-circled text-success ms-1" />
                                    </h4>
                                  </a>
                                  <div className="item-card2-desc mt-3">
                                    <div className="item-card2-desc-cost">
                                      <h6 className="text-dark font-weight-normal mb-0 mt-0">
                                        <i className="fa fa-map-marker me-1" />
                                        New York, NY 10012, US-52014
                                      </h6>
                                      <h6 className="text-dark font-weight-normal mb-0 mt-2">
                                        <i className="fa fa-phone me-1" />
                                        <a href="javascript:void(0)">
                                          140 256-654-6859
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer py-3">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-1"
                                    >
                                      <i className="fa fa-clock-o" /> Every day
                                      <b>9am-10pm</b>
                                    </a>
                                  </div>
                                  <div className="col col-auto">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-2"
                                    >
                                      <i className="fa fa-heart-o" /> Add to
                                      favorities
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-0"
                                    >
                                      <i className="fa fa-eye" /> 635
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="center-block text-center ">
                          <ul className="pagination mb-0 mt-5">
                            <li className="page-item page-prev disabled">
                              <a
                                className="page-link"
                                href="javascript:void(0)"
                                tabIndex={-1}
                              >
                                Prev
                              </a>
                            </li>
                            <li className="page-item active">
                              <a
                                className="page-link"
                                href="javascript:void(0)"
                              >
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="javascript:void(0)"
                              >
                                2
                              </a>
                            </li>
                            <li className="page-item page-next">
                              <a
                                className="page-link"
                                href="javascript:void(0)"
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="tab-pane table-responsive userprof-tab"
                        id="tab3"
                      >
                        <div className="card overflow-hidden card-absolute">
                          <div className="arrow-ribbon bg-success">
                            Featured
                          </div>
                          <div className="edit-buttons-absolute">
                            <a
                              className="btn btn-success btn-sm text-white"
                              href="edit-list.html"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Edit"
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="btn btn-danger btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                            <a
                              className="btn btn-info btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Save to Wishlist"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a
                              className="btn btn-secondary btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card9-imgs">
                                <a href="business.html" />
                                <img
                                  src="../assets/images/products/h4.png"
                                  alt="img"
                                  className="cover-image"
                                />
                              </div>
                              <div className="item-cardreview-absolute">
                                <div className="d-flex">
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-910{fill:url(#910_SVGID_1_);}.svg-hovered-910{fill:url(#910_SVGID_2_);}.svg-active-910{fill:url(#910_SVGID_3_);}.svg-rated-910{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="910_SVGID_1_"
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
                                          id="910_SVGID_2_"
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
                                          id="910_SVGID_3_"
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
                                          className="svg-empty-910"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-910"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-910"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-910{fill:url(#910_SVGID_1_);}.svg-hovered-910{fill:url(#910_SVGID_2_);}.svg-active-910{fill:url(#910_SVGID_3_);}.svg-rated-910{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="910_SVGID_1_"
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
                                          id="910_SVGID_2_"
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
                                          id="910_SVGID_3_"
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
                                          className="svg-empty-910"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-910"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-910"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-910{fill:url(#910_SVGID_1_);}.svg-hovered-910{fill:url(#910_SVGID_2_);}.svg-active-910{fill:url(#910_SVGID_3_);}.svg-rated-910{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="910_SVGID_1_"
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
                                          id="910_SVGID_2_"
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
                                          id="910_SVGID_3_"
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
                                          className="svg-empty-910"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-910"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-910"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-910{fill:url(#910_SVGID_1_);}.svg-hovered-910{fill:url(#910_SVGID_2_);}.svg-active-910{fill:url(#910_SVGID_3_);}.svg-rated-910{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="910_SVGID_1_"
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
                                          id="910_SVGID_2_"
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
                                          id="910_SVGID_3_"
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
                                          className="svg-empty-910"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-910"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-910"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-910{fill:url(#910_SVGID_1_);}.svg-hovered-910{fill:url(#910_SVGID_2_);}.svg-active-910{fill:url(#910_SVGID_3_);}.svg-rated-910{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="910_SVGID_1_"
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
                                          id="910_SVGID_2_"
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
                                          id="910_SVGID_3_"
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
                                          className="svg-empty-910"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-910"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-empty-910"
                                          points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="ms-2 font-weight-semibold">
                                    (124)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card border-0 mb-0">
                              <div className="card-body py-4">
                                <div className="item-card9">
                                  <div className="d-flex">
                                    <a href="business.html">RealEstate</a>
                                  </div>
                                  <a href="business.html" className="text-dark">
                                    <h4 className="font-weight-semibold mt-0">
                                      BHK RealEstates Consultancy
                                      <i className="ion-checkmark-circled text-success ms-1" />
                                    </h4>
                                  </a>
                                  <div className="item-card2-desc mt-3">
                                    <div className="item-card2-desc-cost">
                                      <h6 className="text-dark font-weight-normal mb-0 mt-0">
                                        <i className="fa fa-map-marker me-1" />
                                        New York, NY 10012, US-52014
                                      </h6>
                                      <h6 className="text-dark font-weight-normal mb-0 mt-2">
                                        <i className="fa fa-phone me-1" />
                                        <a href="javascript:void(0)">
                                          140 256-654-6859
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer py-3">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-1"
                                    >
                                      <i className="fa fa-clock-o" /> Every day
                                      <b>9am-10pm</b>
                                    </a>
                                  </div>
                                  <div className="col col-auto">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-2"
                                    >
                                      <i className="fa fa-heart-o" /> Add to
                                      favorities
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-0"
                                    >
                                      <i className="fa fa-eye" /> 254
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden card-absolute">
                          <div className="arrow-ribbon bg-success">
                            Featured
                          </div>
                          <div className="edit-buttons-absolute">
                            <a
                              className="btn btn-success btn-sm text-white"
                              href="edit-list.html"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Edit"
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="btn btn-danger btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                            <a
                              className="btn btn-info btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Save to Wishlist"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a
                              className="btn btn-secondary btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card9-imgs">
                                <a href="business.html" />
                                <img
                                  src="../assets/images/products/j2.png"
                                  alt="img"
                                  className="cover-image"
                                />
                              </div>
                              <div className="item-cardreview-absolute">
                                <div className="d-flex">
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-660{fill:url(#660_SVGID_1_);}.svg-hovered-660{fill:url(#660_SVGID_2_);}.svg-active-660{fill:url(#660_SVGID_3_);}.svg-rated-660{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="660_SVGID_1_"
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
                                          id="660_SVGID_2_"
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
                                          id="660_SVGID_3_"
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
                                          className="svg-empty-660"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-660"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-660"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-660{fill:url(#660_SVGID_1_);}.svg-hovered-660{fill:url(#660_SVGID_2_);}.svg-active-660{fill:url(#660_SVGID_3_);}.svg-rated-660{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="660_SVGID_1_"
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
                                          id="660_SVGID_2_"
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
                                          id="660_SVGID_3_"
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
                                          className="svg-empty-660"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-660"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-660"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-660{fill:url(#660_SVGID_1_);}.svg-hovered-660{fill:url(#660_SVGID_2_);}.svg-active-660{fill:url(#660_SVGID_3_);}.svg-rated-660{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="660_SVGID_1_"
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
                                          id="660_SVGID_2_"
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
                                          id="660_SVGID_3_"
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
                                          className="svg-empty-660"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-660"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-660"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-660{fill:url(#660_SVGID_1_);}.svg-hovered-660{fill:url(#660_SVGID_2_);}.svg-active-660{fill:url(#660_SVGID_3_);}.svg-rated-660{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="660_SVGID_1_"
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
                                          id="660_SVGID_2_"
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
                                          id="660_SVGID_3_"
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
                                          className="svg-empty-660"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-660"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-660"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-660{fill:url(#660_SVGID_1_);}.svg-hovered-660{fill:url(#660_SVGID_2_);}.svg-active-660{fill:url(#660_SVGID_3_);}.svg-rated-660{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="660_SVGID_1_"
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
                                          id="660_SVGID_2_"
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
                                          id="660_SVGID_3_"
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
                                          className="svg-empty-660"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-660"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-empty-660"
                                          points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="ms-2 font-weight-semibold">
                                    (174)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card border-0 mb-0">
                              <div className="card-body py-4">
                                <div className="item-card9">
                                  <div className="d-flex">
                                    <a href="business.html">Jobs</a>
                                  </div>
                                  <a href="business.html" className="text-dark">
                                    <h4 className="font-weight-semibold mt-0">
                                      Software Private Limited
                                      <i className="ion-checkmark-circled text-success ms-1" />
                                    </h4>
                                  </a>
                                  <div className="item-card2-desc mt-3">
                                    <div className="item-card2-desc-cost">
                                      <h6 className="text-dark font-weight-normal mb-0 mt-0">
                                        <i className="fa fa-map-marker me-1" />
                                        New York, NY 10012, US-52014
                                      </h6>
                                      <h6 className="text-dark font-weight-normal mb-0 mt-2">
                                        <i className="fa fa-phone me-1" />
                                        <a href="javascript:void(0)">
                                          140 256-654-6859
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer py-3">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-1"
                                    >
                                      <i className="fa fa-clock-o" /> Every day
                                      <b>9am-10pm</b>
                                    </a>
                                  </div>
                                  <div className="col col-auto">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-2"
                                    >
                                      <i className="fa fa-heart-o" /> Add to
                                      favorities
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-0"
                                    >
                                      <i className="fa fa-eye" /> 42
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden card-absolute">
                          <div className="arrow-ribbon bg-success">
                            Featured
                          </div>
                          <div className="edit-buttons-absolute">
                            <a
                              className="btn btn-success btn-sm text-white"
                              href="edit-list.html"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Edit"
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="btn btn-danger btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                            <a
                              className="btn btn-info btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Save to Wishlist"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a
                              className="btn btn-secondary btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card9-img">
                                <a href="business.html" />
                                <img
                                  src="../assets/images/products/pe1.png"
                                  alt="img"
                                  className="cover-image"
                                />
                              </div>
                              <div className="item-cardreview-absolute">
                                <div className="d-flex">
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-300{fill:url(#300_SVGID_1_);}.svg-hovered-300{fill:url(#300_SVGID_2_);}.svg-active-300{fill:url(#300_SVGID_3_);}.svg-rated-300{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="300_SVGID_1_"
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
                                          id="300_SVGID_2_"
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
                                          id="300_SVGID_3_"
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
                                          className="svg-empty-300"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-300"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-300"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-300{fill:url(#300_SVGID_1_);}.svg-hovered-300{fill:url(#300_SVGID_2_);}.svg-active-300{fill:url(#300_SVGID_3_);}.svg-rated-300{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="300_SVGID_1_"
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
                                          id="300_SVGID_2_"
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
                                          id="300_SVGID_3_"
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
                                          className="svg-empty-300"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-300"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-300"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-300{fill:url(#300_SVGID_1_);}.svg-hovered-300{fill:url(#300_SVGID_2_);}.svg-active-300{fill:url(#300_SVGID_3_);}.svg-rated-300{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="300_SVGID_1_"
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
                                          id="300_SVGID_2_"
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
                                          id="300_SVGID_3_"
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
                                          className="svg-empty-300"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-300"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-300"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-300{fill:url(#300_SVGID_1_);}.svg-hovered-300{fill:url(#300_SVGID_2_);}.svg-active-300{fill:url(#300_SVGID_3_);}.svg-rated-300{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="300_SVGID_1_"
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
                                          id="300_SVGID_2_"
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
                                          id="300_SVGID_3_"
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
                                          className="svg-empty-300"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-300"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-300"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-300{fill:url(#300_SVGID_1_);}.svg-hovered-300{fill:url(#300_SVGID_2_);}.svg-active-300{fill:url(#300_SVGID_3_);}.svg-rated-300{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="300_SVGID_1_"
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
                                          id="300_SVGID_2_"
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
                                          id="300_SVGID_3_"
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
                                          className="svg-empty-300"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-300"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-empty-300"
                                          points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="ms-2 font-weight-semibold">
                                    (321)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card border-0 mb-0">
                              <div className="card-body py-4">
                                <div className="item-card9">
                                  <div className="d-flex">
                                    <a href="business.html">Animals</a>
                                  </div>
                                  <a href="business.html" className="text-dark">
                                    <h4 className="font-weight-semibold mt-0">
                                      kenco petcenter
                                      <i className="ion-checkmark-circled text-success ms-1" />
                                    </h4>
                                  </a>
                                  <div className="item-card2-desc mt-3">
                                    <div className="item-card2-desc-cost">
                                      <h6 className="text-dark font-weight-normal mb-0 mt-0">
                                        <i className="fa fa-map-marker me-1" />
                                        New York, NY 10012, US-52014
                                      </h6>
                                      <h6 className="text-dark font-weight-normal mb-0 mt-2">
                                        <i className="fa fa-phone me-1" />
                                        <a href="javascript:void(0)">
                                          140 256-654-6859
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer py-3">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-1"
                                    >
                                      <i className="fa fa-clock-o" /> Every day
                                      <b>9am-10pm</b>
                                    </a>
                                  </div>
                                  <div className="col col-auto">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-2"
                                    >
                                      <i className="fa fa-heart-o" /> Add to
                                      favorities
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-0"
                                    >
                                      <i className="fa fa-eye" /> 17
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden card-absolute">
                          <div className="arrow-ribbon bg-success">
                            Featured
                          </div>
                          <div className="edit-buttons-absolute">
                            <a
                              className="btn btn-success btn-sm text-white"
                              href="edit-list.html"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Edit"
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="btn btn-danger btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                            <a
                              className="btn btn-info btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Save to Wishlist"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a
                              className="btn btn-secondary btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card2-img">
                                <a href="business.html" />
                                <img
                                  src="../assets/images/products/b3.png"
                                  alt="img"
                                  className="cover-image"
                                />
                              </div>
                              <div className="item-cardreview-absolute">
                                <div className="d-flex">
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-762{fill:url(#762_SVGID_1_);}.svg-hovered-762{fill:url(#762_SVGID_2_);}.svg-active-762{fill:url(#762_SVGID_3_);}.svg-rated-762{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="762_SVGID_1_"
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
                                          id="762_SVGID_2_"
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
                                          id="762_SVGID_3_"
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
                                          className="svg-empty-762"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-762"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-762"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-762{fill:url(#762_SVGID_1_);}.svg-hovered-762{fill:url(#762_SVGID_2_);}.svg-active-762{fill:url(#762_SVGID_3_);}.svg-rated-762{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="762_SVGID_1_"
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
                                          id="762_SVGID_2_"
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
                                          id="762_SVGID_3_"
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
                                          className="svg-empty-762"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-762"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-762"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-762{fill:url(#762_SVGID_1_);}.svg-hovered-762{fill:url(#762_SVGID_2_);}.svg-active-762{fill:url(#762_SVGID_3_);}.svg-rated-762{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="762_SVGID_1_"
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
                                          id="762_SVGID_2_"
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
                                          id="762_SVGID_3_"
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
                                          className="svg-empty-762"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-762"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-762"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-762{fill:url(#762_SVGID_1_);}.svg-hovered-762{fill:url(#762_SVGID_2_);}.svg-active-762{fill:url(#762_SVGID_3_);}.svg-rated-762{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="762_SVGID_1_"
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
                                          id="762_SVGID_2_"
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
                                          id="762_SVGID_3_"
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
                                          className="svg-empty-762"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-762"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-762"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-762{fill:url(#762_SVGID_1_);}.svg-hovered-762{fill:url(#762_SVGID_2_);}.svg-active-762{fill:url(#762_SVGID_3_);}.svg-rated-762{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="762_SVGID_1_"
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
                                          id="762_SVGID_2_"
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
                                          id="762_SVGID_3_"
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
                                          className="svg-empty-762"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-762"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-empty-762"
                                          points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="ms-2 font-weight-semibold">
                                    (142)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card border-0 mb-0">
                              <div className="card-body py-4">
                                <div className="item-card9">
                                  <div className="d-flex">
                                    <a href="business.html">Beauty &amp; Spa</a>
                                  </div>
                                  <a href="business.html" className="text-dark">
                                    <h4 className="font-weight-semibold mt-0">
                                      Goozer Beauty &amp; Spa
                                      <i className="ion-checkmark-circled text-success ms-1" />
                                    </h4>
                                  </a>
                                  <div className="item-card2-desc mt-3">
                                    <div className="item-card2-desc-cost">
                                      <h6 className="text-dark font-weight-normal mb-0 mt-0">
                                        <i className="fa fa-map-marker me-1" />
                                        New York, NY 10012, US-52014
                                      </h6>
                                      <h6 className="text-dark font-weight-normal mb-0 mt-2">
                                        <i className="fa fa-phone me-1" />
                                        <a href="javascript:void(0)">
                                          140 256-654-6859
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer py-3">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-1"
                                    >
                                      <i className="fa fa-clock-o" /> Every day
                                      <b>9am-10pm</b>
                                    </a>
                                  </div>
                                  <div className="col col-auto">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-2"
                                    >
                                      <i className="fa fa-heart-o" /> Add to
                                      favorities
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-0"
                                    >
                                      <i className="fa fa-eye" /> 356
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card overflow-hidden card-absolute">
                          <div className="arrow-ribbon bg-success">
                            Featured
                          </div>
                          <div className="edit-buttons-absolute">
                            <a
                              className="btn btn-success btn-sm text-white"
                              href="edit-list.html"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Edit"
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="btn btn-danger btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                            <a
                              className="btn btn-info btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Save to Wishlist"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a
                              className="btn btn-secondary btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card2-img">
                                <a href="business.html" />
                                <img
                                  src="../assets/images/products/h6.png"
                                  alt="img"
                                  className="cover-image"
                                />
                              </div>
                              <div className="item-cardreview-absolute">
                                <div className="d-flex">
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-399{fill:url(#399_SVGID_1_);}.svg-hovered-399{fill:url(#399_SVGID_2_);}.svg-active-399{fill:url(#399_SVGID_3_);}.svg-rated-399{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="399_SVGID_1_"
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
                                          id="399_SVGID_2_"
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
                                          id="399_SVGID_3_"
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
                                          className="svg-empty-399"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-399"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-399"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-399{fill:url(#399_SVGID_1_);}.svg-hovered-399{fill:url(#399_SVGID_2_);}.svg-active-399{fill:url(#399_SVGID_3_);}.svg-rated-399{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="399_SVGID_1_"
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
                                          id="399_SVGID_2_"
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
                                          id="399_SVGID_3_"
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
                                          className="svg-empty-399"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-399"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-399"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-399{fill:url(#399_SVGID_1_);}.svg-hovered-399{fill:url(#399_SVGID_2_);}.svg-active-399{fill:url(#399_SVGID_3_);}.svg-rated-399{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="399_SVGID_1_"
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
                                          id="399_SVGID_2_"
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
                                          id="399_SVGID_3_"
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
                                          className="svg-empty-399"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-399"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-399"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-399{fill:url(#399_SVGID_1_);}.svg-hovered-399{fill:url(#399_SVGID_2_);}.svg-active-399{fill:url(#399_SVGID_3_);}.svg-rated-399{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="399_SVGID_1_"
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
                                          id="399_SVGID_2_"
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
                                          id="399_SVGID_3_"
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
                                          className="svg-empty-399"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-399"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-399"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-399{fill:url(#399_SVGID_1_);}.svg-hovered-399{fill:url(#399_SVGID_2_);}.svg-active-399{fill:url(#399_SVGID_3_);}.svg-rated-399{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="399_SVGID_1_"
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
                                          id="399_SVGID_2_"
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
                                          id="399_SVGID_3_"
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
                                          className="svg-empty-399"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-399"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-empty-399"
                                          points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="ms-2 font-weight-semibold">
                                    (324)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card border-0 mb-0">
                              <div className="card-body py-4">
                                <div className="item-card9">
                                  <div className="d-flex">
                                    <a href="business.html">Restaurant</a>
                                  </div>
                                  <a href="business.html" className="text-dark">
                                    <h4 className="font-weight-semibold mt-0">
                                      GilkonStar Hotel
                                      <i className="ion-checkmark-circled text-success ms-1" />
                                    </h4>
                                  </a>
                                  <div className="item-card2-desc mt-3">
                                    <div className="item-card2-desc-cost">
                                      <h6 className="text-dark font-weight-normal mb-0 mt-0">
                                        <i className="fa fa-map-marker me-1" />
                                        New York, NY 10012, US-52014
                                      </h6>
                                      <h6 className="text-dark font-weight-normal mb-0 mt-2">
                                        <i className="fa fa-phone me-1" />
                                        <a href="javascript:void(0)">
                                          140 256-654-6859
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer py-3">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-1"
                                    >
                                      <i className="fa fa-clock-o" /> Every day
                                      <b>9am-10pm</b>
                                    </a>
                                  </div>
                                  <div className="col col-auto">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-2"
                                    >
                                      <i className="fa fa-heart-o" /> Add to
                                      favorities
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-0"
                                    >
                                      <i className="fa fa-eye" /> 58
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane table-responsive userprof-tab"
                        id="tab4"
                      >
                        <div className="card overflow-hidden card-absolute">
                          <div className="arrow-ribbon bg-danger">Expired</div>
                          <div className="edit-buttons-absolute">
                            <a
                              className="btn btn-success btn-sm text-white"
                              href="edit-list.html"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Edit"
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="btn btn-danger btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                            <a
                              className="btn btn-info btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Save to Wishlist"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a
                              className="btn btn-secondary btn-sm text-white"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="d-md-flex">
                            <div className="item-card9-img">
                              <div className="item-card2-img">
                                <a href="business.html" />
                                <img
                                  src="../assets/images/products/h6.png"
                                  alt="img"
                                  className="cover-image"
                                />
                              </div>
                              <div className="item-cardreview-absolute">
                                <div className="d-flex">
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-198{fill:url(#198_SVGID_1_);}.svg-hovered-198{fill:url(#198_SVGID_2_);}.svg-active-198{fill:url(#198_SVGID_3_);}.svg-rated-198{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="198_SVGID_1_"
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
                                          id="198_SVGID_2_"
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
                                          id="198_SVGID_3_"
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
                                          className="svg-empty-198"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-198"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-198"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-198{fill:url(#198_SVGID_1_);}.svg-hovered-198{fill:url(#198_SVGID_2_);}.svg-active-198{fill:url(#198_SVGID_3_);}.svg-rated-198{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="198_SVGID_1_"
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
                                          id="198_SVGID_2_"
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
                                          id="198_SVGID_3_"
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
                                          className="svg-empty-198"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-198"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-198"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-198{fill:url(#198_SVGID_1_);}.svg-hovered-198{fill:url(#198_SVGID_2_);}.svg-active-198{fill:url(#198_SVGID_3_);}.svg-rated-198{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="198_SVGID_1_"
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
                                          id="198_SVGID_2_"
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
                                          id="198_SVGID_3_"
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
                                          className="svg-empty-198"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-198"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-198"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-198{fill:url(#198_SVGID_1_);}.svg-hovered-198{fill:url(#198_SVGID_2_);}.svg-active-198{fill:url(#198_SVGID_3_);}.svg-rated-198{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="198_SVGID_1_"
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
                                          id="198_SVGID_2_"
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
                                          id="198_SVGID_3_"
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
                                          className="svg-empty-198"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-198"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-active-198"
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
                                          enableBackground:
                                            "new 64 -59 305 305",
                                          strokeWidth: 0,
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <style
                                          type="text/css"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".svg-empty-198{fill:url(#198_SVGID_1_);}.svg-hovered-198{fill:url(#198_SVGID_2_);}.svg-active-198{fill:url(#198_SVGID_3_);}.svg-rated-198{fill:#f1c40f;}",
                                          }}
                                        />
                                        <linearGradient
                                          id="198_SVGID_1_"
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
                                          id="198_SVGID_2_"
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
                                          id="198_SVGID_3_"
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
                                          className="svg-empty-198"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 "
                                          style={{
                                            fill: "transparent",
                                            stroke: "#83829c",
                                          }}
                                        />
                                        <polygon
                                          data-side="left"
                                          className="svg-active-198"
                                          points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                        <polygon
                                          data-side="right"
                                          className="svg-empty-198"
                                          points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 "
                                          style={{ strokeOpacity: 0 }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="ms-2 font-weight-semibold">
                                    (324)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card border-0 mb-0">
                              <div className="card-body py-4">
                                <div className="item-card9">
                                  <div className="d-flex">
                                    <a href="business.html">Restaurant</a>
                                  </div>
                                  <a href="business.html" className="text-dark">
                                    <h4 className="font-weight-semibold mt-0">
                                      GilkonStar Hotel
                                      <i className="ion-checkmark-circled text-success ms-1" />
                                    </h4>
                                  </a>
                                  <div className="item-card2-desc mt-3">
                                    <div className="item-card2-desc-cost">
                                      <h6 className="text-dark font-weight-normal mb-0 mt-0">
                                        <i className="fa fa-map-marker me-1" />
                                        New York, NY 10012, US-52014
                                      </h6>
                                      <h6 className="text-dark font-weight-normal mb-0 mt-2">
                                        <i className="fa fa-phone me-1" />
                                        <a href="javascript:void(0)">
                                          140 256-654-6859
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer py-3">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-1"
                                    >
                                      <i className="fa fa-clock-o" /> Every day
                                      <b>9am-10pm</b>
                                    </a>
                                  </div>
                                  <div className="col col-auto">
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-2"
                                    >
                                      <i className="fa fa-heart-o" /> Add to
                                      favorities
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="mt-1 mb-1 me-0"
                                    >
                                      <i className="fa fa-eye" /> 58
                                    </a>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}
