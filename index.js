module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: [
    'stylelint-declaration-strict-value',
    'stylelint-no-unused-selectors',
    'stylelint-selector-tag-no-without-class',
    'stylelint-use-logical-spec',
    'stylelint-max-lines',
    '@signal-noise/stylelint-scales',
  ],
  rules: {
    'selector-class-pattern': '^([a-z1-9]+-)*([a-z1-9]+)$',
    'selector-type-case': 'lower',
    'property-case': 'lower',
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'comment-no-empty': true,
    'no-empty-source': null,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'color-named': 'never',
    'at-rule-disallowed-list': [['extend', 'debug']],
    'unit-case': 'lower',
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
      },
    ],
    'plugin/no-unused-selectors': [true],
    'selector-max-compound-selectors': 4,
    'no-duplicate-selectors': [true],
    'color-hex-length': null,
    'plugin/selector-tag-no-without-class': [
      ['div', 'span', '/h\\d/', 'section', 'p', 'ul', 'table', 'li', 'tbody', 'th', 'td'],
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
      },
    ],
    'pitcher/max-lines': 500,
    'scales/border-widths': [{ scale: [1, 2], units: ['px'] }],
    'scales/font-families': ['system-ui', 'monospace', 'dana', 'sans-serif'],
    'scales/font-sizes': [
      { scale: [0.75, 0.875, 1, 1.125, 1.25, 1.5, 2], units: ['rem'], disableFix: true },
      // { scale: [12, 14, 16, 18, 20, 24], units: ['px'], disableFix: true },
    ],
    // 'scales/font-weights': ['normal', 'bold'], // doesn't support non-numeric values
    // 'scales/line-heights': [1, 1.5],
    // 'scales/z-indices': [-1,0, 1, 999],
    'scales/radii': [
      { scale: [0, 4], units: ['px'], disableFix: true },
      { scale: [50, 100], units: ['%'], disableFix: true },
    ],
    'scales/space': [
      { scale: [0.125, 0.25, 0.5, 0.75, 1, 1.5, 2], units: ['rem'], disableFix: true },
    ],
    'declaration-property-unit-allowed-list': [
      {
        'font-size': ['rem'],
        '/^(padding|margin)/': ['rem', 'vh', 'vw', '%'],
        '/^border-.*radius$/': ['px', '%'],
      },
    ],
  },
  reportNeedlessDisables: [true],
  reportDescriptionlessDisables: [true],
  // defaultSeverity: 'warning',
};
