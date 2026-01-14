import { useEffect, useState } from "react";
import { Link } from "react-router";

const LoginForm = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [shouldLogin, setShouldLogin] = useState(false);

    useEffect(() => {
        if (!shouldLogin) return;

        const handleLogin = async () => {
            try {
                setIsLoading(true);
                setError(null);
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
        <div>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />


            <Link to="/admin">
                <button
                    onClick={() => setShouldLogin(true)}
                    disabled={isLoading || !email || !password}>
                    {isLoading ? "Login in..." : "Login"}
                </button>
            </Link>

        </div>
    );
};

export default LoginForm;