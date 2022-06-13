function isLeapYear(year) {
    if (year % 4 == 0) {
        if(year % 100 == 0){
            if(year % 400 != 0)
            return false;
            else{
                return true;
            }
        }
        else{
        return true;
        }
    }
    
    else {
        return false;
    }
}

const myYear = 1800;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Ans :', isMyYearLeapYear);

const yourYear = 2224;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('is your year leap year', isYourYearLeapYear);

// function squareroot(number) {
//     for (var i = 0; i * i <= number; i++) {
//     if (i * i === number)
//     return i;
//     }
//     return number; 
//     }

// let num = squareroot(5);
// console.log(num);

// function squareroot(a){ 
//     return a**(0.5); 
// } 

//   let a = squareroot(5);
// console.log(a);

// function squareroot(number) {
//     var lo = 0, hi = number;
//     while(lo <= hi) {
//          var mid = Math.floor((lo + hi) / 2);
//          if(mid * mid > number) hi = mid - 1;
//          else lo = mid + 1;
//     }
//     return hi;
// }

//   let a = squareroot(2);
// console.log(a);



// function squareRoot(n){
//     var avg=(a,b)=>(a+b)/2,c=5,b;
//     for(let i=0;i<20;i++){
//         b=n/c;
//         c=avg(b,c);
//     }
//     return c;
// }

// var result1 = squareRoot(145);
// console.log(result1);



//  function squareRoot(x) {
//     if(x==0 || x == 1) return x;

//     let ans, absX = Math.abs(x);
//     let tolerance = 0.00001;
//     while(true){
//         ans = (x+absX/x)/2;
//         if(Math.abs(x-ans) < tolerance) break;
//         x = ans;
//     }
//     return ans;
// };

// var result1 = squareRoot(25)
// console.log(result1);


