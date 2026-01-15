import { Box, Button, colors, Container, Paper, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Logo from "../../Images/Logosmartproman.png";
import "./style.css"

const LoginForm = ({ theme }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [shouldLogin, setShouldLogin] = useState(false);

    useEffect(() => {
        if (!shouldLogin) return;

        const handleLogin = async () => {
            try {
                setIsLoading(true);
                console.log(user);

                const userData = await Login(email, password);
                setUser(userData);
            } catch (err) {
                setError(err.message || "Login failed");
                setUser(null);
            } finally {
                setIsLoading(false);
                setShouldLogin(false); // reset trigger
            }
        };

        handleLogin();
    }, [shouldLogin, email, password]);

    return (
        <Container sx={{ width: "100%", height: "100%" }}>


            <Container sx={{ width: "70%", height: "100%", margin: "65px auto", padding: "40px 0px", borderRadius: "12px", background: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: { xs: "100%" }, width: { sm: "90%" }, margin: { sm: "80px auto", xl: "120px auto", xs: "80px auto" } }}>


                <Stack sx={{ width: "90%", alignItems: 'center', gap: "40px", gap: { xs: "30px" } }}>

                    <img
                        width="220px"
                        src={`${Logo}`}
                        alt="Logo"
                    />

                    <Stack sx={{ width: "100%", gap: "25px", gap: { xs: "15px" } }}>


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

                    <Link to="/admin" style={{ width: "100%", borderRadius: "8px" }}>
                        <Button
                            sx={{ color: "black", background: "#8e8ef1ff", width: "100%", fontWeight: "600", fontSize: "18px", borderRadius: "8px" }}
                            variant="contained"
                            onClick={() => setShouldSignup(true)}
                            disabled={isLoading || !email || !password}>
                            {isLoading ? "Login..." : "Login"}
                        </Button>
                    </Link>

                    <Typography sx={{ fontWeight: "600", color: "gray", textAlign: "center", fontSize: { xs: "15px", sm: "20px", xl: "25px" }, }} variant="h5" gutterBottom>PREVENTIVE MAINTENANCE MANAGMENT</Typography>

                </Stack>



            </Container >
        </Container>
    );
};

export default LoginForm;