
import {createContext, useContext, useState, useEffect} from 'react';
const UserContext = createContext({});


export const UserProvider = ({children}) => {
    const [userInfo, setUserInfor] = useState({});

    const putUserData = (userInfor) => {
        setUserInfor(userInfor)

localStorage.setItem('devBurger:userData', JSON.stringify(userInfor));

    };

    const logout = () => {
        setUserInfor({});
        localStorage.removeItem('devBurger:userData');
    };

useEffect(()=>{
const userInfoLocalStorage = localStorage.getItem('devBurger:userData')

if(userInfoLocalStorage){

    setUserInfor(JSON.parse(userInfoLocalStorage))
}

},[]);

return (
    <UserContext.Provider value={{userInfo, setUserInfor, putUserData, logout}}>
        {children}
        </UserContext.Provider>
);

};

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be avalid context');
    }
    return context;

}