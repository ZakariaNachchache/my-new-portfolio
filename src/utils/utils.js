import clsx from "clsx";

/**
 * Utility to combine class names conditionally
 * @param  {...any} classes - The class names to merge
 * @returns {string} - A single combined class string
 */
export function cn(...classes) {
  return clsx(classes);
}
