exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        platformVersion: '11',
        deviceName: 'Pixel_3',
        app: './path/to/your/app.apk',
        automationName: 'UiAutomator2',
    }, {
        platformName: 'iOS',
        platformVersion: '14',
        deviceName: 'iPhone 11',
        app: './path/to/your/app.app',
        automationName: 'XCUITest',
    }],
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec', ['allure', { outputDir: './allure-results' }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
};


capabilities: [{
    platformName: 'Android',
    deviceName: 'Google Pixel 3',
    os_version: '9.0',
    real_device: true,
    browserstack.user: 'YOUR_USER',
    browserstack.key: 'YOUR_KEY',
    app: 'bs://<hashed-id>',
    automationName: 'UiAutomator2'
}]
