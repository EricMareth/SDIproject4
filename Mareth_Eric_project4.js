// Eric Mareth
// SDI 1211
// Project 4
// myLibrary

var myLibrary = function() {

// URL identifier
	var urlCheck = function(address){
		var urlPrefix = /http:|https:/;				//regExp checks given string for "http:" or "https:" substring
		if (urlPrefix.test(address) === true){
			return true;
		}else{
			return false;
		};
	};
	
	
	return{
		"urlCheck"	:	urlCheck
	}
	
	
};

var newLibrary = new myLibrary();

console.log(newLibrary.urlCheck("https://www.marethphotography.com"));