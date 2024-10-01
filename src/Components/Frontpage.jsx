import React from "react";
import "./Front.css";
import Photo from "../image/about-img.jpg";

function Frontpage() {
  return (
    <>
      <section className="section-1">
        <div className="first">

          <h1>Indori</h1>
        </div>

        <div className="sec">
          <div className="sec-div-1">
            <h1>Indori Special Food</h1>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur magnam dignissimos consequuntur et eos neque molestias
              quae iste? Possimus nisi quaerat quam quod quos recusandae
              voluptatum cum eveniet, sed explicabo.
            </h4>
            <div className="sec-button">
              <div className="sec-button1">
                <button>Contact US</button>
              </div>
              <div className="sec-button2">
                <button>Order Now</button>
              </div>
            </div>
          </div>

          <div className="sec-div-2">
            <h5>GOODFOOD</h5>
          </div>
        </div>
      </section>

      {/* <div>
        <ul>
          <li><img src="../image/food.jpg" alt="" /></li>
          <li><img src="../image/plate.jpeg" alt="" /></li>
          <li><img src="../image/about-img.jpg" alt="" /></li>
        </ul>
      </div> */}

      <section>
        <div className="sec2">
          <div className="sec2-div1">
            <div className="detailbox">
              <div className="about">
                <h2>About Our Food</h2>
                <hr />
              </div>
              <div className="para">
                <h3>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words
                </h3>
                <a href="./Read.jsx">Read More</a>
                {/* <ul>
                    <li>
                        <link rel="stylesheet" href="./Read.jsx" />
                    </li>
                </ul> */}
              </div>
            </div>
          </div>
          <div className="sec2-div2">
            <img src={Photo} alt="img" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Frontpage;
