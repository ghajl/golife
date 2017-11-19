function jsonToObj(input) {
	// const res = [{name:"glader",pattern:[[0,0],[0,1],[0,2],[1,0],[2,1]]},
	// {name:"lightweight space ship",pattern:[[50,10],[50,13],[49,14],[48,10],[48,14],[47,11],[47,12],[47,13],[47,14]]}];
	// console.log(input);
	return JSON.parse(input);
}

function httpGet(url) {
/*cross-origin request*/
return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      
      // if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); // fix IE8/9
      // xhr.open('GET', url);
      // xhr.onload = printResult; 
      // xhr.send();
      if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open('GET', url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open('GET', url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
    xhr.onload = function(result) {
      // if (this.status == 200) {
      //   resolve(this.response);
      // } else {
      //   var error = new Error(this.statusText);
      //   error.code = this.status;
      //   reject(error);
      // }
      var response = result.currentTarget.response || result.target.responseText;
      resolve(response);
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

}

function getData (url) {

return PatternFetcher.httpGet(url);
}
 
function getPatterns (url) {
    // var url = 'https://gist.githubusercontent.com/ghajl/d873bcb8d32128b32618c7468dc6ca43/raw/f0b89570a30ab023b6a4daf36ec1211e18986c67/patterns.json'
    
    return PatternFetcher.getData(url).then(function(val){
    	return PatternFetcher.jsonToObj(val);
    });
    

}


export default getPatterns