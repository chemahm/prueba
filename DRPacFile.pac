function FindProxyForURL(url, host) {
/* Return DIRECT to Allow access */
if ((localHostOrDomainIs(host, "google.com")) ||
(localHostOrDomainIs(host, "zscaler.com")) ||
(localHostOrDomainIs(host, "as.com")))
return "DIRECT";
/* Default Block Statement to block anything not allowed above */
return "BLOCK";
}
