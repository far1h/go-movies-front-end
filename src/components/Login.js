import { useState } from "react";
import Input from "./form/Input";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

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