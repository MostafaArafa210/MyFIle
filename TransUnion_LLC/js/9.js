// JavaScript Document
var siteID = document.URL.split('//')[1].split('.')[0];

// The site parameters are defined as:
// ['URL ID', 'Site / Application Name', Session Checkbox Flag, Deeplink Flag, Default Target, Language Selector Flag]
var urlId = 0;
var siteName = 1;
var sessionCheckBoxFlag = 2;
var deepLinkFlag = 3;
var defaultTarget = 4;
var langSelectFlag = 5;
var siteParametersArray = [
    ['vpnenroll', 'VPN Enroll', false, true, 'https://vpnenroll.transunion.com/', false],
    ['vpnenroll-o39web', 'VPN Enroll', false, true, 'https://vpnenroll-o39web.transunion.com/', false],
    ['vpnhelp', 'VPN Help', false, true, 'https://vpnhelp.transunion.com/', false],
    ['vpnhelp-o39web', 'VPN Help', false, true, 'https://vpnhelp-o39web.transunion.com/', false],

['url', 'Application Name', false, true, '/', false]
];

function readCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        
        var c = ca[i];
        
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
}

//set hidden TARGET variable based on SiteMinder QueryString (QS)
//if no QS set it to root
function setHiddenTarget()
{
    var sTarget = "/";
    for (i = 0; i < siteParametersArray.length; i++) { 
        if(siteParametersArray[i][urlId] == siteID)
        {
            sTarget = siteParametersArray[i][defaultTarget];
            break;
        }
    }
  
    var sURL = document.URL;
    var sArgStart = sURL.lastIndexOf("?");
    
    if( (sArgStart != -1) && (sArgStart != (sURL.length-1)) )
    {
        var sArgs = sURL.substr(sArgStart+1);
        var arrArgs = sArgs.split("&");
        
        for (var i = 0; i < arrArgs.length; i++)
        {
          var sArg = arrArgs[i].split("=");
        
          if( sArg[0] == "TARGET" )
          {
            sTarget = decodeURIComponent(sArg[1]);
            break;
          }
        }
    } 

    document.f.TARGET.value = sTarget;
}

function initPage() {
    if(readCookie('CORPTRYNO') > '0') {
        var tries = 5-readCookie('CORPTRYNO');
        $('#tries').html(tries);
        $('#loginAttemptNumberError').show();
    }
    var langArray = document.URL.split('languageCd-%253d');
    if (langArray.length > 1) {
        switch (langArray[1]) {
            case 'ENG':
                selectLanguage('ENG', 'eID:', 'Password:', 'Log In');
                break;
            case 'ESP':
                selectLanguage('ESP', 'ID Usuario:', 'ContraseÃ±a:', 'ConexiÃ³n');
                break;
            case 'POR':
                selectLanguage('POR', 'ID UsuÃ¡rio:', 'Senha:', 'Signon');
                break;
            case 'ZHT':
                selectLanguage('ZHT', 'ä½¿ç”¨è€… ID:', 'å¯†ç¢¼:', 'ç™»å…¥');
                break;
            case 'ZHS':
                selectLanguage('ZHS', 'ç”¨æˆ· ID:', 'å¯†ç :', 'ç™»å…¥');
                break;
            default:
        }
    }
    for (i = 0; i < siteParametersArray.length; i++) { 
        if(siteParametersArray[i][urlId] == siteID) {
            $('#appName').text(siteParametersArray[i][1]);
            if(siteParametersArray[i][sessionCheckBoxFlag]) {
                if($('#sessionCheck')) $('#sessionCheck').show();
            }
            if(siteParametersArray[i][deepLinkFlag]) {
                setHiddenTarget();
            }
            else {
                document.f.TARGET.value = siteParametersArray[i][defaultTarget];
            }
            if(siteParametersArray[i][langSelectFlag]) {
                if($('#languageSelect')) $('#languageSelect').show();
            }
            break;
        }
        else setHiddenTarget();
    }
}

function replaceQueryString(url,param,value)
{
    var re = new RegExp("([?|&])" + param + "=.*?(&|$)","i");
    if (url.match(re))
        return url.replace(re,'$1' + param + "=" + value + '$2');
    else if ( url.lastIndexOf("?") < 0 )
		return url + '?' + param + "=" + value;
	else
        return url + '&' + param + "=" + value;
}

// javaScript Language Selection
function selectLanguage(language, idText, passwordText, buttonText) 
{
	var sTarget = document.f.TARGET.value;
	
	var sNewTarget = replaceQueryString(sTarget, "languageCd", language);
	 
	document.f.TARGET.value = sNewTarget;
	
	$('#idLabel').text(idText);
	$('#passwordLabel').text(passwordText);
	$('#loginButton > span').text(buttonText);
	$('.langSelection').removeClass('selected');
	$('#' + language).addClass('selected');
}
