class PhoneCrypter{
	static charCode = {
		'a' : '12',
		'b' : '22',
		'c' : '32',
		'd' : '13',
		'e' : '23',
		'f' : '33',
		'g' : '14',
		'h' : '24',
		'i' : '34',
		'j' : '15',
		'k' : '25',
		'l' : '35',
		'm' : '16',
		'n' : '26',
		'o' : '36',
		'p' : '17',
		'q' : '27',
		'r' : '37',
		's' : '47',
		't' : '18',
		'u' : '28',
		'v' : '38',
		'w' : '19',
		'x' : '29',
		'y' : '39',
		'z' : '49',
		' ' : '10',
		'1' : '11',
		'2' : '42',
		'3' : '43',
		'4' : '44',
		'5' : '45',
		'6' : '46',
		'7' : '57',
		'8' : '48',
		'9' : '59',
		'0' : '20',
		'.' : '30'
	}

	static crypt(message, options = { dashed: false, offset: 0 }){
		let cryptedMessage = '';

		for(let char in message){
			let n = PhoneCrypter.charCode[message[char].toLowerCase()];

			if(n != null || n == ' '){
				if(options.dashed && char > 0){
					cryptedMessage += '-';
				}

				cryptedMessage += parseInt(n) + options.offset;
			}
		}

		return cryptedMessage;
	}

	static parse(cryptedMessage, options = { offset: 0 }){
		let parsedMessage = '';
		let cleanedMessage = cryptedMessage.replaceAll('-', '');

		for(let i = 0; i < cleanedMessage.length; i+=2){
			let code = parseInt(cleanedMessage.substr(i, 2)) - options.offset + "";

			parsedMessage += PhoneCrypter.getCharFromCode(code);
		}

		return parsedMessage;
	}

	static getCharFromCode(code){
		return Object.keys(PhoneCrypter.charCode).find(key => PhoneCrypter.charCode[key] === code);
	}
}