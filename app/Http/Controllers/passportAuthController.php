<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Validator;

class passportAuthController extends Controller
{

    public function register (Request $request){

        $validator = Validator::make($request -> all(),[
            'name' => 'required|min:4',
            'password' => 'required|min:8',
            'email' => 'required|email',
           
            
        ]);
        if($validator ->fails()){
            return $this.sendError('Validate error: ', $validator->errors());
        }
        $client = User::create(
            [
                'name' => $request->name,
                'password' => bcrypt($request->password),
                'email' => $request->email,
                
                
            ]
        );

        $token = $client->createToken('LaravelAuthApp')->accessToken;

        return response()->json(['token' => $token], 200);


    }



    public function login(Request $request){
        $data =[
            'email' => $request->email,
            'password' => $request->password
        ];

        if(auth()->attempt($data)){
            $token = auth()->user()->createToken('Laravel/AuthApp')->accessToken;
            return response()->json(['token' => $token], 200);

        }else{
            return response()->json(['error' =>'UnAuthorized'], 401); 
        }
    }
}
