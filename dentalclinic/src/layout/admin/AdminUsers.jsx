import { bringUsers } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { addChoosen } from '../detailSlice';

export const AdminUsers = () => {
    
    const [users, setUsers] = useState([]);

    const credentialRdx = useSelector(userData);

    useEffect(()=>{
        if(users.length === 0){
            bringUsers(credentialRdx.credentials.token)
            .then(
                result => {
                    console.log(result.data.user, 'tttttttt')
                    setUsers(result.data.user)
                }
            )
            .catch(error => console.log(error));
        }
        console.log(users)
    }, [users])

    const selected = (persona) => {
        
        //Primero guardo en RDX los datos escogidos...

        dispatch(addChoosen({ choosenObject: persona }))

        setTimeout(()=>{
            navigate("/profile");
        },500)
    }
  return (
    <div>
    {  users.length > 0 ? 

        (<div>
            {
                users.map(
                    persona => {
                        return (
                            <div 
                                onClick={()=>selected(persona)} 
                                key={persona.id}>
                                {persona.name}
                                
                            </div>
                        )
                    }
                )
            }
        </div>)

        : 

        (<div>ESTAN VINIENDO</div>)

    }

 </div>
)
}

