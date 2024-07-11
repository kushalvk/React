/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

// "children" to access the data and move forward to this data.
const UserContextProvider = ({children}) => {
    
    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider