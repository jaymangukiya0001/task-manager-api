const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'jaymangukiya0001@gmail.com',
        subject:'Thanks for the joining',
        text:`Wlcome to the app,${name} let me know how you get along with the app`,
    })
}

const cancelEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'jaymangukiya0001@gmail.com',
        subject:'Good Bye',
        text:`hello ${name} can you please give us a feedback to get you back`
    })
}

module.exports={
    sendWelcomeEmail,
    cancelEmail
}