/*jslint node: true */
/*jshint esversion: 6 */
"use strict";

module.exports = options => {
  let service = options.service;
  let router = express.Router();

  router.post("/mpd/:contentId/:quality/:segment", function(req, res) {
    // for the future do a post with all the imformation


      return router;
};






/*
let fs = require("fs");
let request = require("request");
let express = require("express");


module.exports = options => {
  let service = options.service;
  let router = express.Router();


  router.put("/content/:contentId/:quality/:segment", function(req, res) {
    console.log("ok put rcv");
    var contentId = req.params.contentId;
    var quality = req.params.quality;
    var segment = req.params.segment;

    //list destination
    var lineReader = require("readline").createInterface({terminal: false,input: require("fs").createReadStream("dst_file.txt")});
    lineReader.on("line", function(line) {console.log(line + "/api/content" + "/" + contentId + "/" + quality + "/" + segment);

      //Redirection
      var stream = req.pipe(request.put(line +"/api/content" +"/" +contentId +"/" +quality +"/" +segment));
      stream.on("finish", function() {
        res.end();
      });
    });
  });


    router.put("/mp4/:contentId/:quality/:segment", function(req, res) {
        let contentId = req.params.contentId;
        let quality = req.params.quality;
        let segment = req.params.segment;

        //list destination
         var lineReader = require("readline").createInterface({terminal: false,
          input: require("fs").createReadStream("dst_file.txt")
         });
         lineReader.on("line", function(line) {
           console.log(line +"/api/mp4" +"/" + contentId +"/" +quality +"/" +segment);

        //Redirection
    
        var stream = req.pipe(request.put(line +"/api/mp4" +"/" +contentId +"/" +quality +"/" +segment));
        stream.on("finish", function() {
            res.end();
         });
       });
    });



  return router;
};
*/