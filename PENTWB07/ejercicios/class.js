
		class Person {
			constructor(name,height){
				this.name = name;
				this.height = height;
			}

			info() {
				console.log(`${this.name} height is ${this.height} cm`);
			}
		}

		var p1 = new Person("Ally",170);
		p1.info();


