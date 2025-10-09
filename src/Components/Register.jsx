import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { Context } from "./ContextAPI";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase-config";
import { toast } from "react-toastify";

export default function Register() {
  const { isLoading, setIsLoading, isLogin, setIsLogin, googleLogin, isGoogleLoading } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin === 1) {
      navigate("/");
    }
  }, [isLogin]);

  const register = (e) => {
    e.preventDefault();
    setIsLoading(1);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(0);
        setIsLogin(1);
        toast.success("Register successfully");
        localStorage.setItem("user-login", 1);
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(0);
      });

    e.target.reset();
  };

  return (
    <>
      <div className="container-fluid py-5 bg-light my-5 d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body p-4">
                  <h2 className="text-center mb-4 fw-bold text-primary">Register</h2>

                  {/* Register Form */}
                  <form onSubmit={register} autoComplete="off">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label fw-semibold">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100 mt-3 mb-3"
                      disabled={isLoading === 1}
                    >
                      {isLoading === 1 ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            aria-hidden="true"
                          ></span>
                          Loading...
                        </>
                      ) : (
                        "Register"
                      )}
                    </button>
                  </form>

                  {/* Google Register */}
                  <button
                    type="button"
                    onClick={googleLogin}
                    className="btn btn-outline-danger w-100"
                    disabled={isGoogleLoading === 1}
                  >
                    {isGoogleLoading === 1 ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          aria-hidden="true"
                        ></span>
                        Loading...
                      </>
                    ) : (
                      "Register with Google"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
}
