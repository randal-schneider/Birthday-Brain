import React from 'react';
const moment = require('moment');

const Friends = (props) => {

  return (
    <div>
      {props.friends.map((friend) => (
        <ul key={friend._id}>
          <p>Name: {friend.name}</p>
          <p>Birthday: {moment.utc(friend.bday).format("MMM Do YY")}</p>
          <p>Gender: {friend.gender}</p>
          <p>Link for Gift Given: <a href={friend.giftGiv} target="_blank">{friend.giftGiv}</a></p>
          <p>Link for Gift I Received: <a href={friend.giftRec} target="_blank">{friend.giftRec}</a></p>
          <p>Date Given: {moment.utc(friend.dateGiv).format("MMM Do YY")}</p>
          <p>Date Received: {moment.utc(friend.dateRec).format("MMM Do YY")}</p>
          <p>Comment: {friend.comment}</p>
          <br></br>
          <br></br>
        </ul>
      ))}
    </div>
  )
}

export default Friends;