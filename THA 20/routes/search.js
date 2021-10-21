const express = require("express")

const {op} = require("sequelize");

const sequelize = require("../database");
const Artist = require("../models/artist");



const router = express.Router();

router.get("/",async (req,res)=> {
    try{
        const products=await Artist.findAll({
            where: {
                Name: {
                    [Op.like]: "%" + req.query.q + "%",
                },

            },
        });
        res.status(200).send({
            items: products,

        });

    } catch (err) {
        console.log(err);
        res.status(400).send({
           error:true,
           message:"cannot process your request", 
        });
    }
});

router.get("/trgm",(req,res) => {
    sequelize
    .query("create extension if not exists pg_trgm;")
    .then(()=> {
        .query("select * from pg_extension where extname='pg_trgm';")
        .then(() => {
            Artist.findAll({
                attributes:{
                    include:[
                      [  
                        sequelize.fn(
                            "similarity",
                            sequelize.col("Name"),
                            req.query.query
    
                        ),
                       
                        "score",
                      ],  
                
                    ],
                },
                where: [
                    sequelize.where(
                        sequelize.fn("similarity",sequelize.col("Name"),req.query.q),
                        {[Op.gt]:0.2}

                    ),

                    {},

                ],    
            })
            .then{(art) => res.status(200).send(art)}
            .catch((error) => {
                console.log("coming in err",error);
                res.status(500).send(error);

            });

        });
    })
        .catch((error) => {
            console.log("coming inside err",error);
            res.status(500).send(error);
        });
    });

    router.get("/sound",async(req,res) => {
        try {
            const extension = await sequelize.query(
            "CREATE EXTENSION IF NOT EXISTS fuzzystrmatch;"
            );

        const artist = await sequelize.query(`SELECT
        *
        FROM "Artists"
        WHERE "Nationality" IN ('Americab','British')
        AND SOUNDEX("Name")= SOUNDEX(${req.query.q};`);
        res.status(200).send(artist);
    } catch(err) {
        res.status(500).send(err);
    }
    });
});

router.get("/metaphone",async (req,es) => {
    try {
        const extension = await sequelize.query(
            "CREATE EXTENSION IF NOT EXISTS fuzzystrmatch;"
        );
        const artist =await sequelize.query(`SELECT
        *
        FROM "Artist"
        WHERE "Nationality" = 'American'
        ORDER BY SIMILARITY(
            METAPHONE("Name",10),
            METAPHONE('${req.query.q}',10)
        )DESC
        LIMIT 5;`);
        res.status(200).send(artist);
    }catch (err) {
        res.status(500).send(err);
    }
    
});

router.get("/distance",async (req,res) => {
    try {
        const extension = await sequelize.query{
            "CREATE EXTENSION IF NOT EXISTS fuzzystrmatch;"
        };

        const artist = await sequelize.query(`SELECT
        *,
            LEVENSHTEIN("Name",'${rq.query.q}`)
        FROM "Artist"
        ORDER BY LEVENSHTEIN("Name",'${req.query.q}') ASC  
        LIMIT 5;`);
        console.log("artist",artist);
        res.status(200).send(artist);

    
    } catch (err) {
        res.status(500).send(err);
    }

});

module exports = router;