PROMETHEUS TODO

- Update the LoadApp to handle the hot-reload events
- Create a miniserver to handle hot-reload events for nano-apps in the shells.
  - This should live in the `dev server`. So then the actual server can communicate and tell it to reload the apps.
  - Or, i sync with the server and tell it the websocket details to the hot module reload server.
  - Use this as a reference: https://arc.net/l/quote/vaiyixyf


- Update the prometheus package from `@local/prometheus` to `@prometheus/cli`.
- Create basic diagrams of the architecture
- Create an overview readme for each package.
- Create a quick communication example
- Create a quick re-skin example using 2 shells
- Create full coverage unit tests for the CLI
- Create full coverage unit tests for the runtime.
- Add a router to the `landing` example, and have the full architecture readme on another page.
    - make this other page a nanoapp too.