import PresentationModeSwitch from "@/features/presentation-mode/presentation-mode-switch.component";

export default function Footer() {
  return (
    <footer className="flex align-center justify-between h-16 px-2 mt-4 py-2 border-t sm:h-18 sm:px-4 sm:py-4 bottom-0 w-full">
      <PresentationModeSwitch />
      <p className="text-sm">© Created by Work In Progress 2024</p>
    </footer>
  );
}