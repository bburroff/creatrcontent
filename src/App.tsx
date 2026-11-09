import { useState } from 'react';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Inter',sans-serif]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="https://creatr.studio" className="text-xl font-bold tracking-tight">
              <span className="text-white">CREAT</span><span className="text-purple-400">R</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="https://creatr.studio" className="text-sm text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="https://creatr.studio/guides/" className="text-sm text-gray-400 hover:text-white transition-colors">Guides</a>
              <a href="https://creatr.studio/avatar" className="text-sm text-gray-400 hover:text-white transition-colors">Video Ads</a>
              <a href="https://creatr.studio/studio-3d" className="text-sm text-gray-400 hover:text-white transition-colors">3D Models</a>
            </div>
            <a
              href="https://creatr.studio/free-trial"
              className="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-lg transition-all"
            >
              Try Free
            </a>
          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="pt-24 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
          <a href="https://creatr.studio/" className="hover:text-purple-400 transition-colors">Home</a>
          <span>/</span>
          <a href="https://creatr.studio/guides/" className="hover:text-purple-400 transition-colors">Guides</a>
          <span>/</span>
          <span className="text-gray-300">Product How to Video</span>
        </nav>
      </div>

      {/* Hero Section */}
      <header className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Author Byline */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">
                C
              </div>
              <div>
                <p className="text-sm text-gray-400">Last updated: June 2026 · By CREATR Editorial Team</p>
                <p className="text-xs text-gray-500">Ecommerce content specialists with 10+ years in product video production</p>
              </div>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Product How to Video:{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Create Professional Demos That Convert
              </span>
            </h1>

            {/* Introduction (Answer First) */}
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              A product how to video is a short demonstration video that shows customers how to use, set up, or get the most from your product. In 2026, the fastest way to create professional product how to videos is with AI-powered tools like CREATR — which can turn a single product image into a polished demonstration video in under 3 minutes, without a studio, crew, or expensive equipment.
            </p>

            {/* Primary CTA - Above the fold */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://creatr.studio/free-trial"
                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-purple-600/20 hover:shadow-purple-500/30"
              >
                <i className="fas fa-play"></i>
                Create Your Product Video Free
              </a>
              <a
                href="#how-to-choose"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all"
              >
                See the Full Guide
                <i className="fas fa-arrow-down text-sm"></i>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-3xl"></div>
            <img
              src="https://image.qwenlm.ai/generated-images/f1c1247c-6822-4b65-ae92-3fd85af0a2a3/_result.png"
              alt="Professional product how to video production setup with studio lighting and camera equipment for ecommerce content creation"
              className="relative rounded-2xl border border-white/10 shadow-2xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">AI-Generated in 3 min</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-y border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-400">64%</p>
            <p className="text-sm text-gray-400 mt-1">of shoppers watch product videos before buying</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-400">80%</p>
            <p className="text-sm text-gray-400 mt-1">increase in conversions with how to videos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-400">3 min</p>
            <p className="text-sm text-gray-400 mt-1">average time to create with AI tools</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-400">90%</p>
            <p className="text-sm text-gray-400 mt-1">cost reduction vs traditional video production</p>
          </div>
        </div>
      </section>

      {/* What is a Product How to Video */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          What Is a Product How to Video?
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              A product how to video is a type of ecommerce content that demonstrates how a product works, how to set it up, or how to use it effectively. These videos answer the practical questions shoppers have before purchasing — reducing returns, building trust, and driving conversions.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Unlike generic product ads, how to videos focus on <strong className="text-white">education and demonstration</strong>. They show the product in action, highlight key features, and help customers visualize ownership. In 2026, AI tools have made it possible for any ecommerce brand to create these videos at scale — without hiring videographers, renting studios, or learning complex editing software.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-purple-400 mt-1"></i>
                <span className="text-gray-300"><strong className="text-white">Setup tutorials</strong> — Show customers how to assemble or configure your product</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-purple-400 mt-1"></i>
                <span className="text-gray-300"><strong className="text-white">Feature demonstrations</strong> — Highlight specific functions and benefits in action</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-purple-400 mt-1"></i>
                <span className="text-gray-300"><strong className="text-white">Usage guides</strong> — Show the product being used in real-life scenarios</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-purple-400 mt-1"></i>
                <span className="text-gray-300"><strong className="text-white">Unboxing experiences</strong> — Create excitement from the moment the package arrives</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://image.qwenlm.ai/generated-images/cb1a39ba-cd4d-4b98-89c3-54d7e1ae48a6/_result.png"
              alt="Product how to video being created in AI video editor showing timeline and product demonstration frames"
              className="rounded-xl border border-white/10 shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Best Product How to Video Tools & Options (2026)
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-3xl">
          Compare the top ways to create product how to videos — from AI-powered platforms to traditional production methods. We ranked each by speed, cost, quality, and ease of use.
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-white/10 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Option</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Best For</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Price</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Rating</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Key Feature</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/5 bg-purple-600/5">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">CREATR Studio</span>
                    <span className="px-2 py-0.5 bg-purple-600/20 text-purple-300 text-xs rounded-full">Editor's Pick</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-300">Ecommerce brands at scale</td>
                <td className="px-6 py-4 text-gray-300">$10–$100/mo</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-gray-400 text-sm">4.9/5</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-300">AI video from one product image in 3 min</td>
              </tr>
              <tr className="border-t border-white/5">
                <td className="px-6 py-4 text-white font-semibold">Synthesia</td>
                <td className="px-6 py-4 text-gray-300">Avatar-led explainers</td>
                <td className="px-6 py-4 text-gray-300">$22–$67/mo</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★★★★</span>
                    <span className="text-gray-400 text-sm">4.5/5</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-300">AI avatars for presentations</td>
              </tr>
              <tr className="border-t border-white/5">
                <td className="px-6 py-4 text-white font-semibold">Lumen5</td>
                <td className="px-6 py-4 text-gray-300">Quick social media clips</td>
                <td className="px-6 py-4 text-gray-300">$29–$79/mo</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★★★★</span>
                    <span className="text-gray-400 text-sm">4.3/5</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-300">Text-to-video templates</td>
              </tr>
              <tr className="border-t border-white/5">
                <td className="px-6 py-4 text-white font-semibold">InVideo</td>
                <td className="px-6 py-4 text-gray-300">Template-based editing</td>
                <td className="px-6 py-4 text-gray-300">$15–$30/mo</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★★★★</span>
                    <span className="text-gray-400 text-sm">4.2/5</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-300">5000+ video templates</td>
              </tr>
              <tr className="border-t border-white/5">
                <td className="px-6 py-4 text-white font-semibold">Traditional Production</td>
                <td className="px-6 py-4 text-gray-300">High-budget campaigns</td>
                <td className="px-6 py-4 text-gray-300">$2,000–$10,000+</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★★★★</span>
                    <span className="text-gray-400 text-sm">4.6/5</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-300">Full creative control, crew</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Secondary CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://creatr.studio/free-trial"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-purple-600/20"
          >
            <i className="fas fa-rocket"></i>
            Try CREATR Free — No Credit Card Required
          </a>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          See the Transformation: Original to Product How to Video
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-3xl">
          One product image is all you need. CREATR turns your static product photo into a dynamic how to video with cinematic motion, lighting, and professional framing.
        </p>
        <div className="relative">
          <img
            src="https://image.qwenlm.ai/generated-images/4fe3dc6c-6ae7-4cea-8ef3-dffaf9081ed5/_result.png"
            alt="Before and after comparison showing a plain product watch photo transformed into a cinematic product how to video frame"
            className="rounded-xl border border-white/10 shadow-xl w-full"
          />
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
            <span className="text-sm text-gray-300">ORIGINAL</span>
          </div>
          <div className="absolute top-4 right-4 bg-purple-600/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-purple-400/20">
            <span className="text-sm text-white font-medium">CREATR RESULT</span>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section id="how-to-choose" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          How to Choose the Right Product How to Video Approach
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all">
            <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-bullseye text-purple-400 text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Define Your Goal</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Are you reducing returns, onboarding customers, or driving social engagement? Your goal determines the video style — tutorial, demo, or lifestyle.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-clock text-blue-400 text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Consider Turnaround Time</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Traditional production takes weeks. AI tools like CREATR deliver in minutes. If you need videos for multiple SKUs or seasonal campaigns, speed matters.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all">
            <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-dollar-sign text-green-400 text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Budget & Scale</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              For brands with 50+ products, per-video costs add up fast. AI platforms offer credit-based pricing that scales with your catalog size.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all">
            <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-film text-yellow-400 text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Video Format & Platform</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Different platforms need different formats. Product pages need 30–60 sec demos. TikTok and Reels need 15-sec vertical clips. Choose tools that export in multiple ratios.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all">
            <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-palette text-pink-400 text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Brand Consistency</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your how to videos should match your brand aesthetic. Look for tools that let you control backgrounds, lighting moods, and visual style to maintain consistency.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all">
            <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-chart-line text-indigo-400 text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Iteration & Testing</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The best ecommerce teams test multiple video versions. AI tools let you generate variations quickly — different angles, backgrounds, and pacing — to find what converts.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features / Step-by-Step */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          How to Create a Product How to Video in 3 Steps
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-3xl">
          With CREATR, creating a professional product how to video takes three simple steps — no video editing experience required.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg shadow-purple-600/30">
              1
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 pt-12">
              <h3 className="text-xl font-semibold mb-3">Upload Your Product Image</h3>
              <p className="text-gray-400 leading-relaxed">
                Start with any approved product photo — a clean cutout, lifestyle shot, or even a phone photo. CREATR works with any image format and preserves your product details.
              </p>
              <div className="mt-4 p-3 bg-black/30 rounded-lg border border-white/5">
                <p className="text-xs text-gray-500">Supported: JPG, PNG, WebP · Max 20MB</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg shadow-purple-600/30">
              2
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 pt-12">
              <h3 className="text-xl font-semibold mb-3">Select Your Video Style</h3>
              <p className="text-gray-400 leading-relaxed">
                Choose from cinematic product films, creator-style demos, or signature collection formats. Each style is optimized for different platforms — product pages, social media, or ads.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">Signature Film</span>
                <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">Creator Cut</span>
                <span className="px-2 py-1 bg-green-600/20 text-green-300 text-xs rounded-full">Studio 360</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg shadow-purple-600/30">
              3
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 pt-12">
              <h3 className="text-xl font-semibold mb-3">Generate & Download</h3>
              <p className="text-gray-400 leading-relaxed">
                CREATR generates your product how to video in minutes. Review the result, make adjustments if needed, then export in your preferred format and resolution.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">MP4</span>
                <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">1080p</span>
                <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">4K</span>
                <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">Vertical</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Common questions about creating product how to videos for ecommerce.
        </p>

        <div className="space-y-4">
          {[
            {
              q: "How long should a product how to video be?",
              a: "The ideal length depends on your platform and goal. For product pages, 30–60 seconds works best — long enough to demonstrate key features without losing attention. For social media ads, aim for 15–30 seconds. Tutorial-style how to videos for complex products can go 2–3 minutes. The key is to front-load the most important information in the first 5 seconds."
            },
            {
              q: "Can I create a product how to video without filming?",
              a: "Yes. AI-powered tools like CREATR can generate professional product how to videos from a single product image. The AI creates cinematic motion, lighting effects, and camera movements that simulate a real video shoot — no camera, studio, or crew required. This is especially useful for brands with large catalogs who need videos for every SKU."
            },
            {
              q: "What makes a product how to video effective for ecommerce?",
              a: "Effective product how to videos show the product solving a problem or being used in a real context. They answer specific customer questions (How does it work? How do I set it up? What does it look like in use?). The best videos combine clear demonstration with lifestyle context, professional lighting, and a clear call to action."
            },
            {
              q: "How much does it cost to make a product how to video?",
              a: "Traditional video production costs $2,000–$10,000+ per video when you factor in crew, equipment, location, and editing. AI-powered tools like CREATR reduce this to $10–$100 per month for unlimited video creation across your entire catalog. The cost per video drops dramatically as you scale — making it practical to create how to videos for every product."
            },
            {
              q: "Do product how to videos actually increase sales?",
              a: "Yes. Research consistently shows that product videos increase conversion rates by 80% or more. Shoppers who watch a how to video are more confident in their purchase decision, which also reduces return rates. On platforms like Amazon, listings with video see significantly higher click-through rates and engagement compared to image-only listings."
            },
            {
              q: "What format should I export my product how to video in?",
              a: "For product pages and Amazon listings, export in 16:9 landscape at 1080p or 4K resolution in MP4 format. For social media (TikTok, Instagram Reels, YouTube Shorts), export in 9:16 vertical format. Many AI tools let you generate multiple formats from the same source, so you can cover all channels from one product image."
            }
          ].map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-white pr-4">{faq.q}</span>
                <i className={`fas fa-chevron-down text-purple-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}></i>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Related Guides - Internal Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Related Guides
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="https://creatr.studio/avatar" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <i className="fas fa-video text-purple-400"></i>
              <span className="text-xs text-purple-400 font-medium uppercase tracking-wide">Video Guide</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-300 transition-colors">
              AI UGC Video Ad Creator: Complete Guide
            </h3>
            <p className="text-gray-400 text-sm">
              Learn how to create user-generated content style video ads using AI avatars and product images.
            </p>
          </a>
          <a href="https://creatr.studio/studio-3d" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <i className="fas fa-cube text-blue-400"></i>
              <span className="text-xs text-blue-400 font-medium uppercase tracking-wide">3D Guide</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-300 transition-colors">
              3D Product Models for Ecommerce Stores
            </h3>
            <p className="text-gray-400 text-sm">
              Turn product images into interactive 3D models that let shoppers explore every angle.
            </p>
          </a>
          <a href="https://creatr.studio/picture-for-product" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <i className="fas fa-image text-green-400"></i>
              <span className="text-xs text-green-400 font-medium uppercase tracking-wide">Photo Guide</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-300 transition-colors">
              Product Photography with AI Background Builder
            </h3>
            <p className="text-gray-400 text-sm">
              Place your product into curated scenes and custom AI-designed backgrounds for professional results.
            </p>
          </a>
          <a href="https://creatr.studio/lab/fashion-pro" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <i className="fas fa-tshirt text-pink-400"></i>
              <span className="text-xs text-pink-400 font-medium uppercase tracking-wide">Fashion Guide</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-300 transition-colors">
              Virtual Model Photography for Apparel Brands
            </h3>
            <p className="text-gray-400 text-sm">
              Create on-figure product visuals for fashion and apparel workflows without a photoshoot.
            </p>
          </a>
          <a href="https://creatr.studio/description-writer" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <i className="fas fa-pen-fancy text-yellow-400"></i>
              <span className="text-xs text-yellow-400 font-medium uppercase tracking-wide">Copy Guide</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-300 transition-colors">
              Product Listing Copywriter: Descriptions That Sell
            </h3>
            <p className="text-gray-400 text-sm">
              Create product descriptions and listing copy that complement your video and image assets.
            </p>
          </a>
          <a href="https://creatr.studio/editor" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <i className="fas fa-sliders-h text-indigo-400"></i>
              <span className="text-xs text-indigo-400 font-medium uppercase tracking-wide">Editing Guide</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-300 transition-colors">
              Product Image Editor: Enhance & Upscale
            </h3>
            <p className="text-gray-400 text-sm">
              Prepare, refine, and upscale product images to 8K resolution for any platform or print format.
            </p>
          </a>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/20 rounded-2xl p-8 sm:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Start Creating Product How to Videos Today
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Turn one product image into a professional how to video in minutes. No credit card required. No video experience needed. Just upload, select, and generate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://creatr.studio/free-trial"
                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-purple-600/30 hover:shadow-purple-500/40"
              >
                <i className="fas fa-play-circle"></i>
                Try CREATR Free
              </a>
              <a
                href="https://creatr.studio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 transition-all"
              >
                See All Features
                <i className="fas fa-arrow-right text-sm"></i>
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              Plans start at $10/mo · All AI tools included · No feature gating
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <a href="https://creatr.studio" className="text-xl font-bold tracking-tight">
                <span className="text-white">CREAT</span><span className="text-purple-400">R</span>
              </a>
              <p className="text-gray-500 text-sm mt-3">
                AI product photography and video for ecommerce. One product image. Every asset you need.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-300 mb-3">Product</h4>
              <ul className="space-y-2">
                <li><a href="https://creatr.studio/picture-for-product" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Background Builder</a></li>
                <li><a href="https://creatr.studio/avatar" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">AI Video Ads</a></li>
                <li><a href="https://creatr.studio/studio-3d" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">3D Product Models</a></li>
                <li><a href="https://creatr.studio/editor" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Image Editor</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-300 mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><a href="https://creatr.studio/guides/" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Guides</a></li>
                <li><a href="https://creatr.studio/description-writer" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Listing Writer</a></li>
                <li><a href="https://creatr.studio/lab/fashion-pro" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Fashion Pro</a></li>
                <li><a href="https://creatr.studio/free-trial" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Free Trial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-300 mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="https://creatr.studio" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="https://creatr.studio" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Pricing</a></li>
                <li><a href="https://creatr.studio" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© 2026 CREATR. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
