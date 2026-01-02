-- Mastermind Sovereign Schema
-- GUID: 983DE8C8-E120-1-B5A0-C6D8AF97BB09

CREATE TABLE IF NOT EXISTS cases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  status TEXT DEFAULT 'OPEN',
  forensic_hash TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  guid_handshake TEXT DEFAULT '983DE8C8-E120-1-B5A0-C6D8AF97BB09'
);

CREATE TABLE IF NOT EXISTS memory_logs (
  id BIGSERIAL PRIMARY KEY,
  source_account TEXT NOT NULL, -- mem0_pro, mem0_reg, etc.
  content_summary TEXT,
  project_id TEXT,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS) for Level 5 Protection
ALTER TABLE cases ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Operator only access" ON cases FOR ALL USING (guid_handshake = '983DE8C8-E120-1-B5A0-C6D8AF97BB09');
