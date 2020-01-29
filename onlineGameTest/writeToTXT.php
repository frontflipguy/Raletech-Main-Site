<?php
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.

//stuff that reads in the user entries passed here from the javascript code

include 'ChromePhp.php';

$pos = (isset($_POST['pos'])) ? $_POST['pos'] : '5';

ChromePhp::log($pos);

$myfile = fopen("z.txt", "w");
fwrite($myfile, $pos);
fclose($myfile);


?>