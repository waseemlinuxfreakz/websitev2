import { isHexString } from "../verifiers";

export function restoreOriginalSumSent(amount: number) {
  if (amount < 0) return 0;

  if (amount <= 2000) {
    return Number(amount + 0.05).toFixed(8);
  }

  return Number(amount + amount * 0.0002).toFixed(8);
}

/**
 * Converts two values to BigInt and returns them as properties within an object.
 *
 * @param {string | number | bigint} a The first value to be converted to a BigInt.
 * @param {string | number | bigint} b The second value to be converted to a BigInt.
 * @returns {Object} An object containing the converted BigInt values as `_a` and `_b` properties.
 *
 * @example
 * ```ts
 * const stringValue1 = "12345";
 * const numberValue1 = 42;
 * const bigintValue1 = 100n;
 *
 * const stringValue2 = "98765";
 * const numberValue2 = 99;
 * const bigintValue2 = 200n;
 *
 * const result = format2BigInt(stringValue1, stringValue2);
 * // Result: { _a: 12345n, _b: 98765n }
 * ```
 */
export function format2BigInt(
  a: string | number | bigint,
  b: string | number | bigint,
): { _a: bigint; _b: bigint } {
  let _a, _b;
  if (a && typeof a === "string") {
    if (isHexString(a)) {
      _a = hexToDecimalString(a);
    } else {
      _a = a.replace(/[^0-9]/g, "");
    }
  } else {
    _a = a;
  }
  if (b && typeof b === "string") {
    if (isHexString(b)) {
      _b = hexToDecimalString(b);
    } else {
      _b = b.replace(/[^0-9]/g, "");
    }
  } else {
    _b = b;
  }
  return { _a: _a ? BigInt(_a) : 0n, _b: _b ? BigInt(_b) : 0n };
}

/**
 * Convert a hexadecimal string to a decimal string.
 *
 * @param {string} s The hexadecimal string to convert.
 * @returns {string} The decimal representation of the hexadecimal string.
 *
 * @example
 * ```js
 * const hexadecimalString = "0x89f8e091e5e80d5";
 * const decimalString = hexToDecimalString(hexadecimalString);
 * console.log(`Hexadecimal: ${hexadecimalString}`);
 * console.log(`Decimal: ${decimalString}`);
 * // Output:
 * // Hexadecimal: 0x89f8e091e5e80d5
 * // Decimal: 621371443415777493
 * ```
 */
export function hexToDecimalString(s: string): string {
  // Define a mapping from hexadecimal characters to decimal values
  const hexToDecimalMap: Record<string, string> = {
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    a: "10",
    b: "11",
    c: "12",
    d: "13",
    e: "14",
    f: "15",
  };

  // Remove the '0x' prefix if it exists
  let hexString: string = s.startsWith("0x") ? s.slice(2) : s;

  let decimalValue = "0";

  // Iterate through the hexadecimal string from right to left
  for (let i = hexString.length - 1; i >= 0; i--) {
    const hexDigit = hexString[i].toLowerCase();
    const decimalDigit = hexToDecimalMap[hexDigit];
    if (decimalDigit === undefined) {
      throw new Error(`Invalid hexadecimal character: ${hexDigit}`);
    }
    const powerOf16 = BigInt(hexString.length - 1 - i);
    const digitValue = BigInt(decimalDigit);
    decimalValue = (
      BigInt(decimalValue) +
      digitValue * 16n ** powerOf16
    ).toString();
  }

  return decimalValue;
}

export function removeTrailingZeroes(num: number | string) {
  // Convert number to string
  let numStr = num.toString();

  // Remove trailing zeroes after the decimal point
  numStr = numStr.replace(/(\.\d*?[1-9])0+$/, "$1");

  // Remove trailing decimal point if it's the last character
  numStr = numStr.replace(/\.$/, "");

  // Special case for numbers like 1.00000000
  numStr = numStr.replace(".00000000", ".00");

  return numStr;
}
