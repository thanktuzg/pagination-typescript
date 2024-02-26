const indiceCalculation = (
  pageSize: number,
  AllItems: number,
  currentPage: number,
  startPage:number,
  endPage: number
) => {
  // calculate start and end item indexes
  let startIndex: number = (currentPage - 1) * pageSize;
  let endIndex: number = Math.min(startIndex + pageSize - 1, AllItems - 1);

  // create an array of pages to ng-repeat in the pager control
  return {
    pages: Array.from(Array(endPage + 1 - startPage).keys()).map(
      i => startPage + i
    ),
    startIndex,
    endIndex
  }
}

export default indiceCalculation;
