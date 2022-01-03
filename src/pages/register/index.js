import { Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";

export default Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const submit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <>
      <TextField
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        name='password'
        value='password'
        onChange={(e) => setPassword(e.target.password)}
      />
      <Button onClick={submit}>Register</Button>
    </>
  );
};
