"use strict";
document.addEventListener("DOMContentLoaded", function() {
    const connectButton = document.getElementById("connectButton");
    const walletInfo = document.getElementById("walletInfo");
    const walletAddress = document.getElementById("walletAddress");
    const ethBalance = document.getElementById("ethBalance");
    const usdtBalance = document.getElementById("usdtBalance");
    let web3;
    let metamaskConnected = false;
    function showWalletInfo() {
        walletInfo.style.display = "block";
    }
    function hideWalletInfo() {
        walletInfo.style.display = "none";
    }
    function updateButtonText() {
        connectButton.textContent = metamaskConnected ? "Exit from MetaMask" : "Connect MetaMask";
    }
    hideWalletInfo();
    if (typeof window.ethereum !== "undefined") {
        web3 = new Web3(window.ethereum);
        connectButton.addEventListener("click", async ()=>{
            try {
                if (!metamaskConnected) {
                    await window.ethereum.request({
                        method: "eth_requestAccounts"
                    });
                    console.log("MetaMask connected!");
                    updateWalletInfo();
                    showWalletInfo();
                    metamaskConnected = true;
                } else window.location.reload();
                updateButtonText();
            } catch (error) {
                console.error("Error connecting MetaMask:", error.message);
            }
        });
    } else {
        console.error("MetaMask not detected.");
        connectButton.innerHTML = 'Install MetaMask <a href="https://metamask.io/" target="_blank">here</a>';
    }
    async function updateWalletInfo() {
        try {
            const accounts = await web3.eth.getAccounts();
            const address = accounts[0];
            walletAddress.textContent = `Wallet Address: ${address}`;
            const ethBalanceWei = await web3.eth.getBalance(address);
            const ethBalanceEth = web3.utils.fromWei(ethBalanceWei, "ether");
            ethBalance.textContent = `ETH Balance: ${ethBalanceEth} ETH`;
            const usdtContractAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7";
            const usdtDecimals = 6;
            const usdtABI = [
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_owner",
                            "type": "address"
                        }
                    ],
                    "name": "balanceOf",
                    "outputs": [
                        {
                            "name": "balance",
                            "type": "uint256"
                        }
                    ],
                    "type": "function"
                }
            ];
            const usdtContract = new web3.eth.Contract(usdtABI, usdtContractAddress);
            const usdtBalanceWei = await usdtContract.methods.balanceOf(address).call();
            const usdtBalanceUsdt = usdtBalanceWei / 10 ** usdtDecimals;
            usdtBalance.textContent = `USDT Balance: ${usdtBalanceUsdt} USDT`;
        } catch (error) {
            console.error("Error updating wallet information:", error.message);
        }
    }
});

//# sourceMappingURL=index.f75de5e1.js.map
