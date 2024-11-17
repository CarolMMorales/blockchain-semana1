const Blockchain = require('./src/blockchain');
const Block = require('./src/block');

async function run(){
    const blockchain = await new Blockchain();
    const block1 = new Block({data: "block 01"});
    const block2 = new Block({data: "block 02"});
    const block3 = new Block({data: "block 03"});

    await blockchain.addBlock(block1);
    await blockchain.addBlock(block2);
    await blockchain.addBlock(block3);

    blockchain.print()
}

run();