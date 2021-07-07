import { Button, Grid, makeStyles, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(14),
        [theme.breakpoints.up(450 + theme.spacing(2) * 2)]: {
            width: 450,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(450 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));




function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const classes = useStyles();
    const signInWithEmailAndPasswordHandler =
        (event: any, email: string, password: any) => {
            console.log(email);

            event.preventDefault();
            auth.signInWithEmailAndPassword(email, password).catch((error: string) => {
                setError("Error during signing in");
                console.log("error singning in");
            })
        };
    const onChangeHandler = (event: any) => {
        const { name, value }: { name: string, value: string } = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
    };

    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h1 >Sign In</h1>
                    </Grid>

                    {error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}

                    <Grid item xs={12} md={12}>
                        <TextField
                            required
                            type="email"
                            fullWidth
                            name="userEmail"
                            label="email:"
                            value={email}
                            variant="outlined"
                            placeholder="Your email"
                            id="userEmail"
                            onChange={(event) => onChangeHandler(event)}
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField
                            type="password"
                            required
                            name="userPassword"
                            value={password}
                            variant="outlined"
                            label="password:"
                            fullWidth
                            placeholder="Your Password"
                            id="userPassword"
                            onChange={(event) => onChangeHandler(event)}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} style={{ marginTop: 30 }} >
                        <Button fullWidth variant="contained" size="large" color="primary" onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>
                            Sign in
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <p className="text-center my-3">or</p>
                        <p className="text-center my-3">
                            Don't have an account?{" "}
                            <Link to="signUp" className="text-blue-500 hover:text-blue-600">
                                Sign up here
                            </Link>{" "}
                            <br />{" "}
                            <Link to="passwordReset" className="text-blue-500 hover:text-blue-600">
                                Forgot Password?
                            </Link>
                        </p>
                    </Grid>

                </Grid>
            </Paper>
        </main >
    );
}
export default SignIn;