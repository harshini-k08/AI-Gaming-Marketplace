import "../components/Auth/Auth.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function Login() {
  const navigate = useNavigate();

const [formData, setFormData] = useState({
  email: "",
  password: ""
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post("/login", formData);

    alert(response.data.message);

    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );

    navigate("/dashboard");
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert("Server Error");
    }
  }
};
  return (
    <div className="auth-container">
      <div className="auth-box">

        <h1>Login</h1>
       <form onSubmit={handleSubmit}>
        <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email"
/>

        <input
  type="password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="Password"
/>

        <button type="submit">
  Login
</button>
        </form>

        <p>
          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </p>

      </div>
    </div>
  );
}

export default Login;