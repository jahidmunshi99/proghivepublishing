const Profile = () => {
  return (
    <div className="border border-gray-200 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Profile Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-16">
          {/* Full Name */}
          <div>
            <p className="text-sm text-gray-500 mb-1">Full Name</p>
            <p className="text-lg font-medium text-gray-900">Jahid Munshi</p>
          </div>

          {/* Email */}
          <div>
            <p className="text-sm text-gray-500 mb-1">
              Email Address{" "}
              <button className="text-sky-600 hover:underline ml-1">
                Change
              </button>
            </p>
            <p className="text-lg font-medium text-gray-900">
              ja********@yahoo.com
            </p>

            <label className="flex items-center gap-2 mt-3 text-sm text-gray-600">
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded"
              />
              Receive marketing emails
            </label>
          </div>

          {/* Mobile */}
          <div>
            <p className="text-sm text-gray-500 mb-1">
              Mobile{" "}
              <button className="text-sky-600 hover:underline ml-1">Add</button>
            </p>
            <p className="text-lg text-gray-400">Please enter your mobile</p>
          </div>

          {/* Birthday */}
          <div>
            <p className="text-sm text-gray-500 mb-1">Birthday</p>
            <p className="text-lg font-medium text-gray-900">1988-12-04</p>
          </div>

          {/* Gender */}
          <div>
            <p className="text-sm text-gray-500 mb-1">Gender</p>
            <p className="text-lg text-gray-400">Please enter your gender</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-16 flex flex-col sm:flex-row gap-6">
          <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 px-10 rounded-md transition">
            EDIT PROFILE
          </button>

          <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 px-10 rounded-md transition">
            SET PASSWORD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
