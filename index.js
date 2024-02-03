module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  plugins: [
    'stylelint-declaration-strict-value',
    // 'stylelint-no-unused-selectors', //TODO: this package has no updates since Aug 2021 and is not compatible with new stylelint version, removed from package.json.
    'stylelint-use-logical-spec',
    'stylelint-max-lines',
    'stylelint-scales',
  ],
  rules: {
    'selector-class-pattern': ['^([a-z0-9]+-)*([a-z0-9]+)$', { severity: 'warning' }],
    'custom-property-pattern': ['^_?[A-z0-9-]+$', { severity: 'warning' }],
    'scss/dollar-variable-pattern': /^[-_]?[a-z0-9\-]+/,
    'selector-type-case': ['lower', { severity: 'error' }],
    'declaration-empty-line-before': null,
    // ignoreKeywords for value-keyword-case in material color codes
    'value-keyword-case': ['lower', { ignoreKeywords: ['/A[0-9]{3}/'], severity: 'error' }],
    'rule-empty-line-before': null,
    'scss/dollar-variable-empty-line-before': null,
    'custom-property-empty-line-before': null,
    'scss/double-slash-comment-empty-line-before': null,

    'block-no-empty': [true, { severity: 'error' }],
    'comment-no-empty': [true, { severity: 'error' }],
    'no-empty-source': null,

    'color-no-invalid-hex': [true, { severity: 'error' }],
    'color-named': ['never', { severity: 'error' }],
    'color-hex-length': null,
    'color-function-notation': 'modern',

    'at-rule-disallowed-list': [['extend', 'debug'], { severity: 'error' }],
    'at-rule-no-unknown': null,

    'no-invalid-position-at-import-rule': null,
    'scale-unlimited/declaration-strict-value': [
      ['/color$/'],
      {
        expandShorthand: true,
        ignoreValues: ['currentColor', 'inherit', 'transparent'],
        ignoreFunctions: false,
        message:
          'Avoid using magical values like "${value}" for "${property}". Instead, use predefined variables like `var(--primary)`',
        disableFix: true,
        severity: 'error',
      },
    ],
    // 'plugin/no-unused-selectors': [true, { severity: 'warning' }], //TODO: this package has no updates since Aug 2021 and is not compatible with new stylelint version, removed from package.json.
    'selector-max-compound-selectors': [4, { severity: 'warning' }],
    'no-duplicate-selectors': [true, { severity: 'error' }],
    'selector-max-type': [
      0,
      { ignore: ['compounded', 'next-sibling', 'child'], ignoreTypes: [/^mat-/, /^app-/, /^pgh-/] },
    ],
    'liberty/use-logical-spec': [
      true,
      {
        direction: 'rtl',
        except: [
          'top',
          'bottom',
          /^(padding|margin|border)-(top|bottom)/,
          /width$/,
          /height$/,
          // TODO: remove left and right when enough browsers support them. https://caniuse.com/?search=inset-inline
          'left',
          'right',
        ],
        severity: 'warning',
      },
    ],
    'pitcher/max-lines': [500, { severity: 'error' }],
    'scales/border-widths': [
      [{ scale: [1, 2], units: ['px'] }],
      { severity: 'warning', disableFix: true },
    ],
    'scales/font-sizes': [
      [{ scale: [0.75, 0.875, 1, 1.125, 1.25, 1.5, 2], units: ['rem'] }],
      { severity: 'error', disableFix: true },
    ],
    // 'scales/font-weights': ['normal', 'bold'], // doesn't support non-numeric values
    // 'scales/line-heights': [1, 1.5],
    // 'scales/z-indices': [-1,0, 1, 999],
    'scales/radii': [
      [
        { scale: [0, 4, 10, 25, 50], units: ['px'] },
        { scale: [50], units: ['%'] },
      ],
      { severity: 'warning', disableFix: true },
    ],
    'scales/space': [
      [
        {
          scale: [0.125, 0.25, 0.375, 0.5, 0.75, 1, 1.5, 2, 2.5, 3],
          units: ['rem'],
        },
      ],
      { severity: 'error', disableFix: true },
    ],
    'declaration-property-unit-allowed-list': [
      {
        'font-size': ['rem'],
        '/^(padding|margin)/': ['rem', 'vh', 'vw', '%'],
        '/^border-.*radius$/': ['px', '%'],
      },
      { severity: 'warning' },
    ],
  },
  reportNeedlessDisables: [true],
  reportDescriptionlessDisables: [true],
  defaultSeverity: 'warning',
};
