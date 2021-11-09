module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: [
    'stylelint-declaration-strict-value',
    'stylelint-no-unused-selectors',
    'stylelint-selector-tag-no-without-class',
    'stylelint-use-logical-spec',
    'stylelint-max-lines',
    '@signal-noise/stylelint-scales',
  ],
  rules: {
    'selector-class-pattern': ['^([a-z1-9]+-)*([a-z1-9]+)$', { severity: 'warning' }],
    'selector-type-case': ['lower', { severity: 'error' }],
    'property-case': ['lower', { severity: 'error' }],
    'declaration-empty-line-before': null,
    'unit-case': ['lower', { severity: 'error' }],
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
        severity: 'error',
      },
    ],

    'block-no-empty': [true, { severity: 'error' }],
    'comment-no-empty': [true, { severity: 'error' }],
    'no-empty-source': null,

    'color-no-invalid-hex': [true, { severity: 'error' }],
    'color-named': ['never', { severity: 'error' }],
    'color-hex-length': null,
    'color-function-notation': null,

    'at-rule-disallowed-list': [['extend', 'debug'], { severity: 'error' }],
    'at-rule-no-unknown': null,

    'no-invalid-position-at-import-rule': null,
    'scale-unlimited/declaration-strict-value': [
      ['/color$/', 'z-index'],
      {
        expandShorthand: true,
        ignoreValues: [
          'currentColor',
          'inherit',
          'transparent',
          '/^#([0-9a-f])\\1\\1([0-9a-f])?$/' /* Like #ccc */,
          '/^#([0-9a-f])\\1\\1\\1\\1\\1[0-9a-f]{0,2}$/' /* Like #ccc */,
          '/^#([0-9a-f])([0-9a-f])\\1\\2\\1\\2[0-9a-f]{0,2}$/' /* Like #c3c3c3 */,
        ],
        message:
          'Avoid using magical values like "${value}" for "${property}". Instead, use predefined variables like `var(--primary)`',
        disableFix: true,
        severity: 'warning',
      },
    ],
    'plugin/no-unused-selectors': [true, { severity: 'warning' }],
    'selector-max-compound-selectors': [4, { severity: 'warning' }],
    'no-duplicate-selectors': [true, { severity: 'error' }],
    'plugin/selector-tag-no-without-class': [
      ['div', 'span', '/h\\d/', 'section', 'p', 'ul', 'table', 'li', 'tbody', 'th', 'td', 'img'],
      { severity: 'error' },
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
        severity: 'error',
      },
    ],
    'pitcher/max-lines': [500, { severity: 'error' }],
    'scales/border-widths': [
      [{ scale: [1, 2], units: ['px'] }],
      { severity: 'warning', disableFix: true },
    ],
    'scales/font-families': [
      ['system-ui', 'monospace', 'dana', 'sans-serif'],
      { severity: 'error', disableFix: true },
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
