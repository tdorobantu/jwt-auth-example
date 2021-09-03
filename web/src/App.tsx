import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import {gql} from "apollo-boost"

function App() {

  const {data, loading} = useQuery(gql`
  {
    hello
  }
  `)
  
if(loading) { return (
  <div className="">loading...</div>
);}
 return <div>{JSON.stringify(data)}</div>
}

export default App;
