

const SignInDetails = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-100 rounded-2xl p-8 shadow-md">
        <h1 className="text-center text-xl font-semibold text-gray-900 mb-6">
          Silence Please
        </h1>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Sign in</h2>
          <p className="text-sm text-gray-500">Sign in or create an account</p>
        </div>

        <button className="w-full bg-linear-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
          Continue with shop
        </button>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-3 text-sm text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition">
          Continue
        </button>
      </div>
    </div>
  );
}

export default SignInDetails;
