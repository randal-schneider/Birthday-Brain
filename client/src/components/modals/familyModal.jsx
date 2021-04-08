import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Family from '../mappingFunctions/family.jsx';


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

export default function FamilyModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState('');
  const [familyArray, setFamily] = React.useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  const handleSubmit = () => {
    console.log(filter);
    if (filter.length === 0) {
      return;
    } else {
      setFamily(props.family.filter(member => {
        if (member.name.toLowerCase().includes(filter.toLowerCase())) {
          console.log(member);
          return member;
        }
      }));
    }
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="famModalHeader">
        THE Family!!
      </div>
      <div>
        <label className="thick">
          <input className="button" type="button" onClick={handleSubmit} value="Search By Name"/>{' '}{' '}
          <input className="search-box" type="text" value={filter} onChange={handleFilter} />
          </label>
      </div>
      <div className="flex-container-family">
        <Family family={familyArray.length === 0 ? props.family : familyArray}/>
      </div>
      <button className="button" type="button" onClick={handleClose}>
        Stop Looking at The Family
      </button>
    </div>
  );

  return (
    <div>
      <button className="button" type="button" onClick={handleOpen}>
        The Family
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

