import React from "react";
import "./descriptionStyles.css";
export default function Description() {
  return (
    <div>
      <div className="textboxdiv">
        <h2> Atrical heading </h2>
        <> </>
        <h6>
          Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is a dish of Italian
          origin consisting of a usually round, flat base of leavened
          wheat-based dough topped with tomatoes, cheese, and often various
          other ingredients (such as various types of sausage, anchovies,
          mushrooms, onions, olives, vegetables, meat, ham, etc.), which is then
          baked at a high temperature, traditionally in a wood-fired oven.[1] A
          small pizza is sometimes called a pizzetta. A person who makes pizza
          is known as a pizzaiolo{" "}
        </h6>
        <br></br>
        <p>
          {" "}
          The term pizza was first recorded in the 10th century in a Latin
          manuscript from the Southern Italian town of Gaeta in Lazio, on the
          border with Campania.[4] Modern pizza was invented in Naples, and the
          dish and its variants have since become popular in many countries.[5]
          It has become one of the most popular foods in the world and a common
          fast food item in Europe, North America and Australasia; available at
          pizzerias (restaurants specializing in pizza), restaurants offering
          Mediterranean cuisine, via pizza delivery, and as street food.[5]
          Various food companies sell ready-baked pizzas, which may be frozen,
          in grocery stores, to be reheated in a home oven.
        </p>

        <div className="para">
          <p>
            <h4
              font-style="italic"
              font-size="30px"
              className="Corner"
              style={{
                width: "450px",
                wordWrap: "break-word",
                height: "100px",
                float: "right",
                border: "0px dotted black",
                margin: "10x 10px 105px 200px",
              }}
            >
              My love is pizza shaped. Won’t you have a slice? It’s circular, so
              there’s enough to go around.” <br /> – Dora J. Arod
            </h4>{" "}
            Foods similar to pizza have been made since the Neolithic Age.[23]
            Records of people adding other ingredients to bread to make it more
            flavorful can be found throughout ancient history. In the 6th
            century BC, the Persian soldiers of the Achaemenid Empire during the
            rule of Darius the Great baked flatbreads with cheese and dates on
            top of their battle shields[24][25] and the ancient Greeks
            supplemented their bread with oils, herbs, and cheese.[26][27] An
            early reference to a pizza-like food occurs in the Aeneid, when
            Celaeno, queen of the Harpies, foretells that the Trojans would not
            find peace until they are forced by hunger to eat their tables (Book
            III). In Book VII, Aeneas and his men are served a meal that
            includes round cakes (like pita bread) topped with cooked
            vegetables. When they eat the bread, they realize that these are the
            "tables" prophesied by Celaeno.[28] The first mention of the word
            "pizza" comes from a notarial document written in Latin and dating
            to May 997 AD from Gaeta, demanding a payment of "twelve pizzas, a
            pork shoulder, and a pork kidney on Christmas Day, and 12 pizzas and
            a couple of chickens on Easter Day."[29] Modern pizza evolved from
            similar flatbread dishes in Naples, Italy, in the 18th or early 19th
            century.[30] Before that time, flatbread was often topped with
            ingredients such as garlic, salt, lard, and cheese. It is uncertain
            when tomatoes were first added and there are many conflicting
            claims.[30] Until about 1830, pizza was sold from open-air stands
            and out of pizza bakeries. A popular contemporary legend holds that
            the archetypal pizza, pizza Margherita, was invented in 1889, when
            the Royal Palace of Capodimonte commissioned the Neapolitan
            pizzaiolo (pizza maker) Raffaele Esposito to create a pizza in honor
            of the visiting Queen Margherita. Of the three different pizzas he
            created, the Queen strongly preferred a pizza swathed in the colors
            of the Italian flag — red (tomato), green (basil), and white
            (mozzarella). Supposedly, this kind of pizza was then named after
            the Queen,[31] although later research cast doubt on this
            legend.[32] An official letter of recognition from the Queen's "head
            of service" remains on display in Esposito's shop, now called the
            Pizzeria Brandi.[33] Pizza was taken to the United States by Italian
            immigrants in the late nineteenth century[34] and first appeared in
            areas where they concentrated. The country's first pizzeria,
            Lombardi's, opened in New York City in 1905.[35] Following World War
            II, veterans returning from the Italian Campaign, who were
            introduced to Italy's native cuisine, proved a ready market for
            pizza in particular.[36]
          </p>
          <h5>More in the series </h5>
          <div className="horitem">
            <img
              src="p1.jpg "
              alt="pizza"
              style={{ height: "120px", width: "250px" }}
            ></img>
            <div className="horiright">
              <h4>Olive Pizza</h4>
            </div>
          </div>
          <div className="horitem">
            <img
              src="p1.jpg "
              alt="pizza"
              style={{ height: "120px", width: "250px" }}
            ></img>
            <div className="horiright">
              <h4>Peppi Pizza</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
