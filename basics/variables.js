const accountId = 14553
let accountEmail ="kaushal@google.com"
var accountPass= "12345"
accountCity="jaipur"

//accountId =2 //const kabhi change nahi ho sakta ek baar fix hone ke baad

//lekin var or let change ho jaate hain.
accountEmail="haha@gmail.com"
accountPass="23453"
accountCity="delhi"
console.log(accountId);

//isme ham ek ssath sare print karwa sakte hai table form mein

/*
let or var same kaam aate hain lekin ham har jagah let use karenge kyunki old js me var ke saath scope ka problem tha to us scope ko hatane ke liye let aaya .
scope means ki agar bohot jagah same variable use hua tha to mtlb agar 10 jagah use hua hai to wo 10 ke 10 jagah change kr deta tha
*/
console.table([accountId,accountEmail,accountPass,accountCity])