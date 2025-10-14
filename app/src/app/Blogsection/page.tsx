export default function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-gray-100 h-48 rounded-md"></div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Blog</h2>
          <p className="text-gray-600 mb-6">
            Stay updated with the latest articles and news about our platform and technology.
          </p>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
