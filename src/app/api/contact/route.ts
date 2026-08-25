import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation de base
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    // Appel à l'API Resend
    const { data, error } = await resend.emails.send({
      from: "Site ÉTS Blockchain <onboarding@resend.dev>",
      to: ["blockchain-ets@etsmtl.ca"],
      subject: `Nouveau message de ${name}`,
      replyTo: email,
      html: `
        <h2>Nouveau message</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Courriel :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <div style="background: #f4f4f4; padding: 12px; border-radius: 8px;">
          <p>${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur Resend :", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi du courriel." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur serveur :", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue." },
      { status: 500 }
    );
  }
}

