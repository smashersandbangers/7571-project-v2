//let's get this started
function testMe()
{

	
}


//send the name of the parameter to get it's value
//function getParamValue(paramName)
{
	//log( window.location.search );
	//var params={};
	
	//this regex was stolen from stack overflow http://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js
	//window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,
		//function(str,key,value)
		//{
			//params[key] = value;
		//}
	//);
	//log( params[paramName] );
	
	//return params[paramName];
}

//finding events from exisitng calendar
function findEvent(calendarName,eventid)
{
	console.log(calendarName);
	var eventsArray = getCalendarEvents(calendarName);
	var eventsList = '';
	
	console.log(eventsArray);
	for(var i=0; i<eventsArray.length; i++)
	{
		
		var eventObj = eventsArray[i];
		eventsList += "<ul>Event Name "+i;
		eventsList += "<ul>";
		console.log( eventObj);
		eventsList += "<li> Name: "+ eventObj.title +" "+ eventObj.location+ " "+ eventObj.start + " "+eventObj.end; + "</li>";
				eventsList += "</ul></ul>";
	}
	console.log(eventsList );
	document.getElementById("out").innerHTML = eventsList;
}


