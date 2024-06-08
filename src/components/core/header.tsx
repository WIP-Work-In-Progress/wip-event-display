import PresentationModeSwitch from "@/features/presentation-mode/presentation-mode-switch.component";
import logo from "/wip-logo-dynamic-white-gradient.svg";

export default function Header() {
  return (
    <header className="flex h-16 px-2 py-1 sm:h-32 sm:px-4 sm:py-2">
      <img src={logo} alt="WIP Logo" className="w-auto h-full" />
      <PresentationModeSwitch />
    </header>
  );
}
