import React from 'react';
import ReactDOM from 'react-dom';
import Position from './Position.jsx';

class DebateFloor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // These should be populated by the DB, or sockets for each specific debate
      argumentsPro: ['These are my feeeeeeeeeelings', 'Here are moreeeee feeeeelings', 'I LOVEEEEEE IT', 'Clearly you are mistake. I CANNOT BELIEVE THIS'],
      argumentsCon: ['You are wrong', 'OBJECTTTTIONNNNNNNNN', 'I HATEEEEEEEE THATTTTTT', 'We do not believe in such savage ideas'],
      votesPro: 5,
      votesCon: 11,
    }
    this.handleVote = this.handleVote.bind(this);

  };

  handleVote(event) {
    // When a box is checked, update the value of values by 1, to the proper debate ID and proper position
 
  }

  componentWillMount() {

    
  }

  componentDidMount() {
    // Query Database using set interval and axios for the amount of votes, and arguments

  }

  render() {
    return (
      <div className="container">
        <div className="Row">
          <div>Topic</div>
          <Position position="Pro" arguments={this.state.argumentsPro} points={this.state.votesPro} handleVote={this.handleVote} />
          <Position position="Con" arguments={this.state.argumentsCon} points={this.state.votesCon} />
        </div>
      </div>
      )
  }
}
  export default DebateFloor;

