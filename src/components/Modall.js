import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import '../styles/Modall.css'
import { display } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  borderradius: '20%',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='form-window'>
      <span onClick={handleOpen}>Bejelentkezés</span>
      <Modal
      className="box-option"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className=".box-option2" sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <label >felhasználónév</label>
              <input type="text" placeholder='Írd ide a felhasználónevedet...'/>
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <label >Jelszó</label>
              <input type="text" placeholder='Írd ide a jelszavadat...'/>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Ha még nem rendelkezel felhasználóval, akkor regisztrálj!
              <span>Regisztráció</span>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
