
import React from 'react';

import { useHistory } from "react-router-dom";

import img1 from "../images/addManager.jpg"

import Grid from '@material-ui/core/Grid';

import Inputlabel from '@material-ui/core/InputLabel';






function AdminDash() {

  let history = useHistory();

  function redirect() { history.push("/AddManager"); }


  return (

    <div align="center">
        <Grid>
    <img  width="600" height="600" src={img1} onClick={redirect} />
    <Inputlabel> ADD MANAGER </Inputlabel>
    </Grid>
 </div>
);
  }
  

  export default (AdminDash);