const filterPagination = (
  items: any[],
  pageSize: number,
  currentPage: number
) => {
  const verifyItems = items == null || items == undefined;
  const pageCall: number = currentPage - 1;
  const contentItems: any[] = verifyItems
    ? []
    : currentPage == 1
    ? items.slice(0, pageSize)
    : items.slice(pageSize * pageCall, pageSize + pageSize * pageCall);

  return { contentItems };
}

export default filterPagination;
