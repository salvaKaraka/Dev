"use client"
import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

interface Application {
    name: string;
    logo: string;
    url: string;
    silentOptions: string;
}

interface SelectedApps {
    [key: string]: boolean;
}

type params={
    applications: { [key: string]: Application };
    onGenerate:(selectedApps: SelectedApps) => void;
}

export default function ({applications, onGenerate}:params) {
    const [selectedApps, setSelectedApps] = useState<SelectedApps>({});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { id, checked } = event.target;
      setSelectedApps({
        ...selectedApps,
        [id]: checked,
      });
    };

    const handleSubmit = () => {
        onGenerate(selectedApps);
      };

    return (
        <form>
            {
                Object.entries(applications).map(([id, app]) => (
                    <div key={id}>
                        <label htmlFor={id}>
                            <Image  width={50} height={50} src={app.logo} alt={app.name + " logo"} />
                            {app.name}
                        </label>
                        <input type="checkbox" id={id} name={id} onChange={handleChange} />
                    </div>
                ))
            }
            <button type="button" onClick={handleSubmit}>Generate Installer</button>
        </form>
    )
}