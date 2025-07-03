"use client";

type Props = {
  language: string;
  setLanguage: (val: string) => void;
};

const languages = ["javascript", "typescript", "python", "html", "css"];

export default function LanguageSelector({ language, setLanguage }: Props) {
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="bg-zinc-800 text-white p-2 rounded"
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
