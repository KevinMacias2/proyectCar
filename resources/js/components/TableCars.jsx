import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost/proyectCar/public/api'

const TableCars = () => {
  const [ cars, setCars ] = useState( [] )

  useEffect ( ()=> {
      getAllCars()
  }, [])

  const getAllCars = async () => {
    const response = await axios.get(`${endpoint}/cars`)
    setCars(response.data)
  }

  const deleteCar = async (id) => {
    await axios.delete(`${endpoint}/car/${id}`)
    getAllCars()
  }
  return (
    <div>
        

        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Image</th>
                    <td>Model</td>
                    <td>Type</td>
                    <td>Year</td>
                    <td>Color</td>
                    <td>Price</td>
                    <td>KM</td>
                    <td>Source</td>
                    <td>Equipment</td>
                    <td>Sales</td>
                    <td>Observation</td>
                    <td>Brand</td>
                </tr>
            </thead>
            <tbody>
                { cars.map( (car) => (
                    <tr key={car.id}>
                        <td> {car.image}</td>
                        <td> {car.model}</td>
                        <td> {car.type}</td>
                        <td> {car.year}</td> 
                        <td> {car.color}</td>
                        <td> {car.price}</td>
                        <td> {car.km}</td>
                        <td> {car.source}</td>
                        <td> {car.equipment} </td>
                        <td> {car.numSales} </td>
                        <td> {car.observation}</td>
                        <td> {car.brandId} </td>         
                        <td>
                            <Link to={`/proyectCar/public/brands/update/${car.id}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={ ()=>deleteBrand(car.id) } className='btn btn-danger'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default TableCars