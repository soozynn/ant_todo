export const truncateTitle = (title, n) => {
  return title.length > n ? title.slice(0, n) + "..." : title;
};
