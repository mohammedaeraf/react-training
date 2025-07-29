import "./App.css";
import Greeting from "./Components/Greeting";
import ProfileCard from "./Components/ProfileCard";

function App() {
  return (
    <div id="aeraf-div">
      <h1 className="text-primary mb-4">My First React Application</h1>
      
      <Greeting name="Hussain"></Greeting>

      <Greeting name="Rasikh"></Greeting>
      
      <ProfileCard
        name="Abdullaah Jameel"
        role="React Developer"
        skills={["JS", "TS", "React"]}
      ></ProfileCard>
      
      <ProfileCard
        name="Ashaar Momin"
        role="UI/UX Developer"
        skills={["HTML", "CSS", "Bootstrap"]}
      ></ProfileCard>
    </div>
  );
}
export default App;
