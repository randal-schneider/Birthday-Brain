import React from 'react';
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
    height: "75vh",
    width: "65vh",
    backgroundColor: "rgb(238, 147, 247)",
    border: '2px solid #63F2E4',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '15px',
    outline: 'none',
  },
}));

const someDate = new Date();
someDate.setDate(someDate.getDate());
const date = someDate.toISOString().substr(0, 10);
const givenDate = someDate.toISOString().substr(0,10);
const receiveDate = someDate.toISOString().substr(0,10);

export default function AddFamily(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [member, setName] = React.useState('');
  const [bdayDate, setBday] = React.useState(date);
  const [givDate, setGivDate] = React.useState('');
  const [recDate, setRecDate] = React.useState('');
  const [relation, setRelation] = React.useState('');
  const [giftGive, setGiftGive] = React.useState('none');
  const [giftReceived, setGiftReceived] = React.useState('none');
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

  const handleRelation = (event) => {
    setRelation(event.target.value);
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


  const handleAddFamily = (event) => {
    event.preventDefault();
    props.newFamily({
      name: member,
      bday: bdayDate,
      dateGiv: givDate,
      dateRec: recDate,
      famType: relation,
      giftGiv: giftGive,
      giftRec: giftReceived,
      comment: addComment,
    });

    handleClose();
    setName('');
    setBday(date);
    setGivDate('');
    setRecDate('');
    setRelation('');
    setGiftGive('none');
    setGiftReceived('none');
    setComment('');
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <form className="addFamily-form" onSubmit={handleAddFamily}>
          <label>
            Name:{' '}{' '}
            <input className="name-box" type="text" value={member} onChange={handleName} required />
          </label>
          <br />
          <label>
            Relation:{' '}{' '}
            <input className="name-box" type="text" value={relation} onChange={handleRelation} required />{' '}{' '}
          </label>
          <br />
          <label>
            Birthday:{' '}{' '}
          <input className="date-box" id="dateRequired" type="date" name="dateRequired" defaultValue={date} onChange={handleBday}/>
          </label>
          <br />
          <label>
            Date Given:{' '}{' '}
            <input className="date-box" id="dateRequired" type="date" name="dateRequired" defaultValue={givenDate} onChange={handleGivDate}/>{' '}{' '}
            Link for Gift Given:{' '}{' '}<input className="name-box" type="text" value={giftGive} onChange={handleGiftGiven}/>
          </label>
          <br />
          <label>
            Date Received:{' '}{' '}
            <input className="date-box" id="dateRequired" type="date" name="dateRequired" defaultValue={receiveDate} onChange={handleRecDate}/>{' '}{' '}
            Link for Gift I Received:{' '}{' '}<input className="name-box" type="text" value={giftReceived} onChange={handleGiftReceived}/>
          </label>
          <br />
          <label>
            Comment:{' '}{' '}
            <br />
            <br />
            <textarea maxLength="800" className="addFamily-post" value={addComment} onChange={handleAddComment}/>
          </label>
            <br />
          <input className="button" type="submit" value="Submit Family Member" />
        </form>
      </div>
    </div>
  );

  return (
    <div>
      <button className="button" type="button" onClick={handleOpen}>
        Add Family
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
