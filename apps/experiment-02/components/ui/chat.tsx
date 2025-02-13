import { SettingsPanelTrigger } from "@/components/settings-panel";

export default function Chat() {
  return (
    <div className="flex-1 overflow-auto shadow-md md:rounded-s-[inherit] md:rounded-e-3xl bg-background px-4 md:px-6 lg:px-8">
      <SettingsPanelTrigger />
    </div>
  );
}
