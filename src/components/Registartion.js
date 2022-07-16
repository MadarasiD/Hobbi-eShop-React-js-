import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import '../styles/Modall.css'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: 'none',
  borderradius: '20%',
  boxShadow: 24,
  p: 4,
  display: 'block',
  justifyContent: 'center',
  alignItems: "center",
  borderRadius: "10%",
  
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='form-window'>
      <button className='login-btn' onClick={handleOpen}>Regisztráció</button>
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
              <input type="email" placeholder='e-mail cím'/>
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <input type="text" placeholder='Felhasználónév'/>
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <input  type="password" placeholder='Jelszó'/>
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <input  type="password" placeholder='Jelszó mégegyszer'/>
            </Typography>
            <button>Regisztráció</button>
            
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
