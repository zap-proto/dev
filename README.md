# ZAP Developer Portal

Source for [zap-proto.dev](https://zap-proto.dev) — quickstarts, SDK docs, and the protocol reference for ZAP (Zero-copy App Proto).

## What lives here

- `content/docs/` — MDX docs (Fumadocs source)
- `content/docs/sdks/` — per-language SDK guides (TypeScript, Go, Python, Rust, C++, C, Java, C#, OCaml, Haskell, Erlang)
- `app/`, `components/` — Next.js 15 app surface

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build
```

## Deploy

`do-sfo3-lux-k8s`, namespace `zap-proto-dev`, host `zap-proto.dev`, served through `hanzoai/spa` behind `hanzoai/ingress`. Cloudflare proxy ON for edge cache + TLS.

Container image: `ghcr.io/zap-proto/dev:latest` — built on push to `main` via GitHub Actions, rolled by the operator.

## Related

- [zap-proto.io](https://zap-proto.io) — marketing site ([zap-proto/zap-proto.github.io](https://github.com/zap-proto/zap-proto.github.io))
- [zerocopy.app](https://zerocopy.app) — "why zero-copy" landing ([zap-proto/zerocopy](https://github.com/zap-proto/zerocopy))
- [zap-proto/spec](https://github.com/zap-proto/spec) — canonical wire spec
- All language SDKs at [github.com/zap-proto](https://github.com/zap-proto)

## License

MIT
