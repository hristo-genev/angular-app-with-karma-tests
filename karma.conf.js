// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-perfecto-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/my-angular-app'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    // browsers: ['Chrome'],
    browsers: ['Perfecto'],
    singleRun: false,
    restartOnFileChange: true,
    perfecto: {
      tunnelId: 'ab249d19-11c9-4ab3-b506-7fb92a02dbbe',
      //host: '192.168.1.47',
      host: 'localhost',
      perfectoConnect: '/Users/admin/Downloads/perfectoconnect',
      perfectoUrl: 'https://beta.perfectomobile.com/nexperience/perfectomobile/wd/hub',
      securityToken: '',
      testName: 'Hristo G Karma Test Runner',
      jobName: 'Karma_Test',
      jobNumber: '1',
      testPerSpec: false,
      compactReport: false,
      keepAlive: 0,
      keepAliveDuration: 0,
      capabilities: {
        platformName : 'Windows',
        platformVersion : '10',
        browserName : 'Chrome',
        browserVersion : 'latest',
        resolution : '1280x1024',
        location : 'US East'
      }
      // capabilities: {
      //   browserName : 'Chrome',
      //   firstMatch: [{
      //     platformName : 'Windows',
      //     browserVersion : 'latest',
      //     "perfecto:options": {
      //       securityToken: '',
      //       platformVersion : '10',
      //       resolution : '1280x1024',
      //       location : 'US East',
      //       }
      //   }]
      // }
    }
  });
};