const {Queue} =require('bullmq');
const queue=new Queue('product-queue');
async function addProductt(){
   const res= await queue.add('add-product',{name:'Iphone 12'});
    console.log(res);
    console.log("product added")
}
addProductt();

