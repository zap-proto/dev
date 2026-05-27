'use client';

import Link from 'next/link';
import { ArrowRight, Code2, BookOpen, Package, Terminal, GitBranch } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative px-6 py-24 text-center bg-gradient-to-b from-fd-background to-fd-card">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-5xl rotate-[-15deg] inline-block">⚡</span>
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">ZAP for Developers</h1>
          </div>
          <p className="text-xl text-fd-muted-foreground max-w-2xl mx-auto mb-2">
            Build with the Zero-copy Application Protocol.
          </p>
          <p className="text-base text-fd-muted-foreground max-w-2xl mx-auto mb-8">
            Schema language, language bindings, sub-protocols, runtime guides.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/docs/quick-start"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Quick start <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium border border-fd-border rounded-lg hover:bg-fd-accent transition-colors"
            >
              Read the docs
            </Link>
            <a
              href="https://github.com/zap-proto"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium border border-fd-border rounded-lg hover:bg-fd-accent transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-fd-card border-y border-fd-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Where to start</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <DocCard icon={Terminal} title="Quick start" body="Install zapc + a binding, write a schema, send your first frame in 60 seconds." href="/docs/quick-start" />
            <DocCard icon={Code2} title="Native ZAP RPC" body="Schema → codegen → server + client. Capability-based, no bearer tokens." href="/docs/protocols/native" />
            <DocCard icon={Package} title="Language SDKs" body="Go, Rust, Python, TypeScript, C, C++, Java, C#, Erlang, Haskell, OCaml." href="/docs/sdks" />
            <DocCard icon={BookOpen} title="Protocols over ZAP" body="HTTP, MCP, A2A, ACP, RNS, FIX, WS — each as its own channel." href="/docs/protocols" />
            <DocCard icon={GitBranch} title="Post-quantum" body="X-Wing / Z-Wing hybrid KEM at the transport. ML-DSA + Ed25519 signatures." href="/docs/post-quantum" />
            <DocCard icon={BookOpen} title="Papers & proofs" body="Formal results: composability theorem, transport-vs-JWT advantage bounds, Z-Wing IND-CCA2-AKE." href="https://github.com/zap-proto/papers" />
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Install</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <CodeBlock title="Go" code={`go get github.com/zap-proto/go\ngo get github.com/zap-proto/http`} />
            <CodeBlock title="Rust" code={`cargo add zap-proto`} />
            <CodeBlock title="Python" code={`pip install zap-proto`} />
            <CodeBlock title="TypeScript" code={`npm install @zap-proto/zap`} />
            <CodeBlock title="Schema compiler" code={`cargo install zap-schema --bin zapc`} />
            <CodeBlock title="C / C++" code={`# header-only, fetch via your build system`} />
          </div>
        </div>
      </section>

      <footer className="border-t border-fd-border px-6 py-10 text-center text-fd-muted-foreground text-sm">
        <p>Looking for the protocol overview? <a className="text-blue-400 hover:underline" href="https://zap-proto.io">zap-proto.io</a></p>
        <p className="mt-1">Curious why zero-copy? <a className="text-blue-400 hover:underline" href="https://zerocopy.app">zerocopy.app</a></p>
      </footer>
    </main>
  );
}

function DocCard({ icon: Icon, title, body, href }: any) {
  return (
    <a href={href} className="group p-6 border border-fd-border rounded-lg hover:border-blue-500/50 transition-colors bg-fd-background">
      <Icon className="w-6 h-6 text-blue-400 mb-3" />
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-fd-muted-foreground">{body}</p>
    </a>
  );
}

function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <div className="border border-fd-border rounded-lg overflow-hidden">
      <div className="px-4 py-2 bg-fd-card border-b border-fd-border text-sm font-medium">{title}</div>
      <pre className="px-4 py-3 text-sm font-mono whitespace-pre-wrap bg-fd-background">{code}</pre>
    </div>
  );
}
