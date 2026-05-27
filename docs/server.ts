// @ts-nocheck
import * as __fd_glob_33 from "../content/docs/sdks/typescript.mdx?collection=docs"
import * as __fd_glob_32 from "../content/docs/sdks/rust.mdx?collection=docs"
import * as __fd_glob_31 from "../content/docs/sdks/python.mdx?collection=docs"
import * as __fd_glob_30 from "../content/docs/sdks/ocaml.mdx?collection=docs"
import * as __fd_glob_29 from "../content/docs/sdks/java.mdx?collection=docs"
import * as __fd_glob_28 from "../content/docs/sdks/index.mdx?collection=docs"
import * as __fd_glob_27 from "../content/docs/sdks/haskell.mdx?collection=docs"
import * as __fd_glob_26 from "../content/docs/sdks/go.mdx?collection=docs"
import * as __fd_glob_25 from "../content/docs/sdks/erlang.mdx?collection=docs"
import * as __fd_glob_24 from "../content/docs/sdks/csharp.mdx?collection=docs"
import * as __fd_glob_23 from "../content/docs/sdks/cpp.mdx?collection=docs"
import * as __fd_glob_22 from "../content/docs/sdks/c.mdx?collection=docs"
import * as __fd_glob_21 from "../content/docs/protocols/ws.mdx?collection=docs"
import * as __fd_glob_20 from "../content/docs/protocols/rns.mdx?collection=docs"
import * as __fd_glob_19 from "../content/docs/protocols/native.mdx?collection=docs"
import * as __fd_glob_18 from "../content/docs/protocols/mcp.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/protocols/index.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/protocols/http.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/protocols/fix.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/protocols/acp.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/protocols/a2a.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/why-zap.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/transports.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/quick-start.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/protocol.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/gateway.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/consensus.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/benchmarks.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/architecture.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/api.mdx?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/sdks/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/protocols/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from '@hanzo/docs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("@hanzo/docs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "protocols/meta.json": __fd_glob_1, "sdks/meta.json": __fd_glob_2, }, {"api.mdx": __fd_glob_3, "architecture.mdx": __fd_glob_4, "benchmarks.mdx": __fd_glob_5, "consensus.mdx": __fd_glob_6, "gateway.mdx": __fd_glob_7, "index.mdx": __fd_glob_8, "protocol.mdx": __fd_glob_9, "quick-start.mdx": __fd_glob_10, "transports.mdx": __fd_glob_11, "why-zap.mdx": __fd_glob_12, "protocols/a2a.mdx": __fd_glob_13, "protocols/acp.mdx": __fd_glob_14, "protocols/fix.mdx": __fd_glob_15, "protocols/http.mdx": __fd_glob_16, "protocols/index.mdx": __fd_glob_17, "protocols/mcp.mdx": __fd_glob_18, "protocols/native.mdx": __fd_glob_19, "protocols/rns.mdx": __fd_glob_20, "protocols/ws.mdx": __fd_glob_21, "sdks/c.mdx": __fd_glob_22, "sdks/cpp.mdx": __fd_glob_23, "sdks/csharp.mdx": __fd_glob_24, "sdks/erlang.mdx": __fd_glob_25, "sdks/go.mdx": __fd_glob_26, "sdks/haskell.mdx": __fd_glob_27, "sdks/index.mdx": __fd_glob_28, "sdks/java.mdx": __fd_glob_29, "sdks/ocaml.mdx": __fd_glob_30, "sdks/python.mdx": __fd_glob_31, "sdks/rust.mdx": __fd_glob_32, "sdks/typescript.mdx": __fd_glob_33, });