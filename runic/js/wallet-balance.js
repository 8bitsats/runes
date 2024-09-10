// Function to fetch and display wallet balance
async function fetchWalletBalance() {
    const walletAddress = 'EKExYCyFcUQFBm9WtJSWV4xawBpEAHRR5tHPxHpbLpmE';
    const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'));

    try {
        const balance = await connection.getBalance(new solanaWeb3.PublicKey(walletAddress));
        const balanceInSOL = balance / solanaWeb3.LAMPORTS_PER_SOL;
        
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