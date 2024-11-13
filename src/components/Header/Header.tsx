import Github from "../Icons/Github";

 export default function Header() {
    return (
        <header className="border-b-2 border-neutral-700 px-4 h-12 flex items-center justify-between">
               <a href="/">
                <div className="flex items-end space-x-1">
                    <p className="text-orange-400 text-xl border border-orange-400 py-1 px-2" >tdt</p>
                    <div className="text-start">
                    <p className="text-neutral-500">v0.1 pre-alpha</p>
                    <p className="font-bold text-xs">The Developer Toolkit</p>
                    </div>
                </div>
                </a>
                <a href="https://github.com/salvaKaraka" target="_blank" >
                    <Github size="30" color="#f5f5f5"  />
                </a>
        </header>
    );
}