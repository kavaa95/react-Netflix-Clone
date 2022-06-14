import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";
//import Actors from "./Actors/Actors";
// import Navbar from "./Navbar/Navbar";
// import Movies from "./Movies/Movies";
// import MovieInfromation from "./MovieInformation/MovieInformation";
// import Profile from "./Profile/Profile";
import { Navbar, Actors, Movies, MovieInformation, Profile } from "./";
import useStyles from "./styles";
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Switch>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path="/movies/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
