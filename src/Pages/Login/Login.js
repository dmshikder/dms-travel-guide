import { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending]= useSendPasswordResetEmail(auth);
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error.message}</p>;
  }


  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async() =>{
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
    toast('Sent email');
    }
    else{
      toast('Please enter your email address')
    }

  }

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>
        New to DMS Travel Guide? <Link
          to="/register"
          className="text-primary text-decoration-none "
          onClick={navigateRegister}
        >
          Please Register
        </Link>
      </p>
      <p>
        Forget Password? <button
         
          className="text-primary text-decoration-none btn btn-link "
          onClick={resetPassword}
        >
          Reset Password 
        </button>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
