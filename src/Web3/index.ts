import web3 from  "web3"
import config from '../config'
// import CyBlocMentorManagerABI from '../ABI/CyBlocMentorManager.json'
// import CyBlocMentorManagerV1ABI from '../ABI/CyBlocMentorManagerV1.json'
// import CyBlocMentorFeeABI from '../ABI/CyBlocMentorFee.json'
// import CyBallUtilsABI from '../ABI/CyBallUtils.json'
// import CyBlocABI from '../ABI/CyBlocABI.json'
// import CyPodLockToOpenABI from '../ABI/CyPodLockToOpen.json'
// import CyBallRewardABI from '../ABI/CyBallReward.json'
// import CyLoansABI from '../ABI/CyLoansABI.json'
// import CyBlocFlashMentorABI from '../ABI/CyBlocFlashMentorABI.json'

export const Web3 = new web3(
    new web3.providers.HttpProvider(config.NETWORK.RPC)
);

export function Contract(address: string, abi: any) {
    return new Web3.eth.Contract(abi, address)
}

var CACHE_BLOCK_NUMBER = {
    value: 0,
    exp: 0
}
export async function getBlockNumber() {
    if (CACHE_BLOCK_NUMBER.exp < new Date().getTime()) {
        CACHE_BLOCK_NUMBER = {
            value: await Web3.eth.getBlockNumber(),
            exp: new Date().getTime() + 3000
        }
    }
    return CACHE_BLOCK_NUMBER.value
}

export const ADDRESS_0 = '0x0000000000000000000000000000000000000000'

// export const CyBlocMentorManager = Contract(config.CONTRACT.CYBLOC_MENTOR_MANAGER.ADDRESS, CyBlocMentorManagerABI)
// export const CyBlocFlashMentor = Contract(config.CONTRACT.CYBLOC_MENTOR_MANAGER.FLASHMENTOR, CyBlocFlashMentorABI)
// export const CyBlocMentorManagerV1 = Contract(config.CONTRACT.CYBLOC_MENTOR_MANAGER.ADDRESS_V1, CyBlocMentorManagerV1ABI)
// export const CyBlocMentorFee = Contract(config.CONTRACT.CYBLOC_MENTOR_FEE.ADDRESS, CyBlocMentorFeeABI)

// export const CyPodLockToOpen = Contract(config.CONTRACT.CYPOD_LOCK_TO_OPEN.ADDRESS, CyPodLockToOpenABI)
// export const CyBallUtils = Contract(config.CONTRACT.CYBALL_UTILS.ADDRESS, CyBallUtilsABI)
// export const CyBloc = Contract(config.CONTRACT.CYBLOC_CORE.ADDRESS, CyBlocABI)
// export const CyBallReward = Contract(config.CONTRACT.REWARD.ADDRESS, CyBallRewardABI)
// export const CyLoanV1 = Contract(config.CONTRACT.CYLOAN_V1.ADDRESS, CyLoansABI)
// export const CyLoan = Contract(config.CONTRACT.CYLOAN.ADDRESS, CyLoansABI)