'use strict';

var roles = require('creep.roles');

module.exports = {
    spawn: function spawn(role, _spawn, memory) {
        if (!roles[role]) {
            console.log('role not found');
            return;
        }
        var _role = roles[role];

        var spawnPoint = _spawn || Game.spawns['Spawn1'];
        var creepNames = Object.keys(Game.creeps).filter(function (name) {
            return name.includes(_role.name);
        });
        var name;
        var i = 0;
        do {
            name = _role.name + i++;
        } while (creepNames.includes(name));

        return spawnPoint.createCreep(_role.caste.body, name, {
            job: _role.job
        });
    }
};
