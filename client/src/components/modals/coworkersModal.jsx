import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Coworkers from '../mappingFunctions/coworkers.jsx';


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

export default function CoworkersModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState('');
  const [coworkersArray, setCoworkers] = React.useState([]);

  const handleOpen = () => {
    setOpen(true);
    if (filter.length === 0) {
      setCoworkers(props.coworkers)
    }
  };

  const handleClose = () => {
    setOpen(false);
    setFilter('');
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  const handleSubmit = () => {
    console.log(filter);
    if (filter.length === 0) {
      return;
    } else {
      setCoworkers(props.coworkers.filter(worker => {
        if (worker.name.toLowerCase().includes(filter.toLowerCase())) {
          console.log(worker);
          return worker;
        }
      }));
    }
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="famModalHeader">
        THE WORKERS!!
      </div>
      <div>
        <label className="thick">
          <input className="button" type="button" onClick={handleSubmit} value="Search By Name"/>{' '}{' '}
          <input className="search-box" type="text" value={filter} onChange={handleFilter} />
          </label>
      </div>
      <div className="flex-container-family">
        <Coworkers coworkers={coworkersArray.length === 0 ? props.coworkers : coworkersArray}/>
      </div>
      <button className="button" type="button" onClick={handleClose}>
        Stop Looking at The Workers
      </button>
    </div>
  );

  return (
    <div>
      <button className="button" type="button" onClick={handleOpen}>
        Co-Workers
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

