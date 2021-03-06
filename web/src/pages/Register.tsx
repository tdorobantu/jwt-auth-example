import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useRegisterMutation } from "../generated/graphql";

interface Props {}

export const Register: React.FC<RouteComponentProps> = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register] = useRegisterMutation();
  
  return (
    <div className="">
      <form onSubmit={async e => {
          e.preventDefault()
          console.log('form submitted')
          console.log({email, password})
          const response = await register({
              variables: {
                  email, 
                  password
              }
          })

          console.log(response)
          history.push("/")
      }}>
          <div>
        <input
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        </div>
        <div>
        <input
          value={password}
          placeholder="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        </div>
        <button type="submit"> register</button>
      </form>
    </div>
  );
};

export default Register;
