import React, { useState } from "react";
import { FormControl, FilledInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    justifySelf: "flex-end",
    marginTop: theme.spacing(1.875)
  },
  input: {
    height: 70,
    backgroundColor: theme.palette.input.main,
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2.5)
  },
  icon:{
    fill:theme.palette.icon.main,
    position: 'absolute',
    right: theme.spacing(1.25),
    top:'20%',
    fontSize: theme.typography.fontSize * 2
  }
}));

const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let attachments = [];
    if(event.target.files && event.target.files.length > 0){
      let formData = new FormData();
      const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`;
      const promises = [...event.target.files].map(async (image) =>{
        formData.append("file", image)
        formData.append('upload_preset', `${process.env.REACT_APP_PRESETS_NAME}`);
        const data = await fetch(url,{
         method:'POST',
         body:formData
        })
        const responseData = await data.json()
        attachments.push(responseData.url)
      })
      await Promise.all(promises)
    }
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    // preventing empty text to be sent
    if((event.target.text?.value && event.target.text?.value !== '') || attachments.length > 0){
      const reqBody = {
        text: event.target.text?.value || text,
        recipientId: otherUser.id,
        conversationId,
        sender: conversationId ? null : user,
        attachments
      };
      await postMessage(reqBody);
      setText("");
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
        />
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="image-button"
          multiple
          type="file"
          onChange={(event) => handleSubmit(event)}
        />
      <label htmlFor="image-button">
        <Button variant="raised" component="span" className={classes.icon}>
          <FileCopyIcon className={classes.icon}/>
        </Button>
      </label>

      </FormControl>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
