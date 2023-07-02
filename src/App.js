import "./App.css";
import FilterTab from "./common/components/FilterTab/filterTab";
import Profile from "./common/components/Profile/profile";
import Dropdown from "./common/components/Dropdown/dropdown";
import CardDetailWrapper from "./common/components/CardDetailWrapper/cardDetailWrapper";
import Header from "./common/components/Header/header";
import LoginModal from "./common/components/LoginModal/loginModal";
import { Grid } from "@mui/material";
import Details from "./common/Pages/Details/details";


function App() {
  return (
    <div className="App">
      {/* <Grid container minWidth={"100vw"}>
        <Grid md={12} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 10 }}>
          <Header />
        </Grid>
        <Grid container columnSpacing={6} mt={"100px"} padding={"0 20px"}>
          <Grid item md={2.5} style={{ position: 'sticky', top: '100px', height: 'fit-content'}}>
            <Profile />
          </Grid>
          <Grid item md={7}>
            <CardDetailWrapper />
          </Grid>
          <Grid item md={2.5} style={{ position: 'sticky', top: '100px', height: 'fit-content'}}>
            <FilterTab />
          </Grid>
        </Grid>
        <LoginModal/>
      </Grid> */}
      <Details/>
    </div>
  );
}

export default App;
