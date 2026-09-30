# Advanced Sample Hardhat Project

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/sample-script.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

# Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).

Disclaimer: Please note, this repo contains community examples only  — these are not Chainlink products or services and are not supported or maintained by Chainlink. This code represents an example of using a Chainlink product or service, and is intended for demonstration and educational purposes only. It is provided “AS IS” and “AS AVAILABLE” without warranties of any kind, may not have been audited, and may omit checks or error handling. Each party intending to use this example code does so entirely at their own risk and must perform its own audits, security and code review, key management, and testing before any production deployment and ensure the operation and performance of such code matches expectations. Neither Chainlink Labs nor the Chainlink Foundation deploys, operates, monitors, maintains or endorses any deployment of this code. Note that this is not a Chainlink product, feature or service, and there are no commitments made with respect to the code, including compatibility with future Chainlink releases. You should not rely on this code without first conducting your own technical, engineering, and security review. This code is also outside the scope of any Chainlink bug bounty programs. Neither Chainlink Labs, the Chainlink Foundation, nor Chainlink node operators are responsible for outcomes due to errors in this example or how it is deployed or operated, or liable for any resulting claims or damages. Use of the Chainlink Network is subject to the Chainlink Foundation [Terms of Service](https://chain.link/terms), which provides important information and disclosures. By using this code, you acknowledge and agree to these terms.
