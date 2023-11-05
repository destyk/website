<p align="center">
  <a href="https://destyk.ru/" target="blank"><img src="https://github.com/destyk/website/blob/stable/apps/client/public/logo192.png" width="120" alt="DestyK Logo" /></a>
</p>
<p align="center">A monorepo that combines all packages and apps for building a project.</p>
    <p align="center">
      <a href="https://t.me/destykarpov" target="_blank"><img src="https://img.shields.io/badge/Telegram-blue?style=flat-square&logo=Telegram" alt="Telegram" /></a>
      <a href="https://destyk.ru" target="_blank"><img src="https://img.shields.io/badge/Website-ED760E?style=flat-square&logo=About.me" alt="Website" /></a>
</p>

## Getting Started

#### Clone repository:

`$ git clone git@github.com:destyk/website.git`

#### Install dependencies:

`$ npm i`

## Available Scripts

In the root directory, you can run:

`$ npm run build`

Build all packages and applications.\
It builds correctly in production mode and optimizes for the best performance.

`$ npm run clean`

Cleans up compile files.\
Useful to run before building applications and packages.

`$ cross-env GITHUB_AUTH=TOKEN npm run changelog`

Forms changelog based on accepted PR.

Changelog is based on the selected branch. Before each use of this command, you need to choose the desired branch for the correct construction of changelog.

`$ npm run version:release`

Generates versions for packages and applications.\
<b>⚠️ Used before publication for production versions.</b>

`$ npm run version:staging`

Generates versions for packages and applications.\
<b>⚠️ Used before publication for dev versions.</b>

`$ npm run publish:release`

Builds applications and packages, versioning (`npm run version:release`) and sending new versions of packages to npm repositories and commits versions to the github repository.

`$ npm run publish:staging`

Builds applications and packages, versioning (`npm run version:staging`) and sending new versions of packages to npm repositories and commits versions to the github repository.

## Learn More

@destyk/client - <a href="https://github.com/destyk/website/edit/stable/apps/client/README.md">Read more</a>
