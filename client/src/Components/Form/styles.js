import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    paper: {
      padding: theme.spacing(2),
      background: 'teal',
      color: 'white',
    },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    fileInput: {
      width: '97%',
      margin: '10px 0',
      width: '227px',
      height: '31px',
      padding: '6px 0px',
      background: 'white',
    
    },
    buttonSubmit: {
      marginBottom: 10,
    },
  
  }));