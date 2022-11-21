<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seller extends Model
{
    use HasFactory;

    protected $fillable =[
        
    ];

    public function catagories(){
        return $this->belongsTo(Category::class);
    }

    public function sales(){
        return $this->hasMany(Sale::class);
    }
}
