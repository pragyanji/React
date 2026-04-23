import { createContext, useState } from "react";
import ShowUser from "./showUser";

export const UserContext = createContext();
function User (){
    // const[name,setName]= useState("Pragyan")
    
    return(
        <>
        <UserContext.Provider value={{name:"Pragyan",age : 24}}>    
        <div>
            <h1>Welcome Back:</h1>
        </div>
        <ShowUser/>
        </UserContext.Provider>
        </>
    )
}

export default User;
