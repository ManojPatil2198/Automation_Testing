exports.LoginPage =
    class LoginPage {

        constructor(page) {
            this.page = page
            this.loginlink = "#login2"
            this.usernameInput = '#loginusername'
            this.passwordInput = '#loginpassword'
            this.loginButton = "[onclick='logIn()']"
        }
        async gotoLoginPage() {
            await this.page.goto(`https://demoblaze.com/index.html`)

        }
        async loginUser(username, password) {
            await this.page.locator(this.loginlink).click()
            await this.page.locator(this.usernameInput).fill(username)
            await this.page.locator(this.passwordInput).fill(password)
            await this.page.locator(this.loginButton).click()

        }
    }