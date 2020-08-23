<?php

require_once '../HTTPRequest/src/HTTPRequest.php';

/*
$http = new HTTPRequest('www.google.com');
$http->execute();
echo $http->getResponseText();
$http->close();*/

$http = new HTTPRequest('maps.googleapis.com', '/maps/api/geocode/json');
$params = array(
    'addres' => 'The moon',
    'sensor' => false
);
$http->setQueryParams($params);
$http->execute();
echo $http->getResponseText();
$http->close();