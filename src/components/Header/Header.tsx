import Github from "../Icons/Github";

 export default function Header() {
    return (
        <header className="border-b-2 border-neutral-700 py-2 px-4  flex items-center justify-between">
                <div className="flex items-end space-x-1">
                    <p className="text-orange-400 text-xl border border-orange-400 py-1 px-2" >tdt</p>
                    <div className="text-start">
                    <p className="text-neutral-500">v0.1 pre-alpha</p>
                    <p className="font-bold text-xs">the developer toolkit</p>
                    </div>
                </div>
                <div>
                    <Github size="30" color="#f5f5f5"  />
                </div>
        </header>
    );
}