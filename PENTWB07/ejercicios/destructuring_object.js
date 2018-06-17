
		
		const person = {  
  			name: 'Gaby',
  			age: '24',
  			facts: {
    			hobby: 'Photo',
    			work: 'Software Developer'
  			}
		}

		const {name, age} = person;  
		console.log(name, age); 
		

				var vacation = {
			destination: "Chile",
			travelers: 2,
			activity: "skiing", 
			cost: 4000
		};

		function vacationMarketing({destination, activity}) {
			return `Come to ${destination} and do some ${activity}`
		}

		console.log(vacationMarketing(vacation));

