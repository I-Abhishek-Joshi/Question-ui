import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Profile from "../../components/Profile/profile";
import CardDetailWrapper from "../../components/CardDetailWrapper/cardDetailWrapper";
import FilterTab from "../../components/FilterTab/filterTab";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  fetchQuestionListAction,
  setFilterAction,
} from "../../actions/actions";
import {
  getLoggedInUserId,
} from "../../assets/constant/constants";
import ListLoader from "../ListLoader/listLoader";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const questionList =
    useSelector((state) => state?.questionList?.questionList) || [];

  const filter = useSelector((state) => state?.filter?.filter) || {};
  const value = useSelector((state) => state?.filter?.filter?.value) || "";
  const searchTerm =
    useSelector((state) => state?.filter?.filter?.searchTerm) || "";
  const [initialLoad, setInitialLoad] = useState(true);

  const queryParams = new URLSearchParams(location.search);
  const searchTermURL = queryParams.get("searchTerm") || "";
  const valueURL = queryParams.get("value") || "";

  const listLoader = useSelector((state) => state?.loader?.listLoader);

  useEffect(() => {
    
    const fetchData = () => {
      dispatch(
        fetchQuestionListAction({
          searchTerm: initialLoad ? searchTermURL : filter?.searchTerm || "",
          userId: getLoggedInUserId(),
          filters: initialLoad
            ? valueURL.length > 0
              ? [valueURL]
              : []
            : filter?.value?.length > 0
            ? [filter?.value]
            : [],
        })
      ).then(() => {
        setInitialLoad(false);
      });
    };

    if (initialLoad) {
      setInitialLoad(false);
      dispatch(setFilterAction({ searchTerm: searchTermURL, value: valueURL }));
    } else {
      fetchData();
    }


    
  }, [searchTerm, value, initialLoad]);

  return listLoader ? (
    <ListLoader />
  ) : (
    <Grid container columnSpacing={6} padding={"0 20px"}>
      <Grid
        item
        md={2.5}
        style={{ position: "sticky", top: "100px", height: "fit-content" }}
      >
        <Profile />
      </Grid>
      <Grid item md={7}>
        <CardDetailWrapper />
      </Grid>
      <Grid
        item
        md={2.5}
        style={{ position: "sticky", top: "100px", height: "fit-content" }}
      >
        <FilterTab />
      </Grid>
    </Grid>
  );
};
export default Home;
