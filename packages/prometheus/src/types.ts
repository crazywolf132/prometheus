export interface Command {
  name: string;
  description: string;
  options?: string[][];
  arguments?: string[][];
  action: (...args: any[]) => void | Promise<void>;
}

export interface UserConfig {
  /**
   * Used to define extra externals for this nanoapp.
   */
  externals: string[];
}