function loadWebPageContent(pagePath, div)
{
	if (!div)
		return null;
	
	//http://cbcassembly.org/cbc/php/fetchpage.php?p=../aboutus.html
	var fetchServiceUrl = "./../cbc/php/fetchpage.php?p=" + pagePath;
	var httpReq = null;
	if (window.XMLHttpRequest)
	{
		// code for IE7+, Firefox, Chrome, Opera, Safari
		httpReq = new XMLHttpRequest();
	}
	else
	{
		// code for IE6, IE5
		httpReq = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (!httpReq)
		return null;
	
	httpReq.open("GET",fetchServiceUrl, true);
	httpReq.send(null);
	httpReq.onreadystatechange=
	(
		function stateChanged() 
		{
			if (this.readyState==4) 
			{
				div.innerHTML = "<div>" + this.responseText + "</div>";
			}
		}
	);
	
} //loadWebPageContent
