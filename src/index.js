import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// eslint-disable-next-line no-unused-vars
const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

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
    <div className="header">
      <h1 className="">Fast React Pizza Co.</h1>
    </div>
  );
}

function Menu() {
  // const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div>
        {numPizzas > 0 ? (
          <>
            <p>
              Authentic Italin cusisine. 6 creative dishes to choose from. All
              fron our stone oven, all organic and delicious.
            </p>
            <ul className="pizzas">
              {pizzas.map(pizza => (
                <Pizza pizzalang={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
        ) : (
          <p> We're Still working on our Menu please comeback later</p>
        )}

        {/* <Pizza
        name="Pizza Spinachi"
        ingredients="Tomato, mozarella, spinach, and a cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      /> */}
      </div>
    </main>
  );
}

function Pizza({ pizzalang }) {
  return (
    <li className={`pizza ${pizzalang.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzalang.photoName} alt={pizzalang.name} />
      <div>
        <h2>{pizzalang.name}</h2>
        <p> {pizzalang.ingredients}</p>
        <span>{pizzalang.soldOut ? `SOLD OUT` : pizzalang.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 18;
  const closeHour = 22;
  const isOpen = hour <= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) {
  //   alert(`We're now close`);
  // } else {
  //   alert(`Sorry we're already close`);
  // }
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHour} openHours={openHour} />
      ) : (
        <p>
          We're Happy to serve you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHours, openHours }) {
  return (
    <div className="order">
      {/* {new Date().toLocaleDateString()} - We're currently open
       */}
      <p> We're open until {closeHours}:00 come visit or order us Online</p>
      <button className="btn">Order </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

console.log();
