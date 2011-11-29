var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

function isMac()
{
	if (BrowserDetect.OS == "Mac")
		return true;
	return false;
}

function isWindows()
{
	if (BrowserDetect.OS == "Windows")
		return true;
	return false;
}

function isLinux()
{
	if (BrowserDetect.OS == "Linux")
		return true;
	return false;
}

function isChrome()
{
	if (BrowserDetect.browser == "Chrome")
		return true;
	return false;
} //isChrome()

function isIE()
{
	if (BrowserDetect.browser == "Explorer")
		return true;
	return false;
} //isIE()


function isSafari()

{

	if (BrowserDetect.browser == "Safari")
		return true;
	return false;

} //isSafari()

function isFirefox()
{
	if (BrowserDetect.browser == "Firefox")
		return true;
	return false;
}

function iebody() 
{
    // Sense the difference between Strict and Quirks mode
    return (document.compatMode != "BackCompat"? document.documentElement : document.body);
}

function documentHeight()
{
	if (isIE())
	{
		return iebody().clientHeight;
	}
	else if (isFirefox())
	{
		return document.documentElement.clientHeight;
	}
	else if (isSafari())
	{
		return window.innerHeight;
	}
	else if (isChrome())
	{
		return window.innerHeight;
	}
	else
	{
		return document.height;
	}
}

function documentWidth()
{
	if (isIE())
	{
		return iebody().clientWidth;
	}
	else if (isFirefox())
	{
		return document.documentElement.clientWidth;
	}
	else if (isSafari())
	{
		return window.innerWidth;
	}
	else if (isChrome())
	{
		return window.innerWidth;
	}
	else
	{
		return document.width;
	}
}