const { ethers } = require('ethers');

// Format Ethereum Address
function formatAddress(address) {
  return address.slice(0, 6) + '...' + address.slice(-4);
}

// Convert Ether to Wei
function etherToWei(amount) {
  return ethers.utils.parseEther(amount);
}

// Convert Wei to Ether
function weiToEther(amount) {
  return ethers.utils.formatEther(amount);
}

// Calculate Gas Limit
function calculateGasLimit(gasEstimate, buffer = 1.5) {
  return Math.ceil(gasEstimate.mul(buffer));
}

// Sign Message
async function signMessage(privateKey, message) {
  const wallet = new ethers.Wallet(privateKey);
  return wallet.signMessage(message);
}

// Verify Signature
function verifySignature(message, signature, publicKey) {
  const signingKey = ethers.utils.recoverPublicKey(message, signature);
  return signingKey === publicKey;
}

// Generate Random Private Key
function generatePrivateKey() {
  return ethers.utils.hexlify(ethers.utils.randomBytes(32));
}

// Check Ethereum Network
async function checkNetwork(provider, expectedNetwork) {
  const network = await provider.getNetwork();
  return network.name === expectedNetwork;
}

module.exports = {
  formatAddress,
  etherToWei,
  weiToEther,
  calculateGasLimit,
  signMessage,
  verifySignature,
  generatePrivateKey,
  checkNetwork
};
