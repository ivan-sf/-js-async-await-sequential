const {productOne,productTwo}=require('./products');
async function main(){
    try{
        console.time("Measuring time");
        const results = await Promise.all([productOne(),productTwo()]);
        console.timeEnd("Measuring time")
        console.log(results[0]);
        console.log(results[1]);
    }
    catch(e){
        console.log(e);
    }
}
main();