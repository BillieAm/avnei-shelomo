export default function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="flex gap-2 rounded-xl bg-primary p-1 font-bold text-primary-foreground">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(tab)}
          className={`w-full rounded-xl p-4 py-2 ${activeTab === tab && "bg-background text-primary ring-2"} ${activeTab !== tab && "hover:bg-white/20"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
