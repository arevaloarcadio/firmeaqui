<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="author" content="inFutura">
        <meta name="description" content="Intranet Grupo10mb">

        <title>{{ config('app.name') }}</title>

        <link href="{{ mix('/css/style.css') }}" rel="stylesheet">
        
        
        <script>
            window.Laravel = {!! json_encode([
                'csrfToken' => csrf_token(),
                'siteName'  => config('app.name'),
                'apiDomain' => config('app.url').'/api'
            ]) !!}
        </script>
    </head>
    <body>
        <div id="app">
            <app></app>
        </div>

        <input type="hidden" id="ip-host" name="ip-host">
        
        <script type="text/javascript">
            function get_ip(obj){
                document.getElementById('ip-host').value = obj.ip;
            } 
        </script>
        
        <script src="{{ mix('js/main.js') }}"></script>
        <script src="{{ asset('assets/jquery.js') }}"></script>
        <script src="{{ asset('assets/jquery-ui-1.10.4.min.js') }}"></script>
        <script type="text/javascript" src="https://api.ipify.org/?format=jsonp&callback=get_ip"></script>
    </body>

</html>