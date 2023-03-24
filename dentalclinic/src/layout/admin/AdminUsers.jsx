import { bringUsers } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";

export const AdminUsers = () => {
    
    const [users, setUsers] = useState([]);

    const credentialRdx = useSelector(userData);

    useEffect(()=>{
        if(users.length === 0){
            bringUsers(credentialRdx.credentials.token)
            .then(
                result => {
                    setUsers(result.data)
                }
            )
            .catch(error => console.log(error));
        }
        console.log(users)
    }, [users])

  return (
   <div></div>
  )
}

