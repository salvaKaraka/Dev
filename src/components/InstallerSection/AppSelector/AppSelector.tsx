"use client"
import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import Check from '@/components/Icons/Check';

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
        <form className='pb-6 flex'>
            
            <nav className='absolute left-0 top-12 p-4 w-52 border-r-2 border-neutral-700 h-full'>
                <button className='px-4 py-2 mt-6 w-full border-2 bg-orange-500 border-orange-500 hover:bg-orange-600 rounded-xl transition-all duration-75' type="button" onClick={handleSubmit}>Generate Installer</button>
            </nav>

            <div className='ml-52 pb-8 border-b-2 border-neutral-700 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6'>
            {
                Object.entries(applications).map(([id, app]) => (
                    <div key={id}>
                        <label className='cursor-pointer group relative size-48 flex flex-col items-center justify-center rounded-md p-4 border border-neutral-700 hover:bg-neutral-700/20 transition-colors' htmlFor={id}>
                            <Image  width={50} height={50} src={app.logo} alt={app.name + " logo"}/>
                            {app.name}
                            <span className={`absolute top-2 right-2 border-2 rounded-full p-[2px] group-hover:scale-95 ${selectedApps[id] ? 'bg-orange-500 border-orange-400' : 'bg-neutral-700 border-neutral-600'} transition-transform`} ><Check size={'15'} color={selectedApps[id] ? '#f5f5f5' : "transparent"}/></span>
                        </label>
                        <input type="checkbox" className="hidden" id={id} name={id} onChange={handleChange} />
                    </div>
                ))
            }
            </div>
        </form>
    )
}