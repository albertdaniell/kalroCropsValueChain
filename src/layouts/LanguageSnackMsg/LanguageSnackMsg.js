import React, { useContext } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { AppContext } from "../../contexts/AppContext/AppContext";
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

function LanguageSnackMsg() {
  const [open, setOpen] = React.useState(true);
  const {welcomeMsg}=useContext(AppContext)


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  if(welcomeMsg === false || welcomeMsg === null){
    return (
        <div>
          <Snackbar
          style={{textAlign:'center'}}
            anchorOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
            open={open}
            autoHideDuration={8000}
            onClose={handleClose}
            message="Welcome to Poultry App, you can change the language using the blue button on the bottom left. This message will disappear once you reload the page"
            action={<React.Fragment></React.Fragment>}
          />
        </div>
      )
  }else{
      return <></>
  }
}

export default LanguageSnackMsg;
