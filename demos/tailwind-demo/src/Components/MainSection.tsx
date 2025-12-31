function MainSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <h3 className="text-3xl font-bold text-center mb-10">
        Our Popular Courses
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* CARD 1 */}
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">Web Design</h4>
          <p className="text-gray-600 mb-4">
            Learn HTML, CSS, Bootstrap & Tailwind from scratch.
          </p>
          <button className="text-blue-600 font-semibold">Learn More →</button>
        </div>

        {/* CARD 2 */}
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">React Development</h4>
          <p className="text-gray-600 mb-4">
            Build modern frontend apps using React and hooks.
          </p>
          <button className="text-blue-600 font-semibold">Learn More →</button>
        </div>

        {/* CARD 3 */}
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">Full Stack</h4>
          <p className="text-gray-600 mb-4">
            Become a full stack developer with real projects.
          </p>
          <button className="text-blue-600 font-semibold">Learn More →</button>
        </div>
      </div>
    </section>
  );
}
export default MainSection;
