# Changelog

## [4.0.0] - 2026-05-10
### Enterprise Branding & Performance Overhaul

- **Consolidated Branding Engine**: Replaced multiple conflicting Edge Functions with a single, high-performance Deno script (`branding-engine.ts`) to fix "Edge Function Invocation Failed" crashes.
- **Deep Precision Theming**: Implemented 36 official brand profiles across Shipping, Banking, and Government sectors.
- **Design Tokens v4.0**: Expanded CSS variable system to include header heights, official gradients, custom shadow levels, and brand-specific border radii.
- **Official Asset Deployment**: Completed mapping of 36 official high-resolution brand logos.
- **Surgical Code Fixes**: Resolved duplicate JSX `className` attributes and missing module exports that were blocking Netlify builds.
- **Responsive Architecture**: Universal scaling for Desktop, Tablet, and Mobile across all 36 entity designs.
- **Security Enhancements**: Standardized security badges and encryption indicators across all branded payment headers.
