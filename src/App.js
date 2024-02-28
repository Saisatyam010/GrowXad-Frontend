import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { ColorModeContext, useMode } from './AdvertiserDashboard/DashboardHeader/Theme';
import MainRouter from "./routes/MainRouter";
import HomePage from "./main/pages/HomePage";
import AdvertiserDashboardRouter from "./routes/AdvertiserDashboaradRouter";

function App() {
  return (
    <>
      {/* <ColorModeContext.Provider value={colorMode}> */}
      {/* <ThemeProvider > */}
      {/* <CssBaseline /> */}
      <Router>
        {/* Main Routes */}
        <MainRouter />
        {/* Adertiser Dashboard Routes */}
        {/* <AdvertiserDashboardRouter /> */}
      </Router>
      {/* </ThemeProvider> */}
      {/* </ColorModeContext.Provider> */}
    </>
  );
}

export default App;
