<?php

Route::get('/user', 'UserController@listUsers');

Route::post('/user', 'UserController@newUser');

Route::put('/user', 'UserController@editUser');

Route::delete('/user', 'UserController@deleteUser');