import React from 'react';
import FamilyModal from './components/modals/familyModal.jsx';
import FriendsModal from './components/modals/friendsModal.jsx';
import CoworkersModal from './components/modals/coworkersModal.jsx';
import AddFamily from './components/addModals/addFamily';

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
              <CoworkersModal coworkers={coworkers}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
