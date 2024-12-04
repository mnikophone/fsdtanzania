export default function Home() {
  return (
    <div
      className="flex justify-center min-h-screen bg-gray-100n "
      style={{ background: "#014d90ff" }}
    >
      <form
        className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 "
        style={{ background: "#014d90ff" }}
      >
        <h1>
          <img src="/logo.png" alt="" />
        </h1>
        <h1 className="text-2xl font-bold text-center mb-6 text-white pt-10">
          Registration Form
        </h1>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            placeholder="John Doe"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="tel"
            placeholder="+255712345434"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="example@example.com"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="organization"
          >
            Organization
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="organization"
            type="text"
            placeholder="Your Organization"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="designation"
          >
            Designation
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="designation"
            type="text"
            placeholder="Your Designation"
          />
        </div>

        <div className="flex items-center justify-center w-full ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
