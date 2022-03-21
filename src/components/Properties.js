import { ApiGet } from "../common/Api"
import React, { useEffect, useState } from "react";
import PropertyTable from "../components/PropertyTable"

const Properties = (props) => {
    const [propertyState, setPropertyState] = useState([]);

    useEffect(() => {
        ApiGet( "/api/lead" ).then((data) => setPropertyState(data) )
    }, []);
    return (
        <div>
            <h1>Poptávky</h1>
            <PropertyTable items={propertyState} label="Seznam poptávek" />
        </div>
    )
}


export default Properties;