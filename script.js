const student = {
		name: "Saurabh",
		age: 22,
		city: "delhi"
	
	};

	function getKeys(obj) {
	  return Object.keys(obj);
	}

	console.log(getKeys(student));