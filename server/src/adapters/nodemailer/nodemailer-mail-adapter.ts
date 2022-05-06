import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

//transport envio de email
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "25d1d3557a893c",
    pass: "ab827744930c99",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Mateus Freire Da Silva <theusskt2018@gmail.com>",
      subject,
      html: body,
    });
  }
}
