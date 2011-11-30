<?php
// Returns a the content of given web page (web page path should be local to this server page)

$pagename = 0;

getInput();
processRequest();

function getInput()
{
	global $pagename;
	$pagename=$_GET["p"];
} //getInput()

function processRequest()
{
	global $pagename;
	$fp=null;
	$fileText="";
	if (!($fp = fopen($pagename, "r"))) {
		die("Could not open the page $pagename");
	}
	while(!feof($fp))
	{
		$fileText = $fileText . fgets($fp);
	}
	fclose($fp);
	echo $fileText;
} //processRequest()

?>