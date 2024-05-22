import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormAddProduct = () => {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [msg, setMsg] = useState();
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/products", {
                name: name,
                price: price
            });
            navigate("/products")
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
        
    }
  return (
    <div>
        <h1 className='title'> Product </h1>
        <h1 className='subtitle'> add new product</h1>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="conten">
                <form onSubmit={saveProduct}>
                    <p className='has-text-centered'>{msg}</p>
                <div className="field">
                        <label className='label'>Name</label>
                        <div className="control">
                            <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='input' placeholder='Product Name'></input>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Price</label>
                        <div className="control">
                            <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} className='input' placeholder='Price'></input>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button type="submit" className='button is-success'>Save</button>
                        </div>                        
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAddProduct