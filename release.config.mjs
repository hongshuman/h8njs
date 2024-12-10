/**
 * @type {import('semantic-release').GlobalConfig}
 * /k8ndev/semantic-release/semantic-release/docs/usage/configuration.md
 * /k8ndev/docusaurus/website/docusaurus.config.ts
 */
export default {
  branches: [
    "+([0-9]).x",
    "main",
    "next",
    {
      name: "beta",
      prerelease: true
    }
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "angular",
        parserOpts: {
          "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
        },
        writerOpts: {
          "commitsSort": ["subject", "scope"]
        }
      }
    ],     
    [
      "@semantic-release/git",
      {
        assets: [ "package.json" ]
      }
    ],
    "@semantic-release/npm",
    "@semantic-release/github"
  ],
  "extends": [
    "semantic-release-monorepo"
  ]
};