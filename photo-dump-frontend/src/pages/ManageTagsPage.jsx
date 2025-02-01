export function ManageTagsPage() {
    return (
      <div className="p-10 bg-white shadow-xl rounded-xl">
        <h1 className="text-3xl text-purple-700 font-bold mb-6">Manage Tags</h1>
        <form>
          <label className="block mb-4">
            <span className="text-lg font-medium text-gray-700">Tag Name:</span>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-xl focus:outline-purple-500" placeholder="Enter tag name" />
          </label>
          <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-2xl hover:bg-purple-700">Add Tag</button>
        </form>
      </div>
    );
  }
  