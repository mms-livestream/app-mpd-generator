/*jslint node: true */
/*jshint esversion: 6 */
"use strict";

//Dependencies


let express = require("express");
let core = require("mms-core");
let Promise = require("bluebird"); //jshint ignore:line

let serverAPI = require("./api/server/module.js");
let serviceAPI = require("./api/server/module.js");


let app = express();

function getTime() {

    var date = new Date();
    var hour = date.getHours() - 2;
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var secPublish  = date.getSeconds() + 10;
    secPublish = (secPublish < 10 ? "0" : "") + secPublish;
    

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    var availabilityStartTime = year + "-" + month + "-" + day + "T" + hour + ":" + min + ":" + sec + ".000";
    var publishTime = year + "-" + month + "-" + day + "T" + hour + ":" + min + ":" + secPublish + ".000";
    
    let time = [availabilityStartTime, publishTime];

    return time;
};



class MpdgGenerator {
  constructor() {
    this.node = "NODE_MPD_GENERATOR";
    this.service = new core.Service(this.node, serviceAPI);
    this.server = new core.Server(this.node, serverAPI, {
      service: this.service,
      toolbox: {getTime: getTime}
    });
  }

}


//Main

let mpdGenerator = new MpdgGenerator();

mpdGenerator.server.listen();

