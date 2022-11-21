import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost/proyectCar/public/api'

const TableBrands = () => {
  const [ brands, setBrands ] = useState( [] )

  useEffect ( ()=> {
      getAllBrands()
  }, [])

  const getAllBrands = async () => {
    const response = await axios.get(`${endpoint}/brands`)
    setBrands(response.data)
  }

  const deleteBrand = async (id) => {
    await axios.delete(`${endpoint}/brand/${id}`)
    getAllBrands()
  }
  return (
    <div>
        

        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                { brands.map( (brand) => (
                    <tr key={brand.id}>
                        <td> {brand.id}</td>
                        <td> {brand.name} </td>  
                        <td>
                            <Link to={`/proyectCar/public/brands/update/${brand.id}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={ ()=>deleteBrand(brand.id) } className='btn btn-danger'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default TableBrands