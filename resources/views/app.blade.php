<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    <title>{{ $title ?? '' . env('APP_NAME') }}</title>
</head>
<body>

    <div id="app"></div><!-- end #app -->

    <script src="{{ mix('js/app.js') }}"></script>

</body>
</html>