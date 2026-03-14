class example{
    usernameTF:string;
    passwordTf:string;
    SubmitBtn:any;

    constructor(page){
      this.usernameTF=page.locator("#username");
      this.passwordTf=page.locator("#password");
      this.SubmitBtn=page.locator("#submit")
    }

}
export default example