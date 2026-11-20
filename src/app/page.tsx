
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ChevronRight,
  Globe2,
  Headphones,
  Languages,
  MessageSquare,
  Phone,
  PhoneCall,
  Play,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const industries = [
  { name: "Real Estate", desc: "Find buyers and schedule property visits.", icon: Building2 },
  { name: "Education", desc: "Connect with students and manage admissions.", icon: Users },
  { name: "Healthcare", desc: "Manage inquiries and appointment requests.", icon: Headphones },
  { name: "Automobile", desc: "Handle vehicle inquiries and test drives.", icon: Zap },
  { name: "E-commerce", desc: "Automate customer support and follow-ups.", icon: MessageSquare },
  { name: "Financial Services", desc: "Connect with interested customers.", icon: TrendingUp },
];

const features = [
  {
    icon: Languages,
    title: "Speak every language",
    desc: "Connect with customers in English and major Indian languages.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligent conversations",
    desc: "AI understands customer questions and responds naturally.",
  },
  {
    icon: PhoneCall,
    title: "Inbound and outbound",
    desc: "Handle incoming customer calls and make approved outgoing calls.",
  },
  {
    icon: Sparkles,
    title: "Automatic call summaries",
    desc: "Get transcripts, summaries and customer insights after every call.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b14] text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#080b14]/90 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-xl font-bold">
            <span className="rounded-xl bg-violet-600 p-2">
              <PhoneCall size={21} />
            </span>
            <span>AI <span className="text-violet-400">CallFlow</span></span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#industries" className="hover:text-white">Industries</a>
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden text-sm text-gray-300 sm:block">
              Sign in
            </a>
            <a href="#contact" className="primary-button text-sm">
              Get Started <ArrowRight className="ml-2 inline" size={16} />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[130px]" />

        <div className="container relative grid items-center gap-16 py-24 lg:grid-cols-2 lg:py-32">

          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
              <Sparkles size={15} />
              The future of business communication
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Your business.
              <br />
              Your AI.
              <br />
              <span className="gradient-text">Every call.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
              Build intelligent AI calling agents for your business.
              Automate conversations, connect with customers in their
              preferred language and turn every call into valuable insights.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="primary-button">
                Build Your AI Agent <ArrowRight className="ml-2 inline" size={17} />
              </a>

              <a href="#how-it-works" className="secondary-button">
                <Play className="mr-2 inline" size={16} />
                See How It Works
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-400" />
                No coding required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-400" />
                Multiple industries
              </span>
            </div>
          </div>

          {/* DASHBOARD PREVIEW */}
          <div className="relative">
            <div className="glass relative p-5 shadow-2xl shadow-violet-950/30">

              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">AI Call Dashboard</p>
                  <h3 className="mt-1 text-xl font-bold">Overview</h3>
                </div>
                <span className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-2 text-xs text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  System Preview
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <Phone size={20} className="text-violet-400" />
                  <p className="mt-4 text-3xl font-bold">1,248</p>
                  <p className="mt-1 text-xs text-gray-400">Total Calls</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <Users size={20} className="text-blue-400" />
                  <p className="mt-4 text-3xl font-bold">856</p>
                  <p className="mt-1 text-xs text-gray-400">Leads Reached</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <TrendingUp size={20} className="text-green-400" />
                  <p className="mt-4 text-3xl font-bold">324</p>
                  <p className="mt-1 text-xs text-gray-400">Interested Leads</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <BrainCircuit size={20} className="text-orange-400" />
                  <p className="mt-4 text-3xl font-bold">92%</p>
                  <p className="mt-1 text-xs text-gray-400">AI Analysis</p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="font-semibold">Recent Call Analysis</h4>
                  <span className="text-xs text-gray-500">Sample data</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Rahul Sharma</p>
                      <p className="text-xs text-gray-500">Interested in property</p>
                    </div>
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                      Hot Lead
                    </span>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Priya Kumar</p>
                      <p className="text-xs text-gray-500">Requested more details</p>
                    </div>
                    <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">
                      Warm Lead
                    </span>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Arun Kumar</p>
                      <p className="text-xs text-gray-500">Not interested</p>
                    </div>
                    <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-400">
                      Cold Lead
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl border border-violet-400/20 bg-violet-500/10 p-4">
                <Bot size={25} className="text-violet-400" />
                <div>
                  <p className="text-sm font-semibold">AI Call Intelligence</p>
                  <p className="text-xs text-gray-400">Automatic summaries and lead classification</p>
                </div>
                <ArrowUpRight className="ml-auto text-violet-400" size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section-padding border-t border-white/10">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-400">
              Powerful AI technology
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Everything your business needs
            </h2>
            <p className="mt-5 text-gray-400">
              One intelligent platform to manage every customer conversation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="glass p-6 transition hover:-translate-y-1 hover:border-violet-400/40">
                  <div className="mb-6 inline-flex rounded-xl bg-violet-500/15 p-3 text-violet-400">
                    <Icon size={25} />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm leading-7 text-gray-400">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="section-padding border-t border-white/10">
        <div className="container">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-400">
                Built for every industry
              </p>
              <h2 className="text-4xl font-bold">One platform. Many industries.</h2>
              <p className="mt-4 text-gray-400">
                Customize your AI agent for the way your business works.
              </p>
            </div>
            <a href="#contact" className="text-sm text-violet-400 hover:text-violet-300">
              Explore possibilities <ArrowUpRight className="ml-1 inline" size={16} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div key={industry.name} className="glass group p-6 transition hover:border-violet-400/40">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="rounded-xl bg-violet-500/15 p-3 text-violet-400">
                      <Icon size={25} />
                    </div>
                    <ArrowUpRight size={19} className="text-gray-500 transition group-hover:text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold">{industry.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">{industry.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="section-padding border-t border-white/10">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-400">
              Simple setup
            </p>
            <h2 className="text-4xl font-bold">Your AI agent in three steps</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { number: "01", title: "Tell us about your business", desc: "Chat with our AI assistant and explain what your business needs." },
              { number: "02", title: "Customize your AI agent", desc: "Choose the language, voice, industry and conversation style." },
              { number: "03", title: "Start connecting", desc: "Configure your calling number and manage your conversations." },
            ].map((step) => (
              <div key={step.number} className="glass p-8">
                <p className="text-4xl font-bold text-violet-400">{step.number}</p>
                <h3 className="mt-7 text-xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-400">{step.desc}</p>
                <ChevronRight className="mt-6 text-violet-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="section-padding border-t border-white/10">
        <div className="container">
          <div className="glass relative overflow-hidden p-8 md:p-14">
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-600/20 blur-[100px]" />
            <div className="relative grid items-center gap-10 md:grid-cols-2">
              <div>
                <Globe2 className="mb-6 text-violet-400" size={40} />
                <h2 className="text-4xl font-bold">Speak your customer's language.</h2>
                <p className="mt-5 leading-7 text-gray-400">
                  Connect with customers across India using multilingual AI
                  voice conversations. Configure the preferred language for
                  every business and calling agent.
                </p>
              </div>
              <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3">
                {["English", "हिन्दी", "తెలుగు", "தமிழ்", "ಕನ್ನಡ", "മലയാളം", "বাংলা", "मराठी", "ગુજરાતી"].map((language) => (
                  <div key={language} className="rounded-xl border border-white/10 bg-white/[0.05] p-4 text-center text-sm font-medium">
                    {language}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-600/20 to-blue-600/10 px-6 py-16 text-center md:px-16">
            <ShieldCheck className="mx-auto mb-6 text-violet-400" size={42} />
            <h2 className="text-4xl font-bold md:text-5xl">
              Ready to build your AI calling agent?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-gray-400">
              Tell our AI about your business and create your personalized
              calling agent without writing code.
            </p>
            <a href="mailto:hello@example.com" className="primary-button mt-9 inline-flex items-center">
              Get Started <ArrowRight className="ml-2" size={18} />
            </a>
            <p className="mt-5 text-xs text-gray-500">
              Product preview. Account creation and AI setup will be connected in upcoming steps.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-9">
        <div className="container flex flex-col items-center justify-between gap-5 text-sm text-gray-500 md:flex-row">
          <p>© 2026 AI CallFlow. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#industries" className="hover:text-white">Industries</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
