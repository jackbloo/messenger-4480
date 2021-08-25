import React from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
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
import { register } from "./store/utils/thunkCreators";



const Authentication = (props) => {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  const { user, login, register } = props;
  const signupPage = '/register' || '/';
  const currentPath = location?.pathname;
  const isRegister = currentPath.includes(signupPage)

  const authenticationText = {
      login:{
        header:"Welcome Back!",
        buttonText:"Login",
        topText:"Don't have an account?",
        topButton:"Login"
      },
      register:{
        header:"Create an Account",
        buttonText:"Login",
        topText:"Already Have an account?",
        topButton:"Create Account"
      }
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };


  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

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
          <Typography style={{color:'#D8D8D8'}} className={classes.registerText}>{isRegister ? authenticationText['register'].topText : authenticationText['login'].topText}</Typography>
          <Button onClick={() => history.push(isRegister ? "/login" : "/register")} className={[classes.registerText, classes.registerButton]}>{isRegister ? authenticationText['register'].topButton : authenticationText['login'].topButton}</Button>
        </Grid>
        <form onSubmit={isRegister ? handleRegister : handleLogin} className={classes.formRoot}>
          <Grid className={classes.bottomContainer}>
          <Typography className={isRegister ? classes.signupHeaderText : classes.loginHeaderText}>{isRegister ? authenticationText['register'].header : authenticationText['login'].header}</Typography>
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
            {isRegister ?             
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
            </Grid> : null}
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
                {isRegister ? authenticationText['register'].buttonText : authenticationText['login'].buttonText}
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
    register: (credentials) => {
        dispatch(register(credentials));
      },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
