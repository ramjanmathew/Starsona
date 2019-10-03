import DataDrivenTest from 'nightwatch-data-driven';
import {mother} from '../mother';
 
// . Create "test blank"
let submitLoginForm = new DataDrivenTest()
    .withArrange(function(cb) {
        this.browser.logout(cb)
    })
    .withAct(function(dt) {
        this.browser.page.login().section.loginForm.fillAndSubmit(dt.email, dt.pass)
    });
    
 var test = {
    before: function (browser) {
        browser.init();
        // . Initialize "test blank" with browser
        submitLoginForm.withBrowser(browser);
    },
    'Login is invalid email: show error': function (browser) {
        // . Use "test blank" with specific assertion and test cases
        submitLoginForm
            .withAssert((dt, nm) => browser.page.login().assertNoProgress(nm))
            .forCases({
                "1. ": {email: "a", pass: mother.Valid.PASS},
                "2. ": {email: "@b", pass: mother.Valid.PASS},
                "3. ": {email: "@b.", pass: mother.Valid.PASS},
                "4. ": {email: "@b.c", pass: mother.Valid.PASS},
                "5. ": {email: "a@b", pass: mother.Valid.PASS},
                "6. ": {email: "a@b.", pass: mother.Valid.PASS},
                "7. ": {email: "a@b.c", pass: mother.Valid.PASS},
                "8. ": {email: "й@ц.ук", pass: mother.Valid.PASS},
            });
    },
    'Login is valid email: show progress': function (browser) {
        // . Use "test blank" with specific assertion and test cases
        submitLoginForm
            .withAssert((dt, nm) => browser.page.login().assertProgressDisplayed(nm))
            .forCases({
                "1. ": {email: "a@b.cd"},
                "2. ": {email: "1#$%&'*+/=?^-_`{|}~.a@b.cd"},
                "3. ": {email: "a@1-b.cd"},
                "4. ": {email: "a@b.12"}
            });
    }
}
export = test;