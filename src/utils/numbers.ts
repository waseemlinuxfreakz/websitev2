export function restoreOriginalSumSent(amount: number) {

    if (amount < 0) return 0;

    if (amount <= 2000) {
        return Number(amount + 0.4).toFixed(2);
    }

    return Number(amount + amount * 0.0002).toFixed(2);

}