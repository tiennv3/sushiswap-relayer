import path from 'path'

export default {
    __ROOTDIR: __dirname.includes('dist') ? path.join(__dirname, '../../..') : path.join(__dirname, '../..'),

    NETWORK: {
        RPC: process.env.RPC || "https://dry-purple-forest.bsc.quiknode.pro/83528916be057ba132db188808697bf7cd64232d/",
        CHAIN_ID: "56",
        MULLTICALL: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb'
    },
    AZURE: {
        STORAGE_ACCOUNT_NAME: process.env.STORAGE_ACCOUNT_NAME,
        STORAGE_ACCOUNT_ACCESS_KEY: process.env.STORAGE_ACCOUNT_ACCESS_KEY,
        COSMOS_ENDPOINT: process.env.COSMOS_ENDPOINT,
        COSMOS_ACCOUNT_ACCESS_KEY: process.env.COSMOS_ACCOUNT_ACCESS_KEY,
        COSMOS_DB_ID: process.env.COSMOS_DB_ID         
    },
    CDN: {
        IMAGE: `https://public.cyball.com`
    },
    MONGODB: {
        URI: process.env.MONGODB_URI
    },
    GAME_SERVER: {
        API: 'https://prod-game-api.cyball.com'
    },
    AUTH0: {
        CLIENTID: process.env.AUTH0_CLIENTID,
        DOMAIN: process.env.AUTH0_DOMAIN,
        CONNECTION: process.env.AUTH0_CONNECTION,
    },
    AUTH0_M2M: {
        CLIENT_ID: process.env.AUTH0_M2M_CLIENTID,
        CLIENT_SECRET: process.env.AUTH0_M2M_CLIENT_SECRET,
        AUDIENCE: process.env.AUTH0_M2M_AUDIENCE,
        GRANT_TYPE: 'client_credentials',
        URL: process.env.AUTH0_M2M_URL
    },
    AUTH_KEY_CLOAK: {
        CLIENT_ID: process.env.AUTH_KEY_CLOAK_CLIENT_ID,
        CLIENT_SECRET: process.env.AUTH_KEY_CLOAK_CLIENT_SECRET,
        URL: 'https://oauth.cyball.com/auth',
        REALM_NAME: 'prod-cyball',
        GRANT_TYPE: 'client_credentials'
    },
    AUTH_KEY_CLOAK_M2M: {
        CLIENT_ID: process.env.AUTH_KEY_CLOAK_M2M_CLIENT_ID,
        CLIENT_SECRET: process.env.AUTH_KEY_CLOAK_M2M_CLIENT_SECRET,
        URL: 'https://oauth.cyball.com/auth',
        REALM_NAME: 'prod-cyball',
        GRANT_TYPE: 'client_credentials'
    },
    APP: {
        WEB: 'https://app.cyball.com',
        WEB_CYBLOC_URL: 'https://app.cyball.com/#/nft-detail',
        CYBLOC_IMAGE: 'https://cyball-genesis.azurewebsites.net/cybloc-images',
        CYBLOC_DETAIL: 'https://cyball-genesis.azurewebsites.net/api/cyblocs/',
        CYBLOC_IMAGE_VERSION: 'v1'
    },
    CRAWLER: {
        CYBLOC: 'https://cyball-genesis.azurewebsites.net/api/Crawler/CyBloc',
        CYLOAN: 'https://cyball-genesis.azurewebsites.net/api/Crawler/CyLoan',
        CYLOAN_V1: 'https://cyball-genesis.azurewebsites.net/api/Crawler/CyLoanV1',
        GAME_LOG: 'https://cyball-genesis.azurewebsites.net/api/Crawler/GameLog'
    },
    REWARD: {
        MIN_REQUEST_TIME: 7 * 24 * 60 * 60 * 1000,
        MIN_CALL_REQUEST_TIME: 5 * 60 * 1000
    },
    MANAGER: {
        OPERATORS: ['0x5749370C30A916762a1305B0c87Fd3294f1d9fce', '0x63eae70a7bef426dc2cd1ebbd0c176ea6448fb25', '0x0c797c0c0bf6c2a22153cbe4f5ac2d6ff1b46421', '0x41a17bdf4ce86ca60ab3e734d5bde0c97020a96a', '0x07Bef39e064769B85B67dd5E7F39aa3C76C84734'],
        ADMINS: ['0x5749370C30A916762a1305B0c87Fd3294f1d9fce', '0x0c797c0c0bf6c2a22153cbe4f5ac2d6ff1b46421', '0x41a17bdf4ce86ca60ab3e734d5bde0c97020a96a']
    },
    MENTOR: {
        SEED_VERSION: 1
    },
    CYBLOC_SEASONS: [0, 1],
    // GENE_SCIENTIS: 0x0629853084b04df5585574BbDeDCD8D93160bC1B
    CONTRACT: {
        CYBLOC_CORE: {
            ADDRESS: '0x13B5816396C5095a145aF6994688e6e53Fda6095',
            MENTOR_COOLDOWN_BLOCK: 28800,
            OPEN_COOLDOWN_BLOCK: 28800,
        },
        CYBLOC_PACK: {
            ADDRESS: '0xEAff7EcfD5bC4502b6eEA974a936cDC2EE68df06',
            OPERATOR_PRIVATE_KEY: ''
        },        
        CYBLOC_PACK_SALE_COMMON: {
            ADDRESS: '0x5c172CC77191e549D487bc6c171b715fA9B9d61b',
            OPERATOR_PRIVATE_KEY: process.env.GENESIS_OPERATOR_PRIVATE_KEY,
            MAX_BUY: 3,
            PRICE: 91000000000000000
        },
        CYBLOC_PACK_SALE_RARE: {
            ADDRESS: '0xc7705fff9Dc54F7055d3292Bb9bDa44D24f7E32E',
            OPERATOR_PRIVATE_KEY: process.env.GENESIS_OPERATOR_PRIVATE_KEY,
            MAX_BUY: 1,
            PRICE: 603000000000000000
        },
        CYBLOC_PACK_SALE_EPIC: {
            ADDRESS: '0x556bD0E4E9cE17128e625498242ec4D7CEEf2A3f',
            OPERATOR_PRIVATE_KEY: process.env.GENESIS_OPERATOR_PRIVATE_KEY,
            MAX_BUY: 1,
            PRICE: 7579000000000000000
        },
        
        GUILDFI_CYBLOC_PACK_SALE_COMMON: {
            ADDRESS: '0xbb335C04CD245Df7CCA13f92a6B6B407430c5bc2',
            OPERATOR_PRIVATE_KEY: process.env.GUILDFI_OPERATOR_PRIVATE_KEY,
            MAX_BUY: 1,
            PRICE: 91000000000000000
        },
        GUILDFI_CYBLOC_PACK_SALE_RARE: {
            ADDRESS: '0x781718b73A24C57e25fcaC71BE9454EDA67d4a33',
            OPERATOR_PRIVATE_KEY: process.env.GUILDFI_OPERATOR_PRIVATE_KEY,
            MAX_BUY: 1,
            PRICE: 603000000000000000
        },
        GUILDFI_CYBLOC_PACK_SALE_EPIC: {
            ADDRESS: '0x4DA1d69D3BEDdB6dCF0027c515fdeac05D78C1d9',
            OPERATOR_PRIVATE_KEY: process.env.GUILDFI_OPERATOR_PRIVATE_KEY,
            MAX_BUY: 1,
            PRICE: 7579000000000000000
        },

        CYBALL_UTILS: {
            ADDRESS: '0x722ECDE26B2Adc951d41DA428F848171FDd3f44C'
        },

        MARKETPLACE: {
            ADDRESS: '0x820a52c83ffd1E108A56152f3161023F4EF41479'
        },
        
        CYBLOC_MENTOR_MANAGER: {
            ADDRESS_V1: '0x1D6e1bD66Fc2Ef983837Ddd0Ea0B6d0eEd4EF4E5',
            ADDRESS: '0xCbda15d9462dCD0c268F5f21e34cC7D01F612Fd4',
            TOKEN_FEE_1_ADDRESS: '0x7c73967dC8c804Ea028247f5A953052f0CD5Fd58', // CBT
            TOKEN_FEE_2_ADDRESS: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', // BUSD
            OPERATOR_ADDRESS: '0x2d291266939d3a9f3988823F5a3C7a05a06AAD6C',
            OPERATOR_PRIVATE_KEY: process.env.CYBLOC_MENTOR_MANAGER_OPERATOR_PRIVATE_KEY,
            FLASHMENTOR: '0x8CfEAEBB2F44F7d69a618081d6b11D40784831C1',
        },
        
        CYBLOC_MENTOR_FEE: {
            ADDRESS_V1: '0x35F5477E5b6B29D647c24afB16AD829DD866263e',
            ADDRESS: '0xff2845e40325a871216c1F50Fdb4438D427Eb788',
            OPTIONS: [1, 2]
        },

        // CYBLOC_MENTOR_MANAGER_V2: {
        //     ADDRESS: '',
        //     TOKEN_FEE_1_ADDRESS: '0x7c73967dC8c804Ea028247f5A953052f0CD5Fd58', // CBT
        //     TOKEN_FEE_2_ADDRESS: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', // BUSD
        //     OPERATOR_ADDRESS: '0x2d291266939d3a9f3988823F5a3C7a05a06AAD6C',
        //     OPERATOR_PRIVATE_KEY: process.env.CYBLOC_MENTOR_MANAGER_OPERATOR_PRIVATE_KEY
        // },
        
        // CYBLOC_MENTOR_FEE_V2: {
        //     ADDRESS: '',
        //     OPTIONS: [1, 2]
        // },

        CYPOD_LOCK_TO_OPEN: {
            ADDRESS: '0x78452EFE2a09F6B515CBc30A6DF5eDC4D73F729e'
        },

        CYLOAN_V1: {
            ADDRESS: '0x1D5ac255ca612e16A024AdEE383926607A759aAd'
        },   
        CYLOAN: {
            ADDRESS: '0xa1b6c05E943355ec581bd3f08302f62aE4871184'
        },   

        REWARD_TOKEN: {
            ADDRESS: '0x7c73967dC8c804Ea028247f5A953052f0CD5Fd58',
            DECIMALS: 18
        },

        REWARD: {
            NUMBER_BLOCK_TO_CONFIRM: 12,
            ADDRESS: '0x8c27e5b1edE44aDb61da05c1357F82688fB9E7c6',
            OPERATOR_ADDRESS: '0x9755246e6233149aa69b3093E9278984401E094b',
            OPERATOR_PRIVATE_KEY: process.env.REWARD_OPERATOR_PRIVATE_KEY
        },

        NFT_BATCH_TRANSFER: {
            ADDRESS: '0x0240D2BAF1f0877d9AC89764dd48690cc2971676'
        }
    }
}