import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';
import avatar1 from "./images/image-victor.jpg";
import avatar2 from "./images/australian-victor.jpg";
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor() {
    super()
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.state = {
      numCards: 2,
      cards: [
        <ProfileCard
          key="initialcard1"
          avatar={avatar1}
          personalInfo={{ name: "Victor Crest", age: 26, location: "London" }}
          stats={[
            { number: "80k", tag: "Followers" },
            { number: "803k", tag: "Likes" },
            { number: "1.4k", tag: "Photos" }]}
        />,

        <ProfileCard
          key="initialcard2"
          avatar={avatar2}
          personalInfo={{ name: "Australian Victor Crest", age: 62, location: "Australia" }}
          stats={[
            { number: "100M", tag: "Followers" },
            { number: "1.0B", tag: "Likes" },
            { number: "1", tag: "Photos" }]}
        />
      ]
    };
  }

  addCard() {
    let id = this.state.numCards + 1;

    return this.setState({
      numCards: id,
      cards: [...this.state.cards,
      < ProfileCard
        key={id.toString()}
        personalInfo={{ name: "John Doe", age: id, location: "Nowhere" }}
        stats={
          [
            { number: id, tag: "Followers" },
            { number: id, tag: "Likes" },
            { number: id, tag: "Photos" }]}
      />
      ]
    });
  }

  removeCard() {
    let id = this.state.numCards - 1;
    id = id < 0 ? 0 : id; //there cannot be negative numbers of cards

    return this.setState({
      numCards: id,
      cards: [...this.state.cards].slice(0, id)
    });
  }

  render = () =>
  (
    <div className="App">
      <div className="cardInteractionButtons">
        <button onClick={this.addCard} id="addButton">+</button>
        <button onClick={this.removeCard} id="removeButton">-</button>
      </div>
      {this.state.cards}
    </div>
  );

}

export default App;
