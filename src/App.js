import "./App.css";
import FilterTab from "./common/components/FilterTab/filterTab";
import Profile from "./common/components/Profile/profile";
import Dropdown from "./common/components/Dropdown/dropdown";
import CardDetailWrapper from "./common/components/CardDetailWrapper/cardDetailWrapper";
import Header from "./common/components/Header/header";
import LoginModal from "./common/components/LoginModal/loginModal";
import { Grid } from "@mui/material";


function App() {
  const topDropdownOptions = [
    "Office",
    "Shema Websites",
    "Jensera project",
    "Elementary School Friends",
    "Trip Wandeears",
  ];
  return (
    <div className="App">
      <Grid container minWidth={"100vw"}>
        {/* <Grid md={12}>
          <Header />
        </Grid>
        <Grid container columnSpacing={6} mt={"50px"} padding={"0 20px"}>
          <Grid item md={2.5}>
            <Profile />
          </Grid>
          <Grid item md={7}>
            <CardDetailWrapper />
          </Grid>
          <Grid item md={2.5}>
            <FilterTab />
          </Grid>
        </Grid> */}
        <LoginModal/>
      </Grid>
    </div>
  );
}

export default App;
