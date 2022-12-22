// function toCamelCase(str){
//     let res= str.split('_').toUpperCase();
//     return res;
// }

// console.log(toCamelCase('trhr_caca'));


function camelCase(str){
        var ans = str.toLowerCase();
        return ans.split("_").reduce((s,c)=> s + (c.charAt(0).toUpperCase()+
         c.slice(1) ));
  }
console.log(camelCase('abu_bakar_waheed'));