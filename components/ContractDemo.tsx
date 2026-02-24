'use client';

import { useState } from 'react';

export default function ContractDemo() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const callContract = async () => {
    if (!input.trim()) {
      setError('Please enter a value');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(`/api/contract/hello?name=${encodeURIComponent(input)}`);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const data = await response.json();

      if (Array.isArray(data.result)) {
        setResult(data.result.join(' '));
      } else if (typeof data.result === 'object') {
        setResult(JSON.stringify(data.result, null, 2));
      } else {
        setResult(String(data.result ?? data.greeting ?? 'Success'));
      }
    } catch (err) {
      console.error('Contract call failed:', err);
      setError(err instanceof Error ? err.message : 'Failed to call contract');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
        <h2 className="text-xl font-semibold">Contract Interaction</h2>
      </div>

      <p className="text-gray-400 text-sm">
        Test your deployed smart contract. Enter a parameter and click "Call Contract".
      </p>

      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter parameter value..."
          disabled={loading}
          className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg
                     text-white placeholder-gray-500 focus:outline-none focus:ring-2
                     focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
        />
        <button
          onClick={callContract}
          disabled={loading}
          className="px-6 py-2 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800
                     disabled:cursor-not-allowed text-white font-medium rounded-lg
                     transition-colors"
        >
          {loading ? 'Calling...' : 'Call Contract'}
        </button>
      </div>

      {result && (
        <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
          <span className="text-green-400 font-medium text-sm">Success: </span>
          <pre className="text-green-300 font-mono text-sm">{result}</pre>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <span className="text-red-400 font-medium text-sm">Error: </span>
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      )}
    </div>
  );
}