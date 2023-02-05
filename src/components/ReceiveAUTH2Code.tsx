import React from 'react';
import { useLocation } from 'react-router-dom';

export const ReceiveAUTH2Code = (props: any) => {
    const {search, state} = useLocation()
    window.opener.postMessage({type: 'OAUTH_RESPONSE', payload: search.split("=")[1]},)
    window.opener.sessionStorage.setItem('state', search.split("=")[1])
    window.close();
    return (
        <div>
            <h1>sss {JSON.stringify(search) }</h1>
            <h1>  {JSON.stringify(state) }</h1>

        </div>
    )
}