import { useState } from "react";
import Input from "./form/Input";
import { useNavigate, useOutletContext } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setJwtToken } = useOutletContext();
    const { setAlertMessage } = useOutletContext();
    const { setAlertClassName } = useOutletContext();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        

        if (email === "admin@example.com" && password === "admin") {
            setJwtToken("dummy-jwt-token");
            setAlertMessage("");
            setAlertClassName("d-none");
            navigate("/");
        } else {
            setAlertMessage("Login failed. Please try again.");
            setAlertClassName("alert alert-danger");
        }

    }

    return (
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    title="Email Address"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    autoComplete="email-new"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    title="Password"
                    name="password"
                    autoComplete="password-new"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <hr />

                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
        </div>
    );
}
export default Login;