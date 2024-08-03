import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/reducSlice/userSlice";
import moviesReducer from "../utils/reducSlice/moviesSlice";
import gptReducer from "../utils/reducSlice/gptSlice";
import configReducer from "../utils/reducSlice/configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
