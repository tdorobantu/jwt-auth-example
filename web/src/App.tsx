import {useHelloQuery} from './generated/graphql'
import React from 'react';
import {gql} from "apollo-boost"

function App() {

  const {data, loading} = useHelloQuery()

if(loading || !data) { return (
  <div className="">loading...</div>
);}
 return <div>{data.hello}</div>
}

export default App;
