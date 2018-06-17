

// Example 1
/*
		function f(x,y) {
			return x+y
		}
		f(2,4)
*/
		var f = (x, y) => x+y;
		console.log(f(2,4))


// Example 2
/*
		var hello = () => console.log("hello")
		hello();
*/
// Example 3
/*
		var namelist = function(name) {
			console.log(name);
		}


		var namelist = name => console.log(name);
		namelist(['Ally','Alfred','jane']);
*/
// Example 4
/*
		function negative(n1,n2) {
			return n1<0 || n2<0;
			}

		var negative = (n1,n2) => n1<0 || n1<0;

		console.log(negative(-1,2))

*/



var a = [4,5,6,7,-2,8,-3,9,10]
		console.log(a.filter( x => x>5))

		
		
var add = (...x) => {
		var sum = 0;
		for (let i of x) {
			sum = sum+i;
		}
		console.log(sum);
	}

	
	add(4,5,6,7)var [first,,,forth] = ["Spokane", "Boston", "Los Angeles", "Seattle", "Portland"];
		console.log(first);
		console.log(forth)
		
	
