import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { theme } from './theme';


// Submit Button on login and signup Form
export  const BlueButton = withStyles((theme) => ({
    root: {
      background:theme.palette.primary.main,
      borderRadius:'3px',
      width:300,
      fontFamily:'Montserrat, sans-serif',
      marginTop: 50,
      [theme.breakpoints.down('md')]:{
        width:100,
        fontSize:10
      }
    },
    label:{
      color:'white',
      padding: 10
    }
  }))(Button);
  
  
  export const useStyles = makeStyles(() => ({
    // Root of login and signup container
    root: {
      height: "100vh"
    },
    // Styling of sidebar container
    imageContainer:{
      width: '35%',
      height: '100%',
      position:'relative',
    },
    imgStyle:{
      height:'100%',
      width: '100%',
      objectFit:'fill',
      [theme.breakpoints.down('md')]:{
        objectFit:'cover'
      }
    },
    // The root is divided into two formContainer and Image Container
    formContainer:{
      width: '65%',
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
      marginTop:'20px',
      [theme.breakpoints.down('md')]:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'normal',
        alignItems:'center',
      }
    },
    bottomContainer:{
      height: '70%',
      width:'100%'
    },
    // Styling regarding register component
    registerText:{
      fontSize: 20,
      marginRight:40,
      [theme.breakpoints.down('md')]:{
        marginRight:0,
        fontSize: 10,
        marginBottom:10
      }
    },
    registerButton:{
      color: theme.palette.primary.main,
      borderRadius:'5px',
      background: '#FFFFFF',
      boxShadow:'0px 2px 12px #4A6A95',
      padding:'10px',
      width:200,
      fontFamily:'Montserrat, sans-serif',
      [theme.breakpoints.down('md')]:{
        width: 100,
      }
    },
    // Styling regarding login component
    loginHeaderText:{
      fontSize: 50,
      fontWeight: 800,
      [theme.breakpoints.down('md')]:{
        fontSize: 25
      }
    },
    loginFormText:{
      fontSize: 35
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
      [theme.breakpoints.down('md')]:{
        width: '93%'
      }
    },
    bubbleSize:{
      height: 120,
      width: 130,
      marginBottom: 50,
      [theme.breakpoints.down('md')]:{
        height: 70,
        width: 70,
      }
    },
    // Styling regarding sidebar text
    sidebarText:{
      fontSize: 40,
      color:'#FFFFF',
      textAlign: 'center',
      [theme.breakpoints.down('md')]:{
        fontSize: 10
      }
    },
    signupHeaderText:{
        fontSize: 50,
        color:'#D8D8D8',
        [theme.breakpoints.down('md')]:{
          fontSize: 20
        }
    },
    // Customize styling for form by overlay style from material UI
    formRoot:{
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 500,
            fontSize: 20,
            [theme.breakpoints.down('md')]:{
              fontSize: 10,
              width: 150,
            }
          },
          '& .MuiInputBase-root': {
            fontSize: 20,
            [theme.breakpoints.down('md')]:{
              fontSize: 10,
            }
          },
          '& .MuiFormLabel-root': {
            fontSize: 25,
            [theme.breakpoints.down('md')]:{
              fontSize: 10,
            }
          },
          '& .MuiInput-underline:before': {
            borderBottom: '1px solid #D5DFEE'
          },
          '& .MuiInput-underline:after': {
            borderBottom: `5px solid ${theme.palette.primary.main}`,
            [theme.breakpoints.down('md')]:{
              borderBottom: `2px solid ${theme.palette.primary.main}`,
            }
          },
          '& .MuiFormLabel-root.Mui-focused': {
            color:theme.palette.secondary.main
          },
    },
    // Align blue button into center position
    buttonContainer:{
        textAlign:'center'
    }
  }));

  