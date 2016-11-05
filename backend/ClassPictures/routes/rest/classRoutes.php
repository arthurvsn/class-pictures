<?php

Route::get('/class', 'ClassController@listClass');

Route::post('/class', 'ClassController@newClass');

Route::put('/class', 'ClassController@newClass');

Route::delete('/class', 'ClassController@deleteClass');