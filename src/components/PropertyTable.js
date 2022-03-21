import React from 'react'

const PropertyTable = (props) => {
    return (
        <div>
            <p>
                {props.label} {props.items.length}
            </p>
            <table className="property-table">
                <tbody>
                    {props.items.map((item, index) => (
                    <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{item.fullName}</td>
                    </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default PropertyTable