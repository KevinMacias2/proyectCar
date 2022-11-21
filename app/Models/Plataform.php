<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Plataform extends Model
{
    use HasFactory;

    public function company(){
        return $this->belongsTo(Company::class);
    }

    //Many to many 
    public function products(){
        return $this->belongsToMany(Product::class,'compatibilities','plataform_id', 'product_id')->withPivot('id');
    }
}
