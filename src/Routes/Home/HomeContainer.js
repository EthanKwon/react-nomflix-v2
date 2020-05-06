import React from "react";
import HomePresenter from "./HomePresenter";
import { movies, tv } from "../../api";
import useAPI from "../../Hooks/useAPI";

const HomeContainer = () => {
  const APIList = [tv.latest(), movies.latest()];
  const { state } = useAPI(APIList);
  return <HomePresenter />;
};

export default HomeContainer;
