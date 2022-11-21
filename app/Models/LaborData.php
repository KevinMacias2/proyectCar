<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LaborData extends Model
{
    use HasFactory;

    protected $fillable = [
        
    ];

    public function customers(){
        return $this->hasMany(Customer::class);
    }
}
