import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto | Zulary",
};

export default function ContactoPage() {
  return <ContactoClient />;
}
