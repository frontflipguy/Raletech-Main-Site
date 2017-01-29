<?php
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.
header( "content-type: application/xml; charset=ISO-8859-15" );

//stuff that reads in the user entries passed here from the javascript code

$codeName = (isset($_POST['codeName'])) ? $_POST['codeName'] : 'no name';
$userText = (isset($_POST['userText'])) ? $_POST['userText'] : 'no name';

//stuff that opens, adds to, and closes the xml document

$xml = new DOMDocument("1.0", "UTF-8");
$xml->preserveWhiteSpace = false;
$xml->formatOutput = true;

$xml->load('madlibs.xml');
$xml_main = $xml->getElementsByTagName('MAIN')->item(0);

$xml_entry = $xml->createElement('TAG', $userText);
$xml_entry->setAttribute("id", $codeName);

$xml_main->appendChild($xml_entry);

$xml->save('madlibs.xml');


?>