"use client";

import Editor from "@monaco-editor/react";

type Props = {
  code: string;
  setCode: (value: string) => void;
  language: string;
};

export function MonacoCodeEditor({ code, setCode, language }: Props) {
  return (
    <Editor
      height="100%"
      defaultLanguage={language}
      value={code}
      onChange={(val) => setCode(val || "")}
      theme="vs-dark"
      options={{
        fontSize: 16,
        minimap: { enabled: false },
        padding: { top: 16 },
      }}
    />
  );
}
