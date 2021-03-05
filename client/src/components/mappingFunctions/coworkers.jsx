import React from 'react';
const moment = require('moment');

const Coworkers = (props) => {

  return (
    <div>
      {props.coworkers.map((coworker) => (
        <ul key={coworker._id}>
          <p>Name: {coworker.name}</p>
          <p>Birthday: {moment.utc(coworker.bday).format("MMM Do YY")}</p>
          <p>Gender: {coworker.gender}</p>
          <p>Link for Gift Given: <a href={coworker.giftGiv} target="_blank">{coworker.giftGiv}</a></p>
          <p>Link for Gift I Received: <a href={coworker.giftRec} target="_blank">{coworker.giftRec}</a></p>
          <p>Date Given: {moment.utc(coworker.dateGiv).format("MMM Do YY")}</p>
          <p>Date Received: {moment.utc(coworker.dateRec).format("MMM Do YY")}</p>
          <p>Comment: {coworker.comment}</p>
          <br></br>
          <br></br>
        </ul>
      ))}
    </div>
  )
}

export default Coworkers;