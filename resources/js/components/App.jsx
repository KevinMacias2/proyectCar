import * as React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";

//Components of Brands
import TableBrand from "./TableBrands";
import InsertBrand from "./InsertBrand";
import UpdateBrand from "./UpdateBrand";

//Components of Cars
import TableCars from "./TableCars";


//Components of Category
import InsertCategory from "./InsertCategory";

import InsertLaborData from "./InsertLaborData";
import InsertCustomer from "./InsertCustomer";
import Login from "./login";


export default function App() {
    return (
        <div>

            <BrowserRouter>
                <Routes>

                 
                        <Route path="/proyectCar/public/" element={<NavBar />}>

                            <Route index element={<Home />}/>
                            <Route path="brands" element={<TableBrand />} />
                            <Route path="brand" element={<InsertBrand />} />
                            <Route path="brands/update/:id" element={<UpdateBrand/>} />

                            <Route path="cars" element={<TableCars />} />
                            <Route path="login" element={<Login />} />


                            <Route path="store_category" element={<InsertCategory />} />

                            <Route path="store_laborData" element={<InsertLaborData />} />
                            <Route path="store_customer" element={<InsertCustomer />} />

                           




                    </Route>


                </Routes>

            </BrowserRouter>
        </div>
    );
}

