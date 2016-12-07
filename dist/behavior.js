'use strict';

var spawner = require('spawner');

module.exports = {
    reaper: function reaper(creep) {
        if (creep.ticksToLive < 150 && !creep.memory.replaced) {
            if (spawner.spawn(creep.memory.role) > 0) {
                creep.memory.replaced = true;
            }
        }
    },
    rally: function rally(creep) {
        creep.moveTo(Game.flags['rally_' + creep.memory.role]);
    }
};
