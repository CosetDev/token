# Coset Token (CST)

## Address List

| Network                         |                   Address                          |
|---------------------------------|----------------------------------------------------|
| Mantle Sepolia Testnet          |     [0x77a90090c9bcc45940e18657fb82fb70a2d494fd](https://sepolia.mantlescan.xyz/address/0x77a90090c9bcc45940e18657fb82fb70a2d494fd)          |
| Cronos Testnet                  |     [0x6e0a0ba0e4e7433e65e6b4a12860baf43b0b8f06](https://explorer.cronos.org/testnet/address/0x6e0a0ba0e4e7433e65e6b4a12860baf43b0b8f06)     |


Hardhat project for the `Coset` ERC-20 token with **EIP-3009 gasless transfers** (transfer/receive/cancel with signed authorization).

## Contracts

- **`contracts/Coset.sol`**: ERC-20 token
  - Name: `Coset`
  - Symbol: `CST`
  - Decimals: `6`
  - Initial supply: `1,000,000 * 10^6` minted to `initialOwner` (constructor arg)
  - Includes `permit()` support via OpenZeppelin `ERC20Permit`
- **`contracts/EIP3009.sol`**: internal EIP-3009 implementation
  - `transferWithAuthorization(...)`
  - `receiveWithAuthorization(...)`
  - `cancelAuthorization(...)`

## Networks

This project can be deployed to **any EVM-compatible chain** by adding a network entry to `hardhat.config.ts` and passing `--network <name>`.

Currently configured networks:

- **`mantle`**: chainId `5000`, `https://rpc.mantle.xyz`
- **`mantle-testnet`**: chainId `5003`, `https://rpc.sepolia.mantle.xyz`
- **`cronos`**: chainId `25`, `https://evm.cronos.org`
- **`cronos-testnet`**: chainId `338`, `https://evm-t3.cronos.org`

To add another chain, extend `networks` in `hardhat.config.ts` with:
- `chainId`
- `url` (RPC)
- `accounts` (uses `OWNER_PRIVATE_KEY` from `.env`)

## Deploy

Deploy to any configured network:

```shell
npx hardhat run scripts/deploy.ts --network <networkName>
```

This repo also includes convenience scripts for Mantle:

```shell
npm run deploy:testnet
npm run deploy:mainnet
```

The deploy script currently uses a **hardcoded** `initialOwner` address in `scripts/deploy.ts`. Update it before deploying if needed.

## Verify

Verify on any configured network (and with `ETHERSCAN_API_KEY` set):

```shell
npx hardhat verify --network <networkName> <contractAddress> <constructorArgs...>
```

This repo also includes an interactive helper script:

```shell
npm run verify
```

For `Coset`, the constructor arguments are just:
- `initialOwner` (address)
