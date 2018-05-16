const findNthPrime = numberOfPrimesToFind =>
  new Promise((resolve, reject) => {
    const primeArray = [];
    let numberToInvestigate = 2;

    const startTime = new Date();

    while (primeArray.length < numberOfPrimesToFind) {
      if (primeArray.every(prime => numberToInvestigate % prime)) {
        primeArray.push(numberToInvestigate);
      }
      numberToInvestigate += 1;
    }

    const finishTime = new Date();
    const timeDifference = finishTime - startTime;
    resolve({
      primeArray,
      nthPrime: primeArray[primeArray.length - 1],
      timeDifference
    });
  });

export default {
  findNthPrime
};
