import { Box, Grid } from "@mui/material";
import "./App.css";
import CardDetails from "./common/components/CardDetails/cardDetails";
import FilterTab from "./common/components/FilterTab/filterTab";
import Profile from "./common/components/Profile/profile";
import Dropdown from "./common/components/Dropdown/dropdown";

function App() {
  return (
    <div className="App">
      <Grid>
        <Grid>
          <Profile />
        </Grid>
        <Grid>
          <CardDetails />
        </Grid>
        <Grid>
          <FilterTab />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
