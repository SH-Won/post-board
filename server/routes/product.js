const express = require('express');
const router = express.Router();
const multer = require('multer');

const { Product } = require("../models/Product");
const { auth } = require("../middleware/auth");

let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter : (req,file,cb)=>{
        const ext =path.extname(file.originalname)
        if(ext !== '.jpg' || ext !=='.png'){
            return cb(res.status(400).end('jpg , png 파일만 가능합니다'),false);
        }
        cb(null,true)
    }
});

const upload =multer({storage:storage}).array("file");
//=================================
//             Video
//=================================
router.post('/uploadfiles',auth,(req,res)=>{
    //클라이언트에서 받은 비디오를 서버에 저장한다.
    upload(req,res,err=>{
        if(err){ return res.json({success : false , err})
    }
       let urlData =[];
       let nameData =[];
       console.log(req.files)
       req.files.forEach(file=>{
           urlData.push(file.path);
           nameData.push(file.filename)
       })

        return res.json({success:true , url:urlData, fileName:nameData})
    })

})

router.post('/uploadProduct',(req,res)=>{
    const product = new Product(req.body)
    product.save((err,result)=>{
        if(err) return res.json({success:false,err})
        res.json({success:true,result})
    })
})

router.post('/getFirstProducts',(req,res)=>{
    let order = req.body.order ? req.body.order : 'desc';
    let sortBy =req.body.sortBy ? req.body.sortBy : '_id';
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let term = req.body.searchTerm;

    let findArgs={}
    for(let key in req.body.filters){
        if(req.body.filters[key].length >0){
            if(req.body.filters[key]==='price'){

            }
            else{
                findArgs[key]=req.body.filters[key]
            }
        }
    }

   if(term){
    Product.find(findArgs)
    .find({$text:{$search:term}})
    .populate('writer')
    .sort([[sortBy,order]])
    .skip(skip)
    .limit(limit)
    .exec((err,products)=>{
        if(err) return res.json({success:false,err})
        res.json({success:true,products,postSize:products.length})
    })
   }
   else{
    Product.find(findArgs)
    .populate('writer')
    .sort([[sortBy,order]])
    .skip(skip)
    .limit(limit)
    .exec((err,products)=>{
        if(err) return res.json({success:false,err})
        res.json({success:true,products,postSize:products.length})
    })
   }
})

router.post('/getProducts',(req,res)=>{
    let order = req.body.order ? req.body.order :'desc';
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs ={};
    let term =req.body.searchTerm;

    for(let key in req.body.filters){
        if(req.body.filters[key].length >0){
            if(key==='price'){

            }
            else{
                findArgs[key]=req.body.filters[key]
            }
        }
        
    }
    console.log(findArgs);
    if(term){
        Product.find(findArgs)
        .find({$text:{$search:term}})
    .populate('writer')
    .sort([[sortBy,order]])
    .skip(skip)
    .limit(limit)
    .exec((err,products)=>{
        if(err) return res.json({success:false,err})
        res.json({success:true,products,postSize:products.length})
    })
    }
    else{
        Product.find(findArgs)
    .populate('writer')
    .sort([[sortBy,order]])
    .skip(skip)
    .limit(limit)
    .exec((err,products)=>{
        if(err) return res.json({success:false,err})
        res.json({success:true,products,postSize:products.length})
    })
    }
})
/*
router.post('/getFilterProduct',(req,res)=>{
    let order = req.body.order ? req.body.order :'desc';
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs ={};
    let term = req.body.searchTerm;
    
    for(let key in req.body.filters){
        if(req.body.filters[key].length >0){
            if(key==='price'){

            }
            else{
                findArgs[key]=req.body.filters[key]
            }
        }
        
    }
    console.log(findArgs);
   if(term){
    Product.find(findArgs)
    .find({$text:{$search:term}})
    .populate('writer')
    .sort([[sortBy,order]])
    .skip(skip)
    .limit(limit)
    .exec((err,products)=>{
        if(err) return res.json({success:false,err})
        res.json({success:true,products,postSize:products.length})
    })
   }
   else{
    Product.find(findArgs)
    .populate('writer')
    .sort([[sortBy,order]])
    .skip(skip)
    .limit(limit)
    .exec((err,products)=>{
        if(err) return res.json({success:false,err})
        res.json({success:true,products,postSize:products.length})
    })
   }
})

router.post('/getSearchProduct',(req,res)=>{
    let order = req.body.order ? req.body.order :'desc';
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs ={};
    let term = req.body.searchTerm;
    
    for(let key in req.body.filters){
        if(req.body.filters[key].length >0){
            if(key==='price'){

            }
            else{
                findArgs[key]=req.body.filters[key]
            }
        }
        
    }
    console.log(findArgs);
   if(term){
    Product.find(findArgs)
    .find({$text:{$search:term}})
    .populate('writer')
    .sort([[sortBy,order]])
    .skip(skip)
    .limit(limit)
    .exec((err,products)=>{
        if(err) return res.json({success:false,err})
        res.json({success:true,products,postSize:products.length})
    })
   }
   else{
    Product.find(findArgs)
    .populate('writer')
    .sort([[sortBy,order]])
    .skip(skip)
    .limit(limit)
    .exec((err,products)=>{
        if(err) return res.json({success:false,err})
        res.json({success:true,products,postSize:products.length})
    })
   }
})
*/

router.post('/deleteProduct',(req,res)=>{
    let order = req.body.order ? req.body.order :'desc';
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let term = req.body.searchTerm;

    let findArgs={}
    for(let key in req.body.filters){
        if(req.body.filters.length >0 ){
            if(req.body.filters[key]==='price'){

            }
            else{
                findArgs[key]=req.body.filters[key]
            }
        }
    }

    Product.findOneAndDelete({_id:req.body._id,writer:req.body.writer})
   /* .exec((err,result)=>{
        if(err) return res.json({success:false,err})
        res.json({success:true,result});
    })
    */
     .exec((err,result)=>{
        if(err) return res.json({success:false,err})
       
        if(term){
            Product.find(findArgs)
            .find({$text:{$search:term}})
            .sort([[sortBy,order]])
            .skip(0)
            .limit(skip+limit)
            .populate('writer')
            .exec((err,products)=>{
                if(err) return res.json({success:false,err})
                res.json({success:true,products});
            })
        }
        else{
            Product.find(findArgs)
            .sort([[sortBy,order]])
            .skip(0)
            .limit(skip+limit)
            .populate('writer')
            .exec((err,products)=>{
                if(err) return res.json({success:false,err})
                res.json({success:true,products});
            })
        }
    })
})
//?id =${productId}&type=single
//id = 121212123,12412124,23423421 type=array
router.get('/products_by_id',(req,res)=>{

    let type= req.query.type;
    let productIds = req.query.id;

    if(type==='array'){
        let ids = req.query.id.split(',');
        productIds=[];
        productIds=ids.map(id=>{
            return id
        })
    }
    // 프로덕트 ID 를 통해서 프로덕트의 정보를 가져온다
    Product.find({_id: {$in:productIds} })
    .populate('writer')
    .exec((err,product)=>{
        if(err) return res.json({success:false,err})
        res.status(200).send(product)
    })

})



module.exports = router;
