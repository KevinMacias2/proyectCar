<?php

namespace App\Http\Controllers;
use App\Models\Role;
use App\Models\Client;
use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
       
        $clients = Client::all();
        $roles = Role::all();
        $i = 0;
        $collection = array();

        foreach($clients as $client){
            foreach($roles as $role){
                if($client->role_id == $role->id){
                    $client->role_id = $role->name;
                    
                    $collection[$i] = $client;
                    $i++;

                }
                
            }
        }
       
        return $collection;
    }
 /**
  * /

    
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
     * @param  \App\Http\Requests\StoreClientRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $client = new Client;

        $client->name = $request->name;
        $client->lastname_p = $request->lastname_p;
        $client->lastname_m = $request->lastname_m;
        $client->password = $request->password;
        $client->email = $request->email;
        $client->gender = $request->gender;
        $client->age = $request->age;
        $client->role_id = $request->role_id;

        $client->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $client = Client::find($id);
       return $client;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateClientRequest  $request
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $client = Client::findOrFail($request->id);

        $client->name = $request->name;
        $client->lastname_p = $request->lastname_p;
        $client->lastname_m = $request->lastname_m;
        $client->password = $request->password;
        $client->email = $request->email;
        $client->gender = $request->gender;
        $client->age = $request->age;
        $client->role_id = $request->role_id;

        $client->save();

        return $client;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        $client = Client::destroy($id);
        return $client;
    }

    public function onlyClients()
    {
        $client = Client::where('role_id', 6)->get();
        return $client;
        
    }

   
}
