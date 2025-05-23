export const timeCalculator = (time: string) => {
  const now = new Date();
  const postTime = new Date(time);
  const diff = Math.floor((now.getTime() - postTime.getTime()) / 1000);

  if (diff < 60) {
    return `${diff}s`;
  }
  if (diff < 3600) {
    return `${Math.floor(diff / 60)}m`;
  }
  if (diff < 86400) {
    return `${Math.floor(diff / 3600)}h`;
  }
  if (diff < 604800) {
    return `${Math.floor(diff / 86400)}d`;
  }
  return new Date(time).toLocaleDateString();
};
