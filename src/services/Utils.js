export const findSearchTime = timeDifferenceInMilliSeconds => {
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