import { Token } from './token'

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId: number]: Token } = {
  [919]: new Token(919, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
}
