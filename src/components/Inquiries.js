import { ApiGet } from "../common/Api"
import React, { useEffect, useState } from "react";
import '../scss/inquiries.scss'


const Inquiries = (props) => {
    const [inquiriesState, setInquiriesState] = useState([]);

    useEffect(() => {
        ApiGet( "/api/lead" ).then((data) => setInquiriesState(data) )
    }, []);
    return (
        <main>
            <div>
                <div className="inquiries">
                    {inquiriesState.map((inquirie) => (
                        <div className="inquiries-div">
                            <div className="inquirie-info">
                                <h1>{inquirie.fullName}</h1>
                                <p>{`Typ nemovitosti: ${inquirie.estateType}`}</p>
                                <p>{`Telefon: ${inquirie.phone}`}</p>
                                <p>{`Mail: ${inquirie.email}`}</p>
                                <p>{`Kraj: ${inquirie.region}`}</p>
                                <p>{`Okres: ${inquirie.district}`}</p>
                            </div>
                    </div>
                    ))}
                    
                </div>
                
                
            </div>
        </main>
    )
}


export default Inquiries;