import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Friends from '../mappingFunctions/friends.jsx';


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

export default function FriendsModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="famModalHeader">
        THE Friends!!
      </div>
      <div className="flex-container-family">
        <Friends friends={props.friends}/>
      </div>
      <button className="button" type="button" onClick={handleClose}>
        Stop Looking at The Friends
      </button>
    </div>
  );

  return (
    <div>
      <button className="button" type="button" onClick={handleOpen}>
        The Friends
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

