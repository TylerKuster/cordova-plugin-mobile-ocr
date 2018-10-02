#!/usr/local/bin -l

var shell = require('shelljs')

shell.echo('*** Updated Pods B ***');

shell.cd('platforms/ios')
shell.exec('ls')

shell.exec('pod update')
shell.cd('../../')