export const createPageModel = (
  pageData,
  pageIndex,
  pageSize,
  extraData = {}
) => {
  const totalPages = Math.ceil(pageData.count / pageSize)
  return {
    pageIndex,
    pageSize,
    totalCount: pageData.count,
    totalPages,
    hasMore: pageIndex + 1 < totalPages,
    rows: pageData.rows,
    ...extraData
  }
}
