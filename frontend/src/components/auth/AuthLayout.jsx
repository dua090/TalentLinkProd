export default function AuthLayout({
  children,
}) {

  return (

    <div className="min-h-screen bg-[#070B14] text-white overflow-hidden relative">

      {/* GLOW */}
      <div className="absolute top-[-120px] right-[-80px] w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-100px] left-[10%] w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full" />

      {/* NAVBAR */}
      <header className="w-full border-b border-white/10 backdrop-blur-xl bg-white/[0.02]">

        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold">
              T
            </div>

            <h1 className="text-xl font-semibold">
              TalentLink AI
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm text-gray-300">

            <button>Features</button>

            <button>Pricing</button>

            <button>Enterprise</button>

            <button>Contact</button>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">

        {/* LEFT */}
        <div className="relative flex flex-col justify-center px-10 lg:px-20 py-16">

          <div className="max-w-2xl">

            <h1 className="text-6xl lg:text-7xl font-bold">

              TalentLink AI

            </h1>

            <p className="mt-6 text-2xl text-gray-300">

              Autonomous AI Hiring Operating System

            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center px-8 py-16 border-l border-white/10">

          {children}

        </div>
      </div>
    </div>
  );
}