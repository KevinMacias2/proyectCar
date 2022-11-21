<?php

namespace App\Http\Controllers;

use App\Models\Compatibility;
use App\Http\Requests\StoreCompatibilityRequest;
use App\Http\Requests\UpdateCompatibilityRequest;
use Illuminate\Http\Request;

class CompatibilityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $compatibility = Compatibility::all();
        return $compatibility;
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
     * @param  \App\Http\Requests\StoreCompatibilityRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $comp = new Compatibility;
        $comp->product_id=$request->product_id;
        $comp->plataform_id=$request->plataform_id;
       
        $comp->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Compatibility  $compatibility
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
        $comp = Compatibility::find($id);
        return $comp;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Compatibility  $compatibility
     * @return \Illuminate\Http\Response
     */
    public function edit(Compatibility $compatibility)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCompatibilityRequest  $request
     * @param  \App\Models\Compatibility  $compatibility
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $comp = Compatibility::findOrFail($request->id);

        $comp->product_id = $request->product_id;
        $comp->plataform_id = $request->plataform_id;

        $comp->save();

        return $comp;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Compatibility  $compatibility
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        $comp = Compatibility::destroy($id);
        return $comp;
    }
}
