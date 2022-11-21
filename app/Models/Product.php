<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Product extends Model
{
    use HasFactory;

     //Many to many 
     public function plataforms(){
        return $this->belongsToMany(Plataform::class,'compatibilities','product_id','plataform_id')->withPivot('id');
    }
     //Many to many 
     public function clients(){
        return $this->belongsToMany(Client::class,'sales','product_id','client_id')->withPivot('id');
    }
}

