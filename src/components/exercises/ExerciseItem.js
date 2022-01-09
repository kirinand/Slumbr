import "./ExercisesItem.css";

function ExerciseItem(props) {
  return (
    <li>
      <div>
        <img src={props.image} alt={props.title} className={props.id} />
      </div>
      <div>
        <h3 className={props.title}>{props.title}</h3>
      </div>
    </li>
  );
}

export default ExerciseItem;
