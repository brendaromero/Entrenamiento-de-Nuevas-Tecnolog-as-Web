		class Rect {
			constructor(length,width){
				this._length = length;
				this._width = width;
			}

			area() {
				console.log(this._length*this._width);
			}

			get length() {
        		return this._length;
    		}


    		set length(length) {
       			 this._length= length;  
    		}

		}

		var r1 = new Rect(5,4);
		r1.area();
		console.log(r1.length);
		r1.length = 10;
		r1.area();
		console.log(r1.length);


class Person {
			constructor(name,height){
				this._name = name;
				this._height = height;
			}

			get name() {
				return this._name;
			}

			get height() {
				return this._height;
			}

			set name(name) {
				this._name = name;
			}

			set height(height) {
				this._height = height;
			}

			info() {
				console.log(`${this._name} height is ${this._height} cm`);
			}
		}

		var p1 = new Person("Ally",170);
		p1.info();
		p1.name = "Alfred";
		p1.height = 175;
		p1.info();
