import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { bringAppointment } from '../../Services/apiCalls';
import { userData } from '../userSlice';

export const SeeAppointment = () => {

    const credentialRdx = useSelector(userData)

    const [appointments, setAppointments] = useState([]);

    
    useEffect(() => {
        if(appointments.length === 0){
            bringAppointment(credentialRdx.credentials.token)
            .then( result => {
                    console.log(result, 'tttttttt')
                    setAppointments(result.data.userAppointment)
                }
            )
            .catch(error => console.log(error));
        }
    }, [appointments])
    console.log(appointments, 'hhhhhh')
  return (
    <div>
    {  appointments.length > 0 ? 

        (<div>
            {
            appointments.map(
                appoint => {
                    return (
                        <div
                            onClick={()=>selected(appoint)}
                            key={appoint.id}>
                            {appoint.id} &nbsp;
                            {appoint.hour} &nbsp;
                            {appoint.date} &nbsp;
                            {appoint.Employee.User.name}
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

