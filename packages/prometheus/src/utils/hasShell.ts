/**
 * Used to determine if the current project we are running in
 * has an available shell for us to use.
 * 
 * If it does, we will use that shell to run the nano-app.
 */
import { existsSync } from "fs"
import { join } from "path"

/**
 * Used to determine if the current project we are running in
 * has an available shell for us to use.
 * 
 * If it does, we will use that shell to run the nano-app.
 */
export const hasShell = (): boolean => {
    // We are going to look for the `shell/index.tsx` file.
    return existsSync(join(process.cwd(), "shell", "index.tsx"))
}