import React, { useState, useEffect } from "react";

// USING ES6 MODULES //
import { Link } from "react-router-dom";
// STYLESHEET //
import "../Assets/styles/sass/main-styles.css";

// FECHING DATA BY USING AXIOS //
// import axios from "axios";

// // MAPING METHOD //
// import CardPackages from "./CardPackages";

const TicketData = () => {
  const currency = "€";
  const perkActive = "✓";
  const [data, setData] = useState([]);
  // // USING FETCH //
  const api_url = "https://next.tnw-staging.com/next-api/tickets.json";
  const fetchData = () => {
    fetch(api_url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => console.log("error"));
  };

  // // USING AXIOS //
  // axios.get("http://next.tnw-staging.com/next-api/tickets.json ")
  //   .then((response) => {
  //     setData(response.data);
  //   })

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/*===================================
         DISABLED THE MAP METHOD 
    =====================================*/}
      {/* <div className="ticket__pricing-table">
        {data[1]?.tickets.map((ticket) => (
          <CardPackages content={ticket} />
        ))}
      </div> */}
      {/* *=================================== */}

      <div className="ticket__pricing-table">
        <div className="plan col__wrapper">
          <div className="plan-inner">
            <div className="col-top"></div>
            <div className="col-middle">
              <div className="specs">
                <div className="specs__list">
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-desktop">
                        {data[1]?.tickets[1].ticketPerks[0].col1}
                      </p>
                    </div>
                  </div>

                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-desktop">
                        {data[1]?.tickets[1].ticketPerks[0].col2}
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-desktop">
                        {data[1]?.tickets[1].ticketPerks[1].col1}
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-desktop">
                        {data[1]?.tickets[1].ticketPerks[1].col2}
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-desktop">
                        {data[1]?.tickets[1].ticketPerks[2].col1}
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-desktop">
                        {data[1]?.tickets[1].ticketPerks[2].col2}
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-desktop">
                        {data[1]?.tickets[1].ticketPerks[3].col1}
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-desktop">
                        {data[1]?.tickets[1].ticketPerks[3].col1}
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-desktop">
                        {data[1]?.tickets[1].ticketPerks[4].col1}
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-desktop">
                        {data[1]?.tickets[1].ticketPerks[4].col2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-bottom"></div>
          </div>
        </div>
        {/* End */}
        <div className="plan">
          <div className="plan-inner">
            <div className="col-top">
              <h3 className="title">{data[1]?.tickets[1].ticketName}</h3>
              <p className="desc">{data[1]?.tickets[1].ticketDescription}</p>

              <div className="product-price">
                <h4 className="product-price__actual">
                  {currency}
                  {data[1]?.tickets[1].ticketActualPrice}
                </h4>
              </div>
              <span className="mini-txt">exc.21% VAT</span>

              <div className=" btn btn--pink">
                <Link
                  className="register"
                  to={`${data[1]?.tickets[1].ticketButtonLink}`}
                >
                  {data[1]?.tickets[1].ticketButtonLabel}
                </Link>
              </div>
            </div>
            <div className="col-middle">
              <div className="specs">
                <div className="specs__list">
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[1].ticketPerks[0].col1}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[1].ticketPerks[0].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>

                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[1].ticketPerks[0].col2}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[1].ticketPerks[0].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[1].ticketPerks[1].col1}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[1].ticketPerks[1].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[1].ticketPerks[1].col2}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[1].ticketPerks[1].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[1].ticketPerks[2].col1}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[1].ticketPerks[2].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[1].ticketPerks[2].col2}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[1].ticketPerks[2].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[3].ticketPerks[3].col1}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[1].ticketPerks[3].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[1].ticketPerks[3].col2}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[1].ticketPerks[3].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[1].ticketPerks[4].col1}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[1].ticketPerks[4].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[1].ticketPerks[4].col2}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[1].ticketPerks[4].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-bottom">
              <div className=" btn btn--pink">
                <Link
                  className="register"
                  to={`${data[1]?.tickets[1].ticketButtonLink}`}
                >
                  {data[1]?.tickets[1].ticketButtonLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End */}
        <div className="plan popular">
          <h6 className="recommended">{data[1]?.tickets[0].ticketTopLabel}</h6>
          <div className="plan-inner">
            <div className="col-top">
              <h3 className="title">{data[1]?.tickets[0].ticketName}</h3>
              <p className="desc">{data[1]?.tickets[0].ticketDescription}</p>

              <div className="product-price">
                <h4 className="product-price__discount">
                  {currency}
                  {data[1]?.tickets[0].ticketStrikethroughPrice}
                </h4>
                <div className="product-price__sale">
                  <h4>
                    <span className="product-price__sale-euro">
                      {currency}
                      {data[1]?.tickets[0].ticketActualPrice},
                    </span>
                    <span className="product-price__sale-cents">99</span>
                  </h4>
                </div>
              </div>

              <span className="mini-txt">exc.21% VAT</span>

              <div className=" btn btn--pink">
                <Link
                  className="register"
                  to={`${data[1]?.tickets[0].ticketButtonLink}`}
                >
                  {data[1]?.tickets[0].ticketButtonLabel}
                </Link>
              </div>
            </div>
            <div className="col-middle">
              <div className="specs">
                <div className="specs__list">
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[0].ticketPerks[0].col1}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[0].ticketPerks[0].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>

                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[0].ticketPerks[0].col2}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[0].ticketPerks[0].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[0].ticketPerks[1].col1}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[0].ticketPerks[1].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[0].ticketPerks[1].col2}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[0].ticketPerks[1].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[0].ticketPerks[2].col1}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[0].ticketPerks[2].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[0].ticketPerks[2].col2}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[0].ticketPerks[2].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[0].ticketPerks[3].col1}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[0].ticketPerks[3].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[1].ticketPerks[3].col2}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[0].ticketPerks[3].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[0].ticketPerks[4].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[0].ticketPerks[4].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-bottom">
              <div className=" btn btn--pink">
                <Link
                  className="register"
                  to={`${data[1]?.tickets[0].ticketButtonLink}`}
                >
                  {data[1]?.tickets[0].ticketButtonLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* End */}

        <div className="plan vert__hr">
          <div className="plan-inner">
            <div className="col-top">
              <h3 className="title">{data[1]?.tickets[2].ticketName}</h3>
              <p className="desc">{data[1]?.tickets[2].ticketDescription}</p>
              <div className="product-price">
                <h4 className="product-price__actual">
                  {currency}
                  {data[1]?.tickets[2].ticketActualPrice}
                </h4>
              </div>
              <span className="mini-txt">exc.21% VAT</span>

              <div className=" btn btn--pink">
                <Link
                  className="register"
                  to={`${data[1]?.tickets[2].ticketButtonLink}`}
                >
                  {data[1]?.tickets[2].ticketButtonLabel}
                </Link>
              </div>
            </div>
            <div className="col-middle">
              <div className="specs">
                <div className="specs__list">
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[2].ticketPerks[0].col1}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[2].ticketPerks[0].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>

                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[2].ticketPerks[0].col2}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[2].ticketPerks[0].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[2].ticketPerks[1].col1}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[2].ticketPerks[1].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[2].ticketPerks[1].col2}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[2].ticketPerks[1].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[2].ticketPerks[2].col1}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[2].ticketPerks[2].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[2].ticketPerks[2].col2}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[2].ticketPerks[2].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[2].ticketPerks[3].col1}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[2].ticketPerks[3].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[2].ticketPerks[3].col2}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[2].ticketPerks[3].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[2].ticketPerks[4].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[2].ticketPerks[4].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-bottom">
              <div className=" btn btn--pink">
                <Link
                  className="register"
                  to={`${data[1]?.tickets[2].ticketButtonLink}`}
                >
                  {data[1]?.tickets[2].ticketButtonLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End */}
        <div className="plan">
          <div className="plan-inner">
            <div className="col-top">
              <h3 className="title">{data[1]?.tickets[3].ticketName}</h3>
              <p className="desc">{data[1]?.tickets[3].ticketDescription}</p>
              <div className="product-price">
                <h4 className="product-price__actual">
                  {currency}
                  {data[1]?.tickets[3].ticketActualPrice}
                </h4>
              </div>
              <span className="mini-txt">exc.21% VAT</span>

              <div className=" btn btn--pink">
                <Link
                  className="register"
                  to={`${data[1]?.tickets[3].ticketButtonLink}`}
                >
                  {data[1]?.tickets[3].ticketButtonLabel}
                </Link>
              </div>
            </div>
            <div className="col-middle">
              <div className="specs">
                <div className="specs__list">
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[3].ticketPerks[0].col1}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[3].ticketPerks[0].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>

                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[3].ticketPerks[0].col2}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[3].ticketPerks[0].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[3].ticketPerks[1].col1}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[3].ticketPerks[1].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[3].ticketPerks[1].col2}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[3].ticketPerks[1].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[3].ticketPerks[2].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[3].ticketPerks[2].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[3].ticketPerks[3].col1}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[3].ticketPerks[3].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-mobile">
                        {data[1]?.tickets[3].ticketPerks[3].col2}
                      </p>
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[3].ticketPerks[3].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[3].ticketPerks[4].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                  <div className="specs__row">
                    <div className="specs__title">
                      <p className="txt-desktop">
                        <font>
                          {data[1]?.tickets[3].ticketPerks[4].perkActive
                            ? `${perkActive}`
                            : ""}
                        </font>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-bottom">
              <div className=" btn btn--pink">
                <Link
                  className="register"
                  to={`${data[1]?.tickets[3].ticketButtonLink}`}
                >
                  {data[1]?.tickets[3].ticketButtonLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End */}
      </div>
    </>
  );
};
export default TicketData;
