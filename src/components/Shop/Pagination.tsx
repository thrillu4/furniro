interface PaginationProps {
    productsPerPage: number;
    setCurrentPage: (page: number) => void;
    totalProducts: number;
    currentPage: number;
    totalPages: number
}
const Pagination: React.FC<PaginationProps> = ({ productsPerPage, setCurrentPage, totalProducts, currentPage, totalPages }) => {
    const pages = [];

    for(let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++) {
        pages.push(i)
    }

    const handlePrevClick = () => {
        setCurrentPage(currentPage - 1);
      };
    
      const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
      };

  return (
    <div className="flex items-center justify-center mt-10">
        <button
            onClick={handlePrevClick}
            disabled={currentPage === 1}
            className={`mx-2 px-7 py-4 text-xl rounded bg-yellow-50`}
            >
            Prev
        </button>
        {
            pages.map((page, index) => (
                <button className={page == currentPage ? "mx-2 px-7 py-4 text-xl rounded bg-orange-400" : "mx-2 px-7 py-4 text-xl rounded"} key={index} onClick={() => setCurrentPage(page)}>{page}</button>
            ))
            
        }
        <button
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
            className={`mx-2 px-7 py-4 text-xl rounded bg-yellow-50`}
            >
            Next
        </button>
    </div>
  )
}

export default Pagination