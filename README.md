# iMailer

CLI interface for sending imessages and sms. OSX and messages app required. [Available on NPM](https://www.npmjs.com/package/imailer).

![iMailer example](http://i.imgur.com/UctycXe.gif)

# Install

`npm install -g imailer`

# Usage

`imailer [<to>] [<message>] [<sms|imessage>]`

- `[<to>]`
    - Phone number, contact, or email address for iMessages.
    - Phone number only for sms.
- `[<message>]`
    - Single words can be unquoted, otherwise the message should be surrounded by quotation marks.
- `[<sms|imessage>]`
    - Specify sms to send via sms or leave blank to send iMessages.

## Examples

`imailer "+447463 383 992" "Hi Jeff!"`

`imailer 07352009813 "Hi again Jeff!" sms`

# Changelog

## 0.1.2

- Update documentation to include `sms` flag.
- Add colour coding to output.
- More accurate error messaging.
- Add license.

## 0.1.1

- Change name to imailer.

## 0.1.0

- Inital version.
