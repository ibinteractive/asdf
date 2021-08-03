import{r as s,o as a,c as n,a as e,w as l,F as o,d as t,b as i}from"./app.7750c123.js";const p={},r=e("h1",{id:"plugins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugins","aria-hidden":"true"},"#"),t(" Plugins")],-1),c=e("p",null,[t("Plugins are how "),e("code",null,"asdf"),t(" knows to handle different tools like Node.js, Ruby, Elixir etc.")],-1),d=t("See "),h=t("Creating Plugins"),u=t(" for the plugin API used to support more tools."),g=i('<h2 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> Add</h2><p>Add plugins via their Git URL:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">git-url</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"><span style="color:#88846F;"># asdf plugin add elm https://github.com/vic/asdf-elm</span></span>\n<span class="line"></span></code></pre></div><p>or via the short-name association in the plugins repository:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"><span style="color:#88846F;"># asdf plugin add erlang</span></span>\n<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">Recommendation</p><p>Prefer the longer <code>git-url</code> method as it is independent of the short-name repo.</p></div><h2 id="list-installed" tabindex="-1"><a class="header-anchor" href="#list-installed" aria-hidden="true">#</a> List Installed</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin list</span></span>\n<span class="line"><span style="color:#88846F;"># asdf plugin list</span></span>\n<span class="line"><span style="color:#88846F;"># java</span></span>\n<span class="line"><span style="color:#88846F;"># nodejs</span></span>\n<span class="line"></span></code></pre></div><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin list --urls</span></span>\n<span class="line"><span style="color:#88846F;"># asdf plugin list</span></span>\n<span class="line"><span style="color:#88846F;"># java            https://github.com/halcyon/asdf-java.git</span></span>\n<span class="line"><span style="color:#88846F;"># nodejs          https://github.com/asdf-vm/asdf-nodejs.git</span></span>\n<span class="line"></span></code></pre></div><h2 id="list-all-in-short-name-repository" tabindex="-1"><a class="header-anchor" href="#list-all-in-short-name-repository" aria-hidden="true">#</a> List All in Short-name Repository</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin list all</span></span>\n<span class="line"></span></code></pre></div>',11),f=t("See "),y={href:"https://github.com/asdf-vm/asdf-plugin-template",target:"_blank",rel:"noopener noreferrer"},F=t("Plugins Shortname Index"),m=t(" for the entire short-name list of plugins."),b=i('<h2 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> Update</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin update --all</span></span>\n<span class="line"></span></code></pre></div><p>If you want to update a specific package, just say so.</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin update </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"><span style="color:#88846F;"># asdf plugin update erlang</span></span>\n<span class="line"></span></code></pre></div>',4),v=t("This update will fetch the "),k=e("em",null,"latest commit",-1),x=t(" on the "),j=e("em",null,"default branch",-1),w=t(" of the "),R=e("em",null,"origin",-1),_=t(" of the plugin repository. Versioned plugins and updates are currently being developed ("),S={href:"https://github.com/asdf-vm/asdf/pull/916",target:"_blank",rel:"noopener noreferrer"},P=t("#916"),L=t(")"),A=i('<h2 id="remove" tabindex="-1"><a class="header-anchor" href="#remove" aria-hidden="true">#</a> Remove</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin remove </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"><span style="color:#88846F;"># asdf plugin remove erlang</span></span>\n<span class="line"></span></code></pre></div><p>Removing a plugin will remove all installations of the tool made with the plugin. This can be used as a shorthand for cleaning/pruning many unused versions of a tool.</p><h2 id="syncing-the-short-name-repository" tabindex="-1"><a class="header-anchor" href="#syncing-the-short-name-repository" aria-hidden="true">#</a> Syncing the Short-name Repository</h2><p>The short-name repo is synced to your local machine and periodically refreshed. This period is determined by the following method:</p>',5),I=e("li",null,[t("commands "),e("code",null,"asdf plugin add <name>"),t(" or "),e("code",null,"asdf plugin list all"),t(" can trigger a sync")],-1),T=e("li",null,[t("a sync occurs if there has not been one in the last "),e("code",null,"X"),t(" minutes")],-1),U=e("code",null,"X",-1),X=t(" defaults to "),C=e("code",null,"60",-1),E=t(", but can be configured in your "),G=e("code",null,".asdfrc",-1),N=t(" via the "),O=e("code",null,"plugin_repository_last_check_duration",-1),V=t(" option. See the "),q=t("asdf config docs"),z=t(" for more.");p.render=function(t,i){const p=s("RouterLink"),B=s("OutboundLink");return a(),n(o,null,[r,c,e("p",null,[d,e(p,{to:"/plugins/create.html"},{default:l((()=>[h])),_:1}),u]),g,e("p",null,[f,e("a",y,[F,e(B)]),m]),b,e("p",null,[v,k,x,j,w,R,_,e("a",S,[P,e(B)]),L]),A,e("ul",null,[I,T,e("li",null,[U,X,C,E,G,N,O,V,e(p,{to:"/manage/configuration.html"},{default:l((()=>[q])),_:1}),z])])],64)};export default p;
