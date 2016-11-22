<?php

Route::get('/class', 'ClassController@listClass');

Route::post('/class', 'ClassController@newClass');

Route::put('/class/{id}', 'ClassController@editClass');

Route::delete('/class', 'ClassController@deleteClass');