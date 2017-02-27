<?php 

header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.

$radio = (isset($_POST['radio'])) ? $_POST['radio'] : 'error';
$job = (isset($_POST['job'])) ? $_POST['job'] : 'error';
$company = (isset($_POST['company'])) ? $_POST['company'] : 'error';
$location = (isset($_POST['location'])) ? $_POST['location'] : 'error';
$buzz1 = (isset($_POST['buzz1'])) ? $_POST['buzz1'] : 'error';
$buzz2 = (isset($_POST['buzz2'])) ? $_POST['buzz2'] : 'error';

$xml = new DOMDocument("1.0", "UTF-8");
$xml->preserveWhiteSpace = false;
$xml->formatOutput = true;

$xml->load('forms.xml');
$xml_main = $xml->getElementsByTagName('MAIN')->item(0);

$xml_entry = $xml->createElement('COMPANY');
$xml_entry->setAttribute("id", $company);

$radioEle = $xml->createElement('RADIO', $radio);
$jobEle = $xml->createElement('JOBTITLE', $job);
$locEle = $xml->createElement('LOCATION', $location);
$buzz1Ele = $xml->createElement('BUZZ1', $buzz1);
$buzz2Ele = $xml->createElement('BUZZ2', $buzz2);

$xml_entry->appendChild($radioEle);
$xml_entry->appendChild($jobEle);
$xml_entry->appendChild($locEle);
$xml_entry->appendChild($buzz1Ele);
$xml_entry->appendChild($buzz2Ele);

$xml_main->appendChild($xml_entry);

$xml->save('forms.xml');

?>