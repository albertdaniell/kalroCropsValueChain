import React, { useEffect, useContext, useState, createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [appLanguage, setappLanguage] = useState("1");
  const [welcomeMsg, setWelcomeMsg] = useState(null);
  const [isloading, setIsLoading] = useState(null);

  const saveOfflineLanguage = (val) => {

    localStorage.setItem("appLang", val);
    setappLanguage(val);
    console.log("Saved lang offline, isEnglish for app is ", appLanguage);
  };

  const saveOfflineSnackbarMsg = () => {
    localStorage.setItem("welcomeMsg", false);
    setWelcomeMsg(false);
  };

  const getOfflinewelcome = () => {


    setTimeout(() => {
      if (localStorage.hasOwnProperty("welcomeMsg") === true) {
        let welcome = localStorage.getItem("welcomeMsg");
        setWelcomeMsg(welcome);
      } else {
        saveOfflineSnackbarMsg(false);
      }
    }, 20);
  };

  const getOfflineLanguage = () => {
    setTimeout(() => {
      if (localStorage.hasOwnProperty("appLang") === true) {
        let appLang = localStorage.getItem("appLang");

        console.log("appLang", appLang);
        setappLanguage(appLang);
      } else {
        saveOfflineLanguage("1");

        setIsLoading(false);
        console.log("appLangeuage", appLanguage);
      }
    }, 20);
  };

  useEffect(() => {
    getOfflineLanguage();
    getOfflinewelcome();
  }, []);
  return (
    <AppContext.Provider
      value={{
        appLanguage,
        setappLanguage,
        saveOfflineLanguage,
        isloading,
        welcomeMsg,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
