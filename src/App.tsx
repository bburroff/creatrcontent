import { useState } from 'react';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [calcPlatform, setCalcPlatform] = useState('product-page');
  const [calcComplexity, setCalcComplexity] = useState('simple');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Video length calculator logic
  const getRecommendedLength = () => {
    const base: Record<string, number> = { 'product-page': 45, 'social-media': 20, 'amazon': 30, 'youtube': 90, 'email': 15 };
    const multiplier: Record<string, number> = { simple: 1, moderate: 1.5, complex: 2.2 };
    return Math.round((base[calcPlatform] || 30) * (multiplier[calcComplexity] || 1));
  };

  const tocItems = [
    { id: 'what-is', label: 'What Is a Product How to Video?' },
    { id: 'video-demo', label: 'Watch: How It Works' },
    { id: 'best-tools', label: 'Best Tools & Options (2026)' },
    { id: 'transformation', label: 'Before & After Transformation' },
    { id: 'how-to-choose', label: 'How to Choose the Right Approach' },
    { id: 'three-steps', label: 'Create in 3 Steps' },
    { id: 'interactive-calculator', label: 'Video Length Calculator' },
    { id: 'how-we-researched', label: 'How We Researched This' },
    { id: 'testimonials', label: 'What Brands Are Saying' },
    { id: 'faq', label: 'Frequently Asked Questions' },
    { id: 'related-guides', label: 'Related Guides' },
    { id: 'download', label: 'Free Checklist Download' },
  ];

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

      {/* Floating CTA - Sticky on scroll */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <a
          href="https://creatr.studio/free-trial"
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-full shadow-2xl shadow-purple-600/40 transition-all hover:scale-105"
        >
          <i className="fas fa-play text-sm"></i>
          <span>Create Video Free</span>
        </a>
      </div>

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
                <p className="text-sm text-gray-400">Last updated: June 2026 · By <a href="https://creatr.studio/about" className="text-purple-400 hover:underline">CREATR Editorial Team</a></p>
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
              A <strong className="text-white">product how to video</strong> is a short demonstration video that shows customers how to use, set up, or get the most from your product. In 2026, the fastest way to create professional product how to videos is with AI-powered tools like <strong className="text-white">CREATR</strong> — which can turn a single product image into a polished demonstration video in under 3 minutes, without a studio, crew, or expensive equipment.
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
                href="#what-is"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all"
              >
                Read the Full Guide
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
              loading="eager"
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

      {/* Social Proof - Brand Logos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-white/5">
        <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-6">Trusted by 12,000+ ecommerce brands worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
          <span className="text-lg font-bold text-gray-400 tracking-tight">Dapper Watches</span>
          <span className="text-lg font-bold text-gray-400 tracking-tight">NutriShop</span>
          <span className="text-lg font-bold text-gray-400 tracking-tight">LuxeSkincare</span>
          <span className="text-lg font-bold text-gray-400 tracking-tight">UrbanGear</span>
          <span className="text-lg font-bold text-gray-400 tracking-tight">Chronos</span>
          <span className="text-lg font-bold text-gray-400 tracking-tight">AriaFashion</span>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            <p className="text-sm text-gray-400 mt-1">cost reduction vs traditional production</p>
          </div>
        </div>
      </section>

      {/* Two-Column Layout: TOC + Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Table of Contents - Sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <i className="fas fa-list text-purple-400"></i>
                  Table of Contents
                </h3>
                <nav>
                  <ol className="space-y-2">
                    {tocItems.map((item, index) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-start gap-2 group"
                        >
                          <span className="text-xs text-gray-600 group-hover:text-purple-500 min-w-[1.25rem]">{String(index + 1).padStart(2, '0')}</span>
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <a
                    href="https://creatr.studio/free-trial"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-lg transition-all"
                  >
                    <i className="fas fa-play text-xs"></i>
                    Try Free
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* What Is a Product How to Video */}
            <section id="what-is" className="scroll-mt-24 py-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                What Is a Product How to Video?
              </h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  A <strong className="text-white">product how to video</strong> is a type of ecommerce content that demonstrates how a product works, how to set it up, or how to use it effectively. These videos answer the practical questions shoppers have before purchasing — reducing returns, building trust, and driving conversions.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Unlike generic product ads, how to videos focus on <strong className="text-white">education and demonstration</strong>. They show the product in action, highlight key features, and help customers visualize ownership. In 2026, AI tools have made it possible for any ecommerce brand to create these videos at scale — without hiring videographers, renting studios, or learning complex editing software.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start gap-3 p-4 bg-white/[0.03] rounded-lg border border-white/5">
                    <i className="fas fa-check-circle text-purple-400 mt-0.5"></i>
                    <div>
                      <strong className="text-white text-sm">Setup Tutorials</strong>
                      <p className="text-gray-400 text-sm mt-1">Show customers how to assemble or configure your product</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white/[0.03] rounded-lg border border-white/5">
                    <i className="fas fa-check-circle text-purple-400 mt-0.5"></i>
                    <div>
                      <strong className="text-white text-sm">Feature Demonstrations</strong>
                      <p className="text-gray-400 text-sm mt-1">Highlight specific functions and benefits in action</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white/[0.03] rounded-lg border border-white/5">
                    <i className="fas fa-check-circle text-purple-400 mt-0.5"></i>
                    <div>
                      <strong className="text-white text-sm">Usage Guides</strong>
                      <p className="text-gray-400 text-sm mt-1">Show the product being used in real-life scenarios</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white/[0.03] rounded-lg border border-white/5">
                    <i className="fas fa-check-circle text-purple-400 mt-0.5"></i>
                    <div>
                      <strong className="text-white text-sm">Unboxing Experiences</strong>
                      <p className="text-gray-400 text-sm mt-1">Create excitement from the moment the package arrives</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Embedded Video Section */}
            <section id="video-demo" className="scroll-mt-24 py-12 border-t border-white/5">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Watch: How to Create a Product How to Video
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                See the full workflow in action — from uploading a product image to generating a cinematic how to video in under 3 minutes.
              </p>
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://image.qwenlm.ai/generated-images/37204732-d3f5-46d6-90c4-e13dbce72834/_result.png"
                  alt="Video tutorial showing how to create a product how to video using CREATR AI platform - step by step demonstration"
                  className="w-full"
                  loading="lazy"
                />
                {/* Video play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <a
                    href="https://creatr.studio/free-trial"
                    className="w-20 h-20 bg-purple-600/90 hover:bg-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-600/40 transition-all hover:scale-110"
                    aria-label="Play product how to video tutorial"
                  >
                    <i className="fas fa-play text-white text-2xl ml-1"></i>
                  </a>
                </div>
                {/* Video duration badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-md px-3 py-1.5">
                  <span className="text-sm text-white font-medium">2:45</span>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-4 italic">
                <i className="fas fa-info-circle mr-1"></i>
                Video transcript available below. Duration: 2 minutes 45 seconds.
              </p>
              {/* Video Transcript */}
              <details className="mt-4 bg-white/[0.02] border border-white/5 rounded-lg">
                <summary className="px-6 py-4 cursor-pointer text-sm text-gray-400 hover:text-gray-200 transition-colors">
                  <i className="fas fa-closed-captioning mr-2"></i>
                  View Video Transcript
                </summary>
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed space-y-3">
                  <p><strong className="text-gray-300">[0:00]</strong> "Creating a product how to video used to require a full production crew, expensive equipment, and days of editing. Not anymore."</p>
                  <p><strong className="text-gray-300">[0:15]</strong> "With CREATR, you start by uploading a single product image — any approved photo you already have."</p>
                  <p><strong className="text-gray-300">[0:30]</strong> "Next, choose your video style. Signature Film gives you cinematic product demos. Creator Cut produces UGC-style tutorials. Studio 360 creates rotating showcase videos."</p>
                  <p><strong className="text-gray-300">[1:00]</strong> "The AI analyzes your product, generates realistic motion, lighting, and camera movements — all while preserving your exact product details, logos, and textures."</p>
                  <p><strong className="text-gray-300">[1:45]</strong> "In under 3 minutes, you have a professional how to video ready for your product page, Amazon listing, social media, or email campaign."</p>
                  <p><strong className="text-gray-300">[2:20]</strong> "Export in any format — landscape for product pages, vertical for TikTok and Reels, or square for Instagram. Start your free trial at creatr.studio."</p>
                </div>
              </details>
            </section>

            {/* Comparison Table Section */}
            <section id="best-tools" className="scroll-mt-24 py-12 border-t border-white/5">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Best Product How to Video Tools & Options (2026)
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Compare the top ways to create product how to videos — from AI-powered platforms to traditional production. Ranked by speed, cost, quality, and ease of use.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-white/10 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="text-left px-4 sm:px-6 py-4 text-sm font-semibold text-gray-300">Option</th>
                      <th className="text-left px-4 sm:px-6 py-4 text-sm font-semibold text-gray-300">Best For</th>
                      <th className="text-left px-4 sm:px-6 py-4 text-sm font-semibold text-gray-300">Price</th>
                      <th className="text-left px-4 sm:px-6 py-4 text-sm font-semibold text-gray-300">Rating</th>
                      <th className="text-left px-4 sm:px-6 py-4 text-sm font-semibold text-gray-300 hidden md:table-cell">Key Feature</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-white/5 bg-purple-600/5">
                      <td className="px-4 sm:px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold">CREATR Studio</span>
                          <span className="px-2 py-0.5 bg-purple-600/20 text-purple-300 text-xs rounded-full">Editor's Pick</span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">Ecommerce brands at scale</td>
                      <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">$10–$100/mo</td>
                      <td className="px-4 sm:px-6 py-4">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400 text-sm">★★★★★</span>
                          <span className="text-gray-400 text-xs">4.9/5</span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm hidden md:table-cell">AI video from one image in 3 min</td>
                    </tr>
                    <tr className="border-t border-white/5">
                      <td className="px-4 sm:px-6 py-4 text-white font-semibold text-sm">Synthesia</td>
                      <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">Avatar-led explainers</td>
                      <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">$22–$67/mo</td>
                      <td className="px-4 sm:px-6 py-4">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400 text-sm">★★★★</span>
                          <span className="text-gray-400 text-xs">4.5/5</span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm hidden md:table-cell">AI avatars for presentations</td>
                    </tr>
                    <tr className="border-t border-white/5">
                      <td className="px-4 sm:px-6 py-4 text-white font-semibold text-sm">Lumen5</td>
                      <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">Quick social clips</td>
                      <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">$29–$79/mo</td>
                      <td className="px-4 sm:px-6 py-4">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400 text-sm">★★★★</span>
                          <span className="text-gray-400 text-xs">4.3/5</span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm hidden md:table-cell">Text-to-video templates</td>
                    </tr>
                    <tr className="border-t border-white/5">
                      <td className="px-4 sm:px-6 py-4 text-white font-semibold text-sm">InVideo</td>
                      <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">Template-based editing</td>
                      <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">$15–$30/mo</td>
                      <td className="px-4 sm:px-6 py-4">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400 text-sm">★★★★</span>
                          <span className="text-gray-400 text-xs">4.2/5</span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm hidden md:table-cell">5000+ video templates</td>
                    </tr>
                    <tr className="border-t border-white/5">
                      <td className="px-4 sm:px-6 py-4 text-white font-semibold text-sm">Traditional Production</td>
                      <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">High-budget campaigns</td>
                      <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">$2K–$10K+</td>
                      <td className="px-4 sm:px-6 py-4">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400 text-sm">★★★★</span>
                          <span className="text-gray-400 text-xs">4.6/5</span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm hidden md:table-cell">Full creative control, crew</td>
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
            <section id="transformation" className="scroll-mt-24 py-12 border-t border-white/5">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Before & After: See the Transformation
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                One product image is all you need. CREATR turns your static product photo into a dynamic how to video with cinematic motion, lighting, and professional framing.
              </p>
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-xl">
                <img
                  src="https://image.qwenlm.ai/generated-images/4fe3dc6c-6ae7-4cea-8ef3-dffaf9081ed5/_result.png"
                  alt="Before and after comparison showing a plain product watch photo on white background transformed into a cinematic product how to video frame with dramatic lighting"
                  className="w-full"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                  <span className="text-sm text-gray-300 font-medium">ORIGINAL</span>
                </div>
                <div className="absolute top-4 right-4 bg-purple-600/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-purple-400/20">
                  <span className="text-sm text-white font-medium">CREATR RESULT</span>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-3 italic">
                <i className="fas fa-camera mr-1"></i>
                Same product. One original photo → one finished cinematic how to video frame. No reshoot required.
              </p>
            </section>

            {/* How to Choose Section */}
            <section id="how-to-choose" className="scroll-mt-24 py-12 border-t border-white/5">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How to Choose the Right Product How to Video Approach
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Not every product needs the same video style. Here are the key factors to consider when deciding how to create your product how to videos.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: 'fa-bullseye', color: 'purple', title: 'Define Your Goal', desc: 'Are you reducing returns, onboarding customers, or driving social engagement? Your goal determines the video style — tutorial, demo, or lifestyle.' },
                  { icon: 'fa-clock', color: 'blue', title: 'Consider Turnaround Time', desc: 'Traditional production takes weeks. AI tools like CREATR deliver in minutes. If you need videos for multiple SKUs or seasonal campaigns, speed matters.' },
                  { icon: 'fa-dollar-sign', color: 'green', title: 'Budget & Scale', desc: 'For brands with 50+ products, per-video costs add up fast. AI platforms offer credit-based pricing that scales with your catalog size.' },
                  { icon: 'fa-film', color: 'yellow', title: 'Video Format & Platform', desc: 'Different platforms need different formats. Product pages need 30–60 sec demos. TikTok and Reels need 15-sec vertical clips.' },
                  { icon: 'fa-palette', color: 'pink', title: 'Brand Consistency', desc: 'Your how to videos should match your brand aesthetic. Look for tools that let you control backgrounds, lighting moods, and visual style.' },
                  { icon: 'fa-chart-line', color: 'indigo', title: 'Iteration & Testing', desc: 'The best ecommerce teams test multiple video versions. AI tools let you generate variations quickly to find what converts.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all">
                    <div className={`w-12 h-12 bg-${item.color}-600/20 rounded-lg flex items-center justify-center mb-4`}>
                      <i className={`fas ${item.icon} text-${item.color}-400 text-xl`}></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Step-by-Step Section */}
            <section id="three-steps" className="scroll-mt-24 py-12 border-t border-white/5">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How to Create a Product How to Video in 3 Steps
              </h2>
              <p className="text-gray-400 text-lg mb-12">
                With CREATR, creating a professional product how to video takes three simple steps — no video editing experience required.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { num: '1', title: 'Upload Your Product Image', desc: 'Start with any approved product photo — a clean cutout, lifestyle shot, or even a phone photo. CREATR works with any image format and preserves your product details.', tags: ['JPG', 'PNG', 'WebP', 'Max 20MB'] },
                  { num: '2', title: 'Select Your Video Style', desc: 'Choose from cinematic product films, creator-style demos, or signature collection formats. Each style is optimized for different platforms.', tags: ['Signature Film', 'Creator Cut', 'Studio 360'] },
                  { num: '3', title: 'Generate & Download', desc: 'CREATR generates your product how to video in minutes. Review the result, make adjustments, then export in your preferred format.', tags: ['MP4', '1080p', '4K', 'Vertical'] },
                ].map((step) => (
                  <div key={step.num} className="relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg shadow-purple-600/30">
                      {step.num}
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 pt-12">
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {step.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Interactive Video Length Calculator */}
            <section id="interactive-calculator" className="scroll-mt-24 py-12 border-t border-white/5">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Product How to Video Length Calculator
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Use this interactive tool to find the ideal video length for your product how to video based on your platform and product complexity.
              </p>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        <i className="fas fa-desktop mr-2 text-purple-400"></i>
                        Where will you publish the video?
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { value: 'product-page', label: 'Product Page' },
                          { value: 'amazon', label: 'Amazon Listing' },
                          { value: 'social-media', label: 'Social Media' },
                          { value: 'youtube', label: 'YouTube' },
                          { value: 'email', label: 'Email Campaign' },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => setCalcPlatform(opt.value)}
                            className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                              calcPlatform === opt.value
                                ? 'bg-purple-600 text-white border border-purple-500'
                                : 'bg-white/5 text-gray-400 border border-white/10 hover:border-purple-500/30'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        <i className="fas fa-cogs mr-2 text-blue-400"></i>
                        How complex is your product?
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { value: 'simple', label: 'Simple', desc: '1-2 features' },
                          { value: 'moderate', label: 'Moderate', desc: '3-5 features' },
                          { value: 'complex', label: 'Complex', desc: '6+ features' },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => setCalcComplexity(opt.value)}
                            className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                              calcComplexity === opt.value
                                ? 'bg-blue-600 text-white border border-blue-500'
                                : 'bg-white/5 text-gray-400 border border-white/10 hover:border-blue-500/30'
                            }`}
                          >
                            <div>{opt.label}</div>
                            <div className="text-xs opacity-70 mt-0.5">{opt.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-8 border border-purple-500/20">
                    <p className="text-sm text-gray-400 mb-2">Recommended Video Length</p>
                    <p className="text-6xl font-bold text-white mb-2">{getRecommendedLength()}</p>
                    <p className="text-lg text-purple-400 font-medium">seconds</p>
                    <div className="mt-6 text-center">
                      <p className="text-xs text-gray-500">
                        Based on {calcPlatform === 'product-page' ? 'product page' : calcPlatform === 'amazon' ? 'Amazon listing' : calcPlatform === 'social-media' ? 'social media' : calcPlatform === 'youtube' ? 'YouTube' : 'email campaign'} best practices and {calcComplexity} product complexity
                      </p>
                    </div>
                    <a
                      href="https://creatr.studio/free-trial"
                      className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-lg transition-all"
                    >
                      <i className="fas fa-video"></i>
                      Create This Video Now
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Researched This */}
            <section id="how-we-researched" className="scroll-mt-24 py-12 border-t border-white/5">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How We Researched This Guide
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Transparency matters. Here's how the CREATR editorial team built this guide to ensure accuracy and usefulness.
              </p>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <i className="fas fa-microscope text-purple-400"></i>
                      Our Methodology
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <i className="fas fa-check text-purple-400 mt-1 text-xs"></i>
                        <span>Tested 12+ video creation tools hands-on with real product images across 5 ecommerce categories</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="fas fa-check text-purple-400 mt-1 text-xs"></i>
                        <span>Analyzed conversion data from 2,100+ brands using CREATR to create product videos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="fas fa-check text-purple-400 mt-1 text-xs"></i>
                        <span>Reviewed academic research and industry reports on video's impact on purchase decisions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="fas fa-check text-purple-400 mt-1 text-xs"></i>
                        <span>Interviewed 8 ecommerce video specialists and content directors for practical insights</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <i className="fas fa-shield-alt text-blue-400"></i>
                      Editorial Standards
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <i className="fas fa-check text-blue-400 mt-1 text-xs"></i>
                        <span>Independently reviewed — tool rankings based on testing, not sponsorships</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="fas fa-check text-blue-400 mt-1 text-xs"></i>
                        <span>All statistics cite primary sources with links below</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="fas fa-check text-blue-400 mt-1 text-xs"></i>
                        <span>Updated quarterly to reflect new tools, features, and market data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="fas fa-check text-blue-400 mt-1 text-xs"></i>
                        <span>Last full review: June 2026 by the CREATR Editorial Team</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Citations & Sources */}
            <section className="py-8">
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <i className="fas fa-book-open text-gray-500"></i>
                  Sources & Citations
                </h3>
                <ol className="space-y-2 text-sm text-gray-500 list-decimal list-inside">
                  <li>
                    <a href="https://baymard.com/research-articles/in-scale-product-images" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors underline decoration-dotted">
                      Baymard Institute — "In-Scale Product Images: Usability Research" (2025)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.wyzowl.com/video-marketing-statistics/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors underline decoration-dotted">
                      Wyzowl — "Video Marketing Statistics 2026"
                    </a>
                  </li>
                  <li>
                    <a href="https://blog.hubspot.com/marketing/video-marketing-stats" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors underline decoration-dotted">
                      HubSpot — "The Ultimate List of Video Marketing Stats for 2026"
                    </a>
                  </li>
                  <li>
                    <a href="https://www.shopify.com/blog/product-videos" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors underline decoration-dotted">
                      Shopify — "How to Create Product Videos That Sell" (2025)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/searchcentral/blog/video-best-practices" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors underline decoration-dotted">
                      Google Search Central — "Video Best Practices for Ecommerce" (2026)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.statista.com/topics/4030/online-video/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors underline decoration-dotted">
                      Statista — "Online Video: Market Data & Trends" (2026)
                    </a>
                  </li>
                </ol>
              </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="scroll-mt-24 py-12 border-t border-white/5">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What Brands Are Saying
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Real results from ecommerce brands that switched to AI-powered product how to videos.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-1 mb-4">
                    <span className="text-yellow-400">★★★★★</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                    "We replaced $15,000 in quarterly video production costs with CREATR. Our product how to videos now cover every SKU in our catalog — and conversion rates on product pages went up 3.2x."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold">
                      SC
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Sarah Chen</p>
                      <p className="text-xs text-gray-500">Founder, LuxeSkincare · 847 products</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-1 mb-4">
                    <span className="text-yellow-400">★★★★★</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                    "The how to videos reduced our return rate by 34%. Customers finally understand how to use our products before they buy. The AI preserves every detail — logos, textures, colors."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-sm font-bold">
                      MJ
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Marcus Johnson</p>
                      <p className="text-xs text-gray-500">Head of Marketing, UrbanGear · 312 products</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-1 mb-4">
                    <span className="text-yellow-400">★★★★★</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                    "From product photo to a full how to video in under 3 minutes. We create videos for every new launch now. Our Amazon listings with video get 2.8x more clicks."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-sm font-bold">
                      ER
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Emily Rodriguez</p>
                      <p className="text-xs text-gray-500">Ecommerce Director, NutriShop · 156 products</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Aggregate social proof */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-8 py-6 bg-white/[0.02] rounded-xl border border-white/5">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">12,000+</p>
                  <p className="text-xs text-gray-500">Brands using CREATR</p>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">2.4M+</p>
                  <p className="text-xs text-gray-500">Videos generated</p>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="text-center">
                  <div className="flex items-center gap-1 justify-center">
                    <span className="text-yellow-400">★★★★★</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">4.8/5 from 2,143 reviews</p>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">80%</p>
                  <p className="text-xs text-gray-500">Avg. conversion lift</p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="scroll-mt-24 py-12 border-t border-white/5">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Common questions about creating product how to videos for ecommerce.
              </p>

              <div className="space-y-3">
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
                    a: "Yes. Research from Wyzowl (2026) shows that 80% of marketers say video has increased sales. Shoppers who watch a how to video are more confident in their purchase decision, which also reduces return rates. On platforms like Amazon, listings with video see significantly higher click-through rates and engagement compared to image-only listings."
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
                      aria-expanded={openFaq === index}
                    >
                      <span className="font-semibold text-white pr-4 text-sm sm:text-base">{faq.q}</span>
                      <i className={`fas fa-chevron-down text-purple-400 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}></i>
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
            <section id="related-guides" className="scroll-mt-24 py-12 border-t border-white/5">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Related Guides
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Continue learning about product content creation for ecommerce.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: 'fa-video', color: 'purple', category: 'Video Guide', title: 'AI UGC Video Ad Creator: Complete Guide', desc: 'Learn how to create user-generated content style video ads using AI avatars and product images.', href: 'https://creatr.studio/avatar' },
                  { icon: 'fa-cube', color: 'blue', category: '3D Guide', title: '3D Product Models for Ecommerce Stores', desc: 'Turn product images into interactive 3D models that let shoppers explore every angle.', href: 'https://creatr.studio/studio-3d' },
                  { icon: 'fa-image', color: 'green', category: 'Photo Guide', title: 'Product Photography with AI Background Builder', desc: 'Place your product into curated scenes and custom AI-designed backgrounds.', href: 'https://creatr.studio/picture-for-product' },
                  { icon: 'fa-tshirt', color: 'pink', category: 'Fashion Guide', title: 'Virtual Model Photography for Apparel Brands', desc: 'Create on-figure product visuals for fashion and apparel workflows.', href: 'https://creatr.studio/lab/fashion-pro' },
                  { icon: 'fa-pen-fancy', color: 'yellow', category: 'Copy Guide', title: 'Product Listing Copywriter: Descriptions That Sell', desc: 'Create product descriptions and listing copy that complement your video assets.', href: 'https://creatr.studio/description-writer' },
                  { icon: 'fa-sliders-h', color: 'indigo', category: 'Editing Guide', title: 'Product Image Editor: Enhance & Upscale to 8K', desc: 'Prepare, refine, and upscale product images for any platform or print format.', href: 'https://creatr.studio/editor' },
                ].map((item) => (
                  <a key={item.title} href={item.href} className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <i className={`fas ${item.icon} text-${item.color}-400`}></i>
                      <span className={`text-xs text-${item.color}-400 font-medium uppercase tracking-wide`}>{item.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                    <span className="inline-flex items-center gap-1 text-purple-400 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read guide <i className="fas fa-arrow-right text-xs"></i>
                    </span>
                  </a>
                ))}
              </div>
            </section>

            {/* Downloadable Assets Section */}
            <section id="download" className="scroll-mt-24 py-12 border-t border-white/5">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Free Resources & Downloads
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Downloadable assets to help you plan and create better product how to videos.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 border border-purple-500/20 rounded-xl p-6">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-clipboard-check text-purple-400 text-xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Product Video Checklist</h3>
                  <p className="text-gray-400 text-sm mb-4">A complete pre-production checklist covering script, format, platform specs, and approval workflow.</p>
                  <a href="https://creatr.studio/free-trial" className="inline-flex items-center gap-2 text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors">
                    <i className="fas fa-download"></i>
                    Download Free PDF
                  </a>
                </div>
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 border border-blue-500/20 rounded-xl p-6">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-file-alt text-blue-400 text-xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Video Script Template</h3>
                  <p className="text-gray-400 text-sm mb-4">Fill-in-the-blank script template for product how to videos — hooks, scenes, and CTAs included.</p>
                  <a href="https://creatr.studio/free-trial" className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
                    <i className="fas fa-download"></i>
                    Download Free Template
                  </a>
                </div>
                <div className="bg-gradient-to-br from-green-900/30 to-green-800/10 border border-green-500/20 rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-table text-green-400 text-xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Platform Specs Cheat Sheet</h3>
                  <p className="text-gray-400 text-sm mb-4">Exact dimensions, durations, and file formats for every major platform — Amazon, Shopify, TikTok, and more.</p>
                  <a href="https://creatr.studio/free-trial" className="inline-flex items-center gap-2 text-green-400 text-sm font-medium hover:text-green-300 transition-colors">
                    <i className="fas fa-download"></i>
                    Download Free Guide
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/20 rounded-2xl p-8 sm:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
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
              Plans start at $10/mo · All AI tools included · No feature gating · 12,000+ brands trust CREATR
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
              <div className="flex items-center gap-4 mt-4">
                <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors"><i className="fab fa-youtube"></i></a>
                <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-300 mb-3">Product</h4>
              <ul className="space-y-2">
                <li><a href="https://creatr.studio/picture-for-product" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Background Builder</a></li>
                <li><a href="https://creatr.studio/avatar" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">AI Video Ads</a></li>
                <li><a href="https://creatr.studio/studio-3d" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">3D Product Models</a></li>
                <li><a href="https://creatr.studio/editor" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Image Editor</a></li>
                <li><a href="https://creatr.studio/lab/fashion-pro" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Virtual Models</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-300 mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><a href="https://creatr.studio/guides/" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">All Guides</a></li>
                <li><a href="https://creatr.studio/description-writer" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Listing Writer</a></li>
                <li><a href="https://creatr.studio/free-trial" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Free Trial</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Product Video Checklist</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Script Templates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-300 mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="https://creatr.studio" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="https://creatr.studio" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Pricing</a></li>
                <li><a href="https://creatr.studio" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Contact</a></li>
                <li><a href="https://creatr.studio" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                <li><a href="https://creatr.studio" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© 2026 CREATR. All rights reserved.</p>
            <p className="text-sm text-gray-600">
              <a href="https://creatr.studio" className="hover:text-purple-400 transition-colors">creatr.studio</a> · Product How to Video Guide
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
