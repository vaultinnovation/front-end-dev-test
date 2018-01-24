<?php  

// Cat API
// Get the data from the cat api and prepare it for ajax

$catapi = "http://thecatapi.com/api/images/get?format=xml&results_per_page=20";
$xmlstring = file_get_contents($catapi);
$xml = simplexml_load_string($xmlstring);
$json = json_encode($xml);

echo $json;