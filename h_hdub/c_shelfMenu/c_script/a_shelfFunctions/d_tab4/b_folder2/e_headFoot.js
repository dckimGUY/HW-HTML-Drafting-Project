const header1 = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="robots" content="index, follow">
<meta name="handheldfriendly" content="true">
<meta name="mobile-web-app-capable" content="yes">
<meta name="description" content="{{description}}">

<!-- Universal Open Graph Package -->
<meta property="og:title" content="{{title}}">
<meta property="og:type" content="website">
<meta property="og:description" content="{{description}}">
<meta property="og:image" content="assets/og-{{title}}.png">

<!-- Regional Validation (Toronto, ON, CA) -->
<meta name="geo.position" content="43.658497;-79.347015">
<meta name="geo.region" content="CA-ON">
<meta name="geo.placename" content="Toronto">

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



const footer1 = `<!-- Native Middle-Mouse Grab & Scroll (1:1 Panning) Engine -->
<script>
(function() {
    let isDragging = false;
    let startX, startY, scrollLeft, scrollTop;

    // Listen globally for mouse down triggers
    window.addEventListener('mousedown', (e) => {
        // 1 represents the Middle Mouse Button (Scroll Wheel click)
        if (e.button !== 1) return; 

        // Prevent the browser's default autoscroll icon from appearing
        e.preventDefault(); 
        
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        
        // Track the current scrolling coordinates of the viewport window
        scrollLeft = window.scrollX || window.pageXOffset;
        scrollTop = window.scrollY || window.pageYOffset;
        
        // Visual indicator: change cursor to a clenched grab hand
        document.body.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none'; // Prevent accidental text highlighting
    });

    // Listen globally for movement updates
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        // Calculate the physical distance moved from the original click point
        const distanceX = e.clientX - startX;
        const distanceY = e.clientY - startY;
        
        // Move the viewport window dynamically on a perfect 1-to-1 ratio match
        window.scrollTo(scrollLeft - distanceX, scrollTop - distanceY);
    });

    // Clean up drag events when the mouse button is released or leaves the screen
    const stopDragging = (e) => {
        if (e && e.button === 1) {
            isDragging = false;
            document.body.style.cursor = 'default';
            document.body.style.userSelect = '';
        } else if (!e) { // Handles mouseleave scenarios where no button code is present
            isDragging = false;
            document.body.style.cursor = 'default';
            document.body.style.userSelect = '';
        }
    };

    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('mouseleave', () => stopDragging(null));
})();
</script>
</body>
</html>
`;

const footer2 = `
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



















/* The following header only represents the default, while the ones above are representing some button accessible defaults. The headers and footers are maintained on a per page basis within the program context. */




let fileHeader = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="robots" content="index, follow">
<meta name="handheldfriendly" content="true">
<meta name="mobile-web-app-capable" content="yes">
<meta name="description" content="{{description}}">

<!-- Universal Open Graph Package -->
<meta property="og:title" content="{{title}}">
<meta property="og:type" content="website">
<meta property="og:description" content="{{description}}">
<meta property="og:image" content="assets/og-{{title}}.png">

<!-- Regional Validation (Toronto, ON, CA) -->
<meta name="geo.position" content="43.658497;-79.347015">
<meta name="geo.region" content="CA-ON">
<meta name="geo.placename" content="Toronto">

<title>{{title}}</title>

`;

let fileFooter = `<!-- Native Middle-Mouse Grab & Scroll (1:1 Panning) Engine -->
<script>
(function() {
    let isDragging = false;
    let startX, startY, scrollLeft, scrollTop;

    // Listen globally for mouse down triggers
    window.addEventListener('mousedown', (e) => {
        // 1 represents the Middle Mouse Button (Scroll Wheel click)
        if (e.button !== 1) return; 

        // Prevent the browser's default autoscroll icon from appearing
        e.preventDefault(); 
        
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        
        // Track the current scrolling coordinates of the viewport window
        scrollLeft = window.scrollX || window.pageXOffset;
        scrollTop = window.scrollY || window.pageYOffset;
        
        // Visual indicator: change cursor to a clenched grab hand
        document.body.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none'; // Prevent accidental text highlighting
    });

    // Listen globally for movement updates
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        // Calculate the physical distance moved from the original click point
        const distanceX = e.clientX - startX;
        const distanceY = e.clientY - startY;
        
        // Move the viewport window dynamically on a perfect 1-to-1 ratio match
        window.scrollTo(scrollLeft - distanceX, scrollTop - distanceY);
    });

    // Clean up drag events when the mouse button is released or leaves the screen
    const stopDragging = (e) => {
        if (e && e.button === 1) {
            isDragging = false;
            document.body.style.cursor = 'default';
            document.body.style.userSelect = '';
        } else if (!e) { // Handles mouseleave scenarios where no button code is present
            isDragging = false;
            document.body.style.cursor = 'default';
            document.body.style.userSelect = '';
        }
    };

    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('mouseleave', () => stopDragging(null));
})();
</script>
</body>
</html>

`;

if (localStorage.getItem('fileHeader')) {
fileHeader = localStorage.getItem('fileHeader');
}

if (localStorage.getItem('fileFooter')) {
fileFooter = localStorage.getItem('fileFooter');
}
