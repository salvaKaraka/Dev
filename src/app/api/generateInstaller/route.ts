import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import applications from "@/data/appList.json";
import { NextResponse } from "next/server";

interface Application {
  name: string;
  url: string;
  silentOptions: string;
}

interface SelectedApps {
  [key: string]: boolean;
}

export async function POST(req: NextApiRequest) {
  const selectedApps: SelectedApps = req.body;
  let scriptContent = "";

  for (const [appId, isSelected] of Object.entries(selectedApps)) {
    if (isSelected && (applications as any)[appId]) {
      const app = (applications as any)[appId] as Application;
      scriptContent += `curl -L ${app.url} -o ${appId}.exe\n`;
      scriptContent += `${appId}.exe ${app.silentOptions}\n`;
      scriptContent += `del ${appId}.exe\n`;
    }
  }

  const scriptPath = path.join(process.cwd(), "public", "installer.bat");
  fs.writeFileSync(scriptPath, scriptContent);

  return NextResponse.json({ url: '/installer.bat' });
}
