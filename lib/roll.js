function roll(a, b, c){ 	
                       var sides = a; 	
                       var dice = b; 	
                       var rolls = c; 	
                       var results = new Array(c); 	
                       for (let d = 0; d < rolls; d++){ 		
                                  var result = 0; 		
                                  for(let i = 1; i < dice; i++){ 			
                                             result = Math.floor(Math.random()*sides)+1 + result; 		                                  } 		
                                  results[d] = result; 	
                       } 	
                       return {        
                      "sides": sides,         
                      "dice": dice,         
                      "rolls": rolls,         
                      "results": results       
                      };
 } 
export {roll};