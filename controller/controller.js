let Product=require('../model/model')


module.exports={
    home:(req,res)=>{

        Product.find((err,result)=>{
            if(err){
                res.status(400).json({message:"Error"})
            }
            else{
                res.json(result)
            }
        })

    },


    newProduct:(req,res)=>{
        let data=new Product(req.body)

        data.save().then(myRes=>{
            res.status(200).json({message:"Data Saving Success"})
        }).catch(err=>{
            res.status(400).json({message:"Data Saving Failed"})
        })
    },

    edit:(req,res)=>{
        let id= req.params.id;


        Product.findById({_id:id},function(err,result){
            if(err){
                res.status(400).json({message:'No Data Found'})
            }
            else{
                res.json(result)
            }
        })
    },

    update:(req,res)=>{
        let id= req.params.id;
        Product.findById({_id:id},function(err,result){
            
            if(err){
                res.status(400).json({message:"Error"})
            }

            else{
                if(!result){
                    res.status(400).json({message:"No Data Found"})
    
                }

                else{
                    result.name=req.body.name;
                    result.email=req.body.email;
                    result.phone=req.body.phone;
                    result.address=req.body.address;


                    result.save().then(
                        myRes=>{
                            res.status(200).json({message:"Data updated Successfully"})
                        }
                    ).catch(err=>{
                        res.status(400).json({message:'Data Updation Failed'})
                    })



                }
            }

          
        })
    },


    delete:(req,res)=>{
        let id=req.params.id;

        Product.findByIdAndDelete({_id:id},function(err,result){
            if(err){
                res.status(400).json({message:"Data Deletion Failed"})
            }

            else{
                res.status(200).json({message:"Data Deletion Success"})
            }
        })
    }



}