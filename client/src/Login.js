import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {useStyles, BlueButton} from './themes/style'
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import Photo from './assets/image/bg-img.png'
import Bubble from './assets/icons/bubble.svg'
import { login } from "./store/utils/thunkCreators";

const Login = (props) => {
  const history = useHistory();
  const { user, login } = props;
  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container className={classes.root}>
        <Box className={classes.imageContainer}>
          <Box className={classes.bubbleContainer}>
              <img src={Bubble} alt="bubble" className={classes.bubbleSize}/>
              <Typography  className={classes.sidebarText}>Converse with anyone</Typography>
              <Typography  className={classes.sidebarText}>with any language</Typography>
          </Box>
          <img src={Photo} alt="peråson" className={classes.imgStyle}/>
      </Box>
      <Box className={classes.formContainer}>
        <Grid item className={classes.topContainer}>
          <Typography style={{color:'#D8D8D8'}} className={classes.registerText}>Don't have an account?</Typography>
          <Button onClick={() => history.push("/register")} className={[classes.registerText, classes.registerButton]}>Create account</Button>
        </Grid>
        <form onSubmit={handleLogin} className={classes.formRoot}>
          <Grid className={classes.bottomContainer}>
          <Typography className={classes.loginHeaderText}>Welcome Back!</Typography>
            <Grid >
              <FormControl margin="normal" required>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <FormControl margin="normal" required>
              <TextField
                label="password"
                aria-label="password"
                type="password"
                name="password"
              />
            </FormControl>
            <Grid>
              <Box className={classes.buttonContainer}>
                <BlueButton type="submit" variant="contained" size="large">
                  Login
                </BlueButton>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
