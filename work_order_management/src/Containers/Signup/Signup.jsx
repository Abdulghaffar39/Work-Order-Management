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

        <Container sx={{width:"100%", height:"100%"}}>


            <Container sx={{ width: "70%", height: "100%", margin: "65px auto", padding: "40px 0px", borderRadius: "12px", background: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: { xs: "100%" }, width: { sm: "90%" }, margin: { sm: "50px auto", xl: "80px auto", xs: "40px auto" } }}>


                <Stack sx={{ width: "90%", alignItems: 'center', gap: "40px", gap: { xs: "30px" } }}>

                    <img
                        width="220px"
                        src={`${Logo}`}
                        alt="Logo"
                    />

                    <Stack sx={{ width: "100%", gap: "25px", gap: { xs: "15px" } }}>


                        <Box sx={{ width: "100%", display: "flex", gap: "40px", flexDirection: { xs: "column" }, gap: { xs: "15px" }, flexDirection: { sm: "row" } }}>

                            <TextField
                                sx={{ width: "50%", width: { xs: "100%", sm: "50%" } }}
                                label="First Name"
                                variant="outlined"
                                type="fname"
                                placeholder="Enter your first name"
                                value={fname}
                                onChange={(e) => setFName(e.target.value)}
                            />

                            <TextField
                                sx={{ width: "50%", width: { xs: "100%", sm: "50%" } }}
                                label="Last Name"
                                variant="outlined"
                                type="lname"
                                placeholder="Enter your last name"
                                value={lname}
                                onChange={(e) => setLName(e.target.value)}
                            />

                        </Box>

                        <TextField
                            sx={{ width: "100%" }}
                            label="Email"
                            variant="outlined"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <TextField
                            sx={{ width: "100%" }}
                            label="Password"
                            variant="outlined"
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

                    <Typography sx={{ fontWeight: "600", color: "gray", textAlign: "center", fontSize: { xs: "15px", sm: "20px", xl:"25px" }, }} variant="h5" gutterBottom>PREVENTIVE MAINTENANCE MANAGMENT</Typography>

                </Stack>



            </Container >
        </Container>
    );
};

export default SignupForm;