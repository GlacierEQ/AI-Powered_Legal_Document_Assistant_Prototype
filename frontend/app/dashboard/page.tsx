/**
 * MASTERMIND MISSION CONTROL - APEX UI v1.0
 * Style: SIGMA_GHOST (Glassmorphism / Dark Cyber)
 * GUID: 983DE8C8-E120-1-B5A0-C6D8AF97BB09
 */

import React from 'react';
import { 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Terminal, 
  Lock,
  Search,
  Zap
} from 'lucide-react';

export default function MissionControl() {
  return (
    <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* GLOW EFFECT BACKGROUND */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,#001122_0%,#000000_100%)] pointer-events-none" />
      
      {/* TOP NAVIGATION BAR (APPLE-STYLE MINIMALISM) */}
      <nav className="relative z-10 border-b border-white/10 bg-black/50 backdrop-blur-md px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold tracking-tighter text-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            MASTERMIND NEXUS
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
          <span className="hover:text-white cursor-pointer transition-colors">SWARM</span>
          <span className="hover:text-white cursor-pointer transition-colors">FORENSICS</span>
          <span className="hover:text-white cursor-pointer transition-colors">ARCHIVE</span>
          <div className="h-4 w-px bg-white/10 mx-2" />
          <div className="flex items-center gap-2 text-cyan-400">
            <Lock className="w-4 h-4" />
            <span className="font-mono text-xs">GUID: 983D...BB09</span>
          </div>
        </div>
      </nav>

      <main className="relative z-10 p-8 max-w-[1600px] mx-auto grid grid-cols-12 gap-6">
        
        {/* ROW 1: STATUS CARDS (The 5-Account Matrix) */}
        <div className="col-span-12 grid grid-cols-5 gap-4">
          {['Mem0_Pro', 'Mem0_Reg', 'MP_Alpha', 'MP_Beta', 'SuperMemory'].map((account) => (
            <div key={account} className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-2">
                <Database className="w-5 h-5 text-cyan-500 group-hover:scale-110 transition-transform" />
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{account}</div>
              <div className="text-xl font-mono text-white mt-1">SYNCED</div>
            </div>
          ))}
        </div>

        {/* ROW 2: PRIMARY INTERFACE (Sigma-style File Management) */}
        <div className="col-span-8 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-500" />
              SIGMA_GHOST FILE EXPLORER
            </h2>
            <div className="bg-black/40 rounded-full px-4 py-2 border border-white/5 flex items-center gap-3">
              <Search className="w-4 h-4 text-slate-500" />
              <input type="text" placeholder="Search Logic Empire..." className="bg-transparent border-none outline-none text-sm w-48" />
            </div>
          </div>
          
          <div className="space-y-3">
            {[
              { name: 'primordial_titan_graph.py', size: '124KB', type: 'Logic', status: 'CORE' },
              { name: 'federal_forensic_matrix.py', size: '89KB', type: 'Security', status: 'ACTIVE' },
              { name: 'omni_bridge_v5.ts', size: '45KB', type: 'Bridge', status: 'DEPLOYED' },
              { name: 'microwave_nuke.sh', size: '12KB', type: 'Forensics', status: 'READY' }
            ].map((file) => (
              <div key={file.name} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{file.name}</div>
                    <div className="text-xs text-slate-500">{file.type} • {file.size}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">{file.status}</span>
                  <button className="text-slate-500 hover:text-white transition-colors">
                    <Terminal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2 RIGHT: FORENSIC LOGS (Xterm-style) */}
        <div className="col-span-4 bg-slate-950 border border-white/10 rounded-3xl p-0 overflow-hidden flex flex-col">
          <div className="bg-white/5 p-4 border-b border-white/10 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span className="text-xs font-bold tracking-widest uppercase">Forensic Audit Log</span>
          </div>
          <div className="flex-1 p-4 font-mono text-[10px] leading-relaxed text-cyan-500/80 space-y-1">
            <p className="text-slate-500">[{new Date().toISOString()}] INITIALIZING_SWARM...</p>
            <p><span className="text-green-500">SUCCESS</span>: GUID_HANDSHAKE_VERIFIED</p>
            <p><span className="text-blue-500">INFO</span>: Tapping into 5-Account Matrix</p>
            <p><span className="text-blue-500">INFO</span>: Mem0_Pro (casey@hi-class...) Online</p>
            <p><span className="text-yellow-500">SCAN</span>: Scanning 842 Repositories for Leaks</p>
            <p><span className="text-cyan-500">PULSE</span>: 10 Logic Clusters Injected</p>
            <p className="animate-pulse">_</p>
          </div>
        </div>

      </main>
    </div>
  );
}
