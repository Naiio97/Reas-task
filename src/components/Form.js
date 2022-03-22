import Axios from 'axios'
import React, { useState } from 'react'
// import { ApiPost } from "../common/Api"
import '../scss/form.scss'

const Form = () => {
    const [formData, setFormData] = useState({
        estateType: "",
        fullName: "",
        phone: "",
        email: "",
        region: "",
        district: ""
    })

    const [count, setCount] = useState(0)

    const regions = [

        { value: 'Region', label: 'Kraj' },
        { value: 'Hlavní město Praha', label: 'Hlavní město Praha' },
        { value: 'Středočeský kraj', label: 'Středočeský kraj' },
        { value: 'Jihočeský kraj', label: 'Jihočeský kraj' },
        { value: 'Plzeňský kraj', label: 'Plzeňský kraj' },
        { value: 'Karlovarský kraj', label: 'Karlovarský kraj' },
        { value: 'Ústecký kraj', label: 'Ústecký kraj' },
        { value: 'Liberecký kraj', label: 'Liberecký kraj' },
        { value: 'Královéhradecký kraj', label: 'Královéhradecký kraj' },
        { value: 'Pardubický kraj', label: 'Pardubický kraj' },
        { value: 'Kraj Vysočina', label: 'Kraj Vysočinaj' },
        { value: 'Jihomoravský kraj', label: 'Jihomoravský kraj' },
        { value: 'Olomoucký kraj', label: 'Olomoucký kraj' },
        { value: 'Moravskoslezský kraj', label: 'Moravskoslezský kraj' },
        { value: 'Zlínský kraj', label: 'Zlínský kraj' },
    ]

    const estateTypes = [
        { value: 'Typ nemovitosti', label: "Typ nemovitosti"},
        { value: 'Byt', label: "Byt"},
        { value: 'Dům', label: "Dům"},
        { value: 'Pozemek', label: "Pozemek"}
    ]

    const resetForm = () =>{
        formData.fullName = ""
        formData.estateType= ""
        formData.phone= ""
        formData.email= ""
        formData.region= ""
        formData.district= ""
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:4000/api/post', formData)
            .then(res => {
                resetForm()
                alert("Potávka odeslána")
             })
             .catch(err => console.log(err))
        
    
    }





    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Vytvořit poptávku</h1>
                {count === 0 ? (
                   <div>
                      
                       <p className="step">Krok 1:</p>
                        <select
                            type="select"
                            required
                            value={formData.estateType}
                            name="estateType"
                            className="form-control"
                            onChange={(e) => setFormData({ ...formData, estateType: e.target.value })}
                            >
                            {estateTypes.map((estateType) => (
                                <option key={estateType.id} value={estateType.value} label={estateType.label} />
                                ))}
                        </select>
                   
                        <select
                            type="select"
                            required
                            value={formData.region}
                            name="region"
                            className="form-control"
                            onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                            >
                            {regions.map((region) => (
                                <option key={region.id} value={region.value} label={region.label} />
                                ))}
                        </select>
                        <br />
                        <input
                            type="text"
                            required
                            value={formData.district}
                            name="district"
                            className="form-control"
                            placeholder="Okres"
                            onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                            /><br />
                </div> 
                    ): null}
                {count === 1 ? (  
                <div>
                    <p className="step">Krok 2:</p>
                    <input
                        type="text"
                        required
                        value={formData.fullName}
                        name="fullName"
                        className="form-control"
                        placeholder="Jméno a příjmení"
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    /> <br />
                    <input
                        type="text"
                        required
                        value={formData.phone}
                        name="phone"
                        className="form-control"
                        placeholder="Telefon"
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    /> <br />
                    <input
                        type="email"
                        required
                        value={formData.email}
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    /> <br />
                    <button type="submit">Odeslat</button>
                </div>  
                    ): null}
            </form>
            <div className="step-buttons">
                <button
                    type="submit" 
                    className="step-button"
                    onClick={() => setCount(count -1)}
                    disabled={count < 1 }>
                    Zpět
                </button>
                <button
                    type="submit"
                    className="step-button"
                    onClick={() => setCount(count +1)}
                    disabled={count > 0 }>
                    Další
                </button>
            </div>    
        </div>
    )
}

export default Form;