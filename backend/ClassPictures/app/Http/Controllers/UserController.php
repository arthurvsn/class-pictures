<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use DB;

class UserController extends Controller
{

	// list users
    public function listUsers() {
		return DB::select('select * from user');
	}
 
 	// new user
	public function newUser(Request $request){
		// $data = sizeof($_POST) > 0 ? $_POST : json_decode($request->getContent(), true); // Pega o post ou o raw
		// $res = DB::insert('insert into pessoa (nome, email) values (?, ?)', [$data['nome'], $data['email']]); // Insert
		// return ["status" => ($res)?'ok':'erro'];
	}
 
	// edit user
	public function editUser($id, Request $request){
		// $data = sizeof($_POST) > 0 ? $_POST : json_decode($request->getContent(), true); // Pega o post ou o raw
		// $res = DB::update("update pessoa set nome = ?, email = ? WHERE id = ?",[$data['nome'], $data['email'], $id]); //Update
		// return ["status" => ($res)?'ok':'erro'];
	}
 
	// Excluindo pessoas
	public function deleteUser($id){
		// $res = DB::delete("delete from pessoa WHERE id = ?", [$id]); //Excluir
		// return ["status" => ($res)?'ok':'erro'];
	}
}
