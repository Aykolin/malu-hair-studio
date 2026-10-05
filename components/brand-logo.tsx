import Image from "next/image";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <Image
      className={`brand-logo-image ${className}`}
      src="/malu-hair-studio-logo-completa.png"
      alt="Malu Hair Studio"
      width={2172}
      height={724}
      sizes="(max-width: 640px) 152px, 224px"
      priority
    />
  );
}
