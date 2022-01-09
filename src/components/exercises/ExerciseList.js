import ExerciseItem from "./ExerciseItem";

function ExerciseList(props) {
  return (
    <ul>
      {props.exercises.map((exercise) => (
        <ExerciseItem
          key={exercise.id}
          image={exercise.image}
          title={exercise.title}
          id={exercise.id}
        />
      ))}
    </ul>
  );
}

export default ExerciseList;
