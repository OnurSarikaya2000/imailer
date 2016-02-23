#! /usr/bin/env node --use-strict

const exec = require('child_process').exec;
const colors = require('colors');

let userArgs = process.argv.slice(2);
let to = userArgs[0];
let message = userArgs[1];

let sms = 'service "SMS"';
let imessage = '(service 1 whose service type is iMessage)';
let method = userArgs[2] === 'sms' ? sms : imessage;

// Create command
let command = `/usr/bin/osascript -e 'tell application "Messages"
                send "${message}" to buddy "${to}" of ${method}
                end tell'`;

// Check user input
if (!userArgs[0]) console.error('You didn\'t enter a recipient!'.red);
else if (!userArgs[1]) console.error('You didn\'t enter a message!'.red);
else {
    exec(command, (err, stdout, stderr) => {
        if (err) throw new Error(err);
        else console.log(`Message sent to ${to}!`.green);
    });
}
