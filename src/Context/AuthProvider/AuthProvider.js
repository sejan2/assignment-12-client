// 1
import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';



// 2  6
export const AuthContext = createContext(null);
// 5 children
const AuthProvider = ({ children }) => {
    // 4
    const allContexts = useFirebase();
    return (
        // 3
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;