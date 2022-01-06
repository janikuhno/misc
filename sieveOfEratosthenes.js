/**
 * The Sieve of Eratosthenes provides a set of steps for finding all prime numbers up to a given limit.
 * A prime number is a positive number with no divisors but 1 and itself.
 * For example 2, 3, 11, and 443 are all prime numbers.
 * The complexity of the Sieve of Eratosthenes with optimizations is O(nlog(logn))
 */
const sieveOfEratosthenes = (limit) => {
  // Handle edge cases
  if (limit <= 1) {
    return [];
  }
  // Create the output
  const output = new Array(limit + 1).fill(true);
  // Mark 0 and 1 as non-prime
  output[0] = false;
  output[1] = false;

  // Iterate up to the square root of the limit
  for (let i = 2; i < Math.pow(limit, 0.5); i++) {
    if (output[i] === true) {
      // Mark all multiples of i as non-prime
      for (let j = Math.pow(i, 2); j <= limit; j = j + i) {
        output[j] = false;
      }
    }
  }

  // Remove non-prime numbers
  return output.reduce((primes, current, index) => {
    if (current) {
      primes.push(index);
    }
    return primes;
  }, []);
};

module.exports = sieveOfEratosthenes;
