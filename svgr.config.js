const path = require('path');

module.exports = {
  index: true,
  typescript: true,
  jsxRuntime: 'automatic',
  removeViewBox: false,
  icon: true,
  dimensions: true,
  titleProp: false,
  descProp: false,
  ignoreExisting: true,
  filenameCase: 'pascal',
  svgProps: {
    width: '{props.width || 24}',
    height: '{props.height || 24}',
  },
  indexTemplate: (files) => {
    const exportEntries = files.map(({ path: filePath, originalPath: originalFilePath }) => {
      const basename = path.basename(filePath, path.extname(filePath));
      if (/solid/g.test(originalFilePath)) {
        return `export { default as Solid${basename} } from './${basename}'`;
      }
      if (/outline/g.test(originalFilePath)) {
        return `export { default as Outline${basename} } from './${basename}'`;
      }

      if (/hero/g.test(originalFilePath)) {
        return `export { default as Hero${basename} } from './${basename}'`;
      }

      if (/error/g.test(originalFilePath)) {
        return `export { default as Error${basename} } from './${basename}'`;
      }

      if (/vector/g.test(originalFilePath)) {
        return `export { default as Vector${basename} } from './${basename}'`;
      }

      return `export { default as ${basename} } from './${basename}'`;
    });
    return exportEntries.join('\n');
  },
};
