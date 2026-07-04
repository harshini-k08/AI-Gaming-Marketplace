import "../components/Auth/Auth.css";
import { Link } from "react-router-dom";
import api from "../api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
});
const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};
const handleSubmit = async (e) => {

    e.preventDefault();

    try{

        const response = await api.post("/register", formData);

        alert(response.data.message);

        navigate("/login");

    }
    catch(error){

        alert("Registration Failed");

        console.log(error);

    }

};
  return (
    <div className="auth-container">
      <div className="auth-box">

        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>

        <input
    type="text"
    name="name"
    placeholder="Full Name"
    value={formData.name}
    onChange={handleChange}
/>

        <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
/>

        <input
    type="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
/>

        <button type="submit">
    Register
</button>
</form>

        <p>
          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>
    </div>
  );
}

export default Register;