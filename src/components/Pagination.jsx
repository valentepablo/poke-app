import scrollTop from "../utils/scroll-top";

const Pagination = ({ page, setPage }) => {
  return (
    <div className="mt-12 flex w-full justify-between space-x-12 md:mx-auto md:w-40 md:justify-center">
      {page !== 0 && (
        <button
          onClick={() => {
            setPage(page - 12);
            scrollTop();
          }}
        >
          Previous
        </button>
      )}
      <button
        onClick={() => {
          setPage(page + 12);
          scrollTop();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
