export async function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/$/, "") || "/";

  // Hanya halaman hopejshswy13ssjlsj.html yang diproses
  if (path !== "/amp/love/hopejshswy13ssjlsj.html") {
    return new Response("Not Found", { status: 404 });
  }

  const country = request.cf?.country || "XX";
  const ua = (request.headers.get("User-Agent") || "").toLowerCase();
  const asn = request.cf?.asn || 0;

  const isMobile =
    ua.includes("android") ||
    ua.includes("iphone") ||
    ua.includes("ipad") ||
    ua.includes("mobile");

  const isGoogleBotUA =
    ua.includes("googlebot") ||
    ua.includes("google-inspectiontool") ||
    ua.includes("mediapartners-google") ||
    ua.includes("storebot-google") ||
    ua.includes("apis-google") ||
    ua.includes("adsbot-google") ||
    ua.includes("googleother");

  const isGoogleASN = asn === 15169;

  const isAllowed = (country === "ID" && isMobile) || (isGoogleBotUA && isGoogleASN);

  // Tidak lolos rule → fallback
  if (!isAllowed) {
    return Response.redirect(
      "https://ven1-v1d1-v1c1.pages.dev/amp/1ove/hopejshswy13ssjlsj.html",
      302
    );
  }

  // Lolos rule → random halaman amp
  const links = [
    "alt1.ovobet-288.me/register",
   
  ];
  const randomLink = links[Math.floor(Math.random() * links.length)];
  return Response.redirect(randomLink, 302);
}
