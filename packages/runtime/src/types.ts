export interface NanoAppConfig {}
export interface ShellConfig {
  // URL of the server to request everything from.
  url: string;
}

export interface NanoAppInfo {
  name: string;
  url: string;
  sha256: string;
  location: string;
  css: string;
}

export interface NanoAppManifest {
  nanoapps: NanoAppInfo[];
}

export type NanoAppLibraries = { [key: string]: any };

export type NanoAppFunction = {
  mount: (location?: HTMLElement | string, parentLocation?: HTMLElement) => any;
  unmount: () => void;
  styles: string;
  platform: "vue" | "react" | "svelte" | "angular";
};

export type Bundle = {
  sha: string;
  code: string;
};
