import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SuccessToast({ message }) {
  const notify = () => toast.success(message);
  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default SuccessToast;
