'use strict';
let config = require('config');
let ravenFee = config.get('rvn').paytxfee;
let dogeFee = config.get('doge').paytxfee;
let lbryFee = config.get('lbc').paytxfee;
let dashFee = config.get('dash').paytxfee;
let zenzoFee = config.get('zenzo').paytxfee;
let flsFee = config.get('fls').paytxfee;
let pivxFee = config.get('pivx').paytxfee;
let prefix = config.get('bot').prefix;
exports.commands = ['tiphelp'];
exports.tiphelp = {
  usage: '<subcommand>',
  description: 'This commands has been changed to currency specific commands!',
  process: function(bot, message) {
    message.author.send(
      '__**:bank: Coins :bank:**__\n' +
      '  **Ravencoin (RVN) Tipper**\n    Transaction Fees: **' + ravenFee + '**\n' +
      '  **Dogecoin (DOGE) Tipper**\n    Transaction Fees: **' + dogeFee + '**\n' +
      '  **LBRY Credit (LBC) Tipper**\n    Transaction Fees: **' + lbryFee + '**\n' +
      '  **Dashcoin (DASH) Tipper**\n    Transaction Fees: **' + dashFee + '**\n' +
      '  **Zenzo (ZNZ) Tipper**\n    Transaction Fees: **' + zenzoFee + '**\n' + 
      '  **Flits (FLS) Tipper**\n    Transaction Fees: **' + flsFee + '**\n' + 
      '  **Pivx (PIVX) Tipper**\n    Transaction Fees: **' + pivxFee + '**\n' + 
      '__**Commands**__\n' +
      '  **' + prefix + 'tip<CoinSymbol>** : Displays This Message\n' +
      '  **' + prefix + 'tip<CoinSymbol> balance** : get your balance\n' +
      '  **' + prefix + 'tip<CoinSymbol> deposit** : get address for your deposits\n' +
      '  **' + prefix + 'tip<CoinSymbol> withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n' +
      '  **' + prefix + 'tip<CoinSymbol> <@user> <amount>** :mention a user with @ and then the amount to tip them\n' +
      '  **' + prefix + 'tip<CoinSymbol> private <user> <amount>** : put private before Mentioning a user to tip them privately\n' +
      '**<> : Replace carrot <> symbole with appropriate value.**\n' +
      '__**Examples**__\n' +
      '  **' + prefix + 'tipdash @MSFTserver 10**\n' +
      '  **' + prefix + 'tipdash withdraw DOGEaddressHERE 10**\n' +
      '  **' + prefix + 'tipdash private @MSFTserver 10**\n' +
      '  **' + prefix + 'tipdash balance**\n' +
      '  **' + prefix + 'tipdash deposit**\n'
    );
  }
};
