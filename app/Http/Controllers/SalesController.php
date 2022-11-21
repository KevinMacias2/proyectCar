<?php

namespace App\Http\Controllers;

use App\Models\Sales;
use App\Http\Requests\StoreSalesRequest;
use App\Http\Requests\UpdateSalesRequest;
use Illuminate\Http\Request;
class SalesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sales = Sales::all();
        return $sales;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSalesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $sale = new Sales;
        $sale->product_id=$request->product_id;
        $sale->client_id=$request->client_id;
        $sale->stock=$request->stock;
        $sale->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
        $sale = Sales::find($id);
        return $sale;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function edit(Sales $sales)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSalesRequest  $request
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $sale = Sales::findOrFail($request->id);

        $sale->product_id = $request->product_id;
        $sale->client_id = $request->client_id;
        $sale->stock=$request->stock;

        $sale->save();

        return $sale;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $sale = Sales::destroy($id);
        return $sale;
    }
}
