import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    borderRadius: '15px',
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    height: "60vh",
    width: "50vh",
    backgroundColor: "rgb(238, 147, 247)",
    border: '2px solid #63F2E4',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '15px',
    outline: 'none',
    overflow: 'auto',
  },
}));

const someDate = new Date();
someDate.setDate(someDate.getDate());
const date = someDate.toISOString().substr(0, 10);
const givenDate = someDate.toISOString().substr(0,10);
const receiveDate = someDate.toISOString().substr(0,10);

export default function AddCoWorker(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [member, setName] = React.useState('');
  const [bdayDate, setBday] = React.useState(date);
  const [givDate, setGivDate] = React.useState('');
  const [recDate, setRecDate] = React.useState('');
  const [gend, setGender] = React.useState('');
  const [giftGive, setGiftGive] = React.useState('');
  const [giftReceived, setGiftReceived] = React.useState('');
  const [addComment, setComment] = React.useState('');


  const handleName = (event) => {
    setName (event.target.value);
  };

  const handleBday = (event) => {
    setBday(event.target.value);
  }

  const handleGivDate = (event) => {
    setGivDate(event.target.value);
  }

  const handleRecDate = (event) => {
    setRecDate(event.target.value);
  }

  const handleGender = (event) => {
    setGender(event.target.value);
  }

  const handleGiftGiven = (event) => {
    setGiftGive(event.target.value);
  }

  const handleGiftReceived = (event) => {
    setGiftReceived(event.target.value);
  }

  const handleAddComment = (event) => {
    setComment(event.target.value);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleAddCoWorker = (event) => {
    event.preventDefault();
    props.newCoWorker({
      name: member,
      bday: bdayDate,
      dateGiv: givDate,
      dateRec: recDate,
      gender: gend,
      giftGiv: giftGive,
      giftRec: giftReceived,
      comment: addComment,
    });

    handleClose();
    setName('');
    setBday(date);
    setGivDate('');
    setRecDate('');
    setGender('');
    setGiftGive('');
    setGiftReceived('');
    setComment('');
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <form className="addFamily-form" onSubmit={handleAddCoWorker}>
        <div className="picandinputbox">
            <div className="piccontainer">
                <img src="/images/coworker.jpg"></img>
            </div>
            <div className="inputcontainer">
              <label className="thick">
                <input className="name-box" type="text" value={member} onChange={handleName} required />
                <div style={{float: "right"}}>
                  Name:{' '}{' '}
                </div>
              </label>
              <br />
              <label className="thick">
                <input className="name-box" type="text" value={gend} onChange={handleGender} required />
                <div style={{float: "right"}}>
                  Gender:{' '}{' '}
                </div>
              </label>
              <br />
              <label className="thick">
                <input className="date-box" id="dateRequired" type="date" name="dateRequired" defaultValue={date} onChange={handleBday} required/>
                <div style={{float: "right"}}>
                  Birthdate:{' '}{' '}
                </div>
              </label>
              <br />
              <label className="thick">
                <input className="date-box" id="dateRequired" type="date" name="dateRequired" defaultValue={givenDate} onChange={handleGivDate}/>
                <div style={{float: "right"}}>
                  Date Given:{' '}{' '}
                </div>
              </label>
              <br />
              <label className="thick">
                <input className="name-box" type="text" value={giftGive} onChange={handleGiftGiven}/>
                <div style={{float: "right"}}>
                  Gift Link:{' '}{' '}
                </div>
              </label>
              <br />
              <label className="thick">
                <input className="date-box" id="dateRequired" type="date" name="dateRequired" defaultValue={receiveDate} onChange={handleRecDate}/>
                <div style={{float: "right"}}>
                  Date Received:{' '}{' '}
                </div>
              </label>
              <br />
              <label className="thick">
                <input className="name-box" type="text" value={giftReceived} onChange=      {handleGiftReceived}/>
                <div style={{float: "right"}}>
                  Gift Link:{' '}{' '}
                </div>
              </label>
            </div>
          </div>
          <label className="thick">
            Comment:{' '}{' '}
            <br />
            <br />
            <textarea maxLength="800" className="addFamily-post" value={addComment} onChange={handleAddComment}/>
          </label>
            <br />
          <input className="button" type="submit" value="Submit Co-Worker" />
        </form>
      </div>
    </div>
  );

  return (
    <div>
      <button className="button" type="button" onClick={handleOpen}>
        Add Worker
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
