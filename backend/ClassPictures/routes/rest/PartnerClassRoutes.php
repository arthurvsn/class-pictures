<?php

Route::get('/partnerClass', 'PartnerClassController@listPartnerClass');

Route::post('/partnerClass', 'PartnerClassController@newPartnerClass');

Route::put('/partnerClass', 'PartnerClassController@editPartnerClass');

Route::delete('/partnerClass', 'PartnerClassController@deletePartnerClass');