/**
 * Placeholder service layer for appointment requests.
 *
 * TODO(backend): replace with a real API call once /rendez-vous, auth and
 * the database are implemented. Kept isolated here so CTA components never
 * talk to a transport (fetch/WhatsApp/route) directly.
 */

export interface AppointmentRequestPayload {
  destination?: string;
  visaCategory?: string;
  source: "hero" | "final-cta" | "header" | "other";
}

export interface AppointmentRequestResult {
  status: "redirected";
  destinationUrl: string;
}

export async function requestAppointment(
  payload: AppointmentRequestPayload,
): Promise<AppointmentRequestResult> {
  // No backend yet: route the visitor to the booking placeholder page.
  void payload;
  return { status: "redirected", destinationUrl: "/rendez-vous" };
}
