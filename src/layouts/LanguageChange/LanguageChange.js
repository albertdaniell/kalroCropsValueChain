import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { AppContext } from "../../contexts/AppContext/AppContext";
import TranslateIcon from '@material-ui/icons/Translate';
function LanguageChange() {
  const {
    saveOfflineLanguage,
    appLanguage,
  } = useContext(AppContext);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (appLanguage === "1") {
    return (
      <div id="languageBtn">
        <Button
          size="small"
          variant="contained"
          color="primary"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
       <TranslateIcon style={{marginRight:10}}/> ENG
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              saveOfflineLanguage("1");
            }}
          >
            English (Active)
          </MenuItem>
          <MenuItem
            style={{ color: "gray" }}
            onClick={() => {
              handleClose();
              saveOfflineLanguage("2");
            }}
          >
            Kikuyu
          </MenuItem>
        </Menu>
      </div>
    );
  } else {
    return (
      <div id="languageBtn">
        <Button
          size="small"
          variant="contained"
          color="primary"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
     <TranslateIcon style={{marginRight:10}}/> KIK
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            style={{ color: "gray" }}
            onClick={() => {
              handleClose();
              saveOfflineLanguage("1");
            }}
          >
            English{" "}
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              saveOfflineLanguage("2");
            }}
          >
            Kikuyu (Active)
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default LanguageChange;
