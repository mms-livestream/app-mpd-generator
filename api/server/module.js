/*jslint node: true */
/*jshint esversion: 6 */
"use strict";

var express = require("express");
var fs = require("fs");
let request = require("request");

module.exports = options => {
  let service = options.service;
  let router = express.Router();

  router.post("/mpd/:contentId/:quality/:segment", function(req, res) {
    // for the future do a post with all the imformation

    let time = options.toolbox.getTime();
    var availibilityStartTime = time[0];
    var publishTime = time[1];

    fs.writeFile("mpd.xml",
`<?xml version="1.0"?>
<MPD xmlns="urn:mpeg:dash:schema:mpd:2011" minBufferTime="PT1.500S" type="dynamic" availabilityStartTime="${availabilityStartTime}" publishTime="${publishTime}" maxSegmentDuration="PT0H0M6.000S" minimumUpdatePeriod="P0Y0M0DT0H10M30.000S" profiles="urn:mpeg:dash:profile:isoff-live:2011" GOP="12" numberOfServers="1">
<ProgramInformation moreInformationURL="http://gpac.sourceforge.net">
<Title>mpd.mpd generated by GPAC</Title>
</ProgramInformation>
<Period id="p0" start="P0Y0M0DT0H0M0.000S">
<AdaptationSet segmentAlignment="true" maxWidth="640" maxHeight="480" maxFrameRate="24" par="16:9" lang="und">
<BaseURL>http://192.168.2.130:8080/api/description/1/</BaseURL>
<SegmentTemplate timescale="12288" media="$Bandwidth$/out$Bandwidth$_dash$Number$.m4s" startNumber="2" duration="98304" initialization="$Bandwidth$/out$Bandwidth$_dash.mp4"/>
<Representation id="1" mimeType="video/mp4" codecs="avc1.4d4028" width="640" height="480" frameRate="24" sar="4:3" startWithSAP="1" bandwidth="500000"></Representation>
<Representation id="2" mimeType="video/mp4" codecs="avc1.4d4028" width="640" height="480" frameRate="24" sar="4:3" startWithSAP="1" bandwidth="1000000"></Representation>
<Representation id="3" mimeType="video/mp4" codecs="avc1.4d4028" width="640" height="480" frameRate="24" sar="4:3" startWithSAP="1" bandwidth="2000000"></Representation>
</AdaptationSet>
</Period>
</MPD> `,
      function(err) {
        if (err) {
          return console.log(err);
        }
        //fs.createReadStream(fichier mpd).pipe(destination);
        console.log("The mpd was send!");
      });


  });
  return router;
};
