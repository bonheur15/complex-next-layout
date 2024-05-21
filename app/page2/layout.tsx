import Link from "next/link";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <Link href={"/page2/sub"}>
          <button> Sub</button>
        </Link>
      </div>
      {children}
    </>
  );
}
