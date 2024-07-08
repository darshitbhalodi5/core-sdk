export enum ChainId {
  MODE = 919
}

export const SUPPORTED_CHAINS = [
  ChainId.MODE
] as const

export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH'
}
