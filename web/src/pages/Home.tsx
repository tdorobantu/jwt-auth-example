import React from "react";
import { Link } from "react-router-dom";
import { useDisplayUsersQuery } from "../generated/graphql";

interface Props {}

export const Home: React.FC<Props> = () => {
  const {data, loading} = useDisplayUsersQuery({fetchPolicy: "network-only"})
  
 

  { if (!data) {
    return (<p>loading...</p>)
  }
 return(
   <div>
   <p>Valid Users:</p>
   <ul>
   {data.users.map(users => {return (<li id={users.id.toString()}>user id: {users.id} | user email: {users.email}</li>)})}
   </ul>
   </div>
 )
  }
  
}