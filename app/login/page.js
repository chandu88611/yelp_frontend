import React from 'react'

function page() {
  return (
    <>
  <section>
    {" "}
    <div
      className="bannerimg cover-image bg-background3"
      data-bs-image-src="../assets/images/banners/banner2.jpg"
      style={{
        background: 'url("../assets/images/banners/banner2.jpg") center center'
      }}
    >
      {" "}
      <div className="header-text mb-0">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center text-white">
            {" "}
            <h1 className="">Login</h1>{" "}
            <ol className="breadcrumb text-center">
              {" "}
              <li className="breadcrumb-item">
                <a href="javascript:void(0)">Home</a>
              </li>{" "}
              <li className="breadcrumb-item">
                <a href="javascript:void(0)">Pages</a>
              </li>{" "}
              <li
                className="breadcrumb-item active text-white"
                aria-current="page"
              >
                Login
              </li>{" "}
            </ol>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </section>
  <section className="sptb">
    {" "}
    <div className="container customerpage">
      {" "}
      <div className="row">
        {" "}
        <div className="single-page">
          {" "}
          <div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
            {" "}
            <div className="wrapper wrapper2">
              {" "}
              <div className="card-body">
                {" "}
                <h3>Login</h3>{" "}
                <div className="text-center">
                  {" "}
                  <div className="btn-list d-flex">
                    {" "}
                    <a
                      href="https://www.google.com/gmail/"
                      className="btn btn-google btn-block"
                    >
                      <i className="fa fa-google fa-1x me-2" /> Google
                    </a>{" "}
                    <a href="https://twitter.com/" className="btn btn-twitter">
                      <i className="fa fa-twitter fa-1x" />
                    </a>{" "}
                    <a
                      href="https://www.facebook.com/"
                      className="btn btn-facebook"
                    >
                      <i className="fa fa-facebook fa-1x" />
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <hr className="divider" />{" "}
              <form id="login" className="card-body" tabIndex={500}>
                {" "}
                <div className="mail">
                  {" "}
                  <input type="email" name="mail" />{" "}
                  <label>Mail or Username</label>{" "}
                </div>{" "}
                <div className="passwd">
                  {" "}
                  <input type="password" name="password" />{" "}
                  <label>Password</label>{" "}
                </div>{" "}
                <div className="submit">
                  {" "}
                  <a className="btn btn-secondary btn-block" href="index.html">
                    Login
                  </a>{" "}
                </div>{" "}
                <p className="mb-2">
                  <a href="forgot.html">Forgot Password</a>
                </p>
                <p className="text-dark mb-0">
                  Don't have account?
                  <a href="register.html" className="text-secondary ms-1">
                    Sign UP
                  </a>
                </p>
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </section>
</>

  )
}

export default page