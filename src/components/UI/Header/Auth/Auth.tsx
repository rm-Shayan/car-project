const AuthButtons = () => (
  <div className="hidden md:flex space-x-3">
    <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition">
      Login
    </button>
    <button className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition">
      Register
    </button>
  </div>
);

export default AuthButtons;
