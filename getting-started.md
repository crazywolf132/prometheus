
# Prometheus Developer Documentation: Getting Started Guide

## Introduction

Prometheus revolutionizes micro-frontend architecture by offering a modular, secure, and efficient way to develop web applications. This guide covers the essentials for getting started with Prometheus, from setting up new nanoapps to deploying them.

## Setup and Installation

### Creating a New Nanoapp

1. **Create a New Nanoapp with Prometheus**

   The `prometheus create` command streamlines the creation of a new nanoapp. It prompts you to choose a platform (React, Svelte, Vue, etc.) and generates the necessary files to get started.

   ```bash
   prometheus create
   ```

   Follow the on-screen prompts to select your desired platform and configure your new nanoapp.

### For Existing Applications

1. **Install Prometheus CLI**

   To integrate Prometheus into an existing project, start by installing the Prometheus CLI.

   ```bash
   npm install -g @prometheus/cli
   ```

2. **Convert Your Application into a Nanoapp**

   Use the `prometheus build` command with the `-n` (name) option to prepare your app as a Prometheus nanoapp. The `--external` flag allows you to externalize core dependencies.

   ```bash
   prometheus build -n yourAppBundleName --external
   ```

## Development Workflow

### Loading a Nanoapp

To integrate a nanoapp into your shell application, use the `LoadApp` component provided by `@prometheus/runtime`.

- **Basic Usage**

  ```jsx
  import { LoadApp } from '@prometheus/runtime';

  <LoadApp appName="miniAppBundleName" />
  ```

- **Injecting Dependencies**

  If your nanoapp requires specific dependencies, inject them as follows:

  ```jsx
  <LoadApp appName="miniAppBundleName" internal={{ lodash }} />
  ```

### Local Development Tools

- **Starting a Local Server**

  The `prometheus server` command launches a local server for nanoapps, facilitating local development and testing.

  ```bash
  prometheus server
  ```

- **Running a Nanoapp Locally**

  To develop a nanoapp in isolation, use the `prometheus dev` command. It automatically uses a test shell setup or the default `@prometheus/environment`.

  ```bash
  prometheus dev
  ```

## Deploying Your Nanoapp

1. **Build for Production**

   Generate a production-ready bundle of your nanoapp.

   ```bash
   prometheus build -n yourAppName
   ```

2. **Release Your Nanoapp**

   Deploy your nanoapp by publishing it as an npm package, following the standard npm publication process.
