<?php 

// Get compiled asset
function asset($file)
{
    $assets = json_decode(file_get_contents(__DIR__ . '/build/rev-manifest.json'), true);
    return $assets[$file];
}

// Get cat data
$catapi = "http://thecatapi.com/api/images/get?format=xml&results_per_page=20";
$xmlstring = file_get_contents($catapi);
$xml = simplexml_load_string($xmlstring);

// print_r($xml->data->images->image);
// exit();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Vault Innovation">
    <link rel="shortcut icon" href="/favicon.ico">
    <title>Vault App</title>
    
    <!-- Custom styles for this template -->
    <link href="/build/<?php echo asset('app.css'); ?>" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="//oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="//oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
</head>

<body>

<!-- Fixed navbar -->
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button class="hamburger hamburger--spring navbar-toggle collapsed hide" 
            type="button" data-toggle="collapse" data-target="#navbar" 
            aria-expanded="false" aria-controls="navbar">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
            </button>

            <a class="navbar-brand" href="#"><img src="/images/logo.png" class="logo"/></a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Dashboard</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Users</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</nav>




<div class="container">
    
    <div class="row text-center text-lg-left" id="cat-grid"></div>
    
    <script id="cat-template" type="text/x-handlebars-template">
        {{#each image}}
            <div class="col-lg-3 col-md-4 col-xs-6">
              <a href="{{ source_url }}" 
              class="d-block mb-4 h-100 img-fluid img-thumbnail" 
              style="background-image: url({{ url }})"></a>
            </div>
        {{/each}}
    </script>
    
    

</div>

<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="/build/<?php echo asset('components.js'); ?>"></script>
<script src="/build/<?php echo asset('app.js'); ?>"></script>

</body>
</html>
