#! /usr/bin/env node --use-strict

const exec = require('child_process').exec;
const colors = require('colors');

const sms = '(service 1 whose service type is SMS)';
const imessage = '(service 1 whose service type is iMessage)';

let userArgs = process.argv.slice(2);
let to = userArgs[0];
let message = userArgs[1];
let method = userArgs[2] === 'sms' ? sms : imessage;
let command;

// If string contains letters, it must be a contact name so
// find the relevant phone number first
if (/[a-z]/i.test(to)) {
    command = `/usr/bin/osascript -e 'tell application "Contacts"
                set i to value of phone 1 of (person 1 whose name = "${to}")
                end tell
                tell application "Messages"
                send "${message}" to buddy i of ${method}
                end tell'`;
} else {
    command = `/usr/bin/osascript -e 'tell application "Messages"
                send "${message}" to buddy "${to}" of ${method}
                end tell'`;
}

// Check user input
if (!userArgs[0]) console.error('You didn\'t enter a recipient!'.red);
else if (!userArgs[1]) console.error('You didn\'t enter a message!'.red);
else {
    exec(command, (err, stdout, stderr) => {
        if (err) {
            if (/-1719/.test(err)) console.error(`We couldn\'t find a number for ${to}`.red);
            else throw new Error(err);
        }
        else console.log(`Message sent to ${to}!`.green);
    });
}
