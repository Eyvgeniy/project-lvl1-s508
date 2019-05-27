install:
	nmp install

start:
	npx babel-node src/games/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint