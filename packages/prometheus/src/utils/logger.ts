import { createLogger } from "vite";
import log from "volog";

/**
 * This is a custom logger that is used to log information to the console.
 * It is used to help identify where the logs are coming from.
 * 
 * @returns The custom logger.
 */
export const logger = (() => {
  
  const builderLog = () => {
    log.settings.scope = "BUILDER";
    return log;
  };
  
  const original = createLogger("info", {
    prefix: "[PROMETHEUS]",
  });
  
  var hasWarned = false;
  var seenErrors: any[] = [];

  const toExport = {
    hasErrorLogged: (err: Error | any) => {
      return seenErrors.some((e) => e === err);
    },
    clearScreen: original.clearScreen,
    hasWarned
  };
  ['info', 'warn', 'warnOnce', 'error'].forEach((level) => {
    // @ts-expect-error; love you typescript
    toExport[level] = (msg: string, ...extras: unknown[]) => {
      if (level === 'warn' && !hasWarned) {
        hasWarned = true;
      }
      if (level === 'warnOnce' && hasWarned) return;
      if (level === 'warnOnce') level = 'warn'
      if (level === 'error') {
        seenErrors.push(msg);
      }
      // If people know we use vite under the hood... it may cause them to try and create custom configs for their apps.
      // We do not want this, as we do not support them.
      if (msg.includes("vite")) return;
      // @ts-expect-error; love you typescript
      builderLog()[level](msg, ...extras);
    };
  })

  return toExport;
})();
