export function Scoreboard(props) {
  return (
    <div>
      <div>Score: {props.score}</div>
      <div>Highscore: {props.highscore}</div>
    </div>
  );
}
