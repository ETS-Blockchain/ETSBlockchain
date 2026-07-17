import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
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
      // L'adresse 'from' doit provenir d'un domaine que tu as vérifié sur Resend
      from: "Site ÉTS Blockchain <onboarding@resend.dev>", 
      // C'est ici que tu recevras le message
      to: ["blockchain-ets@etsmtl.ca"], 
      subject: `Nouveau message de ${name}`,
      replyTo: email, // Permet de faire "Répondre" directement à l'étudiant/partenaire
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

    // Si Resend retourne une erreur (ex: domaine non vérifié, quota dépassé)
    if (error) {
      console.error("Erreur Resend :", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi du courriel." },
        { status: 500 }
      );
    }

    // Succès de l'envoi
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