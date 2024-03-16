/**
 * @dev Uniswap V3 default factory enabled fee amounts.
 * In hundredths of bips, i.e. 1e-6, type uint24 (0, 16,777,215).
 * @param LOWEST - 0.01%, or 0.00000100 in real number representation
 * @param LOW    - 0.05%, or 0.00000500 in real number representation
 * @param MEDIUM - 0.30%, or 0.00003000 in real number representation
 * @param HIGH   - 1.00%, or 0.00010000 in real number representation
 */
export enum FeeAmount {
    LOWEST = 100,
    LOW = 500,
    MEDIUM = 3000,
    HIGH = 10000
}