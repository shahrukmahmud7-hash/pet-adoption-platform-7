import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-lg w-full text-center">

        {/* Emoji */}
        <div className="text-7xl mb-5">
          🐾
        </div>

        {/* 404 */}
        <h1 className="text-6xl font-extrabold text-pink-500">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Oops! Pet Not Found
        </h2>

        {/* Message */}
        <p className="mt-4 text-gray-600 leading-relaxed">
          The pet adoption page you are looking for doesn’t exist
          or may have been moved. <br />
          Let’s help you find your perfect furry friend instead 🐶🐱
        </p>

        {/* Button */}
        <Link href="/">
          <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-medium transition">
            ← Back to Home
          </button>
        </Link>

      </div>

    </div>
  );
}

export default NotFoundPage;