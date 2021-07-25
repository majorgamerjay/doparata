# doparata
### majorgamerjay@protonmail.com

__doparata__ is a NodeJS script to get the list of mutual members
in a list of a server as per the client.

## Features

Features in this program include:-

- Can return member information verbosely.
- Configuration and server list files in JSON.
- Compatible for use as both bot client and user client. (See further below).
- Pretty print (Indented+Non-JSON) or print out as JSON.

## Installation

1. Clone this repository:

```
git clone https://github.com/MajorGamerJay/doparata.git doparata-discord
```

2. Install NPM Packages

```
cd doparata-discord
npm install
```

3. Setup configuration:

Edit `config/config.json` and fill the empty values

4. Add server list:

Edit `config/server_list.json` and add servers to the array

### Using it with an user account

Using it with user account requires modification of the discord.js
source code. Just follow the instructions given below. :D

1. Open `node_modules/discord.js/src/client/Client.js` with your
favorite text editor.

2. Replace `'BOT'` with `''`

3. Make sure it looks like this:

![Screenshot](https://i.imgur.com/bes90St.png)

## Usage

- Run `make`

Alternatively, you can do:

- `node src/index.js`

## Contributing

Pull requests are welcome and if you want to make a major contribution,
better to open an issue and discuss about it first.

## License

This program is created under MIT License 2.0

## Screenshots

### Pretty printed verbosely
![Pretty printed verbosely](https://i.imgur.com/1D1WihW.png)

### Pretty printed non-verbose
![Pretty printed non-verbose](https://i.imgur.com/ECqn9Ek.png)

### Not pretty printed verbosely
![Not pretty printed verbosely](https://i.imgur.com/SdDHBef.png)

### Not pretty printed non-verbose
![Not pretty printed non-verbosely](https://i.imgur.com/L8K9AYh.png)
