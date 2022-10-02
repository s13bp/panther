// Smart Contract Details
const contractAddress = "0x30D9Db1af5db77446576D3357c739C7Ba8666479";
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "ref",
				"type": "address"
			}
		],
		"name": "BuyBoobs",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ContributeToTVL",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "ref",
				"type": "address"
			}
		],
		"name": "HireBoobs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "seedMarket",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SellMilks",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "eth",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "contractBalance",
				"type": "uint256"
			}
		],
		"name": "calculateHireBoobs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "eth",
				"type": "uint256"
			}
		],
		"name": "calculateHireBoobsSimple",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Milks",
				"type": "uint256"
			}
		],
		"name": "calculateMilksell",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "getMilksSinceLastHire",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "getMyBOOB",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "getMyMilks",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "MilksRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
var app = new Vue({
    el: "#app",
    data() {
        return {
            buyAmount: 0,
            web3Object: null,
            metamaskAccount: null,
            balance: 0,
            getBalance: 0,
            getMyBOOB: 0,
            MilksRewards: 0,
            referral: window.location.href,
            referrarAddr: null,
            contractInstance: null
        };
    },
    beforeMount() {
        const Web3Modal = window.Web3Modal.default;
        const WalletConnectProvider = window.WalletConnectProvider.default;
        const providerOptions = {
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                    rpc: {
                        97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
                    },
                    chainId: 97,
                    infuraId: "d85fda7b424b4212ba72f828f48fbbe1",
                    pollingInterval: "10000",
                },
            },
        };

        this.web3Modal = new Web3Modal({
            providerOptions,
            cacheProvider: false,
            disableInjectedProvider: false,
        });
    },
    methods: {
        addrTruncation(addr) {
            return addr.slice(0, 6) + "…" + addr.slice(addr.length - 4, addr.length);
        },
        onDisconnect() {
            localStorage.clear();
            this.web3Object = null;
            this.metamaskAccount = null
        },

        async onConnect() {
            try {
                let provider = await this.web3Modal.connect();
                this.onProvider(provider);
                // Subscribe to accounts change
                provider.on("accountsChanged", (accounts)=>{
                    console.log(accounts);
                    this.onProvider(provider);
                }
                );
            } catch (e) {
                console.log("Could not get a wallet connection", e);
                return;
            }
        },

        async onProvider(provider) {
            this.web3Object = new Web3(provider);

            this.chainId = await this.web3Object.eth.getChainId();
            if (this.chainId !== 97 ) {
                this.notify("Please Connect You Wallet to Binance Smart Chain test");
                return;
            }

            let accounts = await this.web3Object.eth.getAccounts();
            this.metamaskAccount = accounts[0]
            this.referral = window.location.href + '?ref=' + this.metamaskAccount
            this.referrarAddr = window.location.search ? window.location.search.slice(5) : this.metamaskAccount

            let balance = await this.web3Object.eth.getBalance(this.metamaskAccount)
            console.log("balance", balance);
            this.balance = parseFloat(balance / 1e18).toFixed(4);

            this.contractInstance = new this.web3Object.eth.Contract(contractABI,contractAddress);

            this.readValues();
        },
        async readValues() {
            const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");
            let instance = new web3.eth.Contract(contractABI,contractAddress);
            Promise.all([instance.methods.getBalance().call(), instance.methods.getMyBOOB(this.metamaskAccount).call(), ]).then(([getBalance,getMyBOOB])=>{
                console.log(getBalance, getMyBOOB);
                this.getBalance = parseFloat(getBalance / 1e18).toFixed(4);
                this.getMyBOOB = getMyBOOB;
            }
            );

            let MilksRewards = await instance.methods.MilksRewards(this.metamaskAccount).call()
            this.MilksRewards = parseFloat(MilksRewards / 1e18).toFixed(6);
        },

        BuyBoobs() {
            console.log(this.referrarAddr)
            let value = this.web3Object.utils.toHex(this.web3Object.utils.toWei(this.buyAmount.toString(), "ether"));

            this.contractInstance.methods.BuyBoobs(this.referrarAddr).send({
                from: this.metamaskAccount,
                to: contractAddress,
                value: value,
            }).on("transactionHash", (hash)=>{
                console.log("Transaction Hash: ", hash);
                this.notify("Transaction is Submitted!");
            }
            ).on("receipt", (receipt)=>{
                this.readValue();
                console.log("Receipt: ", receipt);
                this.notify("Transaction is Completed!");
            }
            ).on("error", (error,receipt)=>{
                console.log("Error receipt: ", receipt);
                this.notify("Transaction is Rejected!");
            }
            );
        },

        HireBoobs() {
            console.log(this.referrarAddr)
            this.contractInstance.methods.HireBoobs(this.referrarAddr).send({
                from: this.metamaskAccount,
                to: contractAddress,
            }).on("transactionHash", (hash)=>{
                console.log("Transaction Hash: ", hash);
                this.notify("Transaction is Submitted!");
            }
            ).on("receipt", (receipt)=>{
                this.readValue();
                console.log("Receipt: ", receipt);
                this.notify("Transaction is Completed!");
            }
            ).on("error", (error,receipt)=>{
                console.log("Error receipt: ", receipt);
                this.notify("Transaction is Rejected!");
            }
            );
        },

        SellMilks() {
            this.contractInstance.methods.SellMilks().send({
                from: this.metamaskAccount,
                to: contractAddress,
            }).on("transactionHash", (hash)=>{
                console.log("Transaction Hash: ", hash);
                this.notify("Transaction is Submitted!");
            }
            ).on("receipt", (receipt)=>{
                this.readValue();
                console.log("Receipt: ", receipt);
                this.notify("Transaction is Completed!");
            }
            ).on("error", (error,receipt)=>{
                console.log("Error receipt: ", receipt);
                this.notify("Transaction is Rejected!");
            }
            );
        },

        notify(msg) {
            Toastify({
                text: msg,
                duration: 3000,
                gravity: "bottom",
                position: "right",
            }).showToast();
        }
    },
});
