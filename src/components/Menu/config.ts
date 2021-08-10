import { MenuEntry } from '@onoja64/dgfuikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.Georgeswap.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  
  {
    label: 'Chart',
    icon: 'PoolIcon',
    href: 'https://www.poochat.com/Georgeswap'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap (Coming soon)',
        href: 'https://pancakeswap.info/token/0x00',
      },
      {
        label: 'CoinMarketCap (Coming Soon)',
        href: 'https://coinmarketcap.com/currencies/Georgeswap/',
      },
      {
        label: 'CoinGecko (Coming soon)',
        href: 'https://www.coingecko.com/en/coins/Georgeswap',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://Georgeswap.finance/Georgeswap/",
      },
      {
        label: "Docs",
        href: "https://Georgeswap.finance/#documents",
      },
      {
        label: "Blog",
        href: "https://Georgeswap.finance/",
      },
    ],
  },
  {
    label: 'Audit by Hacken (Coming soon)',
    icon: 'HelmetIcon',
    href: 'https://www.Georgeswap.finance/files/HackenAudit.pdf',
  },
]

export default config
