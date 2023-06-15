import { Box, Grid } from "@mui/material";
import "./App.css";
import CardDetails from "./common/components/CardDetails/cardDetails";
import FilterTab from "./common/components/FilterTab/filterTab";
import Profile from "./common/components/Profile/profile";
import Dropdown from "./common/components/Dropdown/dropdown";
import CardDetailWrapper from "./common/components/CardDetailWrapper/cardDetailWrapper";

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
      <Grid container columnSpacing={7} minHeight={"100vh"}>
        <Grid item md={2}>
          <Profile />
        </Grid>
        <Grid item md={8}>
          <CardDetailWrapper />
        </Grid>
        <Grid item md={2}>
          <FilterTab />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
