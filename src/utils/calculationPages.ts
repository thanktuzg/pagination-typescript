const calculationPages = (
  AllItems:number,
  pageSize:number,
) => {
    // calcula num of page
  const maxPages: number = Math.round(AllItems / pageSize);

  // calculate total pages
  let allPages: number = Math.ceil(AllItems / pageSize);
  return { maxPages,allPages };
}

export default calculationPages;
