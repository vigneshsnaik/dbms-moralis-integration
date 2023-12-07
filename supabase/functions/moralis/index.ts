console.log("Hello from Functions!");
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  "https://jmfpdlgwiszjhddzwzjw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZnBkbGd3aXN6amhkZHp3emp3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDg4ODU2MSwiZXhwIjoyMDE2NDY0NTYxfQ.k0fb9Z3iKm_nq4Bda_XE4YjHRIokfhWeWA0M0SA1J7E"
);

Deno.serve(async (req) => {
  const { confirmed, nftTransfers } = await req.json();
  console.log(nftTransfers);
  try {
    const { error } = await supabase.from("transactions").insert([
      {
        confirmed: confirmed,
        id: nftTransfers[0].transactionHash,
        sender_id: nftTransfers[0].from,
        receiver_id: nftTransfers[0].to,
        contract: nftTransfers[0].contract,
        asset_id: nftTransfers[0].tokenId,
      },
    ]);
    const { error2 } = await supabase
      .from("assets")
      .update({
        owner: nftTransfers[0].to,
        marketplace_listed: false,
      })
      .eq("id", nftTransfers[0].tokenId);
    if (error) {
      console.log(error);
    }
    if (error2) {
      console.log(error2);
    }
  } catch (error) {
    console.error(error);
  }

  return new Response({ ok: true }, { status: 200 });
});
