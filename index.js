#! /usr/bin/env node --use-strict

const exec = require('child_process').exec;

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
if (!userArgs[0]) throw new Error('Please add your phone number.');
if (!userArgs[1]) throw new Error('Please add a message.');

else {
    exec(command, (err, stdout, stderr) => {
        if (err) throw new Error(err);
        else console.log('Message sent.');
    });
}
