import React from 'react';
import { useLocation } from 'react-router-dom';
const queryString = require('query-string');

export const ReceiveAUTH2Code = (props: any) => {
  const {search, state} = useLocation()
  let queryResults = queryString.parse(search)

    window.opener.postMessage({type: 'OAUTH_RESPONSE', payload: queryResults})
    window.opener.sessionStorage.setItem('state', search.split("=")[1])
  
   // window.close();
    return (
        <div>
            <h1>sss {JSON.stringify(search.split("=")[1]) }</h1>
            <h1>  {JSON.stringify(queryResults) }</h1>

        </div>
    )
  
}