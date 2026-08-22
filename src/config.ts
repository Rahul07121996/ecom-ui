let appConfig: { apiUrl: string } | null = null;

export async function loadConfig() {
  const res = await fetch("/config.json", { cache: "no-store" });
  appConfig = await res.json();
  return appConfig;
}

export function getConfig() {
  if (!appConfig) throw new Error("Config not loaded yet");
  return appConfig;
}
