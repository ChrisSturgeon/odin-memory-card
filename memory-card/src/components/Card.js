import '../styles/card.css';

export function Card(props) {
  return props.cards.map((card) => {
    return (
      <div className="card" key={card.key}>
        <button
          onClick={props.move}
          value={card.id}
          className="card-btn"
          style={{
            backgroundImage: `url(${card.img})`,
            backgroundSize: 'cover',
          }}
        ></button>
      </div>
    );
  });
}
