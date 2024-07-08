import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains'

type AddressMap = { [chainId: number]: string }

type ChainAddresses = {
  v3CoreFactoryAddress: string
  multicallAddress: string
  quoterAddress: string
  v3MigratorAddress?: string
  nonfungiblePositionManagerAddress?: string
  tickLensAddress?: string
  swapRouter02Address?: string
  v1MixedRouteQuoterAddress?: string
}

export const UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = '0x8B799381ac40b838BBA4131ffB26197C432AFe78'

/**
 * @deprecated use V2_FACTORY_ADDRESSES instead
 */
export const V2_FACTORY_ADDRESS = '0x2eeFa13703Eb4483Aa588Fd5D6bfb034E1FB8d97'
export const V2_FACTORY_ADDRESSES: AddressMap = {
  [ChainId.MODE]: '0x2eeFa13703Eb4483Aa588Fd5D6bfb034E1FB8d97'
}
/**
 * @deprecated use V2_ROUTER_ADDRESSES instead
 */
export const V2_ROUTER_ADDRESS = '0x6AD9F54098EdA3A6577c379516EC934d6873851F'
export const V2_ROUTER_ADDRESSES: AddressMap = {
  [ChainId.MODE]: '0x6AD9F54098EdA3A6577c379516EC934d6873851F'
}

// Networks that share most of the same addresses i.e. Mainnet, Goerli, Optimism, Arbitrum, Polygon
const MODE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x5091730383fE325040813281231D323049Eeaf8b',
  multicallAddress: '0xcd9845c3233Dbd3274Be6054f21CE26C79e5a65E',
  quoterAddress: '0xF300FEbb15a67D776CD2eC706b61C883e067763b',
  v3MigratorAddress: '0x2a8cC9911201FD188fDD641df81044C9a6F76B01',
  nonfungiblePositionManagerAddress: '0xEF3e32154B5Fb96D56D339e655A5edf5f5661Af8',
  tickLensAddress: '0xE5a7A29FF8D7F6EEc07377b791F4F9db7f3FFDBC',
  swapRouter02Address: '0x22dc8CA232debF877eFF0628FF9215519e8083f4'
}

export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.MODE]: MODE_ADDRESSES,
}

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress
    return memo
  }, {})
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3MigratorAddress
    if (v3MigratorAddress) {
      memo[chainId] = v3MigratorAddress
    }
    return memo
  }, {})
}

export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress
    return memo
  }, {})
}

export const QUOTER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress
    return memo
  }, {})
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress
    if (nonfungiblePositionManagerAddress) {
      memo[chainId] = nonfungiblePositionManagerAddress
    }
    return memo
  }, {})
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress
    if (tickLensAddress) {
      memo[chainId] = tickLensAddress
    }
    return memo
  }, {})
}

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  if (SUPPORTED_CHAINS.includes(chainId)) {
    const id = chainId as SupportedChainsType
    return CHAIN_TO_ADDRESSES_MAP[id].swapRouter02Address ?? '0x22dc8CA232debF877eFF0628FF9215519e8083f4'
  }
  return ''
}
