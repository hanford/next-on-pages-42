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
            <Link href="/my/nested/product/123">Visit Product 123</Link>
          </li>
          <li>
            <Link href="/my/nested/product/456">Visit Product 456</Link>
          </li>
          <li>
            <Link href="/my/nested/product/789">Visit Product 789</Link>
          </li>
          <li>
            <Link href="/my/nested/help">Visit Help Page</Link>
          </li>
          <li>
            <Link href="/my/nested">Visit Root Page</Link>
          </li>
        </ol>

        {children}
      </body>
    </html>
  );
}
