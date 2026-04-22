import { useContext } from "react";
import { UserContext } from "./user";
function ShowUser(){
    const {name,age} = useContext(UserContext);
    return(
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
    )
}

export default ShowUser;