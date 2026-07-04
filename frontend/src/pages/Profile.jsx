import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {

        localStorage.removeItem("user");

        navigate("/login");

    };

    return (

        <div className="profile-page">

            <div className="profile-card">

                <h1>👤 My Profile</h1>

                <p><strong>Name:</strong> {user?.name}</p>

                <p><strong>Email:</strong> {user?.email}</p>

                <p><strong>User ID:</strong> {user?.id}</p>

                <button onClick={logout}>
                    Logout
                </button>

            </div>

        </div>

    );

}

export default Profile;