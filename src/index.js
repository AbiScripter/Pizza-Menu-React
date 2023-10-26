import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";
import "./index.css";

// console.log(pizzaData);

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 style={{ color: "red" }}>Pizza Hut</h1>
    </header>
  );
}

function Menu() {
  return (
    <>
      <h1>panjumuttaiiii</h1>
      <ul className="pizzas">
        {pizzaData.map((el, i) => {
          return <Pizza pizzaObj={el} key={el.name} />;
        })}
      </ul>
    </>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj.soldOut);

  // if (pizzaObj.soldOut) {
  //   return null;
  // }

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />

      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "sold out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  let currentHour = new Date().getHours();
  let openHour = 9;
  let closeHour = 20;
  let isOpen = currentHour >= openHour && currentHour <= closeHour;

  return (
    <footer>
      {" "}
      {isOpen ? (
        <p>We are currently Open</p>
      ) : (
        <p>Sorry we are closed , We open at {openHour}.00 AM</p>
      )}
    </footer>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
