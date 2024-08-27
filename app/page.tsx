export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">Hello World</h1>
          <p className="text-xl text-gray-500">This is a test</p>
        </div>
        <div className="flex flex-row items-center justify-center py-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-gray-200 p-2 rounded-md mr-2"
          />
          <button className="bg-blue-600 text-white p-2 rounded-md">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
