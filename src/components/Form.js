import Axios from 'axios'
import React, { useState } from 'react' 
// import { ApiPost } from "../common/Api"
import '../scss/form.scss'

const Form = () => {
    const [formData, setFormData] = useState ({
        estateType:"",
        fullName:"",
        phone: "",
        email: "",
        region: "",
        district: ""
    })

 

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:4000/api/post', formData)
        .then(res=> {
            console.log(formData);
        })
    }
   


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Vytvořit poptávku</h1>
                <input
                    type="text" 
                    value={formData.estateType}
                    name="estateType" 
                    className="form-control"
                    placeholder="Typ nemovitosti (byt, dům nebo pozemek)"
                    onChange={(e)=> setFormData({...formData, estateType: e.target.value})}
                /> <br />
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    className="form-control"
                    placeholder="Jméno a příjmení"
                    onChange={(e)=> setFormData({...formData, fullName: e.target.value})}
                /> <br />
                <input
                    type="text"
                    value={formData.phone}
                    name="phone"
                    className="form-control"
                    placeholder="Telefon"
                    onChange={(e)=> setFormData({...formData, phone: e.target.value})}
                /> <br />
                <input
                    type="text"
                    value={formData.email}
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e)=> setFormData({...formData, email: e.target.value})}
                /> <br />
                <input
                    type="select"
                    value={formData.region}
                    name="region"
                    className="form-control"
                    placeholder="Kraj"
                    onChange={(e)=> setFormData({...formData, region: e.target.value})}
                /><br />
                <input
                    type="text"
                    value={formData.district}
                    name="district"
                    className="form-control"
                    placeholder="Okres"
                    onChange={(e)=> setFormData({...formData, district: e.target.value})}
                /><br />
                <button>Odeslat</button>
            </form>
        </div>
    ) 
}

export default Form;