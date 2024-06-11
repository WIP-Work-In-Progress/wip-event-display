import { usePresentationModeContext } from "@/features/presentation-mode/use-presentation-mode.hook";
import QRCodeDisplay from "../shared/qrcode";
import logo from "/wip-logo-dynamic-white-gradient.svg";

export default function Header() {
  const { presentationMode } = usePresentationModeContext();
  return (
    <header className="flex justify-between items-center sticky h-16 px-4 mb-4 py-2 border-b sm:h-24 sm:px-4 sm:py-2">
      <img src={logo} alt="WIP Logo" className="w-auto h-full" />
        {presentationMode === "PRESENTING" ? (
          <QRCodeDisplay url="https://wip-event-display.web.app/" />
        ) : (
          <div className="flex flex-wrap gap-x-2 gap-y-1 px-2 text-sm font-bold sm:gap-x-8 sm:px-4 sm:text-xl">
            <a href="/" className="hover:text-primary-200 active:text-secondary-300">Strona główna</a>
            <a href="/representation" className="hover:text-primary-200 active:text-secondary-300">O nas</a>
            <a href="/quest" className="hover:text-primary-200 active:text-secondary-300">Zadania</a>
          </div>
        )}
    </header>
  );
}
