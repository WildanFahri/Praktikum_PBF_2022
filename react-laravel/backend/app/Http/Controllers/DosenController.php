<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Dosen;

class DosenController extends Controller
{
    private $status = 200;
    // --------------- [ Save Dosen function ] -------------
    public function createDosen(Request $request)
    {
        // validate inputs
        $validator = Validator::make(
            $request->all(),
            [
                "first_name" => "required",
                "last_name" => "required",
                "title" => "required",
                "email" => "required|email",
                "phone" => "required|numeric"
            ]
        );
        // if validation fails
        if ($validator->fails()) {
            return response()->json([
                "status" => "failed",
                "validation_errors" => $validator->errors()
            ]);
        }
        $dosen_id = $request->id;
        $dosenArray = array(
            "first_name" => $request->first_name,
            "last_name" => $request->last_name,
            "title" => $request->title,
            "full_name" => $request->first_name . " " . $request->last_name . ", " . $request->title,
            "email" => $request->email,
            "phone" => $request->phone
        );
        if ($dosen_id != "") {
            $dosen = Dosen::find($dosen_id);
            if (!is_null($dosen)) {
                $updated_status = Dosen::where(
                    "id",
                    $dosen_id
                )->update($dosenArray);
                if ($updated_status == 1) {
                    return response()->json([
                        "status" => $this->status,
                        "success" => true, "message" => "dosen detail updated successfully"
                    ]);
                } else {
                    return response()->json([
                        "status" => "failed",
                        "message" => "Whoops! failed to update, try again."
                    ]);
                }
            }
        } else {
            $dosen = Dosen::create($dosenArray);
            if (!is_null($dosen)) {
                return response()->json([
                    "status" => $this->status,
                    "success" => true, "message" => "dosen record created successfully",
                    "data" => $dosen
                ]);
            } else {
                return response()->json(["status" => "failed", "success"
                =>
                false, "message" => "Whoops! failed to create."]);
            }
        }
    }
    // --------------- [ dosens Listing ] -------------------
    public function dosensListing()
    {
        $dosens = Dosen::all();
        if (count($dosens) > 0) {
            return response()->json([
                "status" => $this->status,
                "success"
                => true, "count" => count($dosens), "data" =>
                $dosens
            ]);
        } else {
            return response()->json(["status" => "failed", "success" =>
            false, "message" => "Whoops! no record found"]);
        }
    }
    // --------------- [ dosen Detail ] ----------------
    public function dosenDetail($id)
    {
        $dosen = Dosen::find($id);
        if (!is_null($dosen)) {
            return response()->json([
                "status" => $this->status,
                "success"
                => true, "data" => $dosen
            ]);
        } else {
            return response()->json(["status" => "failed", "success" =>
            false, "message" => "Whoops! no dosen found"]);
        }
    }
    //---------------- [ Delete dosen ] ----------
    public function dosenDelete($id)
    {
        $dosen = Dosen::find($id);
        if (!is_null($dosen)) {
            $delete_status = dosen::where("id", $id)->delete();
            if ($delete_status == 1) {
                return response()->json([
                    "status" => $this->status,
                    "success" => true, "message" => "dosen record
        deleted successfully"
                ]);
            } else {
                return response()->json([
                    "status" => "failed",
                    "message" =>
                    "failed to delete, please try again"
                ]);
            }
        } else {
            return response()->json(["status" => "failed", "message"
            =>
            "Whoops! no dosen found with this id"]);
        }
    }
}
