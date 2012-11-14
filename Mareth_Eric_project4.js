// Eric Mareth
// SDI 1211
// Project 4
// myLibrary

var myLibrary = function() {

// Checks for a 123-456-7890 pattern.
	var phoneCheck = function(number){
		var numCheck = /\d{3}\-\d{3}\-\d{4}/;		//RegExp checks given string for 3 numbers, a dash, three numbers, a dash, and 4 numbers.
		if (numCheck.test(number) === true){
			return true;
		}else{
			return false;
		};
	};


// URL identifier
	var urlCheck = function(address){
		var urlPrefix = /http:|https:/;				//RegExp checks given string for "http:" or "https:" substring
		if (urlPrefix.test(address) === true){
			return true;
		}else{
			return false;
		};
	};
	
	return{
		"phoneCheck"	:	phoneCheck,
		"urlCheck"		:	urlCheck
		
	};
};

var newLibrary = new myLibrary();

console.log(newLibrary.phoneCheck("407-922-6687"));
console.log(newLibrary.urlCheck("https://www.marethphotography.com"));
