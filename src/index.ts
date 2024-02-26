import { indiceCalculation,calculationStartPageAndEndPage, filterPagination,calculationPages } from './utils';

const pagination = (
  items: any[] | null,
  currentPage: number = 1,
  pageSize: number = 20
) => {
  let AllItems: number = items == null || items == undefined ? 0 : items.length;

  const { maxPages,allPages } = calculationPages(AllItems,pageSize);

  const validationCurrentPageBiggerThanNumberAllPages = currentPage > allPages;

  const validationCurrentPageBiggerThanNumberOne = currentPage < 1;

  // ensure current page isn't out of range

  const verifyCurrentPage = validationCurrentPageBiggerThanNumberOne ? 1 : validationCurrentPageBiggerThanNumberAllPages ? allPages : currentPage;

  const { startPage, endPage} = calculationStartPageAndEndPage(allPages,maxPages,currentPage,);

  const { endIndex, pages,startIndex } = indiceCalculation(
    pageSize,
    AllItems,
    verifyCurrentPage,
    startPage,
    endPage
  );

  const verifyAllPages= allPages !== pages.length ? pages.length : allPages;

  const { contentItems } = filterPagination(items, pageSize,verifyCurrentPage,);

  // return object with all pager properties required by the view
  return {
    AllItems,
    currentPage: verifyCurrentPage,
    pageSize,
    allPages: verifyAllPages,
    startPage,
    endPage,
    startIndex,
    endIndex,
    pages,
    items: contentItems,
  };
}

export default pagination;
