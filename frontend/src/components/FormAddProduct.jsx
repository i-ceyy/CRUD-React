import React from 'react'

const FormAddProduct = () => {
  return (
    <div>
        <h1 className='title'> Product </h1>
        <h1 className='subtitle'> add new product</h1>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="conten">
                <form >
                <div className="field">
                        <label className='label'>Name</label>
                        <div className="control">
                            <input type='text' className='input' placeholder='Product Name'></input>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Price</label>
                        <div className="control">
                            <input type='text' className='input' placeholder='Price'></input>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className='button is-success'>Save</button>
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