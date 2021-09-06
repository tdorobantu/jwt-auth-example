import React from 'react';
import { useByeQuery } from '../generated/graphql';

interface Props {}

export const Bye: React.FC<Props> = () => {
   const {data, loading} = useByeQuery()
    
   
   return loading? (<p>loading</p>) : (data? (<p>{data!.bye}</p>) : <p>no data</p>)

}
