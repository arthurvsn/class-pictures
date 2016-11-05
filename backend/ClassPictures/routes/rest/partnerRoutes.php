<?php

Route::get('/user', 'PartnerController@listUser');

Route::post('/user', 'PartnerController@newUser');

Route::put('/user', 'PartnerController@editUser');

Route::delete('/user', 'PartnerController@deleteUser');