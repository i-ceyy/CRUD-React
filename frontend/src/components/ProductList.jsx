import React from 'react'

const ProductList = () => {
  return (
    <div>
        <h1 className='title'> Product </h1>
        <h1 className='subtitle'> List of Product </h1>

        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Created By</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ProductList