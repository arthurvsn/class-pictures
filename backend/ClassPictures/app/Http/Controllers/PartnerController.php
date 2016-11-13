<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use DB;

class PartnerController extends Controller
{

	// list partner
    public function listUser() {
		return DB::select('select * from partner');
	}
 
 	// new partner
	public function newUser(Request $request) {
		$data = sizeof($_POST) > 0 ? $_POST : json_decode($request->getContent(), true);

		$res = DB::insert('insert into partner (identification, name, partner_type, password, phone, status, email) values (?, ?, ?, ?, ?, ?, ?)',
			[$data['identification'], $data['name'], $data['partner_type'], $data['password'], $data['phone'], $data['status'], $data['email']]);

		return ["status" => ($res)?'ok':'erro'];
	}
 
	// edit partner
	public function editUser($id, Request $request) {
		$data = sizeof($_POST) > 0 ? $_POST : json_decode($request->getContent(), true);

		$res = DB::update("update partner set identification = ?, name = ?, partner_type = ?, password = ?, phone = ?, status = ?, email = ?, WHERE id = ?",
			[$data['identification'], $data['name'], $data['partner_type'], $data['password'], $data['phone'], $data['status'], $data['email'], $id]);

		return ["status" => ($res)?'ok':'erro'];
	}
 
	// delete partner
	public function deleteUser($id) {
		$res = DB::delete("delete from partner WHERE id = ?", [$id]); //Excluir

		return ["status" => ($res)?'ok':'erro'];
	}
}
