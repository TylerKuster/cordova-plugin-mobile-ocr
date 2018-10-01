#!/usr/local/bin -l

var shell = require('shelljs')

shell.exec('pod install')
shell.exec('pod update')
shell.echo('*** Updated Pods D ***');