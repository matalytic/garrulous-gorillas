import React from 'react';
import ReactDOM from 'react-dom';
import Argument from './Argument.jsx'

const Position = (props) => (
  <div className='col-sm-6'>
    <h4>{props.position}</h4>
    <div>{props.points} Points</div>
    {props.arguments.map( (argument, i) => <Argument handleVote={props.handleVote} argument={argument} key={i}/>)}
  </div>
  )

export default Position;