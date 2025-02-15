/**Email Communication */
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

// initialize nodemailer
let transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user: "autocodegrader75@gmail.com",
            pass: "okuiugeaouthupzv"
        }
    }
);

// point to the template folder
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
};

// use a template file with nodemailer
transporter.use('compile', hbs(handlebarOptions))
// const send email

const sendEmail  = async (email,body) => {
    /**
     * sendEmailVerification : sends email to user with verification code
     * @param {object} user: object containing user name and email
     * @param {string} verificationCode: secret test to send
     * @return {object | null} if message is sent successfully
     */
  const mailOptions = {
    from: `${body.email}`, // sender address
    template: "email", // the name of the template file, i.e., email.handlebars
    to: email,
    subject: "Message from " + body.name,
    context: {
      email: body.email,
      phone:body.phone,
      name:body.name
    },
  };
  try {
    return await transporter.sendMail(mailOptions)
  } catch(err) {
    console.log(`${err} \n sending email ${user.name} ${user.email}`)
    return null
  }
}




export { sendEmail };

  