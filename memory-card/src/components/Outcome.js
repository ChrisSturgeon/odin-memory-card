export function Outcome(props) {
  return (
    <div className="winner">
      {props.winner ? <h2>Winner! You must really love dogs!</h2> : null}
      {props.loser ? <h2>Doh! You've already clicked that one!</h2> : null}
      <button className="reset-btn" onClick={props.reset}>
        Play again?
      </button>
    </div>
  );
}
