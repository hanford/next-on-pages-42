import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Hello</title>
      </head>
      <body>
        <ol>
          <li>
            <Link href="/my/nested/app/product/123">Visit Product 123</Link>
          </li>
          <li>
            <Link href="/my/nested/app/product/456">Visit Product 456</Link>
          </li>
          <li>
            <Link href="/my/nested/app/product/789">Visit Product 789</Link>
          </li>
          <li>
            <Link href="/my/nested/app/help">Visit Help Page</Link>
          </li>
          <li>
            <Link href="/my/nested/app/">Visit Root Page</Link>
          </li>
        </ol>

        {children}
      </body>
    </html>
  );
}
