import { source } from '@/lib/source';
import { DocsLayout } from '@hanzo/docs-radix-ui/layouts/docs';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <span className="inline-block rotate-[-15deg]" aria-hidden>⚡</span>
            <span className="font-bold">ZAP Protocol</span>
          </div>
        ),
        url: '/',
      }}
      links={[
        {
          text: 'GitHub',
          url: 'https://github.com/zap-proto',
          external: true,
        },
      ]}
      sidebar={{
        defaultOpenLevel: 1,
      }}
    >
      {children}
    </DocsLayout>
  );
}
