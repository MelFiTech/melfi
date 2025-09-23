import React from "react";
import { Card, CardContent } from "../../../../../components/ui/card";
import { CodeSnippet } from "../../../../../components/CodeSnippet/CodeSnippet";

export const WebMobileDevelopmentCard = (): React.ReactElement => {
  return (
    <Card className="w-[511px] h-[420px] bg-[#F9F9FB] relative rounded-2xl overflow-hidden border-none shadow-none flex-shrink-0">
      <CardContent className="p-0 relative w-full h-full">
        <div className="w-[328px] left-[40px] flex flex-col items-start gap-0.5 absolute top-[52px]">
          <h3 className="relative flex items-center w-fit mt-[-1.00px] font-semibold text-slate-900 text-lg text-left tracking-[-0.09px] leading-7 whitespace-nowrap">
            Web & Mobile Development
          </h3>

          <p className="relative flex items-center w-80 [font-family:'Sora',Helvetica] font-normal text-[#36394a] text-sm tracking-[-0.28px] leading-[21px] text-left">
            Take a deep dive into your profile and explore all opportunities!
          </p>
        </div>

        {/* Code snippet block */}
        <div className="absolute top-[140px] right-6 w-[440px] z-10 pointer-events-none">
          <CodeSnippet
            className="shadow-none border-none"
            heightPx={500}
            snippets={[
              {
                language: "TypeScript (Next.js)",
                code: `// API route\nexport async function GET() {\n  const res = await fetch('https://example.com/api/projects', { cache: 'no-store' });\n  const data = await res.json();\n  return Response.json(data);\n}\n\n// Client hook\nimport { useEffect, useState } from 'react';\nexport function useProjects() {\n  const [data, setData] = useState([] as Array<{ id: string; name: string }>)\n  useEffect(() => {\n    fetch('/api/projects').then(r => r.json()).then(setData)\n  }, [])\n  return data\n}`,
              },
              {
                language: "Python (FastAPI)",
                code: `from fastapi import FastAPI\napp = FastAPI()\n\n@app.get('/api/projects')\ndef list_projects():\n    return [{ 'id': '1', 'name': 'Monzi' }, { 'id': '2', 'name': 'Nyra' }]`,
              },
              {
                language: "Go (net/http)",
                code: `package main\nimport (\n  \"encoding/json\"\n  \"net/http\"\n)\n\ntype Project struct {\n  ID string \`json:\"id\"\`\n  Name string \`json:\"name\"\`\n}\n\nfunc main() {\n  http.HandleFunc(\"/api/projects\", func(w http.ResponseWriter, r *http.Request) {\n    json.NewEncoder(w).Encode([]Project{{ID: \"1\", Name: \"Monzi\"}, {ID: \"2\", Name: \"Nyra\"}})\n  })\n  http.ListenAndServe(\":3000\", nil)\n}`,
              },
            ]}
          />
        </div>
      </CardContent>
    </Card>
  );
};
