import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card.jsX";
import data from "./data.js";

function App() {
  const cards = data.map((e) => {
    return (
      <Card
        key={e.id}
        img={e.coverImg}
        rating={e.stats.rating}
        reviewCount={e.stats.reviewCount}
        country={e.location}
        title={e.title}
        price={e.price}
        openSpots={e.openSpots}
        location={e.location}
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
