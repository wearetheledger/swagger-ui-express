window.onload = function() {

    // Build a system
    const ui = SwaggerUIBundle({
        url: "http://" + location.host + "/api",
        oauth2RedirectUrl: "http://" + location.host + "/api/oauth2-redirect.html",
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset
        ],
        plugins: [
            SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout"
    })

    ui.initOAuth({
        clientId: "YvtfMzxFzMqps3GjksQTLkg2W3SWpd43",
        appName: "TLD-GREENCARDS",
        scopeSeparator: " "
    })

    window.ui = ui

}