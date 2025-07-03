"use client";

import { useState } from "react";
import LanguageSelector from "./components/LanguageSelector";
import { MonacoCodeEditor } from "./components/MonacoCodeEditor";

export default function EditorPage() {
  const [code, setCode] = useState("// Start coding...");
  const [language, setLanguage] = useState("javascript");

  return (
    <main className="min-h-screen p-6 bg-zinc-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Code Slides Editor</h1>

      <div className="flex gap-4">
        <LanguageSelector language={language} setLanguage={setLanguage} />
      </div>

      <div className="mt-4 h-[500px] border rounded overflow-hidden">
        <MonacoCodeEditor code={code} setCode={setCode} language={language} />
      </div>
    </main>
  );
}
