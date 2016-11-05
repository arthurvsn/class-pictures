<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use DB;

class PartnerClassController extends Controller
{
	// list partner_class
	public function listPartnerClass() {
		return DB::select('select * from partner_class');
	}

	// new partner_class
	public function newPartnerClass(Request $request) {
		$data = sizeof($_POST) > 0 ? $_POST : json_decode($request->getContent(), true);

		$res = DB::insert('insert into partner_class (class_id, partner_id, type) values (?, ?, ?)',
			[$data['class_id'], $data['partner_id'], $data['type']]);

		return ["status" => ($res)?'ok':'erro'];
	}
 
	// edit partner_class
	public function editPartnerClass($id, Request $request) {
		$data = sizeof($_POST) > 0 ? $_POST : json_decode($request->getContent(), true);

		$res = DB::update("update partner_class set class_id = ?, partner_id = ?, type = ?, WHERE id = ?",
			[$data['class_id'], $data['partner_id'], $data['type'], $id]);

		return ["status" => ($res)?'ok':'erro'];
	}

	// delete partner_class
	public function deletePartnerClass($id) {
		$res = DB::delete("delete from partner_class WHERE id = ?", [$id]); //Excluir

		return ["status" => ($res)?'ok':'erro'];
	}
}
