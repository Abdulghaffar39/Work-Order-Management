import { Box, Button, colors, Container, Paper, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const SignupForm = ({ theme }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [shouldSignup, setShouldSignup] = useState(false);

    useEffect(() => {
        if (!shouldSignup) return;

        const handleSignup = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const userData = await Signup(fname, lname, email, password);
                setUser(userData);
            } catch (err) {
                setError(err.message || "Signup failed");
                setUser(null);
            } finally {
                setIsLoading(false);
                setShouldSignup(false); // reset trigger
            }
        };

        handleSignup();
    }, [shouldSignup, email, password]);

    return (
        <Container sx={{ width: "60%", height: "400px", borderRadius: "12px", background: "red", display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"space-evenly" }}>



            <Typography sx={{ width: "100%", textAlign: "center", fontWeight: 700, padding:"0px" }} variant="h1">
                Sign Up
            </Typography>

            <Stack sx={{ width: "90%", gap:'20px'}}>

                <Box sx={{ width: "100%", display: "flex", gap: "40px" }}>

                    <TextField
                        sx={{ width: "50%" }}
                        label="First Name"
                        variant="standard"
                        type="fname"
                        placeholder="Enter your first name"
                        value={fname}
                        onChange={(e) => setFName(e.target.value)}
                    />

                    <TextField
                        sx={{ width: "50%" }}
                        label="Last Name"
                        variant="standard"
                        type="lname"
                        placeholder="Enter your last name"
                        value={lname}
                        onChange={(e) => setLName(e.target.value)}
                    />

                </Box>

                <TextField
                    sx={{ width: "100%" }}
                    label="Email"
                    variant="standard"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                    sx={{ width: "100%" }}
                    label="Password"
                    variant="standard"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

            </Stack>

            <Link to="/login">
                <Button
                    onClick={() => setShouldSignup(true)}
                    disabled={isLoading || !email || !password || !fname || !lname}>
                    {isLoading ? "Signup in..." : "Signup"}
                </Button>
            </Link>


        </Container >
    );
};

export default SignupForm;