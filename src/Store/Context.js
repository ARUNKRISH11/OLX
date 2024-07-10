import { createContext, useState } from "react";

// <------- Firebase Context ------->
export const FirebaseContext = createContext(null)

// <------- User Context ------->
export const AuthContext = createContext(null)

// props have default children 
export default function Context({children}){
    // Firebase will return user detalies
    const [user, setUser] = useState(null)

    return(
        // Passing user and setUser to App.js to provide user everywhere
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}