import type { MetaFunction, LinksFunction  } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "../app/tailwind.css"
import Navigation from "./components/Navigation";

export const meta: MetaFunction = () => [{
  charset: "utf-8",
  title: "Sydney Burrell Portfolio",
  viewport: "width=device-width,initial-scale=1",
}];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </head>
    
      <body>
   
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

      </body>
    </html>
  );
}
