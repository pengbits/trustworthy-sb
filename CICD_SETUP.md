# CI/CD Pipeline Setup for Private NPM Registry

This guide explains how to set up and use the CI/CD pipeline for publishing the design system to a private npm registry.

## Overview

The CI/CD pipeline automatically:
1. Builds the design system library
2. Runs tests (if configured)
3. Publishes to your private npm registry
4. Creates GitHub releases for tagged versions

## Prerequisites

1. **Private npm registry access** - You need access to your private npm registry
2. **Authentication token** - You need an authentication token for your registry
3. **GitHub repository** - This workflow uses GitHub Actions

## Setup Instructions

### 1. Configure Package Name and Registry

Update `package.json` with your registry information:

```json
{
  "name": "@your-org/design-system",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/your-org/your-repo.git"
  }
}
```

### 2. Choose Your Private Registry

#### Option A: GitHub Packages (Recommended for GitHub repos)

1. No additional configuration needed in the workflow
2. The workflow automatically uses `GITHUB_TOKEN`
3. Package will be published to: `@your-org/design-system`
4. Consumers install with:
   ```bash
   npm install @your-org/design-system
   ```

#### Option B: npm Enterprise or Other Private Registry

1. Add GitHub Secrets:
   - Go to: Settings → Secrets and variables → Actions
   - Add secret: `NPM_REGISTRY_URL` = `https://your-registry.company.com`
   - Add secret: `NPM_AUTH_TOKEN` = `your-auth-token`

2. Update package.json `publishConfig.registry` to your registry URL

3. Consumers will need to configure `.npmrc`:
   ```
   @your-org:registry=https://your-registry.company.com
   //your-registry.company.com/:_authToken=YOUR_TOKEN
   ```

#### Option C: Verdaccio or Self-Hosted

1. Set `NPM_REGISTRY_URL` secret to your Verdaccio URL
2. Set `NPM_AUTH_TOKEN` secret to your authentication token
3. Configure `.npmrc` for local development (see `.npmrc.example`)

### 3. Configure GitHub Secrets (for non-GitHub Packages)

If using a private registry other than GitHub Packages:

1. Go to your repository → Settings → Secrets and variables → Actions
2. Add these secrets:
   - `NPM_REGISTRY_URL`: Your registry URL (e.g., `https://registry.company.com`)
   - `NPM_AUTH_TOKEN`: Your authentication token

### 4. Local Development Setup

Create a `.npmrc` file in the project root:

```bash
# For GitHub Packages
@trustworthy:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN

# Or for other registries
@trustworthy:registry=https://your-registry.com
//your-registry.com/:_authToken=YOUR_TOKEN

# Always use public npm for non-scoped packages
registry=https://registry.npmjs.org/
```

**Note:** Never commit `.npmrc` with tokens! Add `.npmrc` to `.gitignore` if it contains secrets.

## How It Works

### Automatic Publishing

The workflow triggers on:
- **Push to main branch**: Publishes the current version
- **Git tags** (v*): Publishes a new version from the tag
- **Manual workflow dispatch**: Allows you to bump and publish versions

### Version Management

#### Automatic Version Bump (Workflow Dispatch)

1. Go to Actions tab → "Publish Design System to Private NPM Registry"
2. Click "Run workflow"
3. Select version bump type:
   - `patch`: 1.0.0 → 1.0.1
   - `minor`: 1.0.0 → 1.1.0
   - `major`: 1.0.0 → 2.0.0
4. The workflow will:
   - Bump the version
   - Build the library
   - Publish to registry
   - Commit and push the version update

#### Tag-Based Publishing

1. Update `package.json` version manually (or use `npm version`)
2. Create a git tag:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
3. The workflow will publish that version and create a GitHub release

### Manual Publishing

To publish manually:

```bash
# Build the library
npm run build:lib

# Configure .npmrc with your registry
# (see .npmrc.example)

# Publish
npm publish --access restricted
```

## Consuming the Package

### Installing in Other Projects

#### GitHub Packages

1. Create `.npmrc` in consuming project:
   ```
   @your-org:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
   ```
2. Install:
   ```bash
   npm install @your-org/design-system
   ```

#### Other Private Registries

1. Configure `.npmrc`:
   ```
   @your-org:registry=https://your-registry.com
   //your-registry.com/:_authToken=YOUR_TOKEN
   ```
2. Install:
   ```bash
   npm install @your-org/design-system
   ```

### Using the Components

```typescript
import { Button, ColorPalette, Typography, Hero } from '@your-org/design-system';

function App() {
  return (
    <div>
      <Button label="Click me" primary />
      <Typography />
    </div>
  );
}
```

## Troubleshooting

### Build Fails

- Check that all dependencies are in `package.json`
- Verify TypeScript compiles without errors
- Run `npm run build:lib` locally to test

### Publish Fails - Authentication

- Verify `NPM_AUTH_TOKEN` secret is set correctly
- Check that your token has publish permissions
- For GitHub Packages, ensure `GITHUB_TOKEN` has write permissions

### Publish Fails - Registry Not Found

- Verify `NPM_REGISTRY_URL` secret matches your registry URL
- Check that the registry URL is accessible
- Ensure the registry supports npm packages

### Version Already Exists

- Bump the version in `package.json`
- Or use a workflow dispatch to auto-bump
- Or create a new git tag

## Workflow Files

- `.github/workflows/publish-package.yml` - Main publishing workflow
- `.github/workflows/deploy-storybook.yml` - Storybook deployment (separate)

## Project Structure

```
├── src/
│   ├── index.ts              # Main export file
│   ├── components/           # Design system components
│   └── stories/              # Storybook stories (not published)
├── dist/                     # Built library (published)
├── vite.lib.config.ts        # Library build config
├── tsconfig.lib.json         # TypeScript config for library
└── package.json              # Package configuration
```

## Additional Notes

- The library build creates both ES modules and CommonJS formats
- TypeScript definitions are included automatically
- Only the `dist/` folder and `README.md` are published
- Storybook files and tests are excluded from the package

