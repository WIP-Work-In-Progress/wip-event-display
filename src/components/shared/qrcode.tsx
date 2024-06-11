import { PresentationMode } from "@/features/presentation-mode/presentation-mode.enum";
import { usePresentationModeContext } from "@/features/presentation-mode/use-presentation-mode.hook";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

const QRCodeDisplay = ({
  url,
  className,
  overrideSwitch = false,
}: {
  url: string;
  overrideSwitch?: boolean;
  className?: string;
}) => {
  const { presentationMode } = usePresentationModeContext();
  const [qrCode, setQRCode] = useState<string | null>(null);
  useEffect(() => {
    QRCode.toDataURL(url, (err, dataUrl) => {
      if (err) {
        console.error(err);
        return;
      }
      setQRCode(dataUrl);
    });
  }, [url]);
  return presentationMode === PresentationMode.PRESENTING || overrideSwitch ? (
    <div className={`w-12 ${className}`}>
      {qrCode && (
        <img src={qrCode} alt={`QR code for ${url}`} className="rounded" />
      )}
    </div>
  ) : (
    <div>
      <a href={url}>{url}</a>
    </div>
  );
};

export default QRCodeDisplay;
