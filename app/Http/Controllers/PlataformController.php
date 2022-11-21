<?php

namespace App\Http\Controllers;

use App\Models\Plataform;
use App\Http\Requests\StorePlataformRequest;
use App\Http\Requests\UpdatePlataformRequest;
use Illuminate\Http\Request;

class PlataformController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $plataform = Plataform::all();
        return $plataform;
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
     * @param  \App\Http\Requests\StorePlataformRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Data

        $plataform = new Plataform;
        $plataform->name=$request->name;
        $plataform->company_id=$request->company_id;
        $plataform->save();
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Plataform  $plataform
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
        $plataform = Plataform::find($id);
        return $plataform;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Plataform  $plataform
     * @return \Illuminate\Http\Response
     */
    public function edit(Plataform $plataform)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePlataformRequest  $request
     * @param  \App\Models\Plataform  $plataform
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $plataform = Plataform::findOrFail($request->id);

        $plataform->name = $request->name;
        $plataform->company_id = $request->company_id;

        $plataform->save();

        return $plataform;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Plataform  $plataform
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        $plataform = Plataform::destroy($id);
        return $plataform;
    }

    public function showTest(Request $request){
        $plataform = Plataform::where('id', $request->id)->get();
        return $plataform;
    }
}
