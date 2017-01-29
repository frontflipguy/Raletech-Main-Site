<?php
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.
header( "content-type: application/xml; charset=ISO-8859-15" );

//stuff that reads in the user entries passed here from the javascript code

$name = (isset($_POST['userText'])) ? $_POST['userText'] : 'no name';
$computedString = "Hi, " . $name;
echo $computedString;

//stuff that opens, adds to, and closes the xml document

$xml = new DOMDocument("1.0", "UTF-8");
$xml->preserveWhiteSpace = false;
$xml->formatOutput = true;

$xml->load('something.xml');
$xml_main = $xml->getElementsByTagName('MAIN')->item(0);

$xml_entry = $xml->createElement('TAG', $computedString);
$xml_entry->setAttribute("id", $name);

$xml_main->appendChild($xml_entry);

$xml->save('something.xml');


?>