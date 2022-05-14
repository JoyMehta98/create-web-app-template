#!/usr/bin/env node

/*****************************************************************
 * Kick start your project
 * 14th May 2022
 * Made By JOY
 * https://github.com/JoyMehta98/set-repo.git
 *****************************************************************/
import path from 'path'
import starter from '../lib/starter'

const destination = getDest(process.argv[2])

function getDest(destFolder = 'kick-start') {
  return path.join(process.cwd(), destFolder)
}

starter(destination)
