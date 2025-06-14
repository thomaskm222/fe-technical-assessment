import { DataIcon, MonitoringIcon, PlusIcon, SettingsIcon } from "../icons";

export const Sidebar = () => {
  const menuItems = [
    {
      Icon: <DataIcon className="text-gray-20" />,
      name: "Data Name",
      onClick: () => {
        alert("Data Name");
      },
    },
    {
      Icon: <MonitoringIcon className="text-gray-20" />,
      name: "Monitoring",
      onClick: () => {
        alert("Monitoring");
      },
    },
    {
      Icon: <SettingsIcon className="text-gray-20" />,
      name: "Settings",
      onClick: () => {
        alert("Settings");
      },
    },
  ];
  return (
    <div className="flex flex-col gap-2 min-w-[15rem] p-2 border-r border-gray-10">
      <div className="flex flex-row items-center gap-2 px-4">
        <div className="size-9 bg-purple-10 rounded-md" />
        <h1 className="font-medium">AirOps</h1>
      </div>
      <button className="flex flex-row gap-1 text-sm items-center shadow-sm font-medium justify-center border rounded-md py-1.5">
        New
        <PlusIcon />
      </button>
      <div className="flex flex-col gap-1.5">
        {menuItems.map((item) => (
          <button
            className="flex flex-row gap-2 py-1.5 items-center"
            key={item.name}
            onClick={item.onClick}
          >
            {item.Icon}
            <p className="text-xs text-gray-30">{item.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
