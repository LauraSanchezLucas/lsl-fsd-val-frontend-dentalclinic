import React, {useEffect} from "react";


//Método de conexión en modo lectura a RDX.
import { useSelector } from "react-redux";
import { userData } from '../../pages/userSlice';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  //Guardo los datos de REDUX en una constante para poder acceder a ellos en Header
    const datosCredencialesRedux = useSelector(userData);

    const navigate = useNavigate();

useEffect(()=>{
    console.log(datosCredencialesRedux);
    })

    return (
    <div className="">
        {datosCredencialesRedux.credential.token ? (
        <div>
            <div>{datosCredencialesRedux?.credential?.usuario?.name}</div>
            <div>logout</div>
            <div onClick={()=>navigate("/users")}>users</div>
        </div>
        ) : (
        <div>
            <div>login</div>
            <div>register</div>
        </div>
        )}
    </div>
    );
};