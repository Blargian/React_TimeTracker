export const renderElapsedString = (elapsed, runningSince) => {
    let totalElapsed = elapsed; 
    if(runningSince) {
        totalElapsed += Date.now() - runningSince;
    }

    return msToHumanReadable(totalElapsed);
}

const msToHumanReadable = (timeInMs) => {
    const seconds = Math.floor((timeInMs / 1000) % 60)
    const minutes = Math.floor((timeInMs / 1000 / 60) % 60)
    const hours = Math.floor((timeInMs / 1000 / 60 / 60) % 60)

    const humanized = [
        hours.toString().padStart(2,'0'),
        minutes.toString().padStart(2,'0'),
        seconds.toString().padStart(2,'0')
      ].join(':');

    return humanized;
}