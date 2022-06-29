<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dosen extends Model
{
    use HasFactory;
    protected $table = 'dosens';

    protected $fillable = [
        'first_name',
        'last_name',
        'title',
        'full_name',
        'email',
        'phone',
    ];
}