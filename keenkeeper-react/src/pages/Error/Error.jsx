import React from 'react';
import { useRouteError } from 'react-router';

const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Oops!</h1>
            <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>Sorry, an unexpected error has occurred.</p>
            <p style={{ color: 'gray' }}>
                <i>{error?.statusText || error?.message || "Page Not Found"}</i>
            </p>
        </div>
    );
};

export default Error;
