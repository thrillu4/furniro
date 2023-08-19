import { DotLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <DotLoader className="h-[ mx-auto block" size={70} color="#B88E2F" />
    </div>
  );
};

export default Spinner;
