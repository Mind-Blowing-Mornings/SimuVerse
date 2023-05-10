import "./ArrowBtn.css";

export default function ArrowBtn(props) {
  return (
    <button
      onClick={props.handleClick}
      className={`store_btn ${props.arrowClass}`}
    >
      {props.children}
    </button>
  );
}
