import * as dotenv from "dotenv";
dotenv.config(); // lee .env
dotenv.config({ path: ".env.local" }); // y .env.local

import { Resend } from "resend";

export default async function handler(req: any, res: any) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res
      .status(405)
      .end(JSON.stringify({ ok: false, error: "Method Not Allowed" }));
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM || "onboarding@resend.dev"; // permite probar sin verificar dominio

  if (!apiKey)
    return res
      .status(500)
      .end(JSON.stringify({ ok: false, error: "Falta RESEND_API_KEY" }));
  if (!to)
    return res
      .status(500)
      .end(JSON.stringify({ ok: false, error: "Falta CONTACT_TO" }));

  const resend = new Resend(apiKey);

  try {
    const raw = req.body ?? {};
    const body = typeof raw === "string" ? JSON.parse(raw) : raw;
    const { name, company, email, phone, message, companyWebsite } = body;

    if (companyWebsite)
      return res.status(200).end(JSON.stringify({ ok: true }));
    if (!name || !email || !message) {
      return res
        .status(400)
        .end(
          JSON.stringify({ ok: false, error: "Faltan campos obligatorios." })
        );
    }

    const subject = `Nuevo mensaje de contacto: ${name}`;
    const text = [
      `Nombre: ${name}`,
      `Empresa: ${company || "-"}`,
      `Email: ${email}`,
      `Teléfono: ${phone || "-"}`,
      "",
      "Mensaje:",
      message,
    ].join("\n");
    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;font-size:14px;line-height:1.6;color:#111">
        <h2 style="margin:0 0 12px">Nuevo mensaje de contacto</h2>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Empresa:</b> ${company || "-"}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Teléfono:</b> ${phone || "-"}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
        <p style="white-space:pre-wrap">${message}</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      html,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).end(
        JSON.stringify({
          ok: false,
          error: (error as any)?.message || "Resend error",
        })
      );
    }

    return res.status(200).end(JSON.stringify({ ok: true, id: data?.id }));
  } catch (e: any) {
    console.error("CONTACT error:", e);
    return res.status(500).end(
      JSON.stringify({
        ok: false,
        error: e?.message || "No se pudo enviar el mensaje.",
      })
    );
  }
}
