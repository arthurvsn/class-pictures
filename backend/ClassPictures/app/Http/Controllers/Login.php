<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use DB;

class Login extends Controller
{
    //login
	public function login(Request $request) {
		$data = sizeof($_POST) > 0 ? $_POST : json_decode($request->getContent(), true);
		$auth = false;
		$db = DB::select('select * from class where email = ?', $data['email']);

		if(count($db) > 0) {
			foreach ($db as $response) {
				if($response['password'] == $data['password']) {
					$auth = true;
				}
			}
		}

		if($auth) {
			return array('type' => 'S', 'message' => 'Login realizado com sucesso!');
		} else {
			return array('type' => 'N', 'message' => 'Falha no login!');
		}
	}
}
