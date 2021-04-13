class Prompt {
    constructor(name,message,type,validate,choices,confirm){
     this.name = name;
     this.message = message;
     this.validate = validate;
     this.confirm = confirm;
     this.choices = choices;
     this.type = type;
    }
}
module.exports = Prompt;