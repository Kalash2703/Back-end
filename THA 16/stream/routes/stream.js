var router = require('express').Router();
var path = require("path");
var fs=require('fs');

router.get('/',function(req,res) {
    res.sendFile(path.join(_dirname,"../public/html/index.html"));
});

router.get('/video', function(req,res) {
    const range = req.headers.range;
    if(!range) {
        res.statusMessage(400).send("Range is required");
    }

    const videoPath = path.join(_dirname, "../public/videos/bigbuck.mp4");
    const videoSize = fs.statSync(videoPath).size;
    

    const CHUNK_SIZE = 10**6;//1MB
    const start = Number(range.replace(/\D/g,""));

    const end = Math.min(start + CHUNK_SIZE,videoSize-1);

    const contentlength = end - start + 1;
    const headers = {
        "Content-Range":`bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentlength,
        "Content-type":"video/mp4"    
    };

    res.writeHead(206,headers);

    const videoStream = fs.createReadStream(videoPath,{start,end});

    videoPath.pipe(res);

});

module.exports = router;