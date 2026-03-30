import Image from "next/image";

const SRC = "/trust/va-community-care-provider.png";

/** VA Community Care trust badge — asset: public/trust/va-community-care-provider.png */
export function VaCommunityCareBadge({
  variant = "default",
  className = "",
}: {
  variant?: "default" | "footer";
  className?: string;
}) {
  const size =
    variant === "footer"
      ? "max-h-16 sm:max-h-[4.5rem] max-w-full w-auto"
      : "max-h-[4.5rem] sm:max-h-[5.25rem] max-w-full w-auto md:max-w-lg";

  return (
    <div className={`flex justify-center ${className}`.trim()}>
      <Image
        src={SRC}
        alt="VA Authorized Community Care Provider. U.S. Department of Veterans Affairs."
        width={640}
        height={180}
        className={`h-auto object-contain object-center ${size}`}
        sizes="(max-width: 768px) 100vw, 420px"
      />
    </div>
  );
}
