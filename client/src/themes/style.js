import { makeStyles, withStyles } from "@material-ui/core/styles";
import {Button} from "@material-ui/core";


// Submit Button on login and signup Form
export  const BlueButton = withStyles((theme) => ({
    root: {
      background:'#3A8DFF',
      borderRadius:'3px',
      width:300,
      fontSize:25,
      fontFamily:'Montserrat, sans-serif',
      marginTop: 50
    },
    label:{
      color:'white',
      padding: 10
    }
  }))(Button);
  
  
  export const useStyles = makeStyles((theme) => ({
    // Root of login and signup container
    root: {
      height: "100vh"
    },
    // Styling of sidebar container
    imageContainer:{
      width: '35%',
      height: '100%',
      position:'relative'
    },
    imgStyle:{
      height:'100%',
      width: '100%',
      objectFit:'fill'
    },
    // The root is divided into two formContainer and Image Container
    formContainer:{
      width: '60%',
      height: '100%',
      display: 'flex',
      flexDirection:'column',
      alignItems:'center'
    },
    // Inside formContainer there are two top Container for the top and bottom Container
    topContainer:{
      height: '20%',
      width:'100%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'baseline',
      padding: '10px',
      marginTop:'20px'
    },
    bottomContainer:{
      height: '70%',
      width:'100%'
    },
    // Styling regarding register component
    registerText:{
      fontSize: 20,
      marginRight:40
    },
    registerButton:{
      color:'#3A8DFF',
      borderRadius:'5px',
      background: '#FFFFFF',
      boxShadow:'0px 2px 12px #4A6A95',
      padding:'10px',
      width:200,
      fontFamily:'Montserrat, sans-serif'
    },
    // Styling regarding login component
    loginHeaderText:{
      fontSize: 50,
      fontWeight: 800
    },
    loginFormText:{
      fontSize:35
    },
    // Styling regarding color that overlay image on sidebar
    bubbleContainer:{
      float: 'left',
      position: 'absolute',
      left: '0',
      top: '0',
      zIndex: 1000,
      backgroundImage: 'linear-gradient(to bottom, rgba(58,141,255,0.85), rgba(134,185,255,0.85))',
      padding: '5px',
      color: '#FFFFFF',
      fontWeight: 'bold',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'98.5%',
      height:'100%',
      flexDirection:'column',
    },
    bubbleSize:{
      height: 120,
      width: 130,
      marginBottom: 50
    },
    // Styling regarding sidebar text
    sidebarText:{
      fontSize: 40,
      color:'#FFFFF'
    },
    signupHeaderText:{
        fontSize: 50,
        color:'#D8D8D8'
    },
    // Customize styling for form by overlay style from material UI
    formRoot:{
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 500,
            fontSize: 20
          },
          '& .MuiInputBase-root': {
            fontSize: 20
          },
          '& .MuiFormLabel-root': {
            fontSize: 25
          },
          '& .MuiInput-underline:before': {
            borderBottom: '1px solid #D5DFEE'
          },
          '& .MuiInput-underline:after': {
            borderBottom: '5px solid #3A8DFF'
          },
          '& .MuiFormLabel-root.Mui-focused': {
            color:'#B0B0B0'
          },
    },
    // Align blue button into center position
    buttonContainer:{
        textAlign:'center'
    }
  }));

  