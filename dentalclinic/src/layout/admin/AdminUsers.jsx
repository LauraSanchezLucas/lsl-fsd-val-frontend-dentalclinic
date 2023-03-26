import { bringUsers } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { addChoosen } from '../detailSlice';
// import { ProfileCards } from "../../components/profileCards/ProfileCards";

export const AdminUsers = () => {
    
    const [users, setUsers] = useState([]);

    const credentialRdx = useSelector(userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        console.log(persona, 'yuuuuuuuu')
        setTimeout(()=>{
            navigate("/profile");
        },500)
    }
  return (
    <div className="b1" >
    {  users.length > 0 ? 

        (<div>
            {
                users.map(
                    persona => {
                        return (
                            <div 
                                onClick={()=>selected(persona)} 
                                key={persona.id}>
                                <strong>{persona.name}&nbsp;</strong>
                                {persona.surname}&nbsp;
                                <hr></hr>
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

