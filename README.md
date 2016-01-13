# iMailer

CLI interface for sending imessages and sms. OSX and messages app required.

# Install

`npm install -g imailer`

# Usage

`imailer ${to} ${message}`

- `${to}`
    - Phone number, contact, or email address for iMessages.
    - Phone number only for sms.
- `${message}`
    - Single words can be unquoted, otherwise the message should be surrounded by quotation marks.

# Road map

- [ ] Errors need better handling / checking.
- [ ] Add colours to output.
- [ ] Fix issues with punctuation screwing up strings.
