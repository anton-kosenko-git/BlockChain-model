angular.module('app').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('app.html',
    "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <a href=\"#!/\" class=\"navbar-brand\">Blockchain Model</a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li ng-class=\"{active: $root.isActive('/hash')}\">\n" +
    "                    <a href=\"#!/hash\">Hash</a>\n" +
    "                </li>\n" +
    "                <li ng-class=\"{active: $root.isActive('/block')}\">\n" +
    "                    <a href=\"#!/block\">Block</a>\n" +
    "                </li>\n" +
    "                <li ng-class=\"{active: $root.isActive('/blockchain')}\">\n" +
    "                    <a href=\"#!/blockchain\">Blockchain</a>\n" +
    "                </li>\n" +
    "                <li ng-class=\"{active: $root.isActive('/distributed')}\">\n" +
    "                    <a href=\"#!/distributed\">Distributed</a>\n" +
    "                </li>\n" +
    "                <li ng-class=\"{active: $root.isActive('/transaction')}\">\n" +
    "                    <a href=\"#!/transaction\">Transactions</a>\n" +
    "                </li>\n" +
    "\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "<a ng-if=\"$root.isActive('/')\">\n" +
    "<img src=\"images/slavaUkraini.png\" alt=\"Slava  Ukraini\" class=\"UA-ribbon\">\n" +
    "</a>" +
    "<div ng-class=\"$root.$route.current.containerClass\" ng-view>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('components/block/block.html',
    "<div class=\"well well-sm\" ng-class=\"{'well-success': vm.valid, 'well-error': !vm.valid}\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <!-- Block number -->\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"block{{vm.id}}number\" class=\"col-sm-2 control-label\">Block:</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <span class=\"input-group-addon\">#</span>\n" +
    "                    <input id=\"block{{vm.id}}number\"\n" +
    "                           ng-model=\"vm.number\"\n" +
    "                           ng-change=\"vm.updateBlock()\"\n" +
    "                           class=\"form-control\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Nonce -->\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"block{{vm.id}}nonce\" class=\"col-sm-2 control-label\">Nonce:</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input id=\"block{{vm.id}}nonce\"\n" +
    "                       ng-model=\"vm.nonce\"\n" +
    "                       ng-change=\"vm.updateBlock()\"\n" +
    "                       class=\"form-control\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Transactions -->\n" +
    "        <div class=\"form-group\" ng-if=\"vm.data.txs\">\n" +
    "            <label class=\"col-sm-2 control-label\"><a ng-click=\"vm.showData = !vm.showData\">Tx:</a></label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <div class=\"input-group\" ng-repeat=\"tx in vm.data.txs track by $index\">\n" +
    "                    <div class=\"input-group-addon\">€</div>\n" +
    "                    <input ng-model=\"tx.value\" class=\"form-control\">\n" +
    "                    <div class=\"input-group-addon\">From:</div>\n" +
    "                    <input ng-model=\"tx.from\" class=\"form-control\">\n" +
    "                    <div class=\"input-group-addon\">-&gt;</div>\n" +
    "                    <input ng-model=\"tx.to\" class=\"form-control\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Data -->\n" +
    "        <div class=\"form-group\" ng-if=\"vm.showData || (!vm.data.txs)\">\n" +
    "            <label for=\"block{{vm.id}}data\" class=\"col-sm-2 control-label\">Data:</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <textarea id=\"block{{vm.id}}data\"\n" +
    "                          rows=\"10\"\n" +
    "                          ng-model=\"vm.dataString\"\n" +
    "                          ng-trim=\"false\"\n" +
    "                          ng-change=\"vm.updateBlock()\"\n" +
    "                          class=\"form-control\">\n" +
    "                </textarea>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Prev -->\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"block{{vm.id}}prev\" class=\"col-sm-2 control-label\">Prev:</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input id=\"block{{vm.id}}prev\"\n" +
    "                       ng-model=\"vm.prev\"\n" +
    "                       ng-readonly=\"true\"\n" +
    "                       class=\"form-control\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Hash -->\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"block{{vm.id}}hash\" class=\"col-sm-2 control-label\">Hash:</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input id=\"block{{vm.id}}hash\"\n" +
    "                       ng-model=\"vm.hash\"\n" +
    "                       ng-readonly=\"true\"\n" +
    "                       class=\"form-control\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Button -->\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"col-sm-2\"><i class=\"icon-spinner icon-spin icon-large\"></i></div>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <button data-style=\"expand-right\" class=\"btn btn-primary ladda-button\" ng-click=\"vm.mine()\">\n" +
    "                    <span class=\"ladda-label\">Mine</span>\n" +
    "                </button>\n" +
    "                <span ng-if=\"vm.mined\">{{vm.miningStats}}</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n"
  );


  $templateCache.put('components/chain-info/chain-info.html',
    "(height: {{vm.blocks.length}} blocks, valid: {{vm.valid}})"
  );


  $templateCache.put('components/peer-info/peer-info.html',
    "(height: {{vm.blocks.length}} blocks, valid: {{vm.valid}}, consensus: {{vm.consensus}} other peers, last block hash: {{vm.lastBlockHash}})"
  );


  $templateCache.put('index.html',
    "<html>\n" +
    "<head>\n" +
    "  <meta charset=\"UTF-8\">\n" +
    "  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "\n" +
    "  <!-- fonts -->\n" +
    "  <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Raleway:300,400,700\">\n" +
    "  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" crossorigin=\"anonymous\">\n" +
    "\n" +
    "  <!-- bootstrap and theme -->\n" +
    "  <link rel=\"stylesheet\" href=\"libs/css/bootstrap.min.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"libs/css/bootstrap-theme.min.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"libs/css/bootstrap-horizon.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"libs/css/ladda-themeless.min.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"libs/css/ie10-viewport-bug-workaround.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"app.css\">\n" +
    "\n" +
    "  <!-- jQuery, Angular and Bootstrap -->\n" +
    "  <script src=\"libs/js/jquery.min.js\"></script>\n" +
    "  <script src=\"libs/js/angular.min.js\"></script>\n" +
    "  <script src=\"libs/js/angular-route.js\"></script>\n" +
    "\n" +
    "  <!-- other libraries -->\n" +
    "  <script src=\"libs/js/bootstrap.min.js\"></script>\n" +
    "  <script src=\"libs/js/spin.min.js\"></script>\n" +
    "  <script src=\"libs/js/ladda.min.js\"></script>\n" +
    "  <script src=\"libs/js/ie10-viewport-bug-workaround.js\"></script>\n" +
    "  <script src=\"libs/js/ie10-viewport-bug-workaround.js\"></script>\n" +
    "  <script src=\"libs/js/sha256.js\"></script>\n" +
    "\n" +
    "  <!-- App -->\n" +
    "  <script src=\"app.js\"></script>\n" +
    "\n" +
    "  <!-- HTML templates -->\n" +
    "  <script>\n" +
    "    // don't load HTML templates from pre-compiled file in development mode\n" +
    "    if (location.hostname !== \"localhost\" && location.hostname !== \"127.0.0.1\") {\n" +
    "      document.write('<scr' + 'ipt src=\"libs/templates.js\"></sc' + 'ript>');\n" +
    "    }\n" +
    "  </script>\n" +
    "\n" +
    "  <!-- Components -->\n" +
    "  <script src=\"components/block/block.js\"></script>\n" +
    "  <script src=\"components/chain-info/chain-info.js\"></script>\n" +
    "  <script src=\"components/peer-info/peer-info.js\"></script>\n" +
    "\n" +
    "  <!-- Pages -->\n" +
    "  <script src=\"pages/home/home.js\"></script>\n" +
    "  <script src=\"pages/hash/hash.js\"></script>\n" +
    "  <script src=\"pages/block/block.js\"></script>\n" +
    "  <script src=\"pages/blockchain/blockchain.js\"></script>\n" +
    "  <script src=\"pages/distributed/distributed.js\"></script>\n" +
    "  <script src=\"pages/transaction/ttransaction.js\"></script>\n" +
    "\n" +
    "  <title>Blockchain Model</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "<app></app>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('pages/block/block.html',
    "<h1>Block</h1>\n" +
    "\n" +
    "<div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "        <h4 class=\"panel-title\">\n" +
    "            <a ng-click=\"vm.showExplanation = !vm.showExplanation\">Explanation</a>\n" +
    "        </h4>\n" +
    "    </div>\n" +
    "    <div class=\"panel-collapse collapse\" ng-class=\"{in: vm.showExplanation}\">\n" +
    "        <div class=\"panel-body\">\n" +
    "           On this page we demonstrate a structure of block - the simplest unit of a blockchain.<br/><br/>\n" +
    "            For our example it consists of only 5 elements:\n" +
    "            <ul>\n" +
    "                <li>\n" +
    "                    <strong>Block number:</strong> The Number of the block in the chain. Integer that\n" +
    "                    starts at 1 and is increased by one for every new block.\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <strong>Nonce:</strong> A number that is used to make a block valid. Its sole purpose\n" +
    "                    is to be adjusted until the hash of the whole block has certain properties that make it \"valid\".\n" +
    "                </li>\n" +
    "                <li><strong>Data:</strong> Some data of the current block that Can be anything!</li>\n" +
    "                <li><strong>Previous block hash:</strong> The hash of the previous block. For the first block in a chain an arbitrary value like\n" +
    "                    00000000000... is used (something that is very unlikely to be a real hash).\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <strong>Hash:</strong> All previous elements appended together and then hashed. For our example the hash is calculated with the\n" +
    "                    following code:\n" +
    "                    <pre>CryptoJS.SHA256([blockNumber, nonce, data, prev].join(''))</pre>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            A block is considered \"valid\" if its hash has a certain form. For our example we want the hash to start with a certain amount of zeroes.<br/>\n" +
    "            The higher the number of zeroes we want a hash to start with, the harder it will be to find a nonce that makes the hash of the block to look\n" +
    "            the way we want. This is what is called the difficulty.\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<block number=\"vm.block.number\"\n" +
    "       nonce=\"vm.block.nonce\"\n" +
    "       prev=\"vm.block.prev\"\n" +
    "       data=\"vm.block.data\">\n" +
    "</block>"
  );


  $templateCache.put('pages/blockchain/blockchain.html',
    "<h1>Blockchain\n" +
    "    <chain-info ng-if=\"$root.expertMode\" blocks=\"vm.blocks\"></chain-info>\n" +
    "</h1>\n" +
    "\n" +
    "<div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "        <h4 class=\"panel-title\">\n" +
    "            <a ng-click=\"vm.showExplanation = !vm.showExplanation\">Explanation</a>\n" +
    "        </h4>\n" +
    "    </div>\n" +
    "    <div class=\"panel-collapse collapse\" ng-class=\"{in: vm.showExplanation}\">\n" +
    "        <div class=\"panel-body\">\n" +
    "            On this page we can see the demo of chain from five blocks.<br/>\n" +
    "            Each block, except of the first, has the hash of its predecessor in the \"Prev\" field.<br/><br/>\n" +
    "            If you change one block and it gets invalid, the whole chain from that block will be invalid.\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row row-horizon\">\n" +
    "    <div class=\"col-xs-7 col-lg-5\" ng-repeat=\"block in vm.blocks\">\n" +
    "        <block number=\"block.number\"\n" +
    "               nonce=\"block.nonce\"\n" +
    "               data=\"block.data\"\n" +
    "               hash=\"block.hash\"\n" +
    "               valid=\"block.valid\"\n" +
    "               prev=\"!block.prev ? vm.blocks[$index-1].hash : block.prev\">\n" +
    "        </block>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('pages/distributed/distributed.html',
    "<h1>Distributed Blockchain</h1>\n" +
    "\n" +
    "<div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "        <h4 class=\"panel-title\">\n" +
    "            <a ng-click=\"vm.showExplanation = !vm.showExplanation\">Explanation</a>\n" +
    "        </h4>\n" +
    "    </div>\n" +
    "    <div class=\"panel-collapse collapse\" ng-class=\"{in: vm.showExplanation}\">\n" +
    "        <div class=\"panel-body\">\n" +
    "            This page demonstarates how consensus in P2P networks works.<br />\n" +
    "            Every node in the network has its own copy of the ledger. Any attempt to change some information in the\n" +
    "            blockchain made by one peer immediately becomes visible in the P2P network.<br /><br />\n" +
    "            If you try to change any information in the blockchain it makes invalid, the whole chain. As the result\n" +
    "            network will reject these changes.\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-repeat=\"peer in vm.peers\">\n" +
    "    <h3>{{peer.name}}\n" +
    "        <peer-info ng-if=\"$root.expertMode\" peers=\"vm.peers\" peer-index=\"$index\"></peer-info>\n" +
    "    </h3>\n" +
    "    <div class=\"row row-horizon\">\n" +
    "        <div class=\"col-xs-7 col-lg-5\" ng-repeat=\"block in peer.blocks\">\n" +
    "            <block number=\"block.number\"\n" +
    "                   nonce=\"block.nonce\"\n" +
    "                   data=\"block.data\"\n" +
    "                   hash=\"block.hash\"\n" +
    "                   valid=\"block.valid\"\n" +
    "                   prev=\"!block.prev ? peer.blocks[$index-1].hash : block.prev\">\n" +
    "            </block>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/hash/hash.html',
    "<h1>SHA256 Hash</h1>\n" +
    "\n" +
    "<div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "        <h4 class=\"panel-title\">\n" +
    "            <a ng-click=\"vm.showExplanation = !vm.showExplanation\">Explanation</a>\n" +
    "        </h4>\n" +
    "    </div>\n" +
    "    <div class=\"panel-collapse collapse\" ng-class=\"{in: vm.showExplanation}\">\n" +
    "        <div class=\"panel-body\">\n" +
    "            A hash function is any function that can be used to map data of arbitrary size to data of fixed size.<br/><br/>\n" +
    "            A good hash function/algorithm that can be used in cryptography has the following properties:\n" +
    "            <ul>\n" +
    "                <li>Defined range: No matter how long the input is, the output is always of the same length</li>\n" +
    "                <li>Determinism: For the same input, the output will always be identical</li>\n" +
    "                <li>Non-invertible: From the output you can not calculate or guess the input</li>\n" +
    "                <li>Uniformity: Small changes in the input lead to significant changes in the output</li>\n" +
    "            </ul>\n" +
    "            For our example we use SHA256 (also called SHA-256, short for Secure Hash Algorithm 2, 256 bit) because it is the\n" +
    "            same hash algorithm that is currently used for the Bitcoin network.<br/>\n" +
    "            The output is always 256bit long which is 64 characters when encoded hexadecimally.<br/><br/>\n" +
    "            Below you can see SHA256 in action. Just type any data into the input field and watch how the corresponding hash changes.\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"well\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"data\" class=\"col-sm-2 control-label\">Input:</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <textarea id=\"data\"\n" +
    "                          rows=\"10\"\n" +
    "                          ng-model=\"vm.data\"\n" +
    "                          ng-change=\"vm.hash = $root.sha256(vm.data)\"\n" +
    "                          class=\"form-control\">\n" +
    "                </textarea>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"hash\" class=\"col-sm-2 control-label\">Hash:</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input id=\"hash\"\n" +
    "                       ng-readonly=\"true\"\n" +
    "                       ng-model=\"vm.hash\"\n" +
    "                       class=\"form-control\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/home/home.html',
    "<h1>Blockchain Model</h1>\n" +
    "\n" +
    "This web application was developed as a model of blockchain.<br/><br/>\n" +
    "This model shows the work of all the main structure elements of blockchain." +
    "  Blockchain architecture is shown separately for block, chain of blocks, and P2P network.<br/>\n" +
    "In addition we make a visual demonstration of transactions in P2P version.\n" +
    "<br/><br/>\n" +
    "\n" +

    "<p class=\"pull-right\">\n" +
    "  by <a href=\"https://github.com/anton-kosenko-git/BlockChain-model\">Anton Kosenko</a><br>\n" +
    "</p>\n"
  );


  $templateCache.put('pages/transaction/transaction.html',
    "<h1>Transactions</h1>\n" +
    "<div ng-repeat=\"peer in vm.peers\">\n" +
    "    <h3>{{peer.name}}\n" +
    "        <peer-info ng-if=\"$root.expertMode\" peers=\"vm.peers\" peer-index=\"$index\"></peer-info>\n" +
    "    </h3>\n" +
    "    <div class=\"row row-horizon\">\n" +
    "        <div class=\"col-xs-7\" ng-repeat=\"block in peer.blocks\">\n" +
    "            <block number=\"block.number\"\n" +
    "                   nonce=\"block.nonce\"\n" +
    "                   data=\"block.data\"\n" +
    "                   hash=\"block.hash\"\n" +
    "                   valid=\"block.valid\"\n" +
    "                   prev=\"!block.prev ? peer.blocks[$index-1].hash : block.prev\">\n" +
    "            </block>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );

}]);
