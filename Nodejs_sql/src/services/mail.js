const nodemailer = require("nodemailer");
const { OAuth2Client } = require("google-auth-library");


const GOOGLE_MAILER_CLIENT_ID = process.env.GOOGLE_MAILER_CLIENT_ID;
const GOOGLE_MAILER_CLIENT_SECRET = process.env.GOOGLE_MAILER_CLIENT_SECRET;
const GOOGLE_MAILER_REFRESH_TOKEN = process.env.GOOGLE_MAILER_REFRESH_TOKEN;
const ADMIN_EMAIL_ADDRESS = process.env.ADMIN_EMAIL_ADDRESS;

const sendMail = async (data) => {
  const myOAuth2Client = new OAuth2Client(
    GOOGLE_MAILER_CLIENT_ID,
    GOOGLE_MAILER_CLIENT_SECRET
  );

  myOAuth2Client.setCredentials({
    refresh_token: GOOGLE_MAILER_REFRESH_TOKEN,
  });

  //
  try {
    const myAccessTokenObject = await myOAuth2Client.getAccessToken();

    const myAccessToken = myAccessTokenObject?.token;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: ADMIN_EMAIL_ADDRESS,
        clientId: GOOGLE_MAILER_CLIENT_ID,
        clientSecret: GOOGLE_MAILER_CLIENT_SECRET,
        refresh_token: GOOGLE_MAILER_REFRESH_TOKEN,
        accessToken: myAccessToken,
      },
    });

    await transporter.sendMail({
      from: ADMIN_EMAIL_ADDRESS,
      to: ADMIN_EMAIL_ADDRESS,
      subject: `Đơn hàng mã ${data.matour}`,
      text: `
        Mã tour : ${data.matour} 
        Tên tour: ${data.tentour}
        Giá tour: ${data.giatour}
        Họ và tên người đặt: ${data.hovaten}
        Sđt người đặt: ${data.sdt}
        Email người đặt: ${data.email}
        Ghi chú: ${data.message}`,
    });

    console.log('sent mail');
  } catch (error) {
    console.log(error)
  }
};

module.exports = sendMail;
