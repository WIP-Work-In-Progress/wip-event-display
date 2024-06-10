import { DynamicIconType } from "./icon.enum";

const DynamicIcon = ({ icon }: { icon: DynamicIconType }) => {
  switch (icon) {
    case DynamicIconType.JAVASCRIPT:
      return <div>JS icon</div>;
    case DynamicIconType.PYTHON:
      return <div>Python icon</div>;
    case DynamicIconType.JAVA:
      return <div>Java icon</div>;
    case DynamicIconType.GODOT:
      return <div>Godot icon</div>;
    default:
      break;
  }

  return <div>Wrong icon</div>;
};

export default DynamicIcon;
