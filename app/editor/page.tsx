"use client";

import { useState } from "react";
import LanguageSelector from "./components/LanguageSelector";
import { MonacoCodeEditor } from "./components/MonacoCodeEditor";
import CodePreview from "../preview/components/CodePreview";

export default function EditorPage() {
  const [code, setCode] = useState("// Start coding...");
  const [language, setLanguage] = useState("javascript");

  return (
    <main className="min-h-screen p-6 bg-zinc-950 text-white space-y-6">
      <h1 className="text-2xl font-bold">Code Slides Editor</h1>

      <LanguageSelector language={language} setLanguage={setLanguage} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-[400px] border border-zinc-700 rounded">
          <MonacoCodeEditor code={code} setCode={setCode} language={language} />
        </div>

        <CodePreview code={code} language={language} />
      </div>
    </main>
  );
}
