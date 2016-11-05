<?php

Route::get('/classPictures', 'ClassPicturesController@listClassPictures');

Route::post('/classPictures', 'ClassPicturesController@newClassPictures');

Route::put('/classPictures', 'ClassPicturesController@editClassPictures');

Route::delete('/classPictures', 'ClassPicturesController@deleteClassPictures');