//[1,2,3,7,8,6,,3,5,9,7]// output -> // 13,20,24,24,22,23,24// answer-> 24

//sum of concecutive biggest number;

// formula loop = 10 - 4 + 1 = 7


//  const findLargerst = (array,number) => {

//     if (number>array){

//         throw new Error("number must be greater than array");

//     }
//     else {
//         let maxSum =0;
//         for (let i=0; i<array.length - number + 1; i++){

//              let temprary = 0;
//             for (let j=0; j<number; j++ ){
//                 temprary = temprary + array[i + j];
//             }
//             if (temprary > maxSum ){
//                 maxSum = temprary;
//             }
//         }
//         return maxSum;
//     }
// }

//  findLargerst([1,2,3,7,8,6,3,5,9,7] ,4); 







