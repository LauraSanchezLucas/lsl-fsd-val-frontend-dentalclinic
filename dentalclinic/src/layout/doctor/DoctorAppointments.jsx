import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getdoctorAppointments } from '../../services/apiCalls';
import { userData } from '../userSlice';

export const DoctorAppointments = () => {

    const credentialRdx = useSelector(userData)

    const [appointments, setAppointments] = useState([]);

    
    useEffect(() => {
        if( appointments.length === 0){
            getdoctorAppointments(credentialRdx.credentials.token)
            .then( result => {
                    console.log(result, 'tttttttt')
                    setAppointments(result.data.userAppointment)
                }
            )
            .catch(error => console.log(error));
        }
    }, [appointments])
    console.log('dddddd', appointments )
    return (
        
        <div>
        {  appointments.length > 0 ? 
    
            (<div>
                {
                    appointments.map((appoint) => {
                            return (
                                <div 
                                    onClick={()=>selected(appoint)} 
                                    key={appoint.id}>
                                        {appoint.date} &nbsp;
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
   