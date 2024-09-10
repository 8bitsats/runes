// Function to fetch and display wallet balance
async function fetchWalletBalance() {
    const walletAddress = 'EKExYCyFcUQFBm9WtJSWV4xawBpEAHRR5tHPxHpbLpmE';
    const heliusEndpoint = 'https://mainnet.helius-rpc.com/?api-key=6b52d42b-5d24-4841-a093-02b0d2cc9fc0';

    try {
        const response = await fetch(heliusEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jsonrpc: '2.0',
                id: 1,
                method: 'getBalance',
                params: [walletAddress]
            }),
        });

        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error.message);
        }

        const balance = data.result.value;
        const balanceInSOL = balance / 1000000000; // Convert lamports to SOL

        // Update the balance display
        const balanceElement = document.getElementById('wallet-balance');
        balanceElement.textContent = `Balance: ${balanceInSOL.toFixed(4)} SOL`;
    } catch (error) {
        console.error('Error fetching wallet balance:', error);
        const balanceElement = document.getElementById('wallet-balance');
        balanceElement.textContent = 'Error fetching balance';
    }
}

// Fetch balance initially and then every 30 seconds
fetchWalletBalance();
setInterval(fetchWalletBalance, 30000);