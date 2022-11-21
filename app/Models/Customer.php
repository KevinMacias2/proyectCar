<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        
    ];

    public function data(){
        return $this->belongsTo(LaborData::class);
    }

    public function sales(){
        return $this->hasMany(Sale::class);
    }
}
