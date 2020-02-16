<?php 

header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.

$id = (isset($_POST['id'])) ? $_POST['id'] : 'error';
$id = substr($id, 1, strlen($id)-2);

$txt = fopen("testfile.txt", "w");
fwrite($txt, $id . "\n"); //writes to a log file

$xmlString = '<?xml version="1.0" encoding="UTF-8"?><MAIN></MAIN>';

$xml = new DOMDocument;
$xml->preserveWhiteSpace = false;
$xml->formatOutput = true;
$xml->loadXML($xmlString);

$xml_entry = $xml->getElementsByTagName('MAIN')->item(0);

$objNameArray = array("BG","ARM1","SUBARM1","SUBSUBARM1","ARM2","SUBARM2","SUBSUBARM2","ARM3","SUBARM3","SUBSUBARM3");
$attrNameArray = array("color","radius","direction","speed","radiusOn","offset","endpointDecor","endColor");

$xml_obj = "";

for ($x = 0; $x < 10; $x++) {
	//create xml tag for a given object
	$xml_obj = $xml->createElement($objNameArray[$x]);
	
	fwrite($txt, "outer for loop iter " . $x . "\n"); //write to log
	
	//iteratively add the xml elements representing the attributes of the object
	for ($y = 0; $y < 8; $y++) { //who let me code!? who let me have a computer!?!?!?
		
		$placeHolderVar = (isset($_POST['arm' . $x . $attrNameArray[$y]])) ? $_POST['arm' . $x . $attrNameArray[$y]] : 'error';
		$placeHolderVar = substr($placeHolderVar, 1, strlen($placeHolderVar)-2);
		$placeHolderElement = $xml->createElement(strtoupper($attrNameArray[$y]), $placeHolderVar);
		$xml_obj->appendChild($placeHolderElement);

	}
	
	//append the created object to the containing POI element
	$xml_entry->appendChild($xml_obj);
	
	$xml_obj = "";
}

$xml->save('./saved_designs/' . $id . '.xml');

fclose($txt);
?>