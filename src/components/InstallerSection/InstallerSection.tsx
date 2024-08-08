"use client"
import AppSelector from "@/components/InstallerSection/AppSelector/AppSelector";
import applications from "@/data/appList.json";
import { useState } from "react";

export default function InstallerSection() {
    const [installerUrl, setInstallerUrl] = useState("");

    const getInstallerUrl = async (selectedApps: Record<string, boolean>) => {
        console.log("selectedApps", selectedApps);
        const response = await fetch ("/api/generateInstaller", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(selectedApps),
        });
        if (!response.ok) {
            throw new Error("Failed to generate installer");
        }
        console.log("response", response);
        const data = await response.json();
        setInstallerUrl(data.url);
    }

    return (
    <section>
      <AppSelector applications={applications} onGenerate={getInstallerUrl} />
      {
        installerUrl && (
          <a href={installerUrl} download="installer.bat">
            Download Installer
        </a>
        )
      }

    </section>
  );
}