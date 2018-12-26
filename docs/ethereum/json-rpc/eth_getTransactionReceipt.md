# eth_getTransactionReceipt

Returns the receipt of a transaction by transaction hash. **Note** that the receipt is not available for pending transactions.

### REQUEST

`POST https://<network>.infura.io/v3/YOUR-PROJECT-ID`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PARAMS
- `TRANSACTION HASH` _[required]_ - a string representing the hash (32 bytes) of a transaction

#### EXAMPLE
```bash
## JSON-RPC over HTTPS POST
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
curl https://mainnet.infura.io/v3/YOUR-PROJECT-ID \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params": ["0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0"],"id":1}'

## JSON-RPC over websockets
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
wscat -c wss://mainnet.infura.io/ws/v3/YOUR-PROJECT-ID
>{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params": ["0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0"],"id":1}
```

### RESPONSE

#### RESULT FIELDS
- `TRANSACTION RECEIPT` - A transaction receipt object, or null when no receipt was found:
    - `transactionHash`: 32 Bytes - hash of the transaction.
    - `transactionIndex`: integer of the transactions index position in the block.
    - `blockHash`: 32 Bytes - hash of the block where this transaction was in.
    - `blockNumber`: block number where this transaction was in.
    - `from`: 20 Bytes - address of the sender.
    - `to`: 20 Bytes - address of the receiver. Null when the transaction is a contract creation transaction.
    - `cumulativeGasUsed`: the total amount of gas used when this transaction was executed in the block.
    - `gasUsed`: the amount of gas used by this specific transaction alone.
    - `contractAddress`: 20 Bytes - the contract address created, if the transaction was a contract creation, otherwise - null.
    - `logs`: Array - Array of log objects, which this transaction generated.
    - `logsBloom`: 256 Bytes - Bloom filter for light clients to quickly retrieve related logs.

It also returns _either_:
    - `root` : 32 bytes of post-transaction stateroot (pre Byzantium)
    - `status`: either 1 (success) or 0 (failure)

#### BODY

```js
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "blockHash": "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",
    "blockNumber": "0x5bad55",
    "contractAddress": null,
    "cumulativeGasUsed": "0xb90b0",
    "from": "0x398137383b3d25c92898c656696e41950e47316b",
    "gasUsed": "0x1383f",
    "logs": [
      {
        "address": "0x06012c8cf97bead5deae237070f9587f8e7a266d",
        "blockHash": "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",
        "blockNumber": "0x5bad55",
        "data": "0x000000000000000000000000398137383b3d25c92898c656696e41950e47316b00000000000000000000000000000000000000000000000000000000000cee6100000000000000000000000000000000000000000000000000000000000ac3e100000000000000000000000000000000000000000000000000000000005baf35",
        "logIndex": "0x6",
        "removed": false,
        "topics": [
          "0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80"
        ],
        "transactionHash": "0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0",
        "transactionIndex": "0x11"
      }
    ],
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000200000000000000000000000000000",
    "status": "0x1",
    "to": "0x06012c8cf97bead5deae237070f9587f8e7a266d",
    "transactionHash": "0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0",
    "transactionIndex": "0x11"
  }
}
```
