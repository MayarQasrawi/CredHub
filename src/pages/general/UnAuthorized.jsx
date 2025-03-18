import { FaExclamationTriangle, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function UnAuthorized() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-red-500 p-6">
          <div className="flex items-center justify-center">
            <FaLock className="text-white h-12 w-12" />
          </div>
        </div>

        <div className="p-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Access Denied
          </h1>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <div className="flex items-center">
              <FaExclamationTriangle className="text-red-500 mr-2" />
              <p className="text-red-700 font-medium">
                You don't have permission to access this page.
              </p>
            </div>
          </div>

          <p className="text-gray-600 mb-6 text-center">
            Please make sure you're logged in with the correct credentials .
          </p>

          <div className="flex space-x-3">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="flex-1 bg-red-500 cursor-pointer hover:bg-red-600 text-white py-2 px-4 rounded-md font-medium transition duration-200"
            >
              Go To Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
