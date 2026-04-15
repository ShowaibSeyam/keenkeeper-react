import React from "react";

const ErrorPage = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        
        {/* Icon */}
        <div className="text-red-500 text-5xl mb-4">⚠️</div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-2">
          Something went wrong
        </h1>

        {/* Message */}
        <p className="text-gray-500 mb-6">
          We couldn’t load this page. Try refreshing or go back home.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleRefresh}
            className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-80 transition"
          >
            Refresh
          </button>

          <button
            onClick={handleGoHome}
            className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;