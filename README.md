# Playwright Tests for Bejamas.io

This repository contains automated tests for the [Bejamas.io](https://bejamas.io/) website, using [Playwright](https://playwright.dev/). 
The tests ensure functionalities like CMS comparison and footer content validation work as expected.

---

## 🚀 Features

- End-to-end tests for Bejamas.io
- Includes validation for:
  - CMS comparison workflows
  - Footer content and links
- Supports headless and headed execution for debugging

---

## 📋 Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or later)
- **npm** or **yarn**

To verify the versions installed on your system, run:
```bash
node -v
npm -v
```

## 🛠️ Setup

1. Clone this repository:
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```
3. Install the dependencies:
```bash
npm install
```
4. (Optional) Verify the installation by running the example tests:
```bash
npm test
```

## 🧪 How to Run Tests

### Run All Tests
Run all tests in headless mode:
```bash
npm test
```
Run Tests in Headed Mode
To observe the browser during the test execution:
```bash
npm run test:headed
```
Debug Tests
To debug your tests interactively:
```bash
npm run test:debug
```

## ⚙️ Configuration
The test configuration is managed in playwright.config.ts. Key settings include:

- baseURL: Set to https://bejamas.io/, so tests can use relative paths.
- timeout: Maximum time for a single test (default: 30 seconds).
- retries: Number of retries for failed tests (default: 2).
- Screenshots & Videos:
Screenshots are captured only on test failures.
Videos are retained for failed tests.
  
You can customize these settings to match your environment.