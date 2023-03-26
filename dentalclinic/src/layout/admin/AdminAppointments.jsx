import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getAdminAppointments } from '../../services/apiCalls';
import { userData } from '../userSlice';

export const AdminAppointments = () => {

    const credentialRdx = useSelector(userData)

    const [appointments, setAppointments] = useState([]);

    
    useEffect(() => {
        if( appointments.length === 0){
            getAdminAppointments(credentialRdx.credentials.token)
            .then( result => {
                    setAppointments(result.data.userAppointment)
                }
            )
            .catch(error => console.log(error));
        }
    }, [appointments])
    return (
        
        <div className='b1 b2'>
        {  appointments.length > 0 ? 
    
            (<div>
                {
                    appointments.map((appoint) => {
                        return (
                            <div
                                onClick={()=>selected(appoint)}
                                key={appoint.id}>
                                    <ul>
                                {appoint.id}
                                <strong>Hour:</strong> &nbsp; {appoint.hour} &nbsp;
                                <strong>Date:</strong> &nbsp; {appoint.date} &nbsp;
                                <strong>Doctor:</strong> &nbsp; {appoint.Employee.User.name} &nbsp;
                                <strong>Patient:</strong> &nbsp; {appoint.User.name} &nbsp;
                                </ul>
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
   