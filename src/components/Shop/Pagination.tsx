import { useEffect } from "react";

interface PaginationProps {
  productsPerPage: number;
  setCurrentPage: (page: number) => void;
  totalProducts: number;
  currentPage: number;
  totalPages: number;
}
const Pagination: React.FC<PaginationProps> = ({
  productsPerPage,
  setCurrentPage,
  totalProducts,
  currentPage,
  totalPages,
}) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pages.push(i);
  }
  useEffect(() => {
    scrollToStart();
  }, [currentPage]);

  const scrollToStart = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getPageRange = () => {
    const maxDisplayedPages = 3;
    const middlePage = Math.floor(maxDisplayedPages / 2);
    let startPage = Math.max(currentPage - middlePage, 1);
    const endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages);

    if (endPage - startPage + 1 < maxDisplayedPages) {
      startPage = Math.max(endPage - maxDisplayedPages + 1, 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index,
    );
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    !(productsPerPage == totalProducts) && (
      <div className="mt-10 flex items-center justify-center">
        <button
          onClick={handlePrevClick}
          disabled={currentPage === 1}
          className={`mx-2 rounded bg-yellow-50 px-4 py-2 text-[12px] transition-all duration-200 hover:bg-yellow-100 md:px-7 md:py-4 md:text-xl ${
            currentPage === 1 && "opacity-0"
          }`}
        >
          Prev
        </button>
        {pages.length !== 1 &&
          getPageRange().map((page, index) => (
            <button
              className={
                page == currentPage
                  ? "mx-2 rounded bg-orange-400 px-4 py-2 text-[12px] text-white md:px-7 md:py-4 md:text-xl"
                  : "mx-2 rounded border px-4 py-2 text-[12px] transition-all duration-200 hover:border hover:border-orange-400 md:px-7 md:py-4 md:text-xl"
              }
              key={index}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        <button
          onClick={handleNextClick}
          disabled={currentPage >= totalPages}
          className={`mx-2 rounded bg-yellow-50 px-4 py-2 text-[12px] transition-all duration-200 hover:bg-yellow-100 md:px-7 md:py-4 md:text-xl ${
            currentPage >= totalPages && "opacity-0"
          }`}
        >
          Next
        </button>
      </div>
    )
  );
};

export default Pagination;
