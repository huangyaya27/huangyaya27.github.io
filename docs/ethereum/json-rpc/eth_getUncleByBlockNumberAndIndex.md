# eth_getUncleByBlockNumberAndIndex

Returns information about the 'Uncle' of a block by hash and the Uncle index position.

### REQUEST

`POST https://<network>.infura.io/v3/YOUR-PROJECT-ID`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PARAMS
- `BLOCK PARAMETER` _[required]_ - an integer block number, or the string "latest", "earliest" or "pending", see the [default block parameter](https://github.com/ethereum/wiki/wiki/JSON-RPC#the-default-block-parameter)
- `UNCLE INDEX POSITION` _[required]_ - a hex of the integer indicating the uncle's index position.

#### EXAMPLE
```bash
## JSON-RPC over HTTPS POST
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
curl https://mainnet.infura.io/v3/YOUR-PROJECT-ID \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getUncleByBlockNumberAndIndex","params": ["0x29c","0x0"],"id":1}'

## JSON-RPC over websockets
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
wscat -c wss://mainnet.infura.io/ws/v3/YOUR-PROJECT-ID
>{"jsonrpc":"2.0","method":"eth_getUncleByBlockNumberAndIndex","params": ["0x29c","0x0"],"id":1}
```

### RESPONSE

#### RESULT FIELDS
- `BLOCK` - A block object, or null when no block was found
    - `number`: the block number. null when its pending block.
    - `hash`: 32 Bytes - hash of the block. null when its pending block.
    - `parentHash`: 32 Bytes - hash of the parent block.
    - `nonce`: 8 Bytes - hash of the generated proof-of-work. null when its pending block.
    - `sha3Uncles`: 32 Bytes - SHA3 of the uncles data in the block.
    - `logsBloom`: 256 Bytes - the bloom filter for the logs of the block. null when its pending block.
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
    "difficulty": "0x57f117f5c",
    "extraData": "0x476574682f76312e302e302f77696e646f77732f676f312e342e32",
    "gasLimit": "0x1388",
    "gasUsed": "0x0",
    "hash": "0x932bdf904546a2287a2c9b2ede37925f698a7657484b172d4e5184f80bdd464d",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "miner": "0x5bf5e9cf9b456d6591073513de7fd69a9bef04bc",
    "mixHash": "0x4500aa4ee2b3044a155252e35273770edeb2ab6f8cb19ca8e732771484462169",
    "nonce": "0x24732773618192ac",
    "number": "0x299",
    "parentHash": "0xa779859b1ee558258b7008bbabff272280136c5dd3eb3ea3bfa8f6ae03bf91e5",
    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "size": "0x21d",
    "stateRoot": "0x2604fbf5183f5360da249b51f1b9f1e0f315d2ff3ffa1a4143ff221ad9ca1fec",
    "timestamp": "0x55ba4827",
    "totalDifficulty": null,
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "uncles": []
  }
}
```
