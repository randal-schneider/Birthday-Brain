import React from 'react';
import FamilyModal from './components/modals/familyModal.jsx';
import FriendsModal from './components/modals/friendsModal.jsx';
import CoworkersModal from './components/modals/coworkersModal.jsx';
import AddFamily from './components/addModals/addFamily.jsx';
import AddCoWorker from './components/addModals/addCoWorker.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      family: [],
      friends: [],
      coworkers: []
    };

    this.getFamily = this.getFamily.bind(this);
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


  render() {
    const { family } = this.state;
    const { friends } = this.state;
    const { coworkers } = this.state;
    return (
      <div>
        <div className="header">
          BIRTHDAY BRAIN!!
        </div>
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
              <AddFamily newFamily={this.postFamily.bind(this)}/>
            </div>
            <div>
              <FriendsModal friends={friends}/>
            </div>
            <div>
              <AddCoWorker newCoWorker={this.postCoWorker.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
