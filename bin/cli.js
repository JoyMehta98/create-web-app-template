#!/usr/bin/env node

/*****************************************************************
 * Kick start your project
 * 14th May 2022
 * Made By JOY
 * https://github.com/JoyMehta98/create-web-app-template.git
 *****************************************************************/
import { join } from "path";
import starter from "../lib/starter.js";

const destination = getDest(process.argv[2]);

function getDest(destFolder = "kick-start") {
  return join(process.cwd(), destFolder);
}

starter(destination);
