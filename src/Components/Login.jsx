import React, { useContext, useEffect } from "react";
import { Context } from "./ContextAPI";
import { useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase-config";
import { toast } from "react-toastify";

export default function Login() {
  const { isLoading, setIsLoading, setIsLogin, isLogin, googleLogin, isGoogleLoading } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin !== 0) {
      navigate("/");
    }
  }, [isLogin]);

  const login = (e) => {
    e.preventDefault();
    setIsLoading(1);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(0);
        setIsLogin(1);
        toast.success("Login successfully");
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
                  <h2 className="text-center mb-4 fw-bold text-primary">Login</h2>

                  {/* Login Form */}
                  <form onSubmit={login} autoComplete="off">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
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
                      <label htmlFor="password" className="form-label fw-semibold">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-3 mb-3">
                      {isLoading === 1 ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                          Loading...
                        </>
                      ) : (
                        "Login"
                      )}
                    </button>
                  </form>

                  {/* Google Login */}
                  <button
                    type="button"
                    className="btn btn-outline-danger w-100"
                    onClick={googleLogin}
                    disabled={isGoogleLoading === 1}
                  >
                    {isGoogleLoading === 1 ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                        Loading...
                      </>
                    ) : (
                      "Login with Google"
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
