import { supabase, type AuditLeadInsert } from "@/app/lib/supabase/client";

export type SubmitAuditLeadResult = {
  ok: boolean;
  message: string;
};

export async function submitAuditLead(
  lead: AuditLeadInsert,
): Promise<SubmitAuditLeadResult> {
  if (!lead.email.trim()) {
    return {
      ok: false,
      message: "Please enter your email before submitting.",
    };
  }

  if (!supabase) {
    return {
      ok: false,
      message:
        "Supabase is not configured yet. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment.",
    };
  }

  const { error } = await supabase.from("audit_leads").insert({
    email: lead.email.trim(),
    website_url: lead.website_url?.trim() || null,
    audit_type: lead.audit_type,
    source_page: lead.source_page,
    notes: lead.notes?.trim() || null,
  });

  if (error) {
    return {
      ok: false,
      message: error.message || "Could not save your request. Please try again.",
    };
  }

  return {
    ok: true,
    message: "Request saved. We will review your website direction next.",
  };
}
