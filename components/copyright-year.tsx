"use client";

import { useSyncExternalStore } from "react";

// The year never changes during a session, so there is nothing to subscribe to.
const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();

/**
 * Renders the current year.
 *
 * `new Date()` can return a different value on the server than in the browser
 * (for example across a New Year boundary), which would cause a React hydration
 * mismatch if read directly in JSX. `useSyncExternalStore` is React's blessed
 * way to read a value that may differ between server and client: it uses the
 * server snapshot during SSR and reconciles to the client value on hydration
 * without a warning and without a post-paint flash.
 */
export function CopyrightYear() {
  const year = useSyncExternalStore(subscribe, getYear, getYear);
  return <>{year}</>;
}
