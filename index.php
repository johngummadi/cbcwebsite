<?php
// This file will open indexpage.html (previously known as "index.html") and returns the contents.
//	This is to solve the issue with cache/refreshing.
$file = "indexpage.html";
$fp=null;
$fileText="";

if (!($fp = fopen($file, "r"))) {
    die("Could not open index file");
}
while(!feof($fp))
{
	$fileText = $fileText . fgets($fp);
}
fclose($fp);
echo $fileText;
?>