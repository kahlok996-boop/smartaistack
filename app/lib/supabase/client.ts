const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export type AuditLeadInsert = {
  email: string;
  website_url?: string | null;
  audit_type: string;
  source_page: string;
  notes?: string | null;
};

type SupabaseInsertResult = {
  ok: boolean;
  error: { message: string } | null;
};

export function isSupabaseConfigured() {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

async function insertRows(table: string, payload: AuditLeadInsert): Promise<SupabaseInsertResult> {
  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      ok: false,
      error: {
        message:
          "Supabase is not configured yet. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment.",
      },
    };
  }

  let response: Response;

  try {
    response = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
      method: "POST",
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(payload),
    });
  } catch {
    return {
      ok: false,
      error: {
        message:
          "Could not connect to the request service. Please check your connection and try again.",
      },
    };
  }

  if (response.ok) {
    return { ok: true, error: null };
  }

  let message = "Could not save your request. Please try again.";

  try {
    const errorBody = (await response.json()) as { message?: string; error?: string };
    message = errorBody.message || errorBody.error || message;
  } catch {
    message = response.statusText || message;
  }

  return { ok: false, error: { message } };
}

export const supabase = isSupabaseConfigured()
  ? {
      from(table: string) {
        return {
          insert(payload: AuditLeadInsert) {
            return insertRows(table, payload);
          },
        };
      },
    }
  : null;
