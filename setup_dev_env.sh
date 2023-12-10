# Install nodejs
asdf plugin add nodejs
asdf plugin update nodejs
asdf install 

# Setup yarn
corepack enable
asdf reshim nodejs

# Install global packages 
npm install -g eas-cli
npm install -g eslint

# E2E testing tools
curl -Ls "https://get.maestro.mobile.dev" | bash

# Install yarn
yarn install 
yarn husky install