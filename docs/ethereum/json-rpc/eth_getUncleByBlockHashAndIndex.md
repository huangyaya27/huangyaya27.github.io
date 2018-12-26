# eth_getUncleByBlockHashAndIndex

Returns information about the 'Uncle' of a block by hash and the Uncle index position.

### REQUEST

`POST https://<network>.infura.io/v3/YOUR-PROJECT-ID`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PARAMS
- `BLOCK HASH` _[required]_ - a string representing the hash (32 bytes) of a block
- `UNCLE INDEX POSITION` _[required]_ - a hex of the integer indicating the uncle's index position.

#### EXAMPLE
```bash
## JSON-RPC over HTTPS POST
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
curl https://mainnet.infura.io/v3/YOUR-PROJECT-ID \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getUncleByBlockHashAndIndex","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35","0x0"],"id":1}'

## JSON-RPC over websockets
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
wscat -c wss://mainnet.infura.io/ws/v3/YOUR-PROJECT-ID
>{"jsonrpc":"2.0","method":"eth_getUncleByBlockHashAndIndex","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35","0x0"],"id":1}
```

### RESPONSE

#### RESULT FIELDS
- `BLOCK` - A block object, or null when no block was found
    - `number`: the block number. Null when the returned block is the pending block.
    - `hash`: 32 Bytes - hash of the block. null when its pending block.
    - `parentHash`: 32 Bytes - hash of the parent block.
    - `nonce`: 8 Bytes - hash of the generated proof-of-work. Null when the returned block is the pending block.
    - `sha3Uncles`: 32 Bytes - SHA3 of the uncles data in the block.
    - `logsBloom`: 256 Bytes - the bloom filter for the logs of the block. Null when the returned block is the pending block.
    - `transactionsRoot`: 32 Bytes - the root of the transaction trie of the block.
    - `stateRoot`: 32 Bytes - the root of the final state trie of the block.
    - `receiptsRoot`: 32 Bytes - the root of the receipts trie of the block.
    - `miner`: 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
    - `difficulty`: integer of the difficulty for this block.
    - `totalDifficulty`: integer of the total difficulty of the chain until this block.
    - `extraData`: the "extra data" field of this block.
    - `size`: integer the size of this block in bytes.
    - `gasLimit`: the maximum gas allowed in this block.
    - `gasUsed`: the total used gas by all transactions in this block.
    - `timestamp`: the unix timestamp for when the block was collated.
    - `uncles`: an Array of uncle hashes.

Note: An uncle doesn't contain individual transactions.

#### BODY

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "difficulty": "0xbf93da424b943",
    "extraData": "0x65746865726d696e652d657539",
    "gasLimit": "0x7a121d",
    "gasUsed": "0x79ea62",
    "hash": "0x824cce7c7c2ec6874b9fa9a9a898eb5f27cbaf3991dfa81084c3af60d1db618c",
    "logsBloom": "0x0948432021200401804810002000000000381001001202440000010020000080a016262050e44850268052000400100505022305a64000054004200b0c04110000080c1055c42001054b804940a0401401008a00112d80082113400c10006580140005011a40220020000010001c0a00082300434002000050840010102082801c2000148540201004491814020480080111a0300600000003800640024200109c00202010044000880000106810a1a010000028a0100000422000140011000050a2a44b3080001060800000540c108102102600d000004730404a880100600021080100403000180000062642408b440060590400080101e046f08000000430",
    "miner": "0xea674fdde714fd979de3edf0f56aa9716b898ec8",
    "mixHash": "0x0b15fe0a9aa789c167b0f5ade7b72969d9f2193014cb4e98382254f60ffb2f4a",
    "nonce": "0xa212d6400b89b3f6",
    "number": "0x5bad54",
    "parentHash": "0x05e19fb68d9ec798073808e8b3170875cb327d4b6cde7d6f60fe194677bb26fd",
    "receiptsRoot": "0x90807b32c4aa4610c57289de57fa68ba50ed53f14dd2c25f1862aa049029dcd6",
    "sha3Uncles": "0xf763576c1ea6a8c61a206e16b1a2451bec5cba1c7545d7ff733a1e8c78715569",
    "size": "0x216",
    "stateRoot": "0xebc7a1603bfffe0a14bdb89f898e2f2824abb40f04579beb7b920c56d6e273c9",
    "timestamp": "0x5b54143f",
    "totalDifficulty": null,
    "transactionsRoot": "0x7562cba41e067b364b933e7b566fb2444f6954fef3964a5a487d4cd79d97a56c",
    "uncles": []
  }
}
```
