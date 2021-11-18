@extends('layouts.main')

@section('content')

<table class="table table-striped">
    <thead>
        <tr>
            <th>Nome</th>
            <th>E-mail</th>
        </tr>
    </thead>
    <tbody>
        @foreach($users as $u)
        <tr>
            <td>{{ $u->name }}</td>
            <td>{{ $u->email }}</td>
        </tr>
        @endforeach
    </tbody>
</table>

@stop