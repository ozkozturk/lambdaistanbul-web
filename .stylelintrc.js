module.exports = {
  processors: [
    [
      'stylelint-processor-styled-components',
      {
        strict: false,
      }
    ],
  ],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
  ],
};
