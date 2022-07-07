import { cleanPrivateKey } from "..//utils";
import secp256k1 from "secp256k1"
import config from '..//config'
import { Web3 } from "..//Web3";
import _ from "lodash";
import createKeccakHash from 'keccak'
// import BN from 'bignumber.js'

function generateProofClaim(rewardId, requestId, account, amount) {
    var msg = Web3.utils.soliditySha3(
        config.NETWORK.CHAIN_ID,
        config.CONTRACT.REWARD.ADDRESS,
        rewardId,
        requestId,
        account,
        amount,
    )

    const signkey = cleanPrivateKey(config.CONTRACT.REWARD.OPERATOR_PRIVATE_KEY)

    var msg2 = Buffer.from(msg.slice(2), 'hex')
    var privateKey = Buffer.from(signkey, 'hex')
    const sig = secp256k1.ecdsaSign(msg2, privateKey)
    const ret = {
        v: sig.recid + 27,
        r: Array.from(sig.signature.slice(0, 32)),
        s: Array.from(sig.signature.slice(32, 64))
    }
    return ret
}

function verifyProof(rewardId, requestId, account, amount, v, r: number[], s: number[]) {
    var msg = Web3.utils.soliditySha3(
        config.NETWORK.CHAIN_ID,
        config.CONTRACT.REWARD.ADDRESS,
        rewardId,
        requestId,
        account,
        amount,
    )
    var msgHex = Buffer.from(msg.slice(2), 'hex')
    var signature = Uint8Array.from(r.concat(s))
    
    
    var pubkey = secp256k1.publicKeyConvert(secp256k1.ecdsaRecover(signature, v - 27, msgHex), false)
    pubkey = Buffer.from(pubkey).slice(1)
    const hash = createKeccakHash('keccak256').update(pubkey).digest()
    return `0x${hash.slice(-20).toString('hex')}`
}

export async function SignTransaction ()  {
    var secondaryProof = generateProofClaim('claimRewardId', 'id', 'reward.address', '');
   
}
