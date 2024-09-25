module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@Assets': './assets',

          // Application
          '@Redux': ['./src/Application/Redux'],
          '@Services': ['./src/Application/Services'],
          '@UseCases': ['./src/Application/UseCases'],

          // Domain
          '@DTO': ['./src/Domain/DTO'],
          '@Entities': ['./src/Domain/Entities'],
          '@Enum': ['./src/Domain/Enum'],
          '@Models': ['./src/Domain/Models'],
          '@IRepository': ['./src/Domain/Repository'],

          // Infrastructure
          '@Api': ['./src/Infrastructure/Api'],
          '@Database': ['./src/Infrastructure/Database'],
          '@Language': ['./src/Infrastructure/Language'],
          '@Repository': ['./src/Infrastructure/Repository'],

          // Presentation
          '@Components': ['./src/Presentation/Components'],
          '@Hooks': ['./src/Presentation/Hooks'],
          '@Navigation': ['./src/Presentation/Navigation'],
          '@Screens': ['./src/Presentation/Screens'],
          '@Themes': ['./src/Presentation/Themes'],

          // Shared
          '@Shared': ['./src/Shared'],

          // Utils
          '@Formatters': ['./src/Utils/Formatters'],
          '@Helpers': ['./src/Utils/Helpers'],
          '@Validators': ['./src/Utils/Validators'],
        },
      },
    ],
  ],
};
