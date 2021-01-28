module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'bug',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'version',
        'build',
        'ci',
        'perf',
        'revert',
      ],
    ],
  },
}
