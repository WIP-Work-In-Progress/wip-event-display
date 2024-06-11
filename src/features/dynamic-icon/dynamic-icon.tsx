import {DynamicIconType} from "./icon.enum";
import Javascript from "@/components/icons/js.tsx";
import Python from "@/components/icons/python.tsx";
import Godot from "@/components/icons/godot.tsx";
import Csharp from "@/components/icons/csharp.tsx";
import {FaJava} from "react-icons/fa";

const DynamicIcon = ({ icon }: { icon: DynamicIconType }) => {
  switch (icon) {
    case DynamicIconType.JAVASCRIPT:
      return <Javascript />;
    case DynamicIconType.PYTHON:
      return <Python />
    case DynamicIconType.JAVA:
      return <FaJava />;
    case DynamicIconType.GODOT:
      return <Godot />;
    case DynamicIconType.CSHARP:
      return <Csharp />
    default:
      break;
  }

  return <div>Wrong icon</div>;
};

export default DynamicIcon;
