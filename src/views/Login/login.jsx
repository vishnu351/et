import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import logo from "../../assets/images/tata.svg";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// import Checkbox from '@mui/material/Checkbox';
const Login = () => {
  const paperStyle = {
    padding: 20,
    // height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = {
    backgroundColor: "#FFFFFF",
    height: "55px",
    width: "100px",
    padding: "10px",
  };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // Change the size to fit the parent element of this div
          width: "100%",
          height: "100%",
        }}
      >
        <Paper elevation={15} style={paperStyle}>
          <Grid item container>
            <Grid container item alignItems="center" direction="column">
              {/* <Avatar src={Logo} />   */}
              <Avatar
                style={avatarStyle}
                variant="square"
                // alt="Evelyn Carnahan"
                src={logo}
              />
              <Typography variant="h4">Sign In</Typography>
            </Grid>
            <GridContainer spacing={2}>
              <GridItem sx={{ paddingTop: "8px" }} xs={12}>
                <TextField
                  label="Username"
                  placeholder="Enter username"
                  variant="outlined"
                  fullWidth
                  required
                />
              </GridItem>
              <Grid item style={{ padding: "8px 15px" }} xs={12}>
                <TextField
                  label="Password"
                  placeholder="Enter password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item style={{ padding: "8px 15px" }} xs={12}></Grid>
            </GridContainer>
            {/* <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Sign in
            </Button>
            {/* <Typography>
              <Link href="#">Forgot password ?</Link>
            </Typography> */}
            {/* <Typography>
              {" "}
              Do you have an account ?<Link href="#">Sign Up</Link>
            </Typography> */}
          </Grid>
        </Paper>
      </div>
    </Grid>
  );
};

export default Login;
