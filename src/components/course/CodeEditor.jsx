"use client";
import React, { useState, useEffect, useRef } from "react";
import { Play, Code2, RefreshCcw } from "lucide-react";

const CodeEditor = ({ initialCode = "# Write your Python code here\nprint('Hello World!')", onComplete }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const pyodideRef = useRef(null);

  useEffect(() => {
    // Load Pyodide script dynamically
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js";
    script.async = true;
    script.onload = async () => {
      try {
        const pyodide = await window.loadPyodide({
          stdout: (text) => setOutput((prev) => prev + text + "\n"),
          stderr: (text) => setOutput((prev) => prev + "ERROR: " + text + "\n"),
        });
        pyodideRef.current = pyodide;
        setIsReady(true);
      } catch (err) {
        console.error("Failed to load Pyodide:", err);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleRun = async () => {
    if (!pyodideRef.current) return;
    
    setIsRunning(true);
    setOutput(""); // Clear previous output
    
    try {
      await pyodideRef.current.runPythonAsync(code);
    } catch (err) {
      setOutput((prev) => prev + "\n" + err.message);
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput("");
  };

  return (
    <div className="w-full bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
      {/* Editor Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-black/20 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Code2 size={16} className="text-game-teal" />
          <span className="font-mono text-[10px] text-white/60 uppercase tracking-widest">
            {isReady ? "Python 3.11 Compiler (Pyodide)" : "Loading Environment..."}
          </span>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleReset}
            className="p-1.5 hover:bg-white/5 rounded text-white/40 hover:text-white transition-colors"
            title="Reset Code"
          >
            <RefreshCcw size={14} />
          </button>
          <button 
            onClick={handleRun}
            disabled={isRunning || !isReady}
            className={`flex items-center gap-2 px-3 py-1 rounded font-mono text-[10px] font-bold uppercase transition-all ${
              isRunning || !isReady ? "bg-white/5 text-white/20" : "bg-game-teal text-game-dark hover:bg-white"
            }`}
          >
            {isRunning ? "Executing..." : !isReady ? "Loading..." : <><Play size={12} fill="currentColor" /> Run Code</>}
          </button>
          {output && (
            <button
              onClick={onComplete}
              className="ml-4 flex items-center gap-2 px-3 py-1 rounded bg-game-purple text-white font-mono text-[10px] font-bold uppercase transition-all hover:bg-white hover:text-game-purple shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            >
              Submit Mission
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 h-64">
        {/* Input Area */}
        <div className="relative border-r border-white/5">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-full p-4 bg-transparent text-game-teal font-mono text-xs focus:outline-none resize-none"
            spellCheck="false"
          />
          <div className="absolute top-4 left-0 w-8 flex flex-col items-center pointer-events-none opacity-20">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <span key={n} className="font-mono text-[10px] leading-relaxed">{n}</span>)}
          </div>
        </div>

        {/* Output Area */}
        <div className="bg-black/40 p-4 font-mono text-xs overflow-y-auto">
          <div className="text-white/20 uppercase text-[9px] mb-2 tracking-widest">Console Output</div>
          <pre className={`whitespace-pre-wrap ${output.includes("Error") ? "text-rose-400" : "text-white/80"}`}>
            {output || "Output will appear here..."}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
