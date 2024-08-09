"use client"
import AppSelector from "@/components/InstallerSection/AppSelector/AppSelector";
import applications from "@/data/appList.json";
import { useEffect, useState } from "react";

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


    useEffect(() => {
      if (installerUrl) {
          // Crear un enlace temporal
          const enlace = document.createElement('a');
          enlace.href = installerUrl;
          enlace.download = 'installer.bat'; // Nombre del archivo de descarga
          document.body.appendChild(enlace);
          enlace.click();
          document.body.removeChild(enlace);
      }
  }, [installerUrl]);

    return (
    <section className="p-4 mt-10 mx-auto">
      <AppSelector applications={applications} onGenerate={getInstallerUrl} />
    </section>
  );
}