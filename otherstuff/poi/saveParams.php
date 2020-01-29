<?php 

header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.

$id = (isset($_POST['id'])) ? $_POST['id'] : 'error';

$txt = fopen("testfile.txt", "w");
fwrite($txt, $id);
fclose($txt);

$xml = new DOMDocument("1.0", "UTF-8");
$xml->preserveWhiteSpace = false;
$xml->formatOutput = true;

$xml->load('pois.xml');

$xml_entry = $xml->createElement('POI');
$xml_entry->setAttribute("id", $id);

$objNameArray = array("BG","ARM1","SUBARM1","SUBSUBARM1","ARM2","SUBARM2","SUBSUBARM2","ARM3","SUBARM3","SUBSUBARM3");
$attrNameArray = array("color","radius","direction","speed","radiusOn","offset","endpointDecor","endColor");

for ($x = 0; $x < 10; $x++) {
	//create xml tag for a given object
	$xml_obj = $xml->createElement(objNameArray[$x]);
	
	//iteratively add the xml elements representing the attributes of the object
	for ($y = 0; $y < 10; $x++) {
		
		
		$placeHolderVar = (isset($_POST['arm' . $x . $attrNameArray[$y]])) ? $_POST['arm' . $x . $attrNameArray[$y]] : 'error';
		$placeHolderElement = $xml->createElement(strtoupper($attrNameArray[$y]), $placeHolderVar);
		$xml_obj->appendChild($placeHolderElement);
	}
	
	//append the created object to the containing POI element
	$xml_entry->appendChild($xml_obj);
}

$xml_main = $xml->getElementsByTagName('MAIN')->item(0);
$xml_main->appendChild($xml_entry);

$xml->save('pois.xml');

?>