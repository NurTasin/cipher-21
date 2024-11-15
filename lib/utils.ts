import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface IData {
  name?: string;
  version?: string;
  major?: string;
  type?: string;
  model?: string;
  vendor?: string;
}

interface IInput {
  browser: IData;
  device: IData;
  os: IData;
}

export function formatDeviceInfo(data: IInput): string {
  const browserName = data.browser.name || "Unknown Browser";
  const browserVersion = data.browser.version ? ` ${data.browser.version}` : "";
  
  const osName = data.os.name || "Unknown OS";
  const osVersion = data.os.version ? ` ${data.os.version}` : "";
  
  const deviceVendor = data.device.vendor;
  const deviceModel = data.device.model;
  
  // Check if device vendor and model are defined
  if (deviceVendor && deviceModel) {
    return `${browserName}${browserVersion} on ${deviceVendor} ${deviceModel}`;
  } else {
    return `${browserName}${browserVersion} on ${osName}${osVersion}`;
  }
}