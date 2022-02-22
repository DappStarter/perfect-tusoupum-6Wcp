require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth spike purpose hunt process bubble swift'; 
let testAccounts = [
"0x72d1cd357cfcedf6d3f2d55a0a4a2964ae96f05285824f76fb9e9a9afecd55d0",
"0x3b9d5d49532d42df911e878a1aaa0d721739e31ce787d4b86406ebdc53776c20",
"0x2597c0adad66caff7d6cfe49d843b6464450e39f993ea35c5a633ca69eb50197",
"0xda4516dc229425d7e9a4ab9d7245b39ce3608b2bdad0934dc8f0ae1e72a130a3",
"0xd141c782e476fe7f7738d5dd29cceb1ac7a1814df82cdb2a2f75ce25ce4d820a",
"0xd76a4c9faec311bf0d717900e33aaaef8c6295654e4e0e407ffdf7be82a2d5a5",
"0xc946371457fec76effd9ffc5fde0ca66050646e4d411c8065f4b31d6fc042b83",
"0xa1e18ffed141999d9df721ec1bb543e292c831267b1e454859423a40f31ce476",
"0xe99b96aae38867a9a0b12a2f7ede208ab23ebecf6393d2020c3eb0848edcf6f6",
"0xbc9b2b29da547e5fe7107161b68fb967ecd23c81fe0d0abcb4af1b07b85bf0d8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

