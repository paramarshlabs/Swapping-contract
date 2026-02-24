import ContractDemo from "@/components/ContractDemo";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Stellar App
          </h1>
          <p className="text-gray-400">
            Built with Stacy IDE - Your AI-powered Stellar development environment
          </p>
        </div>

        {/* Contract Interaction Demo */}
        <ContractDemo />

        {/* Instructions */}
        <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Deploy your smart contract from the Contract Mode</li>
            <li>Click &quot;Generate Bindings&quot; in the Frontend Mode action panel</li>
            <li>The AI will generate TypeScript bindings and integration code</li>
            <li>Use the ContractDemo component above to test your contract</li>
          </ol>
        </div>

        {/* Status */}
        <div className="text-center text-sm text-gray-500">
          <p>Live Preview • Hot Reload Enabled</p>
        </div>
      </div>
    </main>
  );
}