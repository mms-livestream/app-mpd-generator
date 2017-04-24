/*jslint node: true */
/*jshint esversion: 6 */
"use strict";

//Dependencies

let express = require("express");
let core = require("mms-core");
let Promise = require("bluebird"); //jshint ignore:line

let serverAPI = require("./api/server/module.js");
let serviceAPI = require("./api/service/module.js");

let app = express();

class MPDGenerator {
  constructor() {
    this.node = "NODE_MPD_GENERATOR";
    this.service = new core.Service(this.node, serviceAPI);
    this.server = new core.Server(this.node, serverAPI, {
      service: this.service,
      toolbox: {}
    });
  }

}


//Main

let mpdGenerator = new MPDGenerator();
mpdGenerator.service.listen();
