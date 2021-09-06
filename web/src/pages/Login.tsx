import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { useLogInMutation } from '../generated/graphql';
import {authToken, updateAuthToken}  from "../authToken"

interface Props {

}

export const Login: React.FC<RouteComponentProps> = ({history}) => {
    
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [login] = useLogInMutation();
  
return (
    <div className="">
      <form onSubmit={async e => {
          e.preventDefault()
          console.log('form submitted')
          console.log({email, password})
          const response = await login({
              variables: {
                  email, 
                  password
              }
          })
          updateAuthToken(response.data!.login.accessToken)
          console.log(authToken)
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
        <button type="submit"> Log In</button>
      </form>
    </div>
  )
}