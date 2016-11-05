<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use DB;

class ClassPicturesController extends Controller
{
	// list class_pictures
	public function listClassPictures() {
		return DB::select('select * from class_pictures');
	}

	// new class_pictures
	public function newClassPictures(Request $request) {
		$data = sizeof($_POST) > 0 ? $_POST : json_decode($request->getContent(), true);

		$res = DB::insert('insert into class_pictures (class_id, created_at, partner_id, path) values (?, ?, ?, ?)',
			[$data['class_id'], new \DateTime(), $data['partner_id'] $data['path']]);

		return ["status" => ($res)?'ok':'erro'];
	}

	// edit class_pictures
	public function editClassPictures($id, Request $request) {
		// $data = sizeof($_POST) > 0 ? $_POST : json_decode($request->getContent(), true);

		// $res = DB::update("update class_pictures set class_id = ?, created_at = ?, partner_id = ?, path = ?, WHERE id = ?",
		// 	[$data['class_id'], $data['created_at'], $data['partner_id'], $data['path'], $id]);

		// return ["status" => ($res)?'ok':'erro'];
	}

	// delete class_pictures
	public function deleteClassPictures($id) {
		// $res = DB::delete("delete from class_pictures WHERE id = ?", [$id]); //Excluir

		// return ["status" => ($res)?'ok':'erro'];
	}
}
