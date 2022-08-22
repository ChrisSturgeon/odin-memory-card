export function Card(props) {
  return props.cards.map((card) => {
    return (
      <button
        onClick={props.move}
        key={card.key}
        value={card.id}
        className="card"
      >
        {card.id}
      </button>
    );
  });
}
