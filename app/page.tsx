export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Cost Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Surprise AI Bills Before They Happen
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Monitor token usage across all your AI API calls in real-time. Get instant email or Slack alerts when you&apos;re approaching your budget — before you blow past it.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="text-white font-semibold mb-1">Real-Time Tracking</h3>
            <p className="text-sm text-[#8b949e]">Every token counted instantly via SDK or webhook integration.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔔</div>
            <h3 className="text-white font-semibold mb-1">Smart Alerts</h3>
            <p className="text-sm text-[#8b949e]">Email and Slack notifications at 50%, 80%, and 100% of budget.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="text-white font-semibold mb-1">Multi-Provider</h3>
            <p className="text-sm text-[#8b949e]">Supports OpenAI, Anthropic, Cohere, and more from one dashboard.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <span className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest">Pro Plan</span>
          <div className="mt-3 mb-1">
            <span className="text-5xl font-bold text-white">$12</span>
            <span className="text-[#8b949e] ml-1">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay within budget</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited API integrations",
              "Real-time token monitoring",
              "Email + Slack alerts",
              "Cost projection dashboard",
              "Up to 10 budget profiles",
              "7-day free trial"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-12 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does the integration work?</h3>
            <p className="text-[#8b949e] text-sm">Drop in our lightweight SDK (Node.js, Python) or point your existing AI calls through our webhook proxy. Setup takes under 5 minutes.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Which AI providers are supported?</h3>
            <p className="text-[#8b949e] text-sm">OpenAI (GPT-4, GPT-3.5), Anthropic (Claude), Cohere, Mistral, and any provider with a token-based pricing model.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I set different budgets per project?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Create up to 10 budget profiles, each with custom token limits, cost thresholds, and alert channels per project or environment.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} AI Prompt Token Budget Alerter. All rights reserved.
      </footer>
    </main>
  );
}
