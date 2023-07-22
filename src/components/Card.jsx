export default function Card({
  img,
  rating,
  reviewCount,
  country,
  title,
  price,
  openSpots,
  location,
}) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={img} alt="girl image" />
      <div className="card--stats">
        <img
          className="card--star"
          src="./src/images/star.png"
          alt="star png"
        />
        <span>{rating}</span>
        <span className="gray">({reviewCount}) &#x2022; </span>
        <span className="gray">{country}</span>
      </div>

      <p className="card--title">{title}</p>
      <p className="card--price">
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}
