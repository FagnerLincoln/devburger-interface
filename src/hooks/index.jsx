
import { CartProvaider } from "./CartContext";
import { UserProvider } from "./UserContext";

const AppProvider = ({children}) => {
    return (
    
    <UserProvider>
    <CartProvaider>{children}</CartProvaider>
    </UserProvider>

);
};

export default AppProvider;
