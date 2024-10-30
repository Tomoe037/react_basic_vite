import { createContext, useState } from 'react';

export const AuthContext = createContext({
    email: "",
    phone: "",
    fullName: "",
    role: "",
    avatar: "",
    id: ""
});

export const AuthWrapper = (props) => {
    const [user, setUser] = useState({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: ""
    })
    return (
        // truyen bien obj tuong tu props
        <AuthContext.Provider value={{ user, setUser }}>
            {/* truyen gi vao day cung dc, truyen dong */}
            {props.children} 
        </AuthContext.Provider>
    )
}

