import React, { useState } from "react";
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
  FormHelperText,
} from "@material-ui/core";
import Photo from './assets/image/bg-img.png'
import Bubble from './assets/icons/bubble.svg'
import { register } from "./store/utils/thunkCreators";

const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
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
          <Typography style={{color:'#D8D8D8'}} className={classes.registerText}>Already Have an account?</Typography>
          <Button onClick={() => history.push("/login")} className={[classes.registerText, classes.registerButton]}>Login</Button>
      </Grid>
        <form onSubmit={handleRegister} className={classes.formRoot}>
        <Grid className={classes.bottomContainer}>
          <Typography className={classes.signupHeaderText}>Create an Account</Typography>
            <Grid>
              <FormControl>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl>
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  required
                  id="standard-required"
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl error={!!formErrorMessage.confirmPassword}>
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl error={!!formErrorMessage.confirmPassword}>
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Box className={classes.buttonContainer}>
            <BlueButton type="submit" variant="contained" size="large">
              Create
            </BlueButton>
            </Box>

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
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
