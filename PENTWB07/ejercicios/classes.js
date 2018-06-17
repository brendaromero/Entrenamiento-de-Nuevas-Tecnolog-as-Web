
		class Rect {
			constructor(length,width){
				this.length = length;
				this.width = width;
			}

			area() {
				console.log(this.length*this.width);
			}
		}

		var r1 = new Rect(5,4);
		r1.area();


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


