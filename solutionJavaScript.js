const sqrt = function(number){
	if(number <= 0 || !number) return 'Invalid input';
	
	let init = 1;
	
	while(true){		
	 if(init * init == number) return init;
	 if(init * init > number) {var upper = init; break;}
	 init++;
	}
	
	let lower = upper - 1;
	
	//Keep a track of previous mid values of recursion
	let prevMid = null;
	const searchRoot = function(upper, lower,number){
		
		let mid = +((upper+lower)/2).toFixed(5);
		
		// At one point mid values become constant so our tracking variable allows us to check for that condition
		// When the same value occurs twice in the recursion phase we return the value and stop the recursion
		if(prevMid === mid) return prevMid;
		
		if(mid * mid === number) return mid;
		if(mid * mid < number) {
			prevMid = mid;
			return searchRoot(upper, mid,number);
		}
		if(mid * mid > number) {
			prevMid = mid;
			return searchRoot(mid, lower,number);
		}
	}

	return searchRoot(upper,lower,number)
}

console.log(sqrt(4));
