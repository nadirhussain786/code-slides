"use client";

import { Highlight, themes } from "prism-react-renderer";

type Props = {
  code: string;
  language: string;
};

export default function CodePreview({ code, language }: Props) {
  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4 overflow-auto">
      <Highlight code={code} language={language} theme={themes.vsDark}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
