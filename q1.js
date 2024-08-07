// let num = [-5,-4,-3,-2,0,2,4,6,8];




const findPair = (number) => {
    for(let val of number){
        for (let i=1; i<number.length; i++){
            if(val + number[i] === 0 ){
                return [val, number[i]];
            }
        }
    }
    };

    
       findPair([-5,-4,-3,-2,0,2,4,6,8]);



 



