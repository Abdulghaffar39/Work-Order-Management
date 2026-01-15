import { Box, Button, colors, Container, Paper, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Logo from "../../Images/Logosmartproman.png";
import "./style.css"

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
        <Container sx={{ width: "70%", height: "550px", margin: "100px auto", borderRadius: "12px", background: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: { lg: "80%", } }}>


            <Stack sx={{ width: "90%", alignItems: 'center', gap: "40px" }}>    

                <img
                    width="220px"
                    src={`${Logo}`}
                    alt="Logo"
                />

                <Stack sx={{ width: "100%", gap: "25px" }}>


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

                <Link to="/login" style={{ width: "100%", borderRadius: "8px" }}>
                    <Button
                        sx={{ color: "black", background: "#8e8ef1ff", width: "100%", fontWeight: "600", fontSize: "18px", borderRadius: "8px" }}
                        variant="contained"
                        onClick={() => setShouldSignup(true)}
                        disabled={isLoading || !email || !password || !fname || !lname}>
                        {isLoading ? "Signup in..." : "Signup"}
                    </Button>
                </Link>

            </Stack>



        </Container >
    );
};

export default SignupForm;