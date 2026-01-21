import { useState } from "react";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import CreateBlog from "./components/CreateBlog";

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="py-6 border-b bg-white mb-8">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          CA Monk Blogs
        </h1>
        <p className="text-center text-gray-500 mt-1">
          Read articles
        </p>
      </div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-9">
        
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow p-3"><CreateBlog /></div>
        

        <div>
          <h2 className="text-xl font-bold mb-4">Blogs</h2>
            <BlogList onSelect={setSelectedId} />
        </div>
      </div>

      <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
        <BlogDetail blogId={selectedId} />
      </div>
      </div>
    </div>
  );
}

export default App;
