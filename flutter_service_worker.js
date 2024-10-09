'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "37fad4546b623dbe9ab5b8f086597483",
"version.json": "620abc5b0db70a10ebfee182eab1d4a9",
"index.html": "4e85dff7bf27e1c4ae639ea630dcc856",
"/": "4e85dff7bf27e1c4ae639ea630dcc856",
"main.dart.js": "fcfb50ec500dcd83df89308c6c743e0b",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c7de26e644202f19e4a9f4e0ace59f52",
".git/config": "4ff39a97ad0ae9cb3f9a98244244c10a",
".git/objects/66/cd155f94f9701f5b218c75ad808e7c3468a54f": "66c17310ed84178c34b724cc6d7e1ada",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/efc14d3deb18c8a61bac7c4b791557ed8a3e89": "f597db450c8a4ac0f12c3a7abc7dc09a",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/530a566442ae66bfff18682bb4826599ae071b": "5b284abe00260872100a46e43937a128",
".git/objects/d9/40d031bfb768b87f484d83749a569668364684": "7a1631d8107a55f781befaa5bcddec26",
".git/objects/ac/9bee66a22b3c9fd83056da1e26205ffc5576c5": "f108ce3b6a929a00287707ebe9360700",
".git/objects/ad/6815d554a7075d51214177a42c97ba3afca373": "483257638ba019d7faf02738f13eb7a9",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/ae9343dfa4922ed56e99af5eb5b91107695f5a": "9ac30dfb35a4c1310e87e0da6a355268",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fc/362eac7fea60d1170d6c2aca733054a8ce35a6": "4e52738e55f36e2d944050977c550235",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/fc69ffe0d4a2dceecd38c341fc2891f352a382": "69999b5e42939e94adc15360066a67bc",
".git/objects/e3/4f9cc76aeee5ea60a0aa076c85ff72c003a619": "4cbb254597e350ca57b0036086d1ddf9",
".git/objects/c8/8b4db6716fbb58443bea39c087892a6a56d983": "67469aee37c2979a6ad06f029fb86901",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/8cde879132458301e9491b517d4a74ff94d1ed": "1cb7d398933ef85324402e69202e2209",
".git/objects/11/788546bdb41eece112efac9aca29f84c3b453c": "e3f1a90032bf81d7770d6c8aa92f52f4",
".git/objects/7d/a24fa20ce86ede34bf9618cd414f6784e37ad3": "01cad868232f2597842ab9420df56796",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/80/ccbf75fbd475837bacfa50c650d51e631989a2": "629875a37f1170dc7dba4c235218d8b8",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/d86f021fa467c6c963d27892489edcc59aff1b": "5b586d71be0324e5ff4d4db449c52d80",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/3b7c3c2b555f007adf2c23d42bbce2d215d2ab": "0d683006408be420c6aee4702ee57637",
".git/objects/10/f3177bdc9d5b89cc907549d68c4e1107d4e0de": "79d2eea3fcbd653fe343371991109fd4",
".git/objects/4d/91a23a0ccf35822d15955c069029961adfddf9": "10490b3c7769bc6381524259efae9bb1",
".git/objects/75/a9c08a8af06bb7528433126d7abd3e61cae62f": "e5bfe6f871495afe37872de4333ca9e4",
".git/objects/72/4548eb0d9d34f84daded2b4b821dc79e383590": "852cbf56b932780fb0a0e1d23fcd7700",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/3f/f488724b8efa4b303c3ab7fdb50a8ea38c4c34": "1d95639d3c20f9b0477cf1b87cf8751d",
".git/objects/39/69c210e79b7d1d4c654af9c833963251289eea": "08d5df32232f2bee35eb2558458bcff6",
".git/objects/64/4b175e6573928f62f55be30c47d5c15b7a1e54": "c56cde58bfd3c2fcf1cccf854168c2cd",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/aa/1e6f96a3336b1dc7e6dd2b8234af95de3d5d6a": "22d30618f2181027416007093b042bcf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/90cc9958c03ebf52a79b908dbb1c78d699dbf5": "3117a0c94d439b3f9da944e46c08c7d9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/d0d45361e0e155768014e8226d7ddf7d829752": "9adbe6776cf0302b9f0b811b5e1a6480",
".git/objects/f0/5b2e8fa5e150c4ca6f78d7b8f7f9b5510f28bf": "838cf8801018c5197298351b14151f1b",
".git/objects/f7/782b90c286ca7db177b3e231e6533192e5db1c": "f2d30d75127de9ef8e77abf79aad359e",
".git/objects/f6/baa112585cb168fdacd93f1512215ee753ab72": "6f43572b12032b8756f4bf3f0aa9f8c5",
".git/objects/f6/aee984604ae5de9188acd1f60811fc2902f764": "739f71bace7a655d48aed1a7ddae8111",
".git/objects/f1/c07d81147c92b4330c6684869ffab4d0b35c9e": "18565b02697e474369446ea7ecd077af",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/77/45ffb34d5d329d25d27f91f85215a9172ece13": "ab57b9a369ca5c77df93cce3b495d791",
".git/objects/70/daf5c40e408e6ea64da18ca87bba9c4d0e492f": "003e03fc2a82a348c5560253b4eac7a4",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/a5a142d0e1e037c8f14009c1fd18be43646193": "ff5526ecbae10953ba557d7e66b5973e",
".git/objects/76/9d07f2263e9b169b316e59296e83cd2168bd28": "bb35955b439111a532b9766df81ac34c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/f142625cbe370b5defcce5e20e3a77bc4d3f48": "42983802c3a8bdc65e6f94a8d9a52898",
".git/objects/47/00387e6245c4da81482bbdef2b87869daeead4": "f8ea305a1ad67e92cc1eca52dd8b5f47",
".git/objects/78/8c2b42c76db8ec79081298001a8c2bb5c5af6f": "49758e6beea1354871ec09cc122f0570",
".git/objects/8e/9e727c09981da3767c2d0232f5c0bcde7fdd49": "e83cbeb1e898d23ce12f296044d65291",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b63d12dd0ef5ac458940ef4bc8630abd",
".git/logs/refs/heads/main": "b63d12dd0ef5ac458940ef4bc8630abd",
".git/logs/refs/remotes/origin/main": "3a37a00b5765cf5005463a8f3e2644fd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "cfa2610c6a127cfa0dc37b46bde59c49",
".git/refs/remotes/origin/main": "cfa2610c6a127cfa0dc37b46bde59c49",
".git/index": "8bf68da7eb351b97700fd6074a111057",
".git/COMMIT_EDITMSG": "4e3ea69e72a0b902666bea2a79f99fc0",
".git/FETCH_HEAD": "fa42b3bbed9e743d45ec52875f068559",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "0a66ddaa64726ce2fd4fb32187c803ca",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "22308c5de335598d3117247bee8b0771",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
