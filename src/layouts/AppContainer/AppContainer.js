import React, { useContext } from "react";
import animated from "animate.css";
import BackToTop from "react-back-to-top-button";
import { AppContext } from "../../contexts/AppContext/AppContext";


function AppContainer(props) {
  const { appLanguage } = useContext(AppContext);

  return (
    <div id='appContainer'
      class="container-fluid"
      style={{ marginTop: 20, marginBottom: 50, padding: 20 }}
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
            <i class="fas fa-chevron-up"></i>{" "}
          </span>
        </BackToTop>

        {props.children}
      </div>
    </div>
  );
}

export default AppContainer;
