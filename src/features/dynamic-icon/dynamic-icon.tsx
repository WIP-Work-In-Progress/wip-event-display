import { DynamicIconType } from "./icon.enum";
import Javascript from "@/components/icons/js.tsx";
import Python from "@/components/icons/python.tsx";
import Godot from "@/components/icons/godot.tsx";
import Csharp from "@/components/icons/csharp.tsx";
import { FaJava } from "react-icons/fa";

const DynamicIcon = ({ icon }: { icon: DynamicIconType }) => {
  switch (icon) {
    case DynamicIconType.JAVASCRIPT:
      return <Javascript className="w-6" />;
    case DynamicIconType.PYTHON:
      return <Python className="w-6" />;
    case DynamicIconType.JAVA:
      return <FaJava className="w-6 h-6" />;
    case DynamicIconType.GODOT:
      return <Godot className="w-6" />;
    case DynamicIconType.CSHARP:
      return <Csharp className="w-6" />;
    default:
      break;
  }

  return <div>Wrong icon</div>;
};

export default DynamicIcon;
