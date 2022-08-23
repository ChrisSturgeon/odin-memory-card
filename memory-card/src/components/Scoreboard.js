import '../styles/scoreboard.css';

export function Scoreboard(props) {
  return (
    <div className="scoreboard">
      <div>
        Level: <span className="accent">{props.level}</span>
      </div>
      <div>
        Score: <span className="accent">{props.score}</span>
      </div>
      <div>
        Highscore: <span className="accent">{props.highscore}</span>
      </div>
    </div>
  );
}
