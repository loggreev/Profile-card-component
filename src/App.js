import './App.css';
import ProfileCard from './components/ProfileCard';
import avatar1 from "./images/image-victor.jpg";
import avatar2 from "./images/australian-victor.jpg";

function App() {
  return (
    <div className="App">
      <ProfileCard
        avatar={avatar1}
        personalInfo={{ name: "Victor Crest", age: 26, location: "London" }}
        stats={[
          { number: "80k", tag: "Followers" },
          { number: "803k", tag: "Likes" },
          { number: "1.4k", tag: "Photos" }]}
      />
      <ProfileCard
        avatar={avatar2}
        personalInfo={{ name: "Australian Victor Crest", age: 62, location: "Australia" }}
        stats={[
          { number: "100M", tag: "Followers" },
          { number: "1.0B", tag: "Likes" },
          { number: "1", tag: "Photos" }]}
      />
    </div>
  );
}

export default App;
