import { useState } from "react";
import { login } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const { loginAdmin } = useAuth();

    const [loading,setLoading]=useState(false);

    const [formData,setFormData]=useState({

        email:"",

        password:""

    });

    const handleChange=(e)=>{

        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });

    };

    const handleSubmit=async(e)=>{

        e.preventDefault();

        setLoading(true);

        try{

            const data=await login(

                formData.email,

                formData.password

            );

            loginAdmin(

                data.token,

                data.admin

            );

            navigate("/admin/dashboard");

        }

        catch(err){

            alert("Invalid Credentials");

        }

        finally{

            setLoading(false);

        }

    };

    return(

        <div className="login-page">

            <form

                className="login-form"

                onSubmit={handleSubmit}

            >

                <h1>Admin Login</h1>

                <input

                    type="email"

                    name="email"

                    placeholder="Email"

                    value={formData.email}

                    onChange={handleChange}

                    required

                />

                <input

                    type="password"

                    name="password"

                    placeholder="Password"

                    value={formData.password}

                    onChange={handleChange}

                    required

                />

                <button>

                    {

                        loading

                        ?

                        "Logging in..."

                        :

                        "Login"

                    }

                </button>

            </form>

        </div>

    );

};

export default Login;