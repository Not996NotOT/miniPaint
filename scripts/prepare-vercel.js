const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

const pathsToPublish = [
	'index.html',
	'dist',
	'images',
	'examples',
	'service-worker.js',
	'manifest-disabled.json',
	'robots.txt',
	'sitemap.xml',
];

fs.rmSync(publicDir, {recursive: true, force: true});
fs.mkdirSync(publicDir, {recursive: true});

for (const relativePath of pathsToPublish) {
	const source = path.join(rootDir, relativePath);
	const destination = path.join(publicDir, relativePath);

	if (!fs.existsSync(source)) {
		continue;
	}

	fs.cpSync(source, destination, {recursive: true});
}

