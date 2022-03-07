/////////////////////////////////////////////////////////////////////////////////////////
//
// DISABALED ---- IT IS IN PROGRESS....
// This is the shortest, minified  and cleanest way of  feching datas by using "Map Method".
//
/////////////////////////////////////////////////////////////////////////////////////////





import React from "react";
import { Link } from "react-router-dom";
export default function CardPackages({ content }) {
    const currency = "€";
    const perkActive = "✓";
    return (
        <div className="plan">
            {content.ticketTopLabel && (
                <h4 className="recommended">{content.ticketTopLabel}</h4>
            )}

            <div className="plan-inner">
                <div className="col-top">
                    <h3 className="title">{content.ticketName}</h3>
                    <p className="desc">{content.ticketDescription}</p>

                    <div className="product-price">
                        {content.ticketStrikethroughPrice && (
                            <span className="product-price__discount">
                                €{content.ticketStrikethroughPrice}
                            </span>
                        )}

                        <div className="product-price__sale">
                            {content.ticketActualPrice && (
                                <span className="product-price__sale-euro">
                                    €{content.ticketActualPrice},
                                </span>
                            )}

                            <span className="sale-product-price--cents">99</span>
                        </div>
                    </div>

                    <h4 className="price">
                        {currency}
                        {content.ticketActualPrice}
                    </h4>

                    <span className="mini-txt">exc.21% VAT</span>

                    <div className=" btn btn--pink">
                        <Link className="register" to={`${content.ticketButtonLink}`}>
                            {content.ticketButtonLabel}
                        </Link>
                    </div>
                </div>
                <div className="col-middle">
                    <div className="specs">
                        <div className="specs__list">
                            <div className="specs__row">
                                <div className="specs__title">
                                    <p className="txt-mobile">{content.ticketPerks.col1}</p>
                                    <p className="txt-desktop">
                                        <font>{content.ticketPerks.perkActive ? `${perkActive}` : ""}</font>
                                    </p>
                                      
                                </div>
                            </div>

                            <div className="specs__row">
                                <div className="specs__title">
                                    <p className="txt-mobile">{content?.ticketPerks.col2}</p>
                                    <p className="txt-desktop">
                                        <font>{content.ticketPerks.perkActive ? `${perkActive}` : ""}</font>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-bottom">
                    <div className=" btn btn--pink">
                        <Link className="register" to={`${content.ticketButtonLink}`}>
                            {content.ticketButtonLabel}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
