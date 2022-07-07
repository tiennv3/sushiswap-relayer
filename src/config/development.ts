import path from 'path'

const contract = {
    CYBLOC_UTIL_ADDRESS: '0x675776Ecce5a9a59e340831d860c029A9a56db11',
    MARKETPLACE: '0xd09E25B5116d63ba8946F4Ea4B04493d99dD67E1',
    CYLOAN_ADDRESS:  '0x379Ee8B03B78BBe4142F34E832B3F928fF96E71C',

    CYBLOC_GENE_SCIENTIST_ADDRESS: '0x1EFE6A32A0E312574d5A490f97f54a09D2807768',
    CYBLOC_CORE_ADDRESS: '0x1055acaa15dD6E5974b5B309aFAFc80e95356E9D',
    CYBLOC_MENTOR_MANAGER_ADDRESS: '0x0D22e02aCbB6ee9AD3658C210f0b78674D91F2dA',
    CYBLOC_PACK_ADDRESS: '0x6788EEEB070f042015642624455fB511ceA14A4d',
    
    CYBLOC_PACK_SALE_COMMON_ADDRESS: '0xAE0bE1B71027C0b9ae3816a9Ad2950352cb7aedb',
    CYBLOC_PACK_SALE_RARE_ADDRESS: '0x8E7ace480Eb28Edda31Cf172A29d92f350D04E30',
    CYBLOC_PACK_SALE_EPIC_ADDRESS: '0xf218EdD0AC3EDb6CC8Ee0cD4fC7C047557d22432',

    CYBALL_REWARD_ADDRESS: '0xbF83879c38ed9EbeD2ef1e417Be8bc53D1659264',
    CYPOD_LOCK_TO_OPEN_ADDRESS: '0x061Bef38B64c84e69A825168F5D730df8b4EE234',
    CYBLOC_MENTOR_FEE_ADDRESS: '0x104A8cD30c79092B30E8448d44B7539d5d40E47F'
}


export default {
    __ROOTDIR: __dirname.includes('dist') ? path.join(__dirname, '../../..') : path.join(__dirname, '../..'),

    NETWORK: {
        RPC: "https://testnet.tomochain.com",
        CHAIN_ID: "89",
        MULLTICALL: '0xb67D7a6644d9E191Cac4DA2B88D6817351C7fF62'
    },
    AZURE: {
        STORAGE_ACCOUNT_NAME: process.env.STORAGE_ACCOUNT_NAME,
        STORAGE_ACCOUNT_ACCESS_KEY: process.env.STORAGE_ACCOUNT_ACCESS_KEY,
        COSMOS_ENDPOINT: process.env.COSMOS_ENDPOINT,
        COSMOS_ACCOUNT_ACCESS_KEY: process.env.COSMOS_ACCOUNT_ACCESS_KEY,
        COSMOS_DB_ID: process.env.COSMOS_DB_ID         
    },
    CDN: {
        IMAGE: "https://storageaccountcyball.blob.core.windows.net"
    },
    MONGODB: {
        // 'mongodb+srv://dev-cyball-app-operator:1KGmkusQl0sd5opq@dev-cyball-app-database.yhrrm.mongodb.net/dev-cyball-app-dump-prod?retryWrites=true&w=majority&keepAlive=true&socketTimeoutMS=360000&connectTimeoutMS=360000' 
        // 'mongodb+srv://dev-cyball-app-operator:1KGmkusQl0sd5opq@dev-cyball-app-database.yhrrm.mongodb.net/dev-cyball-app?retryWrites=true&w=majority&keepAlive=true&socketTimeoutMS=360000&connectTimeoutMS=360000'
        URI: process.env.MONGODB_URI || 'mongodb+srv://dev-cyball-app-operator:1KGmkusQl0sd5opq@dev-cyball-app-database.yhrrm.mongodb.net/dev-cyball-app?retryWrites=true&w=majority&keepAlive=true&socketTimeoutMS=360000&connectTimeoutMS=360000'
    },
    AUTH0: {
        CLIENTID: 'Fwy7sqqjtP6t2ThZ5qtbTv1OU2CW6QiP',
        DOMAIN: 'https://cyball-dev.jp.auth0.com',
        CONNECTION: 'Username-Password-Authentication',
    },
    AUTH0_M2M: {
        CLIENT_ID: 'ZkiY1dORT17jdIeY2qUcxGVDCWRw7M70',
        CLIENT_SECRET: 'w6IPmbOgUL254WPCGWOoMsTuQPzZ1hF5b7B1C3o9oGzi9kRs3o9KEF5zFkDiwsIn',
        AUDIENCE: 'https://dev-platform.cyball.com',
        GRANT_TYPE: 'client_credentials',
        URL: 'https://cyball-dev.jp.auth0.com'
    },
//     For signup/reset password
// AUTH_CLIENT_ID = "auth-user-service",
// AUTH_CLIENT_SECRET = "N1KwZR0tzD1Ar6kSuewBNmTWQqrQWvWK",
// AUTH_REALM_NAME = "dev-cyball"
// AUTH_GRANT_TYPE = "client_credentials"
// For m2m
// AUTH_CLIENT_ID = "m2m-auth-service",
// AUTH_CLIENT_SECRET = "VgmdUgx3syPNAEm94qWYQhhNFfu9y5JC",
// AUTH_REALM_NAME = "dev-cyball"
// AUTH_GRANT_TYPE = "client_credentials"

    AUTH_KEY_CLOAK: {
        CLIENT_ID: 'auth-user-service',
        CLIENT_SECRET: 'N1KwZR0tzD1Ar6kSuewBNmTWQqrQWvWK',
        URL: 'https://oauth.cyball.com/auth',
        REALM_NAME: 'dev-cyball',
        GRANT_TYPE: 'client_credentials'
    },
    AUTH_KEY_CLOAK_M2M: {
        CLIENT_ID: 'm2m-auth-service',
        CLIENT_SECRET: 'VgmdUgx3syPNAEm94qWYQhhNFfu9y5JC',
        URL: 'https://oauth.cyball.com/auth',
        REALM_NAME: 'dev-cyball',
        GRANT_TYPE: 'client_credentials'
    },
    APP: {
        WEB: 'http://genesis-test.cyball.com',
        WEB_CYBLOC_URL: 'http://genesis-test.cyball.com/#/nft-detail',
        CYBLOC_IMAGE: process.env.IS_LOCAL_HOST ? 'http://localhost:7071/cybloc-images' : 'https://cyball-api.azurewebsites.net/cybloc-images',
        CYBLOC_DETAIL: 'https://cyball-api.azurewebsites.net/api/cyblocs',
        CYBLOC_IMAGE_VERSION: 'v1'
    },
    CRAWLER: {
        CYBLOC: process.env.IS_LOCAL_HOST ? 'http://localhost:7071/api/Crawler/CyBloc' : 'https://cyball-api.azurewebsites.net/api/Crawler/CyBloc',
        CYLOAN: process.env.IS_LOCAL_HOST ? 'http://localhost:7071/api/Crawler/CyLoan' : 'https://cyball-api.azurewebsites.net/api/Crawler/CyLoan',
        CYLOAN_V1: process.env.IS_LOCAL_HOST ? 'http://localhost:7071/api/Crawler/CyLoanV1' : 'https://cyball-api.azurewebsites.net/api/Crawler/CyLoanV1',
        GAME_LOG: process.env.IS_LOCAL_HOST ? 'http://localhost:7071/api/Crawler/GameLog' : 'https://cyball-api.azurewebsites.net/api/Crawler/GameLog'
    },
    REWARD: {
        MIN_REQUEST_TIME: 1 * 1000,
        MIN_CALL_REQUEST_TIME: 1 * 1000
    },
    MANAGER: {
        OPERATORS: ['0xfe9e357caB0D57d5131e28cc710a86ac8214c14C', '0xd7b72B803Dc1Ae65b72dAdbB3c8Ed6794B97FcB3', '0x40e7c5aA34846968d37e2C6a2EAeec0072967872', '0xeb84064b04005055293dbc411855bac4dd5a078e', '0x9f6b8fdd3733b099a91b6d70cdc7963ebbbd2684'],
        ADMINS: ['0xfe9e357caB0D57d5131e28cc710a86ac8214c14C', '0xd7b72B803Dc1Ae65b72dAdbB3c8Ed6794B97FcB3', '0x40e7c5aA34846968d37e2C6a2EAeec0072967872', '0xeb84064b04005055293dbc411855bac4dd5a078e', '0x9f6b8fdd3733b099a91b6d70cdc7963ebbbd2684']
    },
    GAME_SERVER: {
        API: 'https://dev-game-api.cyball.com'
    },
    MENTOR: {
        SEED_VERSION: 1
    },
    CYBLOC_SEASONS: [0, 1],
    CONTRACT: {
        REWARD: {
            NUMBER_BLOCK_TO_CONFIRM: 30,
            ADDRESS: '0xbF83879c38ed9EbeD2ef1e417Be8bc53D1659264',
            OPERATOR_PRIVATE_KEY: 'de957dbd1cf5a519c22fe57aa6bd28ff3f69f2e17b41c4c07a3308d63be3122a'
        },
        CYBLOC_CORE: {
            ADDRESS: '0x1055acaa15dD6E5974b5B309aFAFc80e95356E9D',
            MENTOR_COOLDOWN_BLOCK: 10,
            OPEN_COOLDOWN_BLOCK: 10,
        },
        CYBLOC_PACK: {
            ADDRESS: contract.CYBLOC_PACK_ADDRESS,
            OPERATOR_ADDRESS: '0x40e7c5aA34846968d37e2C6a2EAeec0072967872',
            OPERATOR_PRIVATE_KEY: 'de957dbd1cf5a519c22fe57aa6bd28ff3f69f2e17b41c4c07a3308d63be3122a'
        },
        CYLOAN_V1: {
            ADDRESS: '0x2d5E567062ECf0FfD72Aa1A6cc7B47f7Fa422fD0',
            // ADDRESS: '0x2d5E567062ECf0FfD72Aa1A6cc7B47f7Fa422fD0'
        },
        CYLOAN: {
            // ADDRESS: '0x379Ee8B03B78BBe4142F34E832B3F928fF96E71C'
            // ADDRESS: '0x2d5E567062ECf0FfD72Aa1A6cc7B47f7Fa422fD0',
            ADDRESS: '0x7E53b97C0329919F9F2b0Bde40AbAc3cD61D55Af'
        },
        CYBLOC_PACK_SALE_COMMON: {
            ADDRESS: contract.CYBLOC_PACK_SALE_COMMON_ADDRESS,
            OPERATOR_ADDRESS: '0x40e7c5aA34846968d37e2C6a2EAeec0072967872',
            OPERATOR_PRIVATE_KEY: 'de957dbd1cf5a519c22fe57aa6bd28ff3f69f2e17b41c4c07a3308d63be3122a',
            MAX_BUY: 300,
            PRICE: 10000000000000000
        },
        CYBLOC_PACK_SALE_RARE: {
            ADDRESS: contract.CYBLOC_PACK_SALE_RARE_ADDRESS,
            OPERATOR_ADDRESS: '0x40e7c5aA34846968d37e2C6a2EAeec0072967872',
            OPERATOR_PRIVATE_KEY: 'de957dbd1cf5a519c22fe57aa6bd28ff3f69f2e17b41c4c07a3308d63be3122a',
            MAX_BUY: 100,
            PRICE: 10000000000000000
        },
        CYBLOC_PACK_SALE_EPIC: {
            ADDRESS: contract.CYBLOC_PACK_SALE_EPIC_ADDRESS,
            OPERATOR_ADDRESS: '0x40e7c5aA34846968d37e2C6a2EAeec0072967872',
            OPERATOR_PRIVATE_KEY: 'de957dbd1cf5a519c22fe57aa6bd28ff3f69f2e17b41c4c07a3308d63be3122a',
            MAX_BUY: 100,
            PRICE: 10000000000000000
        },
        GUILDFI_CYBLOC_PACK_SALE_COMMON: {
            ADDRESS: contract.CYBLOC_PACK_SALE_COMMON_ADDRESS,
            OPERATOR_ADDRESS: '0x40e7c5aA34846968d37e2C6a2EAeec0072967872',
            OPERATOR_PRIVATE_KEY: 'de957dbd1cf5a519c22fe57aa6bd28ff3f69f2e17b41c4c07a3308d63be3122a',
            MAX_BUY: 300,
            PRICE: 10000000000000000
        },
        GUILDFI_CYBLOC_PACK_SALE_RARE: {
            ADDRESS: contract.CYBLOC_PACK_SALE_RARE_ADDRESS,
            OPERATOR_ADDRESS: '0x40e7c5aA34846968d37e2C6a2EAeec0072967872',
            OPERATOR_PRIVATE_KEY: 'de957dbd1cf5a519c22fe57aa6bd28ff3f69f2e17b41c4c07a3308d63be3122a',
            MAX_BUY: 100,
            PRICE: 10000000000000000
        },
        GUILDFI_CYBLOC_PACK_SALE_EPIC: {
            ADDRESS: contract.CYBLOC_PACK_SALE_EPIC_ADDRESS,
            OPERATOR_ADDRESS: '0x40e7c5aA34846968d37e2C6a2EAeec0072967872',
            OPERATOR_PRIVATE_KEY: 'de957dbd1cf5a519c22fe57aa6bd28ff3f69f2e17b41c4c07a3308d63be3122a',
            MAX_BUY: 100,
            PRICE: 10000000000000000
        },

        CYBALL_UTILS: {
            ADDRESS: '0x633EF10268b00a00CC1262045826b3643F24679f'
        },
        
        MARKETPLACE: {
            ADDRESS: '0xd09E25B5116d63ba8946F4Ea4B04493d99dD67E1'
        },

        // CYBLOC_MENTOR_MANAGER: {
        //     ADDRESS: '0x9CF0887DE72742dB0fb51AD988E761eF442f9239',
        //     TOKEN_FEE_1_ADDRESS: '0x7Df9AfB35C00a9A57c7BCfBc771e9dD97822e2c7',
        //     TOKEN_FEE_2_ADDRESS: '0x88E602C8DFC84B311b36d216F1342e8492B5F40d',
        //     MENTOR_FEE_ADDRESS: '0x6cBB52937bba1E0f578Aa87C40d4F9A8e54d7Cb7',
        //     OPERATOR_ADDRESS: '0x40e7c5aA34846968d37e2C6a2EAeec0072967872',
        //     OPERATOR_PRIVATE_KEY: 'de957dbd1cf5a519c22fe57aa6bd28ff3f69f2e17b41c4c07a3308d63be3122a',
        // },

        // CYBLOC_MENTOR_FEE: {
        //     ADDRESS: '0x6cBB52937bba1E0f578Aa87C40d4F9A8e54d7Cb7'
        // },

        CYBLOC_MENTOR_MANAGER: {
            ADDRESS_V1: '0x9CF0887DE72742dB0fb51AD988E761eF442f9239',
            ADDRESS_V2: '0xf6A5484998CE9EF35801358151E44A538af34b88',
            ADDRESS: '0xf6A5484998CE9EF35801358151E44A538af34b88',
            TOKEN_FEE_1_ADDRESS: '0x7Df9AfB35C00a9A57c7BCfBc771e9dD97822e2c7',
            TOKEN_FEE_2_ADDRESS: '0x88E602C8DFC84B311b36d216F1342e8492B5F40d',
            MENTOR_FEE_ADDRESS: '0x6cBB52937bba1E0f578Aa87C40d4F9A8e54d7Cb7',
            OPERATOR_ADDRESS: '0x40e7c5aA34846968d37e2C6a2EAeec0072967872',
            OPERATOR_PRIVATE_KEY: 'de957dbd1cf5a519c22fe57aa6bd28ff3f69f2e17b41c4c07a3308d63be3122a',
            FLASHMENTOR: '0x31053cdeC62EF86eF26118a84C704299B13884c0',
        },

        CYBLOC_MENTOR_FEE: {
            ADDRESS: '0x4b7928031028218e80F990D45bE2FF84FB6C57B1',
            OPTIONS: [1, 2]
        },

        CYPOD_LOCK_TO_OPEN: {
            ADDRESS: '0x5b0043a0639384bB7121D4Aaa0AB8e6bAd7ec889'
        },

        REWARD_TOKEN: {
            ADDRESS: '0x7Df9AfB35C00a9A57c7BCfBc771e9dD97822e2c7',
            DECIMALS: 18
        },

        NFT_BATCH_TRANSFER: {
            ADDRESS: '0xF87C6d22aaa1d6b988603d2290cb391442c42FE6'
        }
    }
}