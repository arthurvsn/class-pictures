<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use DB;

class ClassController extends Controller
{
	// list class
	public function listClass() {
		return DB::select('select * from class');
	}

	// new class
	public function newClass(Request $request) {
		$data = sizeof($_POST) > 0 ? $_POST : json_decode($request->getContent(), true);

		$res = DB::insert('insert into class (created_at, created_by, icon_path, name) values (?, ?, ?, ?)',
			[$data['created_at'], $data['created_by'], $data['icon_path'] $data['name']]);

		return ["status" => ($res)?'ok':'erro'];
	}

	// edit class
	public function editClass($id, Request $request) {
		$data = sizeof($_POST) > 0 ? $_POST : json_decode($request->getContent(), true);

		$res = DB::update("update class set created_at = ?, created_by = ?, icon_path = ?, name = ?, WHERE id = ?",
			[$data['created_at'], $data['created_by'], $data['icon_path'], $data['name'], $id]);

		return ["status" => ($res)?'ok':'erro'];
	}

	// delete class
	public function deleteClass($id) {
		$res = DB::delete("delete from class WHERE id = ?", [$id]); //Excluir

		return ["status" => ($res)?'ok':'erro'];
	}
}
