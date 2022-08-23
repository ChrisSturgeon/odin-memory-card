export function Welcome(props) {
  return (
    <div className="winner">
      <h2 className="intro">
        The rules are simple. Don't click the same dog twice!
      </h2>
      <button className="reset-btn" onClick={props.reset}>
        Play
      </button>
    </div>
  );
}
