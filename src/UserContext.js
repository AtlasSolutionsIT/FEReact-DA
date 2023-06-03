import { createContext, useEffect, useState } from "react";
import Req from "./Req";

export const UserContext = createContext({});


export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);


    useEffect(() => {
        if(!user) {
            Req.get('dottore')
            .then(({data}) => {
                setUser({...data, ruolo: 'Dottore'});
                setReady(true);
            })
            .catch(() => setReady(true));
        }
    }, []);

    return (
        <UserContext.Provider value={{user, setUser, ready}}>
            {children}
        </UserContext.Provider>
    );
}