(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{80:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return y})),n.d(a,"metadata",(function(){return w})),n.d(a,"toc",(function(){return T})),n.d(a,"Highlight",(function(){return k})),n.d(a,"default",(function(){return x}));var t=n(3),r=n(7),o=n(0),i=n.n(o),c=n(88),s=n(91),b=n(82),l=n(76),p=n.n(l),m=37,u=39;var d=function(e){var a=e.lazy,n=e.block,t=e.defaultValue,r=e.values,c=e.groupId,l=e.className,d=Object(s.a)(),g=d.tabGroupChoices,v=d.setTabGroupChoices,j=Object(o.useState)(t),O=j[0],h=j[1],f=o.Children.toArray(e.children);if(null!=c){var y=g[c];null!=y&&y!==O&&r.some((function(e){return e.value===y}))&&h(y)}var w=function(e){h(e),null!=c&&v(c,e)},T=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":n},l)},r.map((function(e){var a=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===a,className:Object(b.a)("tabs__item",p.a.tabItem,{"tabs__item--active":O===a}),key:a,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,a,n){switch(n.keyCode){case u:!function(e,a){var n=e.indexOf(a)+1;e[n]?e[n].focus():e[0].focus()}(e,a);break;case m:!function(e,a){var n=e.indexOf(a)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,a)}}(T,e.target,e)},onFocus:function(){return w(a)},onClick:function(){w(a)}},n)}))),a?Object(o.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return Object(o.cloneElement)(e,{key:a,hidden:e.props.value!==O})}))))};var g=function(e){var a=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",Object(t.a)({role:"tabpanel"},{hidden:n,className:r}),a)},v=n(77),j=n.n(v),O=j.a["table-of-contents__link--inline"];function h(e){var a=e.toc,n=e.isChild;return a.length?i.a.createElement("ul",{className:n?"":"table-of-contents"},a.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement("a",{href:"#"+e.id,className:O,dangerouslySetInnerHTML:{__html:e.value}}),i.a.createElement(h,{isChild:!0,toc:e.children}))}))):null}var f=function(e){var a=e.toc;return i.a.createElement("div",{className:Object(b.a)(j.a.tableOfContentsInline)},i.a.createElement(h,{toc:a}))},y={id:"rabbit-mq",title:"RabbitMQ"},w={unversionedId:"know-how/spring-boot/amqp/rabbit-mq",id:"know-how/spring-boot/amqp/rabbit-mq",isDocsHomePage:!1,title:"RabbitMQ",description:"<span",source:"@site/docs/know-how/spring-boot/amqp/rabbit-mq.mdx",slug:"/know-how/spring-boot/amqp/rabbit-mq",permalink:"/docs/know-how/spring-boot/amqp/rabbit-mq",editUrl:"https://github.com/nicos-dev/nicos-dev.github.io/tree/master/docs/know-how/spring-boot/amqp/rabbit-mq.mdx",version:"current",sidebar:"someSidebar",previous:{title:"FAQ's",permalink:"/docs/projects/keycloak-starter/faq"}},T=[{value:"Requirements",id:"requirements",children:[]},{value:"Presets",id:"presets",children:[{value:"RabbitMQ Docker-Container",id:"rabbitmq-docker-container",children:[]},{value:"Project Configuration",id:"project-configuration",children:[]}]},{value:"Concept",id:"concept",children:[{value:"Legend",id:"legend",children:[]},{value:"Message Data (User)",id:"message-data-user",children:[]},{value:"Events",id:"events",children:[]},{value:"Sender",id:"sender",children:[]},{value:"Receiver",id:"receiver",children:[]}]}],k=function(e){var a=e.children,n=e.color;return Object(c.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},a)},N={toc:T,Highlight:k};function x(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},N,n,{components:a,mdxType:"MDXLayout"}),Object(c.b)(f,{toc:T,mdxType:"TOCInline"}),Object(c.b)("br",null),Object(c.b)("h2",{id:"requirements"},"Requirements"),Object(c.b)("br",null),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Docker",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"DockerHub Access"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(t.a)({parentName:"li"},{href:"https://start.spring.io/"}),"2 Spring Projects"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Project Gradle"),Object(c.b)("li",{parentName:"ul"},"Language Kotlin"),Object(c.b)("li",{parentName:"ul"},"Spring-Boot Default"),Object(c.b)("li",{parentName:"ul"},"Packaging Jar"),Object(c.b)("li",{parentName:"ul"},"Java e.g. 11")))),Object(c.b)("h2",{id:"presets"},"Presets"),Object(c.b)("br",null),Object(c.b)("h3",{id:"rabbitmq-docker-container"},"RabbitMQ Docker-Container"),Object(c.b)("br",null),Object(c.b)("h4",{id:"1-save-compose-to-any-directory"},"1. Save compose to any directory."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"# docker-compose.yaml\nversion: '3.7'\n\nservices:\n\n  rabbitmq:\n    image: rabbitmq:3-management-alpine\n    container_name: rabbitmq\n    ports:\n      - 5672:5672\n      - 15672:15672\n")),Object(c.b)("br",null),Object(c.b)("h4",{id:"2-start-compose"},"2. Start compose"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"cd /path/to/your/compose\ndocker-compose up -d\n")),Object(c.b)("br",null),Object(c.b)("h4",{id:"3-verify-container-up"},"3. Verify container up"),Object(c.b)("p",null,"Open Docker-Dashboard (Taskbar > Right > Docker-Icon > Right-Click > Dashboard)"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"OR")),Object(c.b)("p",null,"Open ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"http://docker-machine:15672/"}),"RabbitMQ UI")),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"You can always check if your messages delivered correctly via RabbitMQ UI")),Object(c.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}))),Object(c.b)("br",null),Object(c.b)("h3",{id:"project-configuration"},"Project Configuration"),Object(c.b)("h4",{id:"1-add-gradle-dependency"},"1. Add Gradle dependency"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-kts"}),'// build.gradle.kts\n\ndependencies {\n    implementation("org.springframework.boot:spring-boot-starter-amqp")\n    // (...)\n}\n')),Object(c.b)("br",null),Object(c.b)("h4",{id:"2-setup-connection"},"2. Setup Connection"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"# application.yml\nspring:\n  rabbitmq:\n    port: 5672\n    host: docker-machine\n")),Object(c.b)("br",null),Object(c.b)("h4",{id:"2-create-config"},"2. Create config"),Object(c.b)(d,{defaultValue:"cache-service",values:[{label:"User Service",value:"user-service"},{label:"Cache Service",value:"cache-service"}],mdxType:"Tabs"},Object(c.b)(g,{value:"user-service",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-kotlin"}),"import com.fasterxml.jackson.databind.ObjectMapper\nimport org.springframework.amqp.core.DirectExchange\nimport org.springframework.amqp.core.Queue\nimport org.springframework.amqp.core.TopicExchange\nimport org.springframework.amqp.rabbit.connection.ConnectionFactory\nimport org.springframework.amqp.rabbit.core.RabbitTemplate\nimport org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer\nimport org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter\nimport org.springframework.amqp.support.converter.Jackson2JsonMessageConverter\nimport org.springframework.amqp.support.converter.SimpleMessageConverter\nimport org.springframework.beans.factory.annotation.Autowired\nimport org.springframework.beans.factory.annotation.Value\nimport org.springframework.context.annotation.Bean\nimport org.springframework.context.annotation.Configuration\n\n/**\n* @author Nicholas Dietz\n**/\n@Configuration\nclass RabbitMqConfig {\n\n    // Autowire your global jackson object-mapper or use default\n    @Autowired\n    private lateinit var objectMapper: ObjectMapper\n\n    // Use this in rabbitMqTemplate(..) to directly deserialize class from message\n    @Bean\n    fun jsonMessageConverter(): Jackson2JsonMessageConverter {\n        return Jackson2JsonMessageConverter(objectMapper)\n    }\n\n\n    @Bean\n    fun rabbitMqTemplate(connectionFactory: ConnectionFactory, jsonMessageConverter: Jackson2JsonMessageConverter): RabbitTemplate {\n        return RabbitTemplate(connectionFactory).apply {\n            messageConverter = jsonMessageConverter()\n        }\n    }\n\n}\n"))),Object(c.b)(g,{value:"cache-service",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-kotlin"}),"\nimport com.fasterxml.jackson.databind.ObjectMapper\nimport org.springframework.amqp.core.DirectExchange\nimport org.springframework.amqp.core.Queue\nimport org.springframework.amqp.core.TopicExchange\nimport org.springframework.amqp.rabbit.connection.ConnectionFactory\nimport org.springframework.amqp.rabbit.core.RabbitTemplate\nimport org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer\nimport org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter\nimport org.springframework.amqp.support.converter.Jackson2JsonMessageConverter\nimport org.springframework.amqp.support.converter.SimpleMessageConverter\nimport org.springframework.beans.factory.annotation.Autowired\nimport org.springframework.beans.factory.annotation.Value\nimport org.springframework.context.annotation.Bean\nimport org.springframework.context.annotation.Configuration\n\n/**\n* @author Nicholas Dietz\n**/\n@Configuration\nclass RabbitMqConfig {\n\n    // Autowire your global jackson object-mapper or use default\n    @Autowired\n    private lateinit var objectMapper: ObjectMapper\n\n    // Use this one if you get generic message data\n    @Bean\n    fun simpleConverter(): SimpleMessageConverter {\n        return SimpleMessageConverter()\n    }\n\n\n    @Bean\n    fun rabbitMqTemplate(connectionFactory: ConnectionFactory, jsonMessageConverter: Jackson2JsonMessageConverter): RabbitTemplate {\n        return RabbitTemplate(connectionFactory).apply {\n            messageConverter = simpleConverter()\n        }\n    }\n\n}\n")))),Object(c.b)("br",null),Object(c.b)("h2",{id:"concept"},"Concept"),Object(c.b)("p",null,"You have to connect 2 services with each other via Exchange ",Object(c.b)("strong",{parentName:"p"},"nicos-dev.user-exchange"),". There'll be 2 Queues ",Object(c.b)("strong",{parentName:"p"},"nicos-dev.user-service")," and ",Object(c.b)("strong",{parentName:"p"},"nicos-dev.cache-service"),"\nThe use-case is that you must synchronize data (users) from ",Object(c.b)("strong",{parentName:"p"},"User Service")," to ",Object(c.b)("strong",{parentName:"p"},"Cache Service")),Object(c.b)("br",null),Object(c.b)("h3",{id:"legend"},"Legend"),Object(c.b)(k,{color:"#4287f5",mdxType:"Highlight"},"Service")," - ",Object(c.b)(k,{color:"#f5c842",mdxType:"Highlight"},"Queue")," - ",Object(c.b)(k,{color:"#f54260",mdxType:"Highlight"},"Exchange")," - ",Object(c.b)(k,{color:"#11d1ce",mdxType:"Highlight"},"Routing-Key"),Object(c.b)("br",null),Object(c.b)("br",null),Object(c.b)("h3",{id:"message-data-user"},"Message Data (User)"),Object(c.b)(d,{defaultValue:"json",values:[{label:"JSON User",value:"json"},{label:"User & Cache Service UserDTO",value:"kotlin-class"}],mdxType:"Tabs"},Object(c.b)(g,{value:"json",mdxType:"TabItem"},Object(c.b)("p",null,"This is the default JSON-Format our ",Object(c.b)("strong",{parentName:"p"},"User Object"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n    "id": "String",\n    "firstName": "String",\n    "lastName": "String",\n    "email": "String"\n}\n'))),Object(c.b)(g,{value:"kotlin-class",mdxType:"TabItem"},Object(c.b)("p",null,"For serialization & deserialization we need a this UserDTO class. So we can create this object from JSON and vice versa."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-kotlin"}),'import com.fasterxml.jackson.annotation.JsonProperty\nimport lombok.AllArgsConstructor\nimport lombok.Data\nimport lombok.NoArgsConstructor\nimport java.io.Serializable\n\n/**\n* @author Nicholas Dietz\n**/\n@Data\n@NoArgsConstructor\n@AllArgsConstructor\nclass UserDto : Serializable {\n\n    @JsonProperty("id")\n    var id: String? = null\n\n    @JsonProperty("firstName")\n    var firstName: String? = null\n\n    @JsonProperty("lastName")\n    var lastName: String? = null\n\n    @JsonProperty("email")\n    var email: String? = null\n\n}\n')))),Object(c.b)("br",null),Object(c.b)("br",null),Object(c.b)("h3",{id:"events"},"Events"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Event names are Routing-Keys")),Object(c.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}))),Object(c.b)("br",null),Object(c.b)("h4",{id:"event---nicos-devusersync-request"},"Event - nicos-dev.user.sync-request"),Object(c.b)(d,{defaultValue:"flow",values:[{label:"Flow",value:"flow"},{label:"Message Payload",value:"payload"}],mdxType:"Tabs"},Object(c.b)(g,{value:"flow",mdxType:"TabItem"},Object(c.b)(k,{color:"#4287f5",mdxType:"Highlight"},"Cache Service")," \u2794 Message with ",Object(c.b)(k,{color:"#11d1ce",mdxType:"Highlight"},"nicos-dev.user.sync-request")," \u2794 ",Object(c.b)(k,{color:"#f54260",mdxType:"Highlight"},"nicos-dev.user-exchange")),Object(c.b)(g,{value:"payload",mdxType:"TabItem"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"No data")))),Object(c.b)("br",null),Object(c.b)("h4",{id:"event---nicos-devusersync-response"},"Event - nicos-dev.user.sync-response"),Object(c.b)(d,{defaultValue:"flow",values:[{label:"Flow",value:"flow"},{label:"Message Payload",value:"payload"}],mdxType:"Tabs"},Object(c.b)(g,{value:"flow",mdxType:"TabItem"},Object(c.b)(k,{color:"#4287f5",mdxType:"Highlight"},"User Service")," \u2794 Message with ",Object(c.b)(k,{color:"#11d1ce",mdxType:"Highlight"},"nicos-dev.user.sync-response")," \u2794 ",Object(c.b)(k,{color:"#f54260",mdxType:"Highlight"},"nicos-dev.user-exchange")),Object(c.b)(g,{value:"payload",mdxType:"TabItem"},Object(c.b)("p",null,"Message contains a list of ",Object(c.b)("strong",{parentName:"p"},"all users"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "id": "String",\n        "firstName": "String",\n        "lastName": "String",\n        "email": "String"\n    }\n]\n')))),Object(c.b)("br",null),Object(c.b)("h4",{id:"event---nicos-devusercreated"},"Event - nicos-dev.user.created"),Object(c.b)(d,{defaultValue:"flow",values:[{label:"Flow",value:"flow"},{label:"Message Payload",value:"payload"}],mdxType:"Tabs"},Object(c.b)(g,{value:"flow",mdxType:"TabItem"},Object(c.b)(k,{color:"#4287f5",mdxType:"Highlight"},"User Service")," \u2794 Message with ",Object(c.b)(k,{color:"#11d1ce",mdxType:"Highlight"},"nicos-dev.user.created")," \u2794 ",Object(c.b)(k,{color:"#f54260",mdxType:"Highlight"},"nicos-dev.user-exchange")),Object(c.b)(g,{value:"payload",mdxType:"TabItem"},Object(c.b)("p",null,"Message contains a the created user."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n    "id": "String",\n    "firstName": "String",\n    "lastName": "String",\n    "email": "String"\n}\n')))),Object(c.b)("br",null),Object(c.b)("h4",{id:"event---nicos-devuserdeleted"},"Event - nicos-dev.user.deleted"),Object(c.b)(d,{defaultValue:"flow",values:[{label:"Flow",value:"flow"},{label:"Message Payload",value:"payload"}],mdxType:"Tabs"},Object(c.b)(g,{value:"flow",mdxType:"TabItem"},Object(c.b)(k,{color:"#4287f5",mdxType:"Highlight"},"User Service")," \u2794 Message with ",Object(c.b)(k,{color:"#11d1ce",mdxType:"Highlight"},"nicos-dev.user.deleted")," \u2794 ",Object(c.b)(k,{color:"#f54260",mdxType:"Highlight"},"nicos-dev.user-exchange")),Object(c.b)(g,{value:"payload",mdxType:"TabItem"},Object(c.b)("p",null,"Message contains a the ID of the deleted user."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n    "id": "String"\n}\n')))),Object(c.b)("br",null),Object(c.b)("h4",{id:"event---nicos-devdataupdated"},"Event - nicos-dev.data.updated"),Object(c.b)(d,{defaultValue:"flow",values:[{label:"Flow",value:"flow"},{label:"Message Payload",value:"payload"}],mdxType:"Tabs"},Object(c.b)(g,{value:"flow",mdxType:"TabItem"},Object(c.b)(k,{color:"#4287f5",mdxType:"Highlight"},"User Service")," \u2794 Message with ",Object(c.b)(k,{color:"#11d1ce",mdxType:"Highlight"},"nicos-dev.user.updated")," \u2794 ",Object(c.b)(k,{color:"#f54260",mdxType:"Highlight"},"nicos-dev.user-exchange")),Object(c.b)(g,{value:"payload",mdxType:"TabItem"},Object(c.b)("p",null,"Message contains a the updated user."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n    "id": "String",\n    "firstName": "String",\n    "lastName": "String",\n    "email": "String"\n}\n')))),Object(c.b)("br",null),Object(c.b)("h3",{id:"sender"},"Sender"),Object(c.b)("p",null,"Messages are send to a Exchange with a specific Routing-Key, but ",Object(c.b)("strong",{parentName:"p"},"without")," defining a specific Queue."),Object(c.b)(d,{defaultValue:"cache-service",values:[{label:"User Service",value:"user-service"},{label:"Cache Service",value:"cache-service"}],mdxType:"Tabs"},Object(c.b)(g,{value:"user-service",mdxType:"TabItem"}),Object(c.b)(g,{value:"cache-service",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-kotlin"}),'import com.nicos-dev.usermanagement.config.amqp.RabbitMqConfig\nimport org.slf4j.LoggerFactory\nimport org.springframework.amqp.core.Message\nimport org.springframework.amqp.core.MessageProperties\nimport org.springframework.amqp.rabbit.core.RabbitTemplate\nimport org.springframework.beans.factory.annotation.Autowired\nimport org.springframework.stereotype.Service\n\n/**\n* @author Nicholas Dietz\n**/\n@Service\nclass UserRabbitMqSenderServiceImp: UserRabbitMqSenderService {\n\n    @Autowired\n    private lateinit var rabbitMqTemplate: RabbitTemplate\n\n    override fun requestUsers() {\n        rabbitMqTemplate.send(\n            "nicos-dev.user-exchange", // Exchange\n            "nicos-dev.user.sync-request", // Routing Key\n            Message("".toByteArray(), MessageProperties()) // Empty message\n        )\n    }\n\n}\n')))),Object(c.b)("br",null),Object(c.b)("h3",{id:"receiver"},"Receiver"),Object(c.b)("p",null,"To receive any messages you have to declare bindings. Because Messages are send to ",Object(c.b)(k,{color:"#f54260",mdxType:"Highlight"},"nicos-dev.user-exchange"),"\nyou must define which ",Object(c.b)(k,{color:"#11d1ce",mdxType:"Highlight"},"Routing-Keys")," should be forwarded to your ",Object(c.b)(k,{color:"#f5c842",mdxType:"Highlight"},"Queue")," in order to receive any messages."),Object(c.b)(d,{defaultValue:"cache-service",values:[{label:"User Service",value:"user-service"},{label:"Cache Service",value:"cache-service"}],mdxType:"Tabs"},Object(c.b)(g,{value:"user-service",mdxType:"TabItem"}),Object(c.b)(g,{value:"cache-service",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-kotlin"}),'import com.fasterxml.jackson.databind.ObjectMapper\nimport com.fasterxml.jackson.module.kotlin.jacksonTypeRef\nimport org.slf4j.LoggerFactory\nimport org.springframework.amqp.core.ExchangeTypes\nimport org.springframework.amqp.core.Message\nimport org.springframework.amqp.rabbit.annotation.Exchange\nimport org.springframework.amqp.rabbit.annotation.Queue\nimport org.springframework.amqp.rabbit.annotation.QueueBinding\nimport org.springframework.amqp.rabbit.annotation.RabbitListener\nimport org.springframework.amqp.support.AmqpHeaders\nimport org.springframework.beans.factory.annotation.Autowired\nimport org.springframework.messaging.handler.annotation.Header\nimport org.springframework.messaging.handler.annotation.Payload\nimport org.springframework.stereotype.Service\n\n/**\n* @author Nicholas Dietz\n**/\n@Service\nclass UserRabbitMqReceiver {\n\n    @Autowired\n    private lateinit var themeRepository: ThemeRepository\n\n    @Autowired\n    private lateinit var objectMapper: ObjectMapper\n\n    @RabbitListener(\n        bindings = [\n            QueueBinding(\n                value = Queue(value = "nicos-dev.cache-service", durable = "true"),\n                exchange = Exchange(value = "nicos-dev.user-exchange", type = ExchangeTypes.TOPIC),\n                key = [\n                    "nicos-dev.user.sync-response",\n                    "nicos-dev.user.created",\n                    "nicos-dev.user.updated",\n                    "nicos-dev.user.deleted"\n                ]\n            )\n        ]\n    )\n    fun messageArrived(@Payload value: String, @Header(AmqpHeaders.RECEIVED_ROUTING_KEY) key: String) {\n        when (key) {\n            "nicos-dev.user.sync-response" -> syncUsers(value)\n            "nicos-dev.user.created" -> userCreated(value)\n            "nicos-dev.user.updated" -> userUpdated(value)\n            "nicos-dev.user.deleted" -> userDeleted(value)\n        }\n    }\n\n    fun userCreated(value: String) {\n        val user = objectMapper.readValue(value, UserDto::class.java)\n        TODO("Do something")\n    }\n\n    fun userUpdated(value: String) {\n        val user = objectMapper.readValue(value, UserDto::class.java)\n        TODO("Do something")\n    }\n\n    fun userDeleted(value: String) {\n        val user = objectMapper.readValue(value, UserDto::class.java)\n        TODO("Do something")\n    }\n\n    fun syncUsers(value: String) {\n        val users = objectMapper.readValue(value, jacksonTypeRef<List<UserDto>>())\n        TODO("Do something")\n    }\n\n}\n\n')))))}x.isMDXComponent=!0}}]);