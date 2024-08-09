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
    <section className="p-4 mt-10 mx-auto">
      <AppSelector applications={applications} onGenerate={getInstallerUrl} />
      {
        installerUrl && (
          <a className='px-4 py-2 mt-6 border-2 border-orange-500 text-orange-500 hover:border-orange-600 hover:text-orange-600 rounded-xl transition-all duration-75' href={installerUrl} download="installer.bat">
            Download Installer
        </a>
        )
      }

    </section>
  );
}