import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
  type DefaultMDXOptions,
} from '@hanzo/docs-mdx/config';
import zapGrammar from './lib/zap.tmLanguage.json';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    // Register ZAP's TextMate grammar so ```zap fences highlight instead of
    // throwing ShikiError. Grammar vendored from luxfi zap/syntax (source.zap).
    // Only `langs` is overridden; themes/engine/transformers stay on the docs
    // preset defaults, which the runtime merges in (its type demands a full
    // options object, so this partial override is asserted).
    rehypeCodeOptions: {
      langs: [zapGrammar],
    } as unknown as DefaultMDXOptions['rehypeCodeOptions'],
  },
});
