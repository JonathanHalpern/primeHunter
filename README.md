# primeHunter
Created with CodeSandbox

Prime Hunter is a tool for finding the nth prime

The algorithm is based on the sieve of Eratosthenes. Each successive number is divided by all known primes to see if it has any non trivial factors. If a number cannot be divided by any known prime, it is added to the array of primes. We then test the next number up. This process is continued until we have n primes in the array.

The algorithm could be improved by only using primes less than or equal to the square root of the number whose factors we are checking. This benefit is likely to be more signficant for larger values of n, which was outside the scope of this exercise.


## Points for further development

* Form validation to prevent negative or decimal inputs
* Warning messages when searches could take a long time
* Use web workers or a server to do the processing, to avoid freezing the UI - this could also be used to enable progress updates
* Cache results, so they can be used for future searches
