(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{71:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(7),a=(t(0),t(88)),i={id:"intro",title:"Indroduction"},s={unversionedId:"projects/keycloak-starter/intro",id:"projects/keycloak-starter/intro",isDocsHomePage:!1,title:"Indroduction",description:"SonarCloud",source:"@site/docs/projects/keycloak-starter/intro.mdx",slug:"/projects/keycloak-starter/intro",permalink:"/docs/projects/keycloak-starter/intro",editUrl:"https://github.com/nicos-dev/nicos-dev.github.io/tree/master/docs/projects/keycloak-starter/intro.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Welcome!",permalink:"/docs/welcome"},next:{title:"FAQ's",permalink:"/docs/projects/keycloak-starter/faq"}},c=[{value:"Integration",id:"integration",children:[{value:"1. Add dependency",id:"1-add-dependency",children:[]},{value:"2. Configure",id:"2-configure",children:[]}]}],l={toc:c};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://sonarcloud.io/dashboard?id=nicos-dev_spring-keycloak-starter"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"https://sonarcloud.io/images/project_badges/sonarcloud-orange.svg",alt:"SonarCloud"})))),Object(a.b)("br",null),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/nicos-dev/spring-keycloak-starter/workflows/Gradle%20Package/badge.svg",alt:"Gradle Package"}))),Object(a.b)("p",null,"Spring-Keycloak-Starter is a maven dependency for easy keycloak integration ","&"," endpoint security"),Object(a.b)("br",null),Object(a.b)("h2",{id:"integration"},"Integration"),Object(a.b)("br",null),Object(a.b)("h3",{id:"1-add-dependency"},"1. Add dependency"),Object(a.b)("br",null),Object(a.b)("h4",{id:"gradle---kotlin"},"Gradle - Kotlin"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'// build.gradle.kts\n\nrepositories {\n    maven {\n        name = "github"\n        url = uri("https://maven.pkg.github.com/nicos-dev/spring-keycloak-starter")\n        credentials {\n            username = (project.properties["githubUser"] ?: System.getenv("GITHUB_USER")).toString()\n            password = (project.properties["githubPassword"] ?: System.getenv("GITHUB_TOKEN")).toString()\n        }\n    }\n}\n\ndependencies {\n    implementation("com.nicos-dev:spring-keycloak-starter:<version>")\n}\n')),Object(a.b)("br",null),Object(a.b)("h3",{id:"2-configure"},"2. Configure"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'# application.yml\n\nkeycloak-starter:\n\n  # Anonymous -> Without authorization\n\n  # Endpoint Security\n  matchers:\n    -\n      # Endpoint path - supports wildcards (*, **)\n      path: /endpoint/path/\n\n      # Methods which are permitted on path\n      methods:\n        - GET\n        - PUT\n        - POST\n        - DELETE\n        - TRACE\n        - PATCH\n        - OPTIONS\n        - HEAD\n\n      # Keycloak roles of client (optional if set to public)\n      requiredRoles:\n        - your-client-role\n\n      # Anonymous access allowed\n      public: "true/false"\n\n      # CORS (Cross-Origin) configuration for path - optional\n      cors:\n\n        # Create CORS entry or not - defaults to true\n        autoGenerate: "true/false"\n\n        # Defaults to wildcard\n        allowedOrigins:\n          - "*"\n\n        # Defaults to true\n        allowCredentials: "true/false"\n\n        # Defaults to below\n        allowedHeaders:\n          - Authorization\n          - Cache-Control\n          - Content-Type\n\n\n  # OAuth2 Configuration\n  oauth:\n\n    # Url where token was requested (issued) - iss claim\n    issuers:\n      - http://<kc-host>:<port>/auth/realms/<realm>\n\n    # Keycloak realm\n    realm: <realm>\n\n    # Keycloak client\n    clientId: <client>\n\n    keycloakAuthUrl: http://<kc-host>:<port>/auth\n\n  # Disables all security settings - unauthorized access to all endpoints\n  devMode: "true/false"\n\n  # Paths where anonymous access is granted\n  whitelist:\n    - /path/without/auth/**\n\n  disableCSRF: "true/false"\n\n  disableFrameOptions: "true/false"\n\n  # Defaults to if_required\n  sessionCreationPolicy: "always | stateless | never | if_required"\n\n\n')))}d.isMDXComponent=!0}}]);