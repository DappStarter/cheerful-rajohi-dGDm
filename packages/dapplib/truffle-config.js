require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind equip heavy kitten bottom genius'; 
let testAccounts = [
"0xb3cbe056b0c26fde92fa8becbea49213dd7b197278a56a664e54291761ce1fdc",
"0xed227cb14eea109af6b35eb6d56edf76d5b3294c814ae57d14856942b317a77c",
"0x8f1622a3e001035f405f9a291408800ed2c70c779bd35168a914a628dc189068",
"0x7d991c6c7412ac7b1d200dd3da6a1588288fc52aa1d621141d8c6eb7d1936133",
"0x7dd928d25934dca343844d2bc75dbed6c7069562ffcb238c1afc8ecf9f6f19b6",
"0x07cd4c1c928ce7cf6cf69205fa145f198167d688465133c1e759ff6874889a6d",
"0x7d1fa87f39da6ff8e428f3063d071f30f2489b74bde1096f5b20e8dbc7c41110",
"0x16cb5f4be485d7a99239833b42e32dbc722066883c55e56bed8c8d46bc995415",
"0xbd3b77a8221c101cf8d5021e8f64fc5005e0213b2b7764fff9757600ff9ef409",
"0xba416cd17ee4134ab23676dad245b971d6e457ae6845e611435bf32503fb1147"
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

