export const getTotalLogTime = (project) => {
  if (project.logs) {
    return project.logs.reduce((total, log) => total + log.time, 0);
  }
  return 0;
};
