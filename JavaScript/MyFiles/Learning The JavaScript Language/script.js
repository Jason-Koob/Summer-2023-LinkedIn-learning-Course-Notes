const microSIEM = {
    item_1: 
    {
        seq:"1",
        severity:"6",
        srcPort:"3389",
        packetSize:"512",
        srcIP:"192.168.0.17",
        srcMAC:"81-F5-15-E9-BC-E9",
        dstIP:"172.16.20.145",
        srcUser:"Mark Smith",
        time:"2023-07-23 00:03:49"
    },
    item_2: 
    {
        seq:"2",
        severity:"6",
        srcPort:"3389",
        packetSize:"512",
        srcIP:"192.168.0.17",
        srcMAC:"81-F5-15-E9-BC-E9",
        dstIP:"172.16.20.145",
        srcUser:"Mark Smith",
        time:"2023-07-23 00:03:50"
    }
};

// TESTING

console.log("item_1: srcMAC:", microSIEM.item_1.srcMAC);
console.log("item_2: time:", microSIEM.item_2.time)