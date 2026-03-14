import {test} from "@playwright/test"
import example from "../PageObjectModel/example.page.ts"
import fs from "fs"
import path from "path"

let user=fs.readFileSync(path.join(__dirname,"../test data/user.json"));
let userfile=JSON.parse(user);

test("pom",async({page})=>{
    let examplepage=new example(page);
    for(let u of userfile){
        await page.goto(u.url);
        await examplepage.usernameTF.fill(u.username);
        await examplepage.passwordTf.fill(u.password);
        await examplepage.SubmitBtn.click();
        await page.waitForTimeout(1000);
    }
})