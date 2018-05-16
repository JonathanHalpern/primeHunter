const findSearchTime = timeDifferenceInMilliSeconds => {
  const timeDifferenceInSeconds = timeDifferenceInMilliSeconds / 1000;
  if (timeDifferenceInSeconds === 0) {
    return "almost no time at all";
  }
  if (timeDifferenceInSeconds > 1) {
    return timeDifferenceInSeconds.toPrecision(3) + 's';
  } else {
    return timeDifferenceInSeconds + 's';
  }
}

const findNthPrime = numberOfPrimesToFind =>
  new Promise((resolve, reject) => {
    const foundPrimes = [];
    let numberToInvestigate = 2;

    const startTime = new Date();

    while (foundPrimes.length < numberOfPrimesToFind) {
      if (foundPrimes.every(prime => numberToInvestigate % prime)) {
        foundPrimes.push(numberToInvestigate);
      }
      numberToInvestigate += 1;
    }

    const finishTime = new Date();
    const timeDifference = (finishTime - startTime) / 1000;
    const searchTime = timeDifference ? timeDifference + "s" : "almost no time at all";
    resolve({
      foundPrimes,
      finalPrime: foundPrimes[foundPrimes.length - 1],
      searchTime
    });
  });

export default {
  findSearchTime,
  findNthPrime
};
