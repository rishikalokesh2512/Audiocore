import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Chart, Pullquote } from "./ui"
import { Message } from "theme-ui"
const shortcodes = { Chart, Pullquote, Message }
export default function Component({ children }) {
  return (
    <MDXProvider components={shortcodes}>{children}</MDXProvider>
  )
}