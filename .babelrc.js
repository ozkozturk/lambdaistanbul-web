module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { browsers: 'last 2 versions' } }],
      '@babel/preset-typescript',
      '@babel/preset-react',
    ],
    plugins: [
      [
        'emotion',
        {
          sourceMap: true,
          autoLabel: process.env.NODE_ENV !== 'production',
          labelFormat: '[local]',
        },
      ],
      [
        'import',
        {
          libraryName: 'antd',
          style: true,
        },
      ],
      'react-hot-loader/babel',
    ],
  };
