import { test } from "@playwright/test";
import fs from "fs";
import path from "path";

// let data = fs.readFileSync(path.join(__dirname,"../test data/data.json"))
// let datafile = JSON.parse(data);

// test("json data",async({page})=>{
//     console.log(datafile);
//     for(let i of datafile){
//         console.log(i.greet);

//     }
    
// })

let data = fs.readFileSync(path.join(__dirname,"../test data/user.json"))
let datafile = JSON.parse(data);

test("for application ",async({page})=>{
    for(let i of datafile){
    await page.goto(i.url)
    await page.getByLabel('username').fill(i.username)
    await page.getByLabel('password').fill(i.password)
    await page.waitForTimeout(3000)  
    await page.locator('#submit').click()}
})