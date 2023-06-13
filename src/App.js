import { Box, Grid } from "@mui/material";
import "./App.css";
import CardDetails from "./common/components/CardDetails/cardDetails";
import FilterTab from "./common/components/FilterTab/filterTab";

function App() {
  return (
    <div className="App">
      <Grid display={"flex"} flexdirection={"row"}>
        <Grid item md={3}>
          <FilterTab />
        </Grid>
        <Grid item md={6}>
          <CardDetails />
        </Grid>
        <Grid item md={3}>
          <FilterTab />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
