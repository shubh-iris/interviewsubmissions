import React from "react";
import "./Articles.css";

export default function Article() {
  return (
    <div className="articlesdiv">
      <h4>Related Articles </h4>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src="p1.jpg" alt="Avatar" style={{ width: "100% " }} />
            <div class="container">
              <h2>Paneer Pizza</h2>
              <p>15$</p>
              <p>
                {" "}
                italian pizza recipe flavoured with marinated tikka sauce and
                paneer. the recipe is very similar to the one served in indian
                pizza hut centre with thick crust
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="p2.jpg" alt="Avatar" style={{ width: "100% " }} />
            <div class="container">
              <h2>Veg Pizza</h2>
              <p>12$</p>
              <p>
                Bursting with rich aroma of herbs & spices and flavours, pizza
                is one of the most loved dishes of Italian cuisine.{" "}
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="p3.jpeg" alt="Avatar" style={{ width: "100% " }} />
            <div class="container">
              <h2>Tomato Pizza</h2>
              <p>9$</p>
              <p>
                This summery pizza topped with juicy fresh tomatoes is simple,
                classic, and totally satisfying.
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="p4.jpg" alt="Avatar" style={{ width: "100% " }} />
            <div class="container">
              <h2>Square Pizza</h2>
              <p>13$</p>
              <p>
                made with jalepino, olives, oniion,tomato, capsicum and more,
                thin crust
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
