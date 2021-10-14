import React from "react";
import { Button, Form } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
const Login = () => {
  const { signInUsingGoogle,signinUsingGit,setIsLoading } = useAuth();
 const location = useLocation()
 const history = useHistory()
 const redirect_uri = location.state?.from || '/home'
 const  handleClickGit = (e)=>{
  e.preventDefault();
  signinUsingGit()
 }
  const handleClickGoogle = (e)=>{
    e.preventDefault();
    signInUsingGoogle().then((result) => history.push(redirect_uri))
    .finally(() => setIsLoading(false));
  } 
  return (
    <div className="text-center my-5 container w-50 shadow-lg py-4">
      <h2 className="py-5">please login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button onClick={handleClickGit} variant="primary" type="submit">
          login in with github
        </Button><br />
        <Button onClick={handleClickGoogle} variant="danger" className="my-4" type="submit">
          sign In Google
        </Button><br />
      </Form>

      {/* <Button onClick={signInUsingGoogle}>Google sign in</Button> */}
    </div>
  );
};

export default Login;
