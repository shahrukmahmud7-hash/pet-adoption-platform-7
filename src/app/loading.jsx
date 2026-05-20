

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">

      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Text */}
      <h2 className="mt-6 text-2xl font-semibold text-gray-800">
        Fetching data  
      </h2>

      <p className="mt-2 text-gray-500">
        Please wait...
      </p>

    </div>
  );
}
export default LoadingPage; 