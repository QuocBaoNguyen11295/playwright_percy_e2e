import percySnapshot from "@percy/playwright"

const url = 'http://zero.webappsecurity.com/index.html'
export async function loadPage(page) {
    await page.goto(url)
}
export async function login(page,username,password) {
    await page.locator('#signin_button').click()
    await page.locator('#user_login').type(username)
    await page.locator('#user_password').type(password)
    await page.locator('#user_remember_me').check()
    await page.locator('input[type="submit"]').click()
}
export async function captureSnapshotAndCompare(page,name) {
    await percySnapshot(page,name)
}
export async function loginWithValidCredential(page,username,password) {
    await login(page,username,password)
    await page.goto(url)
    await captureSnapshotAndCompare(page,'Login successfully')
}

export async function loginWithInvalidCredential(page,username,password) {
    await login(page,username,password)
    await captureSnapshotAndCompare(page,'Login unsuccessfully')
}