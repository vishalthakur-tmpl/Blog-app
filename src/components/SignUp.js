import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const showToastMessage = () => {
    toast.success("Form has Submitted ", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios({
      method: "POST",
      url: "https://nordic-rose-api.onrender.com/subscribe",
      data: {
        email,
      },
    })
      // await axios
      //   .post("https://nordic-rose-api.onrender.com/subscribe", email)
      .then((response) => {
        setEmail("");
        toast.success("SignUp Successfully :)", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        setEmail("");
        if (error.response && error.response.status === 409) {
          toast.warning("Email already exists :)", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("Please Try Again :(", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  return (
    <>
      <h2>Sign up for the newsletter</h2>
      <p>
        If you want relevant updates occasionally, sign up for the private
        newsletter. Your email is never shared.
      </p>
      <div className="inputEmail">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email..."
            required
            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
          />
          <button type="submit" className="sign-btn">
            SIGN UP
          </button>
          <ToastContainer style={{ fontSize: "20px" }} />
        </form>
      </div>
    </>
  );
};

export default SignUp;
