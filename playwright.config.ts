import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30000,  // 30 seconds timeout
  webServer: {
    command: 'npm run start',  // Command to start the web server
    port: 3000,
    timeout: 120 * 1000,  // 2 minutes to start the server
  },
  use: {
    browserName: 'chromium', // Default browser
    video: 'retain-on-failure', // Record video on failure
    screenshot: 'only-on-failure', // Capture screenshot on failure
    contextOptions: {   // Use multiple browser contexts
      ignoreDefaultArgs: ['--disable-extensions'],
    },
  },
  // Use parallel test execution
  projects: [
    { name: 'Chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
