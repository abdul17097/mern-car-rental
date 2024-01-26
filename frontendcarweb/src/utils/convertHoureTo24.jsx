export const convertTo24Hour = (time) => {
    const [hour, period] = time.split(" ");
    const isPM = period === "PM";
    let hour24 = parseInt(hour, 10);
    if (isPM && hour24 !== 12) {
      hour24 += 12;
    } else if (!isPM && hour24 === 12) {
      hour24 = 0;
    }
    return hour24;
  };