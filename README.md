# Prometheus Micro-Frontend Framework

## Introduction

Prometheus is a cutting-edge micro-frontend framework designed to simplify the development and deployment of web applications. By breaking down complex applications into manageable nanoapps, Prometheus fosters flexibility, security, and performance optimization across the development lifecycle.

## Features

- **Framework Agnosticism:** Works seamlessly with any front-end technology (React, Vue, Svelte, etc.).
- **Enhanced Security:** Utilizes JavaScript `Function` for dynamic code execution, avoiding the security risks associated with `eval`.
- **User Experience Optimization:** Leverages Shadow DOM for style encapsulation, ensuring consistent and isolated styling across nanoapps.
- **Simplified Integration:** Streamlines the integration of micro-frontends, reducing the overhead of module management and dependency injection.

## Getting Started

### Prerequisites

- Node.js (version X or above)
- npm or Yarn

### Installation

To get started with Prometheus, install the CLI globally:

```bash
npm install -g @prometheus/cli
```

### Creating a New Nanoapp
Create a new nanoapp by running:

```bash
prometheus create --name <name> --library <react|vue|svelte>
```

### Converting an Existing Application
Convert an existing application into a Prometheus nanoapp:

> Note: The `--external` flag allows you to externalize core dependencies.

> Note: We only support `react`, `vue`, and `svelte` for now.

```bash
prometheus build -n yourAppBundleName --external
```