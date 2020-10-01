import React, { useContext } from "react";
import animated from "animate.css";
import BackToTop from "react-back-to-top-button";
import { AppContext } from "../../contexts/AppContext/AppContext";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


function AppContainer(props) {
  const { appLanguage } = useContext(AppContext);

  return (<>
    <div id='appContainer'
      class="container-fluid"
      style={{ marginTop: 0, marginBottom: 50, padding: 20 }}
    >
      {/* <LanguageChange></LanguageChange>
      <LanguageSnackMsg></LanguageSnackMsg> */}
      <div class="row">
        <BackToTop
          showOnScrollUp
          showAt={100}
          speed={200}
          easing="easeInOutQuint"
          style={{
            fontSize: 20,
            zIndex: 1000,
            backgroundColor: "black",
            color: "white",
            padding: 20,
            borderRadius: 4,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            right: -5,
          }}
        >
          <span>
          <FontAwesomeIcon icon={faChevronUp} />
          </span>
        </BackToTop>

        {props.children}
      </div>
      
    </div>

<Footer appName="Maize, Beans, Potato App"></Footer>
</>
  );
}

export default AppContainer;
