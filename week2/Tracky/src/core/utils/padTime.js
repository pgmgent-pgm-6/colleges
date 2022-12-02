const padTime = (time) => {
  return parseInt(time) < 10 ? `0${time}` : time;
};

export default padTime;
