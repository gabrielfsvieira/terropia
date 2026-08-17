const BUILD='v00188';
const CACHE_PREFIX='terropia-';
const SHELL_CACHE=`${CACHE_PREFIX}${BUILD}-shell`;
const RUNTIME_CACHE=`${CACHE_PREFIX}${BUILD}-runtime`;
const ESSENTIAL=[
  './','./index.html','./editor/','./editor/index.html','./world-editor.html','./manifest.webmanifest',
  './css/game.css','./css/v47.css','./css/v48.css','./css/v51.css','./css/v53.css','./css/v54.css','./css/v55.css','./css/v56.css',
  './css/v00057.css','./css/v00058.css','./css/v00059.css','./css/v00060.css','./css/v00061.css','./css/v00062.css','./css/v00063.css','./css/v00064.css','./css/v00065.css','./css/v00066.css','./css/v00067.css','./css/v00068.css','./css/v00069.css','./css/v00070.css','./css/v00072.css','./css/v00073.css','./css/v00091.css','./css/v00097.css','./css/v00100.css','./css/v00109.css','./css/v00116.css','./css/v00117.css','./css/v00134.css','./css/v00145.css','./css/v00156.css','./css/v00157.css','./css/v00158.css','./css/v00159.css','./css/v00160.css','./css/v00161.css','./css/v00162.css','./css/v00163.css','./css/v00164.css','./css/v00165.css','./css/v00166.css','./css/v00167.css','./css/v00168.css','./css/v00169.css','./css/v00170.css','./css/v00171.css','./css/v00172.css','./css/v00173.css','./css/v00174.css','./css/v00175.css','./css/v00176.css','./css/v00177.css','./css/v00178.css','./css/v00179.css','./css/v00180.css','./css/v00181.css','./css/v00184.css',
  './js/core.js','./js/event-bus.js','./js/reward-presentation.js','./js/state-save.js','./js/world.js','./js/entities.js','./js/renderer-layers.js','./js/input.js','./js/inventory.js','./js/quest.js','./js/gathering.js','./js/crafting.js','./js/battle.js','./js/ui.js','./js/item-icons.js','./js/terrain-autotile.js','./js/terrain-visuals.js','./js/world-decor.js','./js/region-props.js','./js/region-identity.js','./js/ambient-animation.js','./js/camera-polish.js','./js/shadow-system.js','./js/building-visuals.js','./js/render-cache.js','./js/sprites.js','./js/floating-text.js','./js/battle-visuals.js','./js/battle-v47.js','./js/vegetation-visuals.js','./js/interaction-visuals.js','./js/gathering-vfx.js','./js/water-visuals.js','./js/lighting.js','./js/main.js','./js/pwa.js',
  './data/tiers.js','./data/skills.js','./data/progression-balance.js','./js/requirements.js','./data/world.js','./data/equipment.js','./data/resources.js','./data/recipes.js','./data/fish.js','./data/production-chains.js','./data/mastery.js','./data/perks.js','./data/quest-skill-checks.js','./data/profession-quests.js','./data/gathering-requirements.js','./data/map-codes.js','./data/world-map-v00163.js','./data/locations.js','./data/content.js','./data/unlocks.js',
  './data/maps/home.js','./data/maps/smithy.js','./data/maps/bank.js','./data/maps/shop.js','./data/maps/village.js','./data/maps/village2.js','./data/maps/entrance.js','./data/maps/mushroomforest.js','./data/maps/cave.js','./data/maps/witchyard.js','./data/maps/darkforest.js','./data/maps/spiderlair.js','./data/maps/atenaria-expansion.js','./data/maps/altaria-mornaqua-expansion.js','./data/maps/calindra-solacia-expansion.js','./data/maps/blaziria-necrovicia-expansion.js','./data/maps/invernia-expansion.js',
  './icons/icon-192.png','./icons/icon-512.png'
,'./css/v00135.css','./css/v00136.css','./css/v00137.css','./css/v00138.css','./css/v00139.css','./css/v00140.css','./data/world-projects.js','./css/v00141.css','./data/professional-contracts.js','./css/v00142.css','./data/economy.js','./data/skill-endgame.js'];

async function precacheAtomic(){
  const cache=await caches.open(SHELL_CACHE);
  await cache.addAll(ESSENTIAL.map(url=>new Request(url,{cache:'reload'})));
}

self.addEventListener('install',event=>{
  event.waitUntil(precacheAtomic().then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k.startsWith(CACHE_PREFIX)&&k!==SHELL_CACHE&&k!==RUNTIME_CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});

async function cachedShell(request){
  const cache=await caches.open(SHELL_CACHE);
  return (await cache.match(request,{ignoreSearch:true})) || (await cache.match('./index.html'));
}

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return;

  if(req.mode==='navigate'){
    // Jogo e World Editor coexistem na mesma origem. /editor/ recebe seu próprio shell.
    event.respondWith((async()=>{
      const shell=await caches.open(SHELL_CACHE);
      const isEditor=url.pathname.includes('/editor/') || url.pathname.endsWith('/world-editor.html');
      const target=isEditor?'./editor/index.html':'./index.html';
      const cached=await shell.match(target,{ignoreSearch:true});
      if(cached)return cached;
      try{return await fetch(req)}catch{return new Response('V00188 está offline e o shell ainda não foi instalado.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}})}
    })());
    return;
  }

  event.respondWith((async()=>{
    const shell=await caches.open(SHELL_CACHE);
    const hit=await shell.match(req,{ignoreSearch:true});
    if(hit)return hit;
    const runtime=await caches.open(RUNTIME_CACHE);
    const runtimeHit=await runtime.match(req);
    if(runtimeHit)return runtimeHit;
    try{
      const fresh=await fetch(req);
      if(fresh&&fresh.ok)await runtime.put(req,fresh.clone());
      return fresh;
    }catch{
      return new Response('',{status:504,statusText:'Offline'});
    }
  })());
});
