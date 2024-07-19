/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protected ({children, authentication = true}) {

    const navigate = useNavigate()
    const [Loder, setLoder] = useState(true);
    const authStatus = useSelector(state => state.authStatus)

    useEffect(() => {

        // to easy
        // if (authStatus === true) {
        //     navigate("/")
        // } else if(authStatus === false) {
        //     navigate("/login")
        // }

        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoder(false)
    }, [authStatus, navigate, authentication])

    return (
        Loder ? <h1>Loding...!</h1> : <>{children}</>
    );
}
