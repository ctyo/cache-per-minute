(function () {
    /*
     * set repeat span
     */
    var repeat_span = 60*1000*60; // one hour is default
    var unit_value = 60*1000*60;; // default is hour
    var term_value = localStorage.term;

    switch (localStorage.unit) {
    case "0" : // second
	unit_value = 1000;
	break;
    case "1" : // minute
	unit_value = 1000*60;
	break;
    case "2" : // hour
	unit_value = 60*1000*60;
	break;
    case "3" : // day
	unit_value = 24*60*1000*60;
	break;
    default :	
	break;
    }

    if (term_value && unit_value) {
	repeat_span = term_value * unit_value;
    } else {
	repeat_span = 1 * unit_value;
    }


    var option = {};
    var option_key = ["cache", "downloads", "fileSystems", "appcache", "cookies", "formData", "history", "indexedDB", "localStorage", "pluginData", "passwords", "webSQL"];
    
    for (var i in option_key) {
	if (localStorage[option_key[i]] === 'true') {
	    option[option_key[i]] = true;
	}
    }


    console.log('delete option is');
    console.dir(option);
    console.log('start clear ' + repeat_span + ' milliseconds.');
	

    setInterval(function () {
	chrome.browsingData.remove({}, option, function () {
	    console.log('cache clear');
	});
    }, repeat_span);

})();
