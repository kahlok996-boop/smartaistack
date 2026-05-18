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
  error: { message: string } | null;
};

export function isSupabaseConfigured() {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

async function insertRows(table: string, payload: AuditLeadInsert): Promise<SupabaseInsertResult> {
  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      error: {
        message:
          "Supabase is not configured yet. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment.",
      },
    };
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return { error: null };
  }

  let message = "Could not save your request. Please try again.";

  try {
    const errorBody = (await response.json()) as { message?: string; error?: string };
    message = errorBody.message || errorBody.error || message;
  } catch {
    message = response.statusText || message;
  }

  return { error: { message } };
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
