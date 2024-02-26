const calculationStartPageAndEndPage = (
  allPages: number,
  maxPages: number,
  currentPage: number
) => {
  let startPage: number, endPage: number
  if (allPages <= maxPages) {
    // all pages less than max so show all pages
    startPage = 1
    endPage = allPages
    return { startPage, endPage }
  }
  // all pages more than max so calculate start and end pages
  let maxPagesBeforeCurrentPage: number = Math.floor(maxPages / 2)
  let maxPagesAfterCurrentPage: number = Math.ceil(maxPages / 2) - 1

  startPage = currentPage <= maxPagesBeforeCurrentPage ?  1 : currentPage + maxPagesAfterCurrentPage >= allPages? allPages - maxPages + 1:  currentPage - maxPagesBeforeCurrentPage;

  endPage = currentPage <= maxPagesBeforeCurrentPage ? maxPages : currentPage + maxPagesAfterCurrentPage >= allPages ? allPages : currentPage + maxPagesAfterCurrentPage;

  return { startPage, endPage };
}

export default calculationStartPageAndEndPage;
