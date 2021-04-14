import React from 'react';
import FamilyModal from '../modals/familyModal.jsx';
import FriendsModal from '../modals/friendsModal.jsx';
import CoworkersModal from '../modals/coworkersModal.jsx';
import AddFamily from '../addModals/addFamily.jsx';
import AddFriend from '../addModals/addFriend.jsx';
import AddCoWorker from '../addModals/addCoWorker.jsx';

const axios = require('axios');

class BirthdayPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      family: [],
      friends: [],
      coworkers: []
    };

    this.postFamily = this.postFamily.bind(this);
    this.postFriend = this.postFriend.bind(this);
    this.postCoWorker = this.postCoWorker.bind(this);
  }

  componentDidMount() {
    this.getFamily();
    this.getFriends();
    this.getCoworkers();
  }


  getFamily() {
    axios.get('/family')
    .then((result) => {
      this.setState({
        family: result.data
      });
    });
  }

  getFriends() {
    axios.get('/friend')
    .then((result) => {
      this.setState({
        friends: result.data
      });
    });
  }

  getCoworkers() {
    axios.get('/coworker')
    .then((result) => {
      this.setState({
        coworkers: result.data
      });
    });
  }

  postFamily(member) {
    axios.post('/family', member)
    .then(() => {
      this.getFamily();
    });
  }

  postCoWorker(worker) {
    axios.post('/coworker', worker)
    .then(() => {
      this.getCoworkers();
    });
  }

  postFriend(friend) {
    console.log(friend);
    axios.post('/friend', friend)
    .then(() => {
      this.getFriends();
    });
  }


  render() {
    const { family } = this.state;
    const { friends } = this.state;
    const { coworkers } = this.state;
    return (
      <div>
        <div className="mainButtonContainer">
          <div className="buttonContainer">
            <div>
              <FamilyModal family={family}/>
            </div>
            <div>
              <FriendsModal friends={friends}/>
            </div>
            <div>
              <CoworkersModal coworkers={coworkers}/>
            </div>
          </div>
          <div className="buttonContainer">
            <div>
              <AddFamily newFamily={this.postFamily}/>
            </div>
            <div>
              <AddFriend newFriend={this.postFriend}/>
            </div>
            <div>
              <AddCoWorker newCoWorker={this.postCoWorker}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BirthdayPage;