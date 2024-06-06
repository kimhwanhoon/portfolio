// data index begins from 0 but page for clients begins from 1.
export const getPageRange = (
  page: number,
  pageSize: number = 6,
): [number, number] => {
  const start = (page - 1) * pageSize;
  const end = page * pageSize - 1;
  return [start, end];
};
