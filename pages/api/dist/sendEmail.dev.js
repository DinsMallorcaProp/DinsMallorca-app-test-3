"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// pages/api/sendEmail.js
function handler(req, res) {
  var _req$body, firstName, lastName, phone, email, message, transporter;

  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method === 'POST')) {
            _context.next = 15;
            break;
          }

          _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, phone = _req$body.phone, email = _req$body.email, message = _req$body.message;
          transporter = _nodemailer["default"].createTransport({
            service: 'Gmail',
            // Example: 'Gmail',
            auth: {
              user: 'info@dinsmallorca.com',
              pass: 'rqagmvltzlvmzype'
            }
          });
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(transporter.sendMail({
            from: "Consulta ".concat(email),
            to: 'info@dinsmallorca.com',
            subject: "Consulta de ".concat(firstName, " ").concat(lastName),
            text: "Nombre: ".concat(firstName, "s").concat(lastName, "\nTel\xE9fono: ").concat(phone, "\nCorreo: ").concat(email, "\nMensaje: ").concat(message)
          }));

        case 6:
          res.status(200).send('Email sent successfully');
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](3);
          console.error('Error sending email:', _context.t0);
          res.status(500).send('Failed to send email');

        case 13:
          _context.next = 16;
          break;

        case 15:
          res.status(405).send('Method not allowed');

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 9]]);
}