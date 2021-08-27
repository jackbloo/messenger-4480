import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold"
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px"
  },
  imageStyle:{
    width:'100%',
    height:'100%',
    objectFit:'cover',
    borderRadius:'10px 10px 10px 0px',
  },
  imageContainer:{
    width:200,
    height:200,
  },
  imageContainerMultiple:{
    width:100,
    height:100
  },
  multipleBoxContainer:{
    display: 'flex',
    flexDirection:'row',
    marginTop:10
  }
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, attachments } = props;
  return (
    <Box className={classes.root}>
      {
        attachments?.length > 1 && text !== '' ?  
      <Box className={classes.bubble}>
        <Typography className={classes.text}>{text}</Typography>
      </Box>:null
      }
      {attachments?.length > 1 ? <Box className={classes.multipleBoxContainer}>{attachments.map((el) => {return(<Box className={classes.imageContainerMultiple} style={{marginRight:20}}><img src={el} alt={time} className={classes.imageStyle}/></Box>)})}</Box> : null}
      <Typography className={classes.date}>{time}</Typography>
      {attachments?.length === 1 ? <Box className={classes.imageContainer}><img src={attachments} alt={time} className={classes.imageStyle}/></Box> : null}
      {
        (attachments?.length === 1 && text !== '') !== (attachments?.length < 1 && text !== '') ?
      <Box className={classes.bubble} style={{marginBottom:5}}>
        <Typography className={classes.text}>{text}</Typography>
      </Box>:null
      }
    </Box>
  );
};

export default SenderBubble;
