import { test,expect } from '@playwright/test'
import { loadPage,loginWithValidCredential,loginWithInvalidCredential } from '../helpers/login'
test.describe.parallel('Login page',()=>{
    test.beforeEach(async({page})=>{
        await loadPage(page)
    })

    test('Login successfully',async({page})=>{
        await loginWithValidCredential(page,'username','password')
    })

    test('Login unsuccessfully',async({page})=>{
        await loginWithInvalidCredential(page,'1212','32133')
    })

    test.afterEach(async({page})=>{
        await page.close()
    })
})