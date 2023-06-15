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
      <Grid container>
        <Grid item md={6}>
          {/* <Dropdown heading={"Channel"} options={topDropdownOptions} /> */}
          <Profile />
        </Grid>
        <Grid item md={6}>
          <FilterTab />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
