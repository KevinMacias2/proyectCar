<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    protected $fillable = [
        
    ];

    public function brands(){
        return $this->belongsTo(Brand::class);
    }

    public function sales(){
        return $this->hasMany(Sale::class);
    }
}
