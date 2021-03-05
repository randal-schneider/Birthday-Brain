import React from 'react';
const moment = require('moment');

const Family = (props) => {

  return (
    <div>
      {props.family.map((person) => (
        <ul key={person._id}>
          <p>Name: {person.name}</p>
          <p>Birthday: {moment.utc(person.bday).format("MMM Do YY")}</p>
          <p>Relation: {person.famType}</p>
          <p>Link for Gift Given: <a href={person.giftGiv} target="_blank">{person.giftGiv}</a></p>
          <p>Link for Gift I Received: <a href={person.giftRec} target="_blank">{person.giftRec}</a></p>
          <p>Date Given: {moment.utc(person.dateGiv).format("MMM Do YY")}</p>
          <p>Date Received: {moment.utc(person.dateRec).format("MMM Do YY")}</p>
          <p>Comment: {person.comment}</p>
          <br></br>
          <br></br>
        </ul>
      ))}
    </div>
  )
}

export default Family;




// name: String,
//   famType: String,
//   giftRec: String,
//   giftGiv: String,
//   bday: Date,
//   dateGiv: Date,
//   dateRec: Date,
//   comment: String,