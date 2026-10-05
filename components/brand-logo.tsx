import Image from "next/image";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <Image
      className={`brand-logo-image ${className}`}
      src="/malu-hair-studio-logo.png"
      alt="Malu Hair Studio"
      width={1253}
      height={419}
      sizes="(max-width: 640px) 124px, 172px"
      priority
    />
  );
}
