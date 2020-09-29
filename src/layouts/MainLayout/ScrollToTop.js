import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route,withRouter } from "react-router-dom";

function ScrollToTop({ history, children }) {
    useEffect(() => {
      const unlisten = history.listen(() => {
        window.scrollTo(0, 0);
      });
      return () => {
        unlisten();
      }
    }, []);
  
    return <>{children}</>;
  }
  
export default withRouter(ScrollToTop);