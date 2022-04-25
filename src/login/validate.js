export const validate = (data, type) => {

    const errors = {};
    if (!data.name.trim()) {
        errors.name = "اسم ضروری است"
    } else {
        delete errors.name
    }

    if (!data.password) {
        errors.password = "رمز ضروری است"
    } else if (data.password.length < 6) {
        errors.password = "رمز باید حداقل شامل 6 کاراکتر باشد"
    } else {
        delete errors.password
    }

    if (type === "signup") {

        if (!data.email) {
            errors.email = "ایمیل ضروری است"
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "آدرس ایمیل درست نیست"
        } else {
            delete errors.email
        }
        if (!data.confirmPassword) {
            errors.confirmPassword = "تایید رمز"
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "رمز و تایید آن یکی نیستند"
        } else {
            delete errors.confirmPassword
        }

        if (data.isAccepted) {
            delete errors.isAccepted
        } else {
            errors.isAccepted = "قوانین را قبول کنید"
        }
    
    }

    return errors;
}