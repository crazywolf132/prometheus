import './index.css';
export const mount = () => {
    return (
        <div>
            <h1 id="prometheus-developer-documentation-getting-started-guide">Prometheus Developer Documentation: Getting Started Guide</h1>
            <h2 id="introduction">Introduction</h2>
            <p>Prometheus revolutionizes micro-frontend architecture by offering a modular, secure, and efficient way to develop web applications. This guide covers the essentials for getting started with Prometheus, from setting up new nanoapps to deploying them.</p>
            <h2 id="setup-and-installation">Setup and Installation</h2>
            <h3 id="creating-a-new-nanoapp">Creating a New Nanoapp</h3>
            <ol>
                <li>
                    <p><strong>Create a New Nanoapp with Prometheus</strong></p>
                    <p>The <code>prometheus create</code> command streamlines the creation of a new nanoapp. It prompts you to choose a platform (React, Svelte, Vue, etc.) and generates the necessary files to get started.</p>
                    <pre class="prism-code language-bash not-prose"><code class="not-prose"><span class="token plain">prometheus create</span>
                    </code></pre>
                    <p>Follow the on-screen prompts to select your desired platform and configure your new nanoapp.</p>
                </li>
            </ol>
            <h3 id="for-existing-applications">For Existing Applications</h3>
            <ol>
                <li>
                    <p><strong>Install Prometheus CLI</strong></p>
                    <p>To integrate Prometheus into an existing project, start by installing the Prometheus CLI.</p>
                    <pre class="prism-code language-bash not-prose"><code class="not-prose"><span class="token function">npm</span><span class="token plain"> </span><span class="token function">install</span><span class="token plain"> -g @prometheus/cli</span>
                    </code></pre>
                </li>
                <li>
                    <p><strong>Convert Your Application into a Nanoapp</strong></p>
                    <p>Use the <code>prometheus build</code> command with the <code>-n</code> (name) option to prepare your app as a Prometheus nanoapp. The <code>--external</code> flag allows you to externalize core dependencies.</p>
                    <pre class="prism-code language-bash not-prose"><code class="not-prose"><span class="token plain">prometheus build -n yourAppBundleName --external</span>
                    </code></pre>
                </li>
            </ol>
            <h2 id="development-workflow">Development Workflow</h2>
            <h3 id="loading-a-nanoapp">Loading a Nanoapp</h3>
            <p>To integrate a nanoapp into your shell application, use the <code>LoadApp</code> component provided by <code>@prometheus/runtime</code>.</p>
            <ul>
                <li>
                    <p><strong>Basic Usage</strong></p>
                    <pre class="prism-code language-jsx not-prose">
                        <code class="not-prose">
                            <span class="token keyword module">import</span><span class="token plain"> </span><span class="token imports punctuation">{"{"}</span><span class="token imports"> </span><span class="token imports maybe-class-name">LoadApp</span><span class="token imports"> </span><span class="token imports punctuation">{"}"}</span><span class="token plain"> </span><span class="token keyword module">from</span><span class="token plain"> </span><span class="token string">'@prometheus/runtime'</span><span class="token punctuation">;</span><span class="token plain"></span>
                            <span class="token plain">
                            </span>
                            <span class="token plain"></span><span class="token tag punctuation">&lt;</span><span class="token tag class-name">LoadApp</span><span class="token tag"> </span><span class="token tag attr-name">appName</span><span class="token tag attr-value punctuation attr-equals">=</span><span class="token tag attr-value punctuation">"</span><span class="token tag attr-value">miniAppBundleName</span><span class="token tag attr-value punctuation">"</span><span class="token tag"> </span><span class="token tag punctuation">/</span>
                        </code></pre>
                </li>
                <li>
                    <p><strong>Injecting Dependencies</strong></p>
                    <p>If your nanoapp requires specific dependencies, inject them as follows:</p>
                    <pre class="prism-code language-jsx not-prose"><code class="not-prose"><span class="token tag punctuation">&lt;</span><span class="token tag class-name">LoadApp</span><span class="token tag"> </span><span class="token tag attr-name">appName</span><span class="token tag attr-value punctuation attr-equals">=</span><span class="token tag attr-value punctuation">"</span><span class="token tag attr-value">miniAppBundleName</span><span class="token tag attr-value punctuation">"</span><span class="token tag"> </span><span class="token tag attr-name">internal</span><span class="token tag script language-javascript script-punctuation punctuation">=</span><span class="token tag script language-javascript punctuation">{"{"}</span><span class="token tag script language-javascript punctuation">{"{"}</span><span class="token tag script language-javascript"> lodash </span><span class="token tag script language-javascript punctuation">{"}"}</span><span class="token tag script language-javascript punctuation">{"}"}</span><span class="token tag"> </span><span class="token tag punctuation">/&gt;</span>
                    </code></pre>
                </li>
            </ul>
            <h3 id="local-development-tools">Local Development Tools</h3>
            <ul>
                <li>
                    <p><strong>Starting a Local Server</strong></p>
                    <p>The <code>prometheus server</code> command launches a local server for nanoapps, facilitating local development and testing.</p>
                    <pre class="prism-code language-bash not-prose"><code class="not-prose"><span class="token plain">prometheus server</span>
                    </code></pre>
                </li>
                <li>
                    <p><strong>Running a Nanoapp Locally</strong></p>
                    <p>To develop a nanoapp in isolation, use the <code>prometheus dev</code> command. It automatically uses a test shell setup or the default <code>@prometheus/environment</code>.</p>
                    <pre class="prism-code language-bash not-prose"><code class="not-prose"><span class="token plain">prometheus dev</span>
                    </code></pre>
                </li>
            </ul>
            <h2 id="deploying-your-nanoapp">Deploying Your Nanoapp</h2>
            <ol>
                <li>
                    <p><strong>Build for Production</strong></p>
                    <p>Generate a production-ready bundle of your nanoapp.</p>
                    <pre class="prism-code language-bash not-prose"><code class="not-prose"><span class="token plain">prometheus build -n yourAppName</span>
                    </code></pre>
                </li>
                <li>
                    <p><strong>Release Your Nanoapp</strong></p>
                    <p>Deploy your nanoapp by publishing it as an npm package, following the standard npm publication process.</p>
                </li>
            </ol>
        </div>
    )
}