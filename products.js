const util = require('util');
timeRanges=util.promisify(setTimeout);
module.exports={
    async productOne(){
        try{
            await timeRanges(2000);
            return 'Producto 1';
        }
        catch(e){
            console.log(e);
        }
    },
    async productTwo(){
        try{
            await timeRanges(3000);
            return 'Producto 2';
        }
        catch(e){
            console.log(e);
        }
    }
}