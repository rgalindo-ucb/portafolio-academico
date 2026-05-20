import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatProjectDate(date: string) {
  return new Intl.DateTimeFormat("es-BO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
