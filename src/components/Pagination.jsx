import scrollTop from "../utils/scroll-top";
import Button from "./Button";

const Pagination = ({ page, setPage }) => {
  return (
    <div className="mx-auto mt-12 flex w-full items-center justify-center space-x-12 md:w-96">
      {page !== 0 && (
        <Button
          text="Back"
          onClick={() => {
            setPage(page - 12);
            scrollTop();
          }}
        />
      )}
      <Button
        text="Next"
        onClick={() => {
          setPage(page + 12);
          scrollTop();
        }}
      />
    </div>
  );
};

export default Pagination;
