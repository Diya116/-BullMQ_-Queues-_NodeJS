const {Worker} =require('bullmq');
const worker=new Worker('product-queue',async (job)=>{ //product-queue is the name of the queue
    console.log(job.data);
    console.log("product added");
    return job.data;
}); 
