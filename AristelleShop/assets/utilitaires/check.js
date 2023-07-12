const check_num = (num)=>{
    const expression = /^0[1-9]\d{7}$/
    return expression.test(num)
}

const check_password = (password)=>{
    const expression = /^(?=.*[a-zA-z])(?=.*[0-9]).{5,}$/

    return expression.test(password)
}