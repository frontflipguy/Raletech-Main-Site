<?php 

header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.

$url1 = (isset($_POST['URL1'])) ? $_POST['URL1'] : 'error';
$url2 = (isset($_POST['URL2'])) ? $_POST['URL2'] : 'error';

$proxy = '10.0.0.1:33634';
//$proxyLink = 'http://content.link-systems.com:80';

$proxyauth = 'braley:gG0n3sge';
$userAndPass = 'braley:gG0n3sge';

$output1 = '';
$output2 = '';

$output1 = doCurl($url1);
$output2 = doCurl($url2);
//$output1 = cleanup($output1);
//$output2 = cleanup($output2);
compare();

function doCurl($url){

global $proxy, $proxyauth, $userAndPass;

//assuming the url starts with "http://" so that the find position is not 0.
$home = strpos($url,'127.0.0.1');
$link = strpos($url,'link-systems');

$output = '';

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
if($home){
//do nothing
}
else if($link){
		
//curl_setopt($ch, CURLOPT_PROXY, $proxy);
//curl_setopt($ch, CURLOPT_PROXYUSERPWD, $proxyauth);
curl_setopt($ch, CURLOPT_USERPWD, $userAndPass);
}
else{ 
//curl_setopt($ch, CURLOPT_PROXY, $proxy);
//curl_setopt($ch, CURLOPT_PROXYUSERPWD, $proxyauth);
}

$output = curl_exec($ch);

curl_close($ch);

return $output;
}

function cleanup($output){

	$string = $output;
	$pattern = '/(\w+) (\d+), (\d+)/i';
	$replacement = '';
	$cleanOutput = preg_replace($pattern, $replacement, $output);
	
	return $cleanOutput;
}

function compare(){
	
	global $output1, $output2, $url1, $url2;
	
	if($output1==$output2){$result = 'Matching';}
	else{$result = "Not Matching";}  //\n" . "|". $output1 . " | " . $output2 . "|";}
	
	$val = array('url1' => $url1, 'url2' => $url2, 'result' => $result);
	
	echo json_encode($val);
}
?>