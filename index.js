module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb'],
  plugins: ['chai-friendly'],
  rules: {
    'no-unused-expressions': 'off',
    'chai-friendly/no-unused-expressions': 'error',
    'linebreak-style': ['error', 'unix'],
    'no-param-reassign': ['error', { props: false }],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'no-use-before-define': ['error', { functions: false }],
    'no-unused-vars': ['error', {'vars': 'all', 'args': 'none'}],
    'consistent-return': 'off',
    'arrow-body-style': ['off', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],
    'prefer-destructuring': ['off', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: true,
      },
    }, {
      enforceForRenamedProperties: false,
    }],

    'no-underscore-dangle': 'off',
    'array-element-newline': 'off',
    'function-paren-newline': ['warn', 'multiline'],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
    'no-inline-comments': 'off',
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true }
    }],
  },
};
