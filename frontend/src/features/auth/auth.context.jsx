import { createContext, useState, useEffect } from "react";
import { getMe } from "./services/auth.api";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)  // ← start as true

    useEffect(() => {
        getMe()
            .then(data => setUser(data.user))
            .catch(() => setUser(null))
            .finally(() => setLoading(false))  // ← always set false when done
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
            {!loading && children}  
        </AuthContext.Provider>
    )
}
