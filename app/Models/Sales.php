<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sales extends Model
{
    use HasFactory;
    protected $fillable = [
        
    ];
    
    
    public function cars(){
        return $this->belongsTo(Car::class);
    }
    
    public function customers(){
        return $this->belongsTo(Customer::class);
    }
    
    public function sellers(){
        return $this->belongsTo(Seller::class);
    }
}
