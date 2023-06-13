import { Box, Grid } from "@mui/material";
import "./App.css";
import CardDetails from "./common/components/CardDetails/cardDetails";
import FilterTab from "./common/components/FilterTab/filterTab";
import Profile from "./common/components/Profile/profile";

function App() {
  return (
    <div className="App">
      <Grid container spacing={4} p={2}>
        <Grid item md={2}>
          <FilterTab/>
        </Grid>
        <Grid item md={8}>
          <CardDetails/>
        </Grid>
        <Grid item md={2}>
          <FilterTab/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
