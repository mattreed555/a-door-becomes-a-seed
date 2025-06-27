const alphabet = new Map();

alphabet.set('A', [0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1]);
alphabet.set('B', [1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0]);
alphabet.set('C', [0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0]);
alphabet.set('D', [1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0]);
alphabet.set('E', [1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1]);
alphabet.set('F', [1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0]);
alphabet.set('G', [0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0]);
alphabet.set('H', [1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1]);
alphabet.set('I', [0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0]);
alphabet.set('J', [0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0]);
alphabet.set('K', [1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0]);
alphabet.set('L', [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0]);
alphabet.set('M', [1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1]);
alphabet.set('N', [1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1]);
alphabet.set('O', [0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0]);
alphabet.set('P', [1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0]);
alphabet.set('Q', [0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1]);
alphabet.set('R', [1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0]);
alphabet.set('S', [0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0]);
alphabet.set('T', [1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0]);
alphabet.set('U', [1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0]);
alphabet.set('V', [1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0]);
alphabet.set('W', [1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0]);
alphabet.set('X', [1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1]);
alphabet.set('Y', [1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0]);
alphabet.set('Z', [1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1]);
alphabet.set('1', [0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0]);
alphabet.set('2', [1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0]);
alphabet.set('3', [0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0]);
alphabet.set('4', [1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0]);
alphabet.set('5', [1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0]);
alphabet.set('6', [0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0]);
alphabet.set('7', [1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]);
alphabet.set('8', [0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0]);
alphabet.set('9', [1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0]);
alphabet.set('0', [0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0]);
alphabet.set('-', [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0]);
alphabet.set(' ', [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

const colors = [
 ["#f7fcb9","#addd8e","#31a354"],
 ["#ffffcc","#c2e699","#78c679","#238443"],
 ["#ffffcc","#c2e699","#78c679","#31a354","#006837"],
 ["#ffffcc","#d9f0a3","#addd8e","#78c679","#31a354","#006837"],
 ["#ffffcc","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"],
 ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"],
 ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],
 ["#edf8b1","#7fcdbb","#2c7fb8"],
 ["#ffffcc","#a1dab4","#41b6c4","#225ea8"],
 ["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],
 ["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#2c7fb8","#253494"],
 ["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],
 ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],
 ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],
 ["#e0f3db","#a8ddb5","#43a2ca"],
 ["#f0f9e8","#bae4bc","#7bccc4","#2b8cbe"],
 ["#f0f9e8","#bae4bc","#7bccc4","#43a2ca","#0868ac"],
 ["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#43a2ca","#0868ac"],
 ["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"],
 ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"],
 ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],
 ["#e5f5f9","#99d8c9","#2ca25f"],
 ["#edf8fb","#b2e2e2","#66c2a4","#238b45"],
 ["#edf8fb","#b2e2e2","#66c2a4","#2ca25f","#006d2c"],
 ["#edf8fb","#ccece6","#99d8c9","#66c2a4","#2ca25f","#006d2c"],
 ["#edf8fb","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"],
 ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"],
 ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],
 ["#ece2f0","#a6bddb","#1c9099"],
 ["#f6eff7","#bdc9e1","#67a9cf","#02818a"],
 ["#f6eff7","#bdc9e1","#67a9cf","#1c9099","#016c59"],
 ["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#1c9099","#016c59"],
 ["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"],
 ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"],
 ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],
 ["#ece7f2","#a6bddb","#2b8cbe"],
 ["#f1eef6","#bdc9e1","#74a9cf","#0570b0"],
 ["#f1eef6","#bdc9e1","#74a9cf","#2b8cbe","#045a8d"],
 ["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#2b8cbe","#045a8d"],
 ["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"],
 ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"],
 ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],
 ["#e0ecf4","#9ebcda","#8856a7"],
 ["#edf8fb","#b3cde3","#8c96c6","#88419d"],
 ["#edf8fb","#b3cde3","#8c96c6","#8856a7","#810f7c"],
 ["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8856a7","#810f7c"],
 ["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"],
 ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"],
 ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],
 ["#fde0dd","#fa9fb5","#c51b8a"],
 ["#feebe2","#fbb4b9","#f768a1","#ae017e"],
 ["#feebe2","#fbb4b9","#f768a1","#c51b8a","#7a0177"],
 ["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#c51b8a","#7a0177"],
 ["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"],
 ["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"],
 ["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],
 ["#e7e1ef","#c994c7","#dd1c77"],
 ["#f1eef6","#d7b5d8","#df65b0","#ce1256"],
 ["#f1eef6","#d7b5d8","#df65b0","#dd1c77","#980043"],
 ["#f1eef6","#d4b9da","#c994c7","#df65b0","#dd1c77","#980043"],
 ["#f1eef6","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"],
 ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"],
 ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],
 ["#fee8c8","#fdbb84","#e34a33"],
 ["#fef0d9","#fdcc8a","#fc8d59","#d7301f"],
 ["#fef0d9","#fdcc8a","#fc8d59","#e34a33","#b30000"],
 ["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#e34a33","#b30000"],
 ["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],
 ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],
 ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],
 ["#ffeda0","#feb24c","#f03b20"],
 ["#ffffb2","#fecc5c","#fd8d3c","#e31a1c"],
 ["#ffffb2","#fecc5c","#fd8d3c","#f03b20","#bd0026"],
 ["#ffffb2","#fed976","#feb24c","#fd8d3c","#f03b20","#bd0026"],
 ["#ffffb2","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"],
 ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"],
 ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],
 ["#fff7bc","#fec44f","#d95f0e"],
 ["#ffffd4","#fed98e","#fe9929","#cc4c02"],
 ["#ffffd4","#fed98e","#fe9929","#d95f0e","#993404"],
 ["#ffffd4","#fee391","#fec44f","#fe9929","#d95f0e","#993404"],
 ["#ffffd4","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"],
 ["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"],
 ["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],
 ["#f1a340","#f7f7f7","#998ec3"],
 ["#e66101","#fdb863","#b2abd2","#5e3c99"],
 ["#e66101","#fdb863","#f7f7f7","#b2abd2","#5e3c99"],
 ["#b35806","#f1a340","#fee0b6","#d8daeb","#998ec3","#542788"],
 ["#b35806","#f1a340","#fee0b6","#f7f7f7","#d8daeb","#998ec3","#542788"],
 ["#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788"],
 ["#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788"],
 ["#d8b365","#f5f5f5","#5ab4ac"],
 ["#a6611a","#dfc27d","#80cdc1","#018571"],
 ["#a6611a","#dfc27d","#f5f5f5","#80cdc1","#018571"],
 ["#8c510a","#d8b365","#f6e8c3","#c7eae5","#5ab4ac","#01665e"],
 ["#8c510a","#d8b365","#f6e8c3","#f5f5f5","#c7eae5","#5ab4ac","#01665e"],
 ["#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e"],
 ["#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e"],
 ["#af8dc3","#f7f7f7","#7fbf7b"],
 ["#7b3294","#c2a5cf","#a6dba0","#008837"],
 ["#7b3294","#c2a5cf","#f7f7f7","#a6dba0","#008837"],
 ["#762a83","#af8dc3","#e7d4e8","#d9f0d3","#7fbf7b","#1b7837"],
 ["#762a83","#af8dc3","#e7d4e8","#f7f7f7","#d9f0d3","#7fbf7b","#1b7837"],
 ["#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837"],
 ["#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837"],
 ["#e9a3c9","#f7f7f7","#a1d76a"],
 ["#d01c8b","#f1b6da","#b8e186","#4dac26"],
 ["#d01c8b","#f1b6da","#f7f7f7","#b8e186","#4dac26"],
 ["#c51b7d","#e9a3c9","#fde0ef","#e6f5d0","#a1d76a","#4d9221"],
 ["#c51b7d","#e9a3c9","#fde0ef","#f7f7f7","#e6f5d0","#a1d76a","#4d9221"],
 ["#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221"],
 ["#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221"],
 ["#ef8a62","#f7f7f7","#67a9cf"],
 ["#ca0020","#f4a582","#92c5de","#0571b0"],
 ["#ca0020","#f4a582","#f7f7f7","#92c5de","#0571b0"],
 ["#b2182b","#ef8a62","#fddbc7","#d1e5f0","#67a9cf","#2166ac"],
 ["#b2182b","#ef8a62","#fddbc7","#f7f7f7","#d1e5f0","#67a9cf","#2166ac"],
 ["#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac"],
 ["#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac"],
 ["#ef8a62","#ffffff","#999999"],
 ["#ca0020","#f4a582","#bababa","#404040"],
 ["#ca0020","#f4a582","#ffffff","#bababa","#404040"],
 ["#b2182b","#ef8a62","#fddbc7","#e0e0e0","#999999","#4d4d4d"],
 ["#b2182b","#ef8a62","#fddbc7","#ffffff","#e0e0e0","#999999","#4d4d4d"],
 ["#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d"],
 ["#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d"],
 ["#fc8d59","#ffffbf","#91bfdb"],
 ["#d7191c","#fdae61","#abd9e9","#2c7bb6"],
 ["#d7191c","#fdae61","#ffffbf","#abd9e9","#2c7bb6"],
 ["#d73027","#fc8d59","#fee090","#e0f3f8","#91bfdb","#4575b4"],
 ["#d73027","#fc8d59","#fee090","#ffffbf","#e0f3f8","#91bfdb","#4575b4"],
 ["#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4"],
 ["#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4"],
 ["#fc8d59","#ffffbf","#99d594"],
 ["#d7191c","#fdae61","#abdda4","#2b83ba"],
 ["#d7191c","#fdae61","#ffffbf","#abdda4","#2b83ba"],
 ["#d53e4f","#fc8d59","#fee08b","#e6f598","#99d594","#3288bd"],
 ["#d53e4f","#fc8d59","#fee08b","#ffffbf","#e6f598","#99d594","#3288bd"],
 ["#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd"],
 ["#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
 ["#fc8d59","#ffffbf","#91cf60"],
 ["#d7191c","#fdae61","#a6d96a","#1a9641"],
 ["#d7191c","#fdae61","#ffffbf","#a6d96a","#1a9641"],
 ["#d73027","#fc8d59","#fee08b","#d9ef8b","#91cf60","#1a9850"],
 ["#d73027","#fc8d59","#fee08b","#ffffbf","#d9ef8b","#91cf60","#1a9850"],
 ["#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850"],
 ["#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850"],
 ["#7fc97f","#beaed4","#fdc086"],
 ["#7fc97f","#beaed4","#fdc086","#ffff99"],
 ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0"],
 ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f"],
 ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17"],
 ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],
 ["#a6cee3","#1f78b4","#b2df8a"],
 ["#a6cee3","#1f78b4","#b2df8a","#33a02c"],
 ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99"],
 ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c"],
 ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f"],
 ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00"],
 ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6"],
 ["#fbb4ae","#b3cde3","#ccebc5"],
 ["#fbb4ae","#b3cde3","#ccebc5","#decbe4"],
 ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6"],
 ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc"],
 ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd"],
 ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec"],
 ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]
 ["#b3e2cd","#fdcdac","#cbd5e8"],
 ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4"],
 ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9"],
 ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae"],
 ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc"],
 ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],
 ["#e41a1c","#377eb8","#4daf4a"],
 ["#e41a1c","#377eb8","#4daf4a","#984ea3"],
 ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00"],
 ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33"],
 ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628"],
 ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf"],
 ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],
 ["#66c2a5","#fc8d62","#8da0cb"],
 ["#66c2a5","#fc8d62","#8da0cb","#e78ac3"],
 ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854"],
 ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f"],
 ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494"],
 ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],
 ["#8dd3c7","#ffffb3","#bebada"],
 ["#8dd3c7","#ffffb3","#bebada","#fb8072"],
 ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3"],
 ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462"],
 ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69"],
 ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5"],
 ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9"]
];


const myCanvas =  document.createElement('canvas');
const myImage = document.getElementById("picture");
const myAnchor = document.getElementById('what');
const mySpinner = document.getElementById("spinner");
const cellSize = 5;

const maxWidth = 390;
const maxHeight = 585 - (cellSize * 6);

const availWidth  = window.screen.availWidth;
const availHeight = window.screen.availHeight;


const actualWidth = Math.floor(Math.min(maxWidth, availWidth)/6);
const actualHeight = Math.floor(Math.min(maxHeight, availHeight)/6);

const board = [];

const goLeft = x => (x - 1);
const goRight = x => (x + 1);
const goUp = y => (y - 1);
const goDown = y => (y + 1);
const staySame = i => i;

const randomWalk = (x, y) => {
  
  const dir = Math.floor(Math.random() * 8);
  
  
   switch (dir) {
    case 0:
      return {x:staySame(x), y:goUp(y)};
    case 1:
      return {x:goRight(x), y:goUp(y)};
    case 2:
      return {x:goRight(x), y:staySame(y)};
    case 3:
      return {x:goRight(x), y:goDown(y)};
    case 4:
      return {x:staySame(x), y:goDown(y)};
    case 5:
      return {x:goLeft(x), y:goDown(y)};
    case 6:
      return {x:goLeft(x), y:staySame(y)};
    case 7:
      return {x:goLeft(x), y:goUp(y)};

  }
  
}

const riverWalk = (x, y, lastX, lastY) => {
  
  const candidates = [
   {x:staySame(x), y:goUp(y)},
   {x:goRight(x), y:goUp(y)},
   {x:goRight(x), y:staySame(y)},
   {x:goRight(x), y:goDown(y)},
   {x:staySame(x), y:goDown(y)},
   {x:goLeft(x), y:goDown(y)},
   {x:goLeft(x), y:staySame(y)},
   {x:goLeft(x), y:goUp(y)},
  ];
  
  
  const filteredCandidates = candidates.filter((candidate) => candidate.x >= 0 && 
                                                  candidate.y >= 0 &&
                                                  candidate.x < actualWidth && 
                                                  candidate.y < actualHeight &&
                                                  board[candidate.y][candidate.x] === 0 &&
                                                  !(candidate.y == lastY && candidate.x == lastX));
  
  if (filteredCandidates.length > 0) {
    return filteredCandidates[Math.floor(Math.random() * filteredCandidates.length)] 
  }
  else {
    return {x:x, y:y};
  }


}

const placeObstruction = (x, y) => {
  const max = actualWidth + actualHeight;
  board[y][x] = 1;
  var lastX = x, lastY = y;
  for (var i = 0; i < max; i++ ) {
    var result = riverWalk(x, y, lastX, lastY);
    if (result.x === x && result.y === y) {
      break;
    }
    lastX = x;
    lastY = y;
    x = result.x;
    y = result.y;
    board[y][x] = 1;

    if (i % 4 === 0 && Math.random() > 0.97) {
     placeObstruction(x, y);
    }
    
  }
}

const placeLife = (x, y, max, val, likelihood, strength) => {
  if (board[y][x] > 0) 
    return;
  
  board[y][x] = val;
  var lastX = x, lastY = y;
  for (var i = 0; i < max; i++ ) {
    var result = riverWalk(x, y, lastX, lastY);
    if (result.x === x && result.y === y) {
      break;
    }
    lastX = x;
    lastY = y;
    x = result.x;
    y = result.y;
    board[y][x] = val;

    if (i % likelihood === 0 && Math.random() > strength) {
     placeLife(x, y, max, val, likelihood, strength);
    }
    
  }
}



const getRandomBetween = (x, y) => {
  
  var max = y - x;
  return Math.floor(x + (Math.random() * max));
}

const createLife = (val,likelihood,strength, startingSeeds,max) => {
  var seeds = Math.floor(Math.random() * 10)+startingSeeds;
  
  for(var j=0; j < seeds; j++) {
    placeLife(getRandomBetween(1, actualWidth-1), getRandomBetween(1, actualHeight-1), max, val, likelihood, strength);
  }

}

const createLives = (whichLives) => {
  for(var i = 0; i < whichLives.length; i++)
  {
     createLife(i+2,getRandomBetween(1,3),0.9+(Math.random()/20), 5 + ((9-whichLives.length)*2),getRandomBetween(200,400));
  }
}

// creates an obstruction that makes it difficult for species to propogate
const createObstructions = () => {
  var x = 0;
  var y = 0;
  
  
  
  const possibilities = [
    {
      x: getRandomBetween(actualWidth/4,actualWidth*3/4),
      y: actualHeight - 1
    },
    {
      x: getRandomBetween(actualWidth/4,actualWidth*3/4),
      y: 0
    },
    {
      x: actualWidth - 1,
      y: getRandomBetween(actualHeight/4,actualHeight*3/4)
    },
    {
      x: 0,
      y: getRandomBetween(actualHeight/4,actualHeight*3/4)
    }
    ,
    {
      x: getRandomBetween(actualWidth/4,actualWidth*3/4),
      y: getRandomBetween(actualHeight/4,actualHeight*3/4)
    }
    ,
    {
      x: getRandomBetween(actualWidth/4,actualWidth*3/4),
      y: getRandomBetween(actualHeight/4,actualHeight*3/4)
    }
  ];
  
  var remove = Math.floor(Math.random() * possibilities.length - 1);
  
  for(var i=0; i < remove; i++) {
    var whichOne = Math.floor(Math.random() * possibilities.length);
    possibilities.splice(whichOne,whichOne);
    
  }
  
  for(var j=0; j < possibilities.length; j++) {
    var possibility = possibilities[j];
    placeObstruction(possibility.x, possibility.y);
  }

  
}

for(var i = 0; i < actualHeight; i++) {
  var row = [];
  for (var j= 0; j < actualWidth; j++) {
    row.push(0);
  }
  board.push(row);
}

const lightenShade = (colorValue) => {
    var amount = 40;
    colorValue = colorValue.slice(1);

    var num = parseInt(colorValue,16);

    var r = (num >> 16) + amount;

    if ( r > 255 ) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amount;

    if ( b > 255 ) b = 255;
    else if  (b < 0) b = 0;
    
    var g = (num & 0x0000FF) + amount;

    if ( g > 255 ) g = 255;
    else if  ( g < 0 ) g = 0;

    return "#" + (g | (b << 8) | (r << 16)).toString(16);
}

const drawCell = (ctx, top, left, primary, secondary) => {
  
  
          ctx.strokeStyle = primary;  
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(left,top);
          ctx.lineTo(left+cellSize, top+cellSize);
          ctx.stroke();

          ctx.strokeStyle = secondary;  
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(left,top+1);
          ctx.lineTo(left+cellSize-1, top+cellSize);
          ctx.stroke();


          ctx.strokeStyle = primary;  
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(left, top+cellSize);
          ctx.lineTo(left+cellSize, top);
          ctx.stroke();

          ctx.strokeStyle = secondary;  
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(left+1, top+cellSize);
          ctx.lineTo(left+cellSize, top+1);
          ctx.stroke();
  
}

const drawLetter = (ctx, top, left, val) => {
  
  const letterMap = alphabet.get(val);
  
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
          var cellValue = letterMap[(i*5)+j];
      
          if (cellValue > 0) {
          var primary = "#ffffff";
          var secondary = "rgba(255, 255, 255, 0.3)";
             var ctop = i* cellSize, cleft = j*cellSize
            drawCell(ctx, top+ctop, left+cleft, primary, secondary);
          }
      
    }
  }
  
  
}

const drawWord = (ctx, top, left, val) => {
 for (let i = 0; i < val.length; i++) {
   drawLetter(ctx, top, left + (i*(cellSize+27)),val[i]);
 }
  
  
}

const drawBoard = (whichLives,name,version) => {
  
      
  const ctx = myCanvas.getContext("2d");

  const lightenValues = whichLives.map((life)=>lightenShade(life));
  
  ctx.canvas.width = actualWidth * cellSize;
  ctx.canvas.height = (actualHeight + 7) * cellSize;
  
  ctx.fillStyle = "#000000";
  ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
  
  drawWord(ctx, 0,0,name + "-" + version);
  
  for(var i = 0; i < actualHeight; i++) {
  for (var j= 0; j < actualWidth; j++) {
    var cellValue = board[i][j];
    

    if (cellValue > 1) {

      var primary = whichLives[cellValue-2];
      var secondary = "rgba(255, 255, 255, 0.3)";

    var top = (i+7)* cellSize, left = j*cellSize

    ctx.strokeStyle = primary;  
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(left,top);
    ctx.lineTo(left+cellSize, top+cellSize);
    ctx.stroke();

    ctx.strokeStyle = secondary;  
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(left,top+1);
    ctx.lineTo(left+cellSize-1, top+cellSize);
    ctx.stroke();

      
    ctx.strokeStyle = primary;  
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(left, top+cellSize);
    ctx.lineTo(left+cellSize, top);
    ctx.stroke();
      
    ctx.strokeStyle = secondary;  
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(left+1, top+cellSize);
    ctx.lineTo(left+cellSize, top+1);
    ctx.stroke();
      
    
    }
  }
}
  
}




const updateImage = () => {
  mySpinner.style.visibility = 'hidden';
  myImage.src = myCanvas.toDataURL();
  myAnchor.style.visibility = '';
};


const createArt = (name, version) => {
  
  var whichLives = colors[Math.floor(Math.random()*colors.length)];
  
  createObstructions();
  createLives(whichLives);
  drawBoard(whichLives,name,version);
  updateImage();
  
};







ThumbmarkJS.getFingerprint().then(
    function(fp) {
      
        let name = localStorage.getItem("door-seed-world-name");
        let number = localStorage.getItem("door-seed-world-number"); 

        if (name !== null) {
          if (number === null) {
            number = 0;
          }
        }
        else {
           name = fp.toUpperCase();
           number = 0;
        }
      
      
        Math.seedrandom(name + '-' + number.toString());
      
        createArt(name, number);
      
        localStorage.setItem("door-seed-world-name",name);
        localStorage.setItem("door-seed-world-number",number)
      
    }
);





