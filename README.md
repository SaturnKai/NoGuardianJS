# NoGuardianJS

A transparent proxy that blocks outgoing traffic to GoGuardian. This is an alternative to my other [NoGuardian](https://github.com/SaturnKai/NoGuardian) bypass, as this one is more intended to run on a server.

**Note:** This program was created as a fun challenge for myself and is meant to demonstrate a near universal functioning bypass for GoGuardian. I am not responsible for how you choose to use my software.

## Instructions

-   Install Node.JS on your platform
-   Download the source code of this project
-   Run `npm install` in the root directory of the source to install the dependencies
-   Create a `.env` file in the root directory of the source and specify the address and port you'd like NoGuardian to listen on.
-   Run `npm start` to start the transparent proxy.

Then, connect any device through the proxy, and NoGuardian will block attempt that GoGuardian makes to send or receive data from its servers including but not limited to:

-   Retrieving the url and keyword blacklist required for blocking functionality
-   Checking for current classroom sessions
-   Sending screenshots of your web-browser to your current classroom session
-   Executing routine IP address checks on your device

## Libraries Used

[Transparent Proxy](https://github.com/gr3p1p3/transparent-proxy) - Slightly modified to block specified requests.
