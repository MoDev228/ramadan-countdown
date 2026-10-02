function convertSeconds(totalSeconds) {
  const days = Math.floor(totalSeconds / 86400);

  let resteSeconds = totalSeconds % 86400;

  const hours = Math.floor(resteSeconds / 3600);

  resteSeconds %= 3600;

  const minutes = Math.floor(resteSeconds / 60);

  resteSeconds %= 60;

  const seconds = resteSeconds;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

export { convertSeconds };
