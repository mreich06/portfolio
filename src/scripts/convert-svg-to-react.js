#!/usr/bin/env node

/**
 * Usage:
 *   npm run convert -- input-file.svg output-file.tsx IconName
 */

import fs from 'fs';
import path from 'path';

// get 2 args from command line
const args = process.argv.slice(2);

// handle missing args
const [inputFilename, outputFilename, rawComponentName] = args;
if (!inputFilename) {
	console.error(
		'Usage: npm run convert -- <inputFilename> <outputFilename> [ComponentName]',
	);
	process.exit(1);
}

// if name not provided
const componentName = rawComponentName || 'SvgIcon';

const inputPath = path.join('src', 'assets', 'svgs', inputFilename);
const outputPath = path.join(
	'src',
	'assets',
	'svgComponents',
	outputFilename || `${componentName}.tsx`,
);

// Read the SVG file
let svg = fs.readFileSync(inputPath, 'utf8');
svg = svg.replace(/fill="[^"]*"/g, '');
svg = svg.replace(/(width|height)="[^"]*"/g, '');
const hasViewBox = /viewBox="[^"]*"/.test(svg);
if (!hasViewBox) {
	svg = svg.replace(/<svg([^>]*)>/, '<svg viewBox="0 0 24 24">');
}

const component = `
type ${componentName}Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

const ${componentName} = ({
  size = 24,
  width,
  height,
  color = 'white',
  ...restProps
}: ${componentName}Props): JSX.Element => {
  const finalWidth = width ?? size;
  const finalHeight = height ?? size;

  return (
    ${svg.replace(
			/<svg([^>]*)>/,
			'<svg viewBox="0 0 24 24" width={finalWidth} height={finalHeight} fill={color} {...restProps} >',
		)}
  );
};

export default ${componentName};
`;

fs.writeFileSync(outputPath, component.trim() + '\n');
