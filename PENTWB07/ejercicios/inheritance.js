		class Rect {
			constructor(length,width){
				this.length = length;
				this.width = width;
			}

			area() {
				console.log(this.length*this.width);
			}
		}

		class Sq extends Rect {
			constructor(length) {
				super(length,length)
			}
		}

		var s1 = new Sq(5);
		s1.area();


class Person {
			constructor(name,height){
				this.name = name;
				this.height = height;
			}

			info() {
				console.log(`${this.name} height is ${this.height} cm`);
			}
		}

		class Student extends Person {
			constructor(name,height,grade) {
				super(name,height);
				this.grade = grade;
			}

			result() {
				console.log(`${this.name} grade is ${this.grade}`)
		}
	}

		var p1 = new Student("Ally",170,3.5);
		p1.info();
		p1.result()
