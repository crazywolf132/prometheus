<template>
  <main class="center">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M9.661 2.237a.531.531 0 0 1 .678 0 11.947 11.947 0 0 0 7.078 2.749.5.5 0 0 1 .479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 0 1-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 0 1 .48-.425 11.947 11.947 0 0 0 7.077-2.75Zm4.196 5.954a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />
  </svg>

    </div>
    <h1 class="header">Advanced Security</h1>
    <h2 class="subheader">Built-in safeguards for robust protection.</h2>
  </main>
</template>

<style>

  .center {
    padding: 12px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .icon {
    background: white;
    border-radius: 9999px;
    padding: 8px;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    color: black;
  }

  svg {
    height: 36px;
    width: 36px;
  }

  .header {
    font-weight: 700;
    font-size: 16px;
    line-height: -0.05em;
    text-align: center;
    word-break: break-word;
    letter-spacing: -0.025em;
    margin-bottom: 8px;
    color: rgb(17, 24, 39);
  }

  .subheader {
    font-family: "Roboto Slab", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: rgb(75, 85, 99);
    text-align: center;
  }
</style>
