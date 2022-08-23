export function Card(props) {
  return props.cards.map((card) => {
    return (
      <div key={card.key}>
        <button
          onClick={props.move}
          value={card.id}
          className="card-btn"
          style={{
            backgroundImage: `url(${card.img})`,
            backgroundSize: 'auto',
          }}
        >
          {card.id}
        </button>
      </div>
    );
  });
}
