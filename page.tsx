import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f7] text-gray-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-wide">
          KAVAH
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#how-it-works" className="hover:text-purple-600">
            How it works
          </a>

          <a href="#privacy" className="hover:text-purple-600">
            Privacy
          </a>

          <button className="rounded-full bg-gray-900 text-white px-5 py-2.5 hover:bg-gray-700">
            Sign in
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 pt-20 pb-24">
        <div className="max-w-3xl">
          <div className="inline-block rounded-full bg-purple-100 text-purple-700 px-4 py-2 text-sm font-medium mb-6">
            Digital Image Safety
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Your image.
            <br />
            <span className="text-purple-600">Your privacy.</span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Kavah helps you discover potential online appearances of your
            images using intelligent image similarity technology.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
               href="/scan"
              className="rounded-full bg-gray-900 text-white px-8 py-4 text-base font-semibold hover:bg-gray-700 transition inline-block"
            >
              Scan an Image →
            </Link>

            <button className="rounded-full border border-gray-300 bg-white px-8 py-4 text-base font-semibold hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="how-it-works"
        className="bg-white border-y border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="max-w-2xl mb-12">
            <p className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
              How Kavah works
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Know where your image appears.
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Kavah combines image processing and AI-powered similarity
              analysis to identify potential matches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="rounded-3xl bg-[#faf9f7] p-8">
              <div className="text-4xl mb-6">🔍</div>

              <h3 className="text-xl font-bold">
                Detect
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                Scan an image and generate a secure visual fingerprint for
                comparison.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl bg-[#faf9f7] p-8">
              <div className="text-4xl mb-6">🛡️</div>

              <h3 className="text-xl font-bold">
                Protect
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                Identify potential visually similar appearances across
                supported online sources.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl bg-[#faf9f7] p-8">
              <div className="text-4xl mb-6">📋</div>

              <h3 className="text-xl font-bold">
                Take Action
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                Review detected sources and get guidance on appropriate
                reporting and safety steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="max-w-7xl mx-auto px-8 py-24">
        <div className="rounded-[2rem] bg-gray-900 text-white p-10 md:p-16">
          <div className="max-w-2xl">
            <p className="text-purple-300 font-semibold">
              Privacy first
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Built with your privacy in mind.
            </h2>

            <p className="mt-5 text-gray-300 leading-relaxed text-lg">
              Kavah is designed to minimize unnecessary storage of personal
              images and provide users with control over their scan data.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 Kavah. Built for digital safety.</p>

          <p>AI-powered image safety platform</p>
        </div>
      </footer>
    </main>
  );
}