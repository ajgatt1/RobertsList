import React, {useState} from 'react';
import {TextField,Button,Typography,Paper} from '@material-ui/core';

import useStyles from './styles';

const Form = () => {
    const [postData, setPostData] =useState({
        creator:'',title:'',message:'',tags:''
    });
    const classes = useStyles();

    const handleSubmit =() => {

    }

    const clear = () => {
        
    }
    return (
        <Paper className={classes.paper}>
            <Form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography variant="h6">Add a new Job Vacancy</Typography>
            <TextField name="creator" variant="outlined" label ="Employer" fullWidth value = {postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value})}/>
                <TextField name="title" variant="outlined" label ="Job Title" fullWidth value = {postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value})}/>
                <TextField name="message" variant="outlined" label ="Job Description" fullWidth value = {postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value})}/>
                <TextField name="tags" variant="outlined" label ="Tags" fullWidth value = {postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value})}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </Form>
        </Paper>
    );
}

export default Form;
