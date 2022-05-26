let result= document.getElementById('display');
let cal=(Number)=>{
    result.value+=Number;
}
let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("SyntaxError");
    }
}
function clr(){
    result.value= "";
}
function del(){
    result.value= result.value.slice(0,-1); 
}