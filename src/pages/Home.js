import BottomNavBar from "../components/layout/BottomNavBar";
import ExerciseList from "../components/exercises/ExerciseList";
import "./Home.css";

const EXERCISES = [
  {
    id: "m1",
    title: "Morning Delight",
    image:
      "https://www.clickprophotographers.com/dailyproject/wp-content/uploads/2017/02/Sunrise-at-Torino-Hut-%C2%A9-Jennifer-Carr-Photography.jpg",
  },
  {
    id: "m2",
    title: "Afternoon Boost",
    image:
      "https://www.maxpixel.net/static/photo/1x/Sunny-Heart-Forest-Afternoon-Nature-Trees-Tree-5032790.jpg",
  },
];
function HomePage() {
  return (
    <div className="container">
      <div className="hello">Good Afternoon</div>
      <div className="customize">Anxiety Prevention</div>
      <div className="music"></div>
      <div className="music-icon"></div>
      <div className="music-name">Meditation walk-through</div>
      <div className="music-subName">How to Stay Grounded</div>
      <div className="music-duration">3mins</div>
      <div className="exercise">Breathing Exercises</div>
      <ExerciseList exercises={EXERCISES} />
      <div className="guides">Sleeping Routine Guides</div>
      <div className="guide-title1">Morning Person Guide</div>
      <div className="guide-duration1">8hrs 0mins</div>
      <button className="button1">Set Alarm</button>
      <div className="line"></div>
      <div className="guide-title2">Night Owl Guide</div>
      <div className="guide-duration2">7hrs 15mins</div>
      <button className="button2">Set Alarm</button>

      <BottomNavBar home={require("./home.png")} />
    </div>
  );
}

export default HomePage;
