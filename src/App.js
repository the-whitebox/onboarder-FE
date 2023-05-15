import React, { useEffect } from "react";
import "./App.css";
import "./style/General.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Routing from "./routing/Routing";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  const check = localStorage.getItem("check");

  useEffect(() => {
    window.addEventListener("beforeunload", function (e) {
      if (
        e.currentTarget.performance.navigation.type !==
          PerformanceNavigation.TYPE_RELOAD &&
        check === "false"
      ) {
        localStorage.clear();
      }
    });
  }, []);

  return (
    <>
      <ToastContainer position="top-right" style={{ zIndex: "9999999" }} />
      <GlobalProvider>
        <Routing />
      </GlobalProvider>
    </>
  );
}

export default App;
