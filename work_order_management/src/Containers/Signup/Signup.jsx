import { useEffect, useState } from "react";
import { Link } from "react-router";

const SignupForm = ({theme}) => {
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
        <div>
            <input
                type="fname"
                placeholder="first name"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
            />
            <input
                type="lname"
                placeholder="last name"
                value={lname}
                onChange={(e) => setLName(e.target.value)}
            />
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
            <Link to="/login">
            <button
                onClick={() => setShouldSignup(true)}
                disabled={isLoading || !email || !password || !fname || !lname}>
                {isLoading ? "Signup in..." : "Signup"}
            </button>
            </Link>

        </div>
    );
};

export default SignupForm;