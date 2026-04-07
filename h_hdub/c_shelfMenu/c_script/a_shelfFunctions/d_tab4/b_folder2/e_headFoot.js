const header1 = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="description" content="{{description}}">
<title>{{title}}</title>
`;
const header2 = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="robots" content="index, follow">
<meta name="handheldfriendly" content="true">
<meta name="mobile-web-app-capable" content="yes">
<meta name="description"         content="{{description}}">
<meta property="og:description"  content="{{description}}">
<meta name="geo.position"  content="43.658497;-79.347015">
<meta name="geo.region"    content="CA-ON">
<meta name="geo.placename" content="Toronto">
                             <title>{{title}}</title>
<meta property="og:title"  content="{{title}}">
<meta property="og:type"   content="website">
`;
const header3 = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="robots" content="index, follow">
<meta name="handheldfriendly" content="true">
<meta name="mobile-web-app-capable" content="yes">
<meta name="description"         content="{{description}}">
<meta property="og:description"  content="{{description}}">
<meta name="geo.position"  content="43.658497;-79.347015">
<meta name="geo.region"    content="CA-ON">
<meta name="geo.placename" content="Toronto">
                             <title>{{title}}</title>
<meta property="og:title"  content="{{title}}">
<meta property="og:type"   content="website">

<meta property="og:image"  content="<<insert URL>>">
<meta property="og:url"    content="<<insert URL>>">
<link rel="canonical"         href="<<insert URL>>">
<link rel="stylesheet"        href="<<insert URL>>"/>

<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" >
`;
const header4 = `
<!DOCTYPE html>
<html lang="{{lang}}">
<head>
<meta  charset="UTF-8">
<meta     name="publication-date" content="{{date}}">
<meta     name="author" content="***your name">
<meta     name="robots" content="index, follow">
<link      rel="sitemap" type="application/xml" title="sitemap" href="***URL/sitemap/sitemap.xml">
<meta     name="handheldfriendly" content="true">
<meta     name="mobile-web-app-capable" content="yes">
<meta     name="description"     content="{{description}}">
<meta property="og:description"  content="{{description}}">
<meta     name="geo.position"  content="43.658497;-79.347015">
<meta     name="geo.region"    content="CA-ON">
<meta     name="geo.placename" content="Toronto">
                             <title>{{title}}</title>
<meta property="og:title"  content="{{title}}">
<meta property="og:type"   content="website">
<meta property="og:image"  content="***URL/images/{{title}}.png">
<meta property="og:url"    content="***URL/articles/{{title}}.html">
<link      rel="canonical"    href="***URL/articles/{{title}}.html">

<script type="application/ld+json">
{
"@context": "https://schema.org",
"publisher": {
"@type": "NewsMediaOrganization",
"name": "***enter newspaper name",
"correctionsPolicy"       :"***URL/news-media-organization/corrections-policy.html",
"diversityPolicy"         :"***URL/news-media-organization/diversity-policy.html",
"ethicsPolicy"            :"***URL/news-media-organization/ethics-policy.html",
"areaServed"              :"Toronto, Ontario, Canada",
"actionableFeedbackPolicy":"***URL/news-media-organization/actionable-feedback-policy.html",
"diversityStaffingReport" :"***URL/news-media-organization/diversity-staffing-report.html",
"ownershipFundingInfo"    :"***URL/news-media-organization/ownership-funding-policy.html",
"unnamedSourcesPolicy"    :"***URL/news-media-organization/unnamed-sources-policy.html",
"email":"***maybe enter your email",
"slogan":"***enter your slogan",
"telephone":"***905-555-5555",
"seeks":"***enter your goal",
"logo": {
"@type": "ImageObject",
"url": "***URL/images/logo.png"
}
},
"author": {
"@type": "NewsMediaOrganization",
"name": "***enter newspaper name"
},
"url": "URL"
}
</` + `script>

<script type="application/ld+json">
{
"@context":"https://schema.org",
"@type":"Place",
"name":"***enter newspaper name",
"address":{
"@type":"PostalAddress",
"addressLocality":"Toronto",
"addressRegion":"ON",
"addressCountry":"CA"
},
"geo":{
"@type":"GeoCoordinates",
"latitude":43.658497,
"longitude": -79.347015
}
}
</` + `script>

<script type="application/ld+json">
{
"@context":"https://schema.org",
"@type":"Article",
"headline":"{{title}}",
"description":"{{description}}",
"image":"***URL/images/{{title}}.png",
"datePublished":"{{dateU}}",
"dateModified":"{{dateU}}",
"inLanguage":"{{lang}}",
"mainEntityOfPage":"***URL",
"author": {
"@type": "Person",
"name":"***your name",
"familyName":"***your last name",
"givenName":"***you first name",
"email":"***enter your email",
"honorificPrefix":"***your position",
"gender":"***your gender",
"nationality":"Canadian",
"jobTitle":"",
"callSign":""
},
"publisher": {
"@type":"NewsMediaOrganization",
"name":"***enter newspaper name",
"logo": {
"@type":"ImageObject",
"url":"***URL/images/logo.png"
}
}
}
</` + `script>
`;



const footer1 = `
</body>
</html>
`;
const footer2 = `
<footer>
<p><small>
&copy; Copyright Your Website Name
</small</p>
</footer>
</body>
</html>
`;
const footer3 = `
<script src="enter script URL"></` + `script>
</body>
</html>
`;
const footer4 = `
<footer>
<p><small>
&copy; Copyright Your Website Name
</small</p>
</footer>
</body>
</html>
`;
























let fileHeader = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="description" content="{{description}}">
<title>{{title}}</title>
`;

let fileFooter = `
</body>
</html>
`;

if (localStorage.getItem('fileHeader')) {
fileHeader = localStorage.getItem('fileHeader');
}

if (localStorage.getItem('fileFooter')) {
fileFooter = localStorage.getItem('fileFooter');
}
