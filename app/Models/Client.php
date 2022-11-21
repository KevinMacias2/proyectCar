<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
     //Many to many 
     public function products(){
        return $this->belongsToMany(Product::class,'sales','client_id','product_id')->withPivot('id');
    }

    public function role(){
        return $this->belongsTo(Role::class);
    }

    
}


