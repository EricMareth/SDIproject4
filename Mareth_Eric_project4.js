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
	
// Checks if string is the same pattern as an e-mail address.
	var isEmail = function(mailAddress){
		var mailTest = /\w*\@\w*\.\w{2,6}/,			//This RegExp will check for any number of letters before the @ symbol, any number after, and up to 6 characters after the "." to allow for suffixes like .museum and .travel.
			atSymbol = /@/;							//RegExp checks first for an @ symbol.
		if (mailAddress.search(atSymbol) >= 0){

			if (mailTest.test(mailAddress) === true){
				return true;
			}else{
				return false;
			};

		}else{
			return false;
		};
	};

// URL identifier.
	var urlCheck = function(address){
		var urlPrefix = /http:|https:/;				//RegExp checks given string for "http:" or "https:" substring
		if (urlPrefix.test(address) === true){
			return true;
		}else{
			return false;
		};
	};
	
// Fixes number of decimal points to two.
	var dollarDecimal = function(amount){
		dubDecimal = amount.toFixed(2);
		return dubDecimal;
	};
	
// Converts number strings to actual number.
	var string2Num = function(string){
		var newNum = parseInt(string, 10);
		return newNum;
	};
	
	return{
		"phoneCheck"	:	phoneCheck,
		"isEmail"		:	isEmail,
		"urlCheck"		:	urlCheck,
		"dollarDecimal"	:	dollarDecimal,
		"string2Num"	:	string2Num
		
	};
};

var newLibrary = new myLibrary();

console.log(newLibrary.phoneCheck("407-922-6687"));
console.log(newLibrary.isEmail("ericmareth@marethphotography.com"));
console.log(newLibrary.urlCheck("http://www.marethphotography.com"));
console.log(newLibrary.dollarDecimal(42.1974));
console.log(newLibrary.string2Num("42"));