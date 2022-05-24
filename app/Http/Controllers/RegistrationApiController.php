<?php

namespace App\Http\Controllers;

use App\Models\registration;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RegistrationApiController extends Controller
{
    public function index()
    {
        return registration::all();
    }

    public function store(Request $request)
    {

        $validator =  Validator::make($request->all(), [
            'username' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
            'phone' => 'required|min:13',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'ERRORvalidation',
                'data' => $validator->errors(),
                'status' => 401
            ]);
        } else {
            try {
                $register = registration::create($validator->validate());
                return response()->json([
                    'message' => 'OK',
                    'data' => $request->all(),
                    'status' => 200
                ]);
            } catch (Exception $e) {
                return response()->json([
                    'message' => 'ERROR',
                    'data' => $e,
                    'status' => 409
                ]);
            }
        }
    }

    public function update(registration $registration)
    {
        request()->validate([
            'username' => 'required',
            'lastname' => 'required',
            'email' => 'required',
            'phone' => 'required',
        ]);

        $success = $registration->update([
            'username' => request('name'),
            'lastname' => request('lastname'),
            'email' => request('email'),
            'phone' => request('phone'),
        ]);

        return [
            'success' => $success
        ];
    }

    public function destroy(registration $registration)
    {
        $success = $registration->delete();

        return [
            'success' => $success
        ];
    }
}
